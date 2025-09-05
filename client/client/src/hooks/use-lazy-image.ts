import { useEffect, useRef, useState } from 'react';

interface UseLazyImageOptions {
  rootMargin?: string;
  threshold?: number;
  placeholder?: string;
}

export function useLazyImage(
  src: string, 
  options: UseLazyImageOptions = {}
) {
  const {
    rootMargin = '50px 0px', // Load 50px before entering viewport
    threshold = 0.01,
    placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
  } = options;

  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement || !('IntersectionObserver' in window)) {
      // Fallback for browsers without Intersection Observer
      setImageSrc(src);
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            
            // Create a new image to preload
            const image = new Image();
            image.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            image.onerror = () => {
              // Fallback to original src on error
              setImageSrc(src);
              setIsLoaded(true);
            };
            image.src = src;
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(imgElement);

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, [src, rootMargin, threshold, isInView]);

  return {
    imgRef,
    imageSrc,
    isLoaded,
    isInView
  };
}