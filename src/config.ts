export const API_BASE_URL = 'https://apilegal.nuansalegal.id';
export const IMAGE_BASE_URL = `${API_BASE_URL}/uploads`;

// RSS Feeds Configuration (Bypass Google API)
export const RSS2JSON_BASE_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';

export const LEGAL_RSS_FEEDS = [
  'https://smartlegal.id/feed',
  'https://kliklegal.com/feed',
  'https://bplawyers.co.id/feed',
  'https://www.antaranews.com/rss/hukum.xml',
  'https://rss.kontan.co.id/news/nasional',
  'https://www.cnbcindonesia.com/news/rss'
];

export const ARTICLE_CACHE_KEY = 'nuansa_articles_cache';
export const ARTICLE_CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours in ms
export const ARTICLE_MAX_RESULTS = 12;

// Kategori disederhanakan karena kita menggabungkan RSS Feed
export const ARTICLE_CATEGORIES = [
  { id: 'terbaru', label: 'Artikel Terbaru', query: '' },
  { id: 'bisnis', label: 'Hukum Bisnis', query: 'bisnis' },
  { id: 'perizinan', label: 'Perizinan', query: 'izin' },
  { id: 'sengketa', label: 'Sengketa', query: 'sengketa' }
];
