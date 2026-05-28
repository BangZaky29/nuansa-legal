import { useState, useEffect, useCallback, useRef } from 'react';
import {
  RSS2JSON_BASE_URL,
  LEGAL_RSS_FEEDS,
  ARTICLE_CACHE_KEY,
  ARTICLE_CACHE_DURATION,
  ARTICLE_MAX_RESULTS,
  ARTICLE_CATEGORIES,
} from '../config';

export interface ArticleSource {
  name: string;
  url: string;
}

export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string | null;
  publishedAt: string;
  source: ArticleSource;
}

interface CachedData {
  articles: Article[];
  timestamp: number;
  queryType: 'category' | 'search';
  queryValue: string;
}

interface UseArticlesReturn {
  articles: Article[];
  loading: boolean;
  error: string | null;
  activeCategory: string;
  searchQuery: string;
  setActiveCategory: (category: string) => void;
  handleSearch: (query: string) => void;
  refetch: () => void;
}

function getCacheKey(type: 'category' | 'search', value: string) {
  return `${ARTICLE_CACHE_KEY}_${type}_${value.toLowerCase()}`;
}

function getCachedArticles(type: 'category' | 'search', value: string): CachedData | null {
  try {
    const cacheKey = getCacheKey(type, value);
    const cached = localStorage.getItem(cacheKey);
    if (!cached) return null;

    const data: CachedData = JSON.parse(cached);
    const now = Date.now();

    if (now - data.timestamp < ARTICLE_CACHE_DURATION) {
      return data;
    }

    localStorage.removeItem(cacheKey);
    return null;
  } catch {
    return null;
  }
}

function setCachedArticles(type: 'category' | 'search', value: string, articles: Article[]): void {
  try {
    const cacheKey = getCacheKey(type, value);
    const data: CachedData = {
      articles,
      timestamp: Date.now(),
      queryType: type,
      queryValue: value,
    };
    localStorage.setItem(cacheKey, JSON.stringify(data));
  } catch (err) {
    console.warn('Failed to cache articles:', err);
  }
}

/**
 * Fetches and aggregates articles from multiple RSS feeds (Bypass Google API).
 */
async function fetchArticlesFromAPI(
  type: 'category' | 'search',
  value: string,
  signal?: AbortSignal
): Promise<Article[]> {
  let queryToSearch = value.toLowerCase();

  if (type === 'category') {
    const matchedCategory = ARTICLE_CATEGORIES.find(c => c.id === value);
    if (matchedCategory) {
      queryToSearch = matchedCategory.query.toLowerCase();
    } else {
      queryToSearch = '';
    }
  }

  // Fetch all RSS feeds in parallel
  const fetchPromises = LEGAL_RSS_FEEDS.map(async (feedUrl) => {
    try {
      const url = `${RSS2JSON_BASE_URL}${encodeURIComponent(feedUrl)}`;
      const response = await fetch(url, { signal });
      if (!response.ok) return [];
      
      const data = await response.json();
      if (data.status !== 'ok' || !data.items) return [];

      const siteName = new URL(feedUrl).hostname.replace('www.', '');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const itemPromises = data.items.map(async (item: any) => {
        // Ekstrak gambar dari thumbnail, enclosure, atau deskripsi jika ada
        let imageUrl = item.thumbnail || item.enclosure?.link || null;
        if (!imageUrl && item.description) {
          const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
          if (imgMatch) imageUrl = imgMatch[1];
        }

        // Resolusi gambar dari WP REST API jika asalnya dari portal wordpress legal
        const isWP = siteName.includes('kliklegal.com') || siteName.includes('smartlegal.id') || siteName.includes('bplawyers.co.id');
        if (!imageUrl && isWP) {
          try {
            const urlObj = new URL(item.link);
            const pathParts = urlObj.pathname.split('/').filter(Boolean);
            const slug = pathParts[pathParts.length - 1];
            if (slug) {
              const wpApiUrl = `https://${siteName}/wp-json/wp/v2/posts?slug=${slug}`;
              const wpRes = await fetch(wpApiUrl, { signal });
              if (wpRes.ok) {
                const wpData = await wpRes.json();
                if (Array.isArray(wpData) && wpData.length > 0) {
                  const post = wpData[0];
                  imageUrl = post.yoast_head_json?.og_image?.[0]?.url || 
                             post.jetpack_featured_media_url || 
                             post.featured_media_src_url || 
                             null;
                }
              }
            }
          } catch (e) {
            console.warn('[useArticles] Failed to resolve WP featured image:', e);
          }
        }

        // Bersihkan tag HTML dari deskripsi (snippet)
        const cleanDescription = item.description 
          ? item.description.replace(/<[^>]+>/g, '').substring(0, 150) + '...'
          : '';

        const article: Article = {
          title: item.title,
          description: cleanDescription,
          content: cleanDescription,
          url: item.link,
          image: imageUrl,
          publishedAt: item.pubDate,
          source: {
            name: siteName,
            url: `https://${siteName}`
          }
        };
        return article;
      });

      return Promise.all(itemPromises);
    } catch (err) {
      console.warn(`[useArticles] Failed to fetch feed ${feedUrl}:`, err);
      return [];
    }
  });

  const results = await Promise.all(fetchPromises);
  let allArticles: Article[] = results.flat();

  // Filter based on search query / category query
  if (queryToSearch) {
    const keywords = queryToSearch.split(' OR ').map(k => k.trim().toLowerCase());
    allArticles = allArticles.filter(article => {
      const text = `${article.title} ${article.description}`.toLowerCase();
      return keywords.some(keyword => text.includes(keyword));
    });
  }

  // Sort by date descending (newest first)
  allArticles.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });

  // Limit to max results
  return allArticles.slice(0, ARTICLE_MAX_RESULTS);
}

export function useArticles(): UseArticlesReturn {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(ARTICLE_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  // Guards against React 19 Strict Mode double-invocation
  const fetchInProgress = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchArticles = useCallback(
    async (overrideType?: 'category' | 'search', overrideValue?: string, forceRefresh = false) => {
      const type = overrideType || (searchQuery ? 'search' : 'category');
      const value = overrideValue || (searchQuery || activeCategory);

      if (!value) return;

      // Prevent concurrent fetches
      if (fetchInProgress.current) return;

      // Try cache first (skip if forceRefresh)
      if (!forceRefresh) {
        const cached = getCachedArticles(type, value);
        if (cached && cached.articles.length > 0) {
          setArticles(cached.articles);
          setLoading(false);
          setError(null);
          return;
        }
      }

      // Abort any previous in-flight request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      fetchInProgress.current = true;
      setLoading(true);
      setError(null);

      try {
        const fetchedArticles = await fetchArticlesFromAPI(type, value, abortController.signal);

        if (abortController.signal.aborted) return;

        if (fetchedArticles.length > 0) {
          setCachedArticles(type, value, fetchedArticles);
        }

        setArticles(fetchedArticles);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') return;

        const errorMessage =
          err instanceof Error
            ? err.message
            : 'Gagal memuat artikel. Silakan coba lagi.';

        console.error('[useArticles] Error:', err);

        if (!abortController.signal.aborted) {
          setError(errorMessage);

          // Try to show stale cache
          try {
            const staleRaw = localStorage.getItem(getCacheKey(type, value));
            if (staleRaw) {
              const staleData: CachedData = JSON.parse(staleRaw);
              if (staleData.articles.length > 0) {
                setArticles(staleData.articles);
              }
            }
          } catch {
            // ignore
          }
        }
      } finally {
        fetchInProgress.current = false;
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    },
    [activeCategory, searchQuery]
  );

  useEffect(() => {
    fetchInProgress.current = false;
    const type = searchQuery ? 'search' : 'category';
    const value = searchQuery || activeCategory;
    fetchArticles(type, value);

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      fetchInProgress.current = false;
    };
  }, [activeCategory, searchQuery, fetchArticles]);

  const handleSetActiveCategory = useCallback((category: string) => {
    setSearchQuery(''); // clear search query when a category is selected
    setActiveCategory(category);
  }, []);

  const handleSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchQuery('');
      if (!activeCategory) {
        setActiveCategory(ARTICLE_CATEGORIES[0].id);
      }
      return;
    }
    setActiveCategory(''); // clear category when searching
    setSearchQuery(query.trim());
  }, [activeCategory]);

  const handleRefetch = useCallback(() => {
    const type = searchQuery ? 'search' : 'category';
    const value = searchQuery || activeCategory;
    localStorage.removeItem(getCacheKey(type, value));
    fetchInProgress.current = false;
    fetchArticles(type, value, true);
  }, [activeCategory, searchQuery, fetchArticles]);

  return {
    articles,
    loading,
    error,
    activeCategory,
    searchQuery,
    setActiveCategory: handleSetActiveCategory,
    handleSearch,
    refetch: handleRefetch,
  };
}

// Utility to format date in Indonesian
export function formatArticleDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
}

// Utility to get relative time
export function getRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 1) return 'Baru saja';
    if (diffHours < 24) return `${diffHours} jam yang lalu`;
    if (diffDays < 7) return `${diffDays} hari yang lalu`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu yang lalu`;
    return formatArticleDate(dateString);
  } catch {
    return dateString;
  }
}

// Dynamic Unsplash fallback images for legal and business contexts
export const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop&auto=format', // Lady Justice
  'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&h=500&fit=crop&auto=format', // Gavel & Books
  'https://images.unsplash.com/photo-1505664194779-8bebcb95df84?w=800&h=500&fit=crop&auto=format', // Law Books
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&auto=format', // Business Contract
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&auto=format', // Corporate Building
  'https://images.unsplash.com/photo-1521791136368-1a9b8275315f?w=800&h=500&fit=crop&auto=format', // Handshake
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop&auto=format', // Corporate Agreement
  'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=500&fit=crop&auto=format'  // Office Meeting
];

export function getFallbackImage(title: string, index: number): string {
  let charSum = 0;
  for (let i = 0; i < title.length; i++) {
    charSum += title.charCodeAt(i);
  }
  const imgIndex = (charSum + index) % FALLBACK_IMAGES.length;
  return FALLBACK_IMAGES[imgIndex];
}
