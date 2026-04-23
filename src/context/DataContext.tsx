import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { API_BASE_URL } from '../config';

interface ImageItem {
  id: number;
  name: string;
  path: string;
  period: string | null;
  category: string;
  sub_category: string | null;
  alt_text: string | null;
  original_path: string;
  url: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  sub_category: string | null;
  order_index: number;
}

interface DataContextType {
  images: Record<string, ImageItem[]>;
  faqs: FaqItem[];
  loading: Record<string, boolean>;
  error: string | null;
  fetchImages: (category?: string, period?: string) => Promise<void>;
  fetchFaqs: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, ImageItem[]>>({});
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  const fetchImages = useCallback(async (category: string = 'all', period?: string) => {
    setLoading(prev => ({ ...prev, [category]: true }));
    try {
      let url = category === 'all'
        ? `${API_BASE_URL}/api/images`
        : `${API_BASE_URL}/api/images/${category}`;

      if (period) {
        const separator = url.includes('?') ? '&' : '?';
        url += `${separator}period=${period}`;
      }

      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();

      setImages(prev => ({ ...prev, [category]: data }));
      setError(null);
    } catch (err: any) {
      console.error(`Error fetching images for ${category}:`, err);
      setError(err.message);
    } finally {
      setLoading(prev => ({ ...prev, [category]: false }));
    }
  }, []); // Remove images dependency

  const fetchFaqs = useCallback(async () => {
    setLoading(prev => ({ ...prev, faqs: true }));
    try {
      const res = await fetch(`${API_BASE_URL}/api/faqs`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setFaqs(data.data || []);
      setError(null);
    } catch (err: any) {
      console.error('Error fetching FAQs:', err);
      setError(err.message);
    } finally {
      setLoading(prev => ({ ...prev, faqs: false }));
    }
  }, []); // Remove faqs dependency

  // Pre-fetch critical data once
  useEffect(() => {
    fetchFaqs();
    fetchImages('other');
    fetchImages('hero');
    fetchImages('about');
    fetchImages('promo');
    fetchImages('team');
  }, [fetchFaqs, fetchImages]);

  return (
    <DataContext.Provider value={{ images, faqs, loading, error, fetchImages, fetchFaqs }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
