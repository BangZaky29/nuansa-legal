import { useEffect } from 'react';
import { useData } from '../context/DataContext';
import { IMAGE_BASE_URL } from '../config';

export function useImages(category: string = 'all', period?: string) {
  const { images, loading, error, fetchImages } = useData();

  useEffect(() => {
    fetchImages(category, period);
  }, [category, period, fetchImages]);



  return { 
    images: images[category] || [], 
    loading: loading[category] || false, 
    error 
  };
}

export function getImageUrl(path: string) {
  return `${IMAGE_BASE_URL}/${path}`;
}

