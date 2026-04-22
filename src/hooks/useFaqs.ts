import { useEffect } from 'react';
import { useData } from '../context/DataContext';

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  sub_category: string | null;
}

export const useFaqs = () => {
  const { faqs, loading, error, fetchFaqs } = useData();

  useEffect(() => {
    fetchFaqs();
  }, [fetchFaqs]);

  return { 
    faqs, 
    loading: loading.faqs || false, 
    error 
  };
};

