import { useState, useEffect } from 'react';

interface UseScrollVisibilityOptions {
  threshold?: number;
  initialValue?: boolean;
}

export function useScrollVisibility(options: UseScrollVisibilityOptions = {}) {
  const { threshold = 300, initialValue = false } = options;
  const [isVisible, setIsVisible] = useState(initialValue);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll position
    toggleVisibility();

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = (behavior: 'smooth' | 'instant' | 'auto' = 'smooth') => {
    try {
      // Force smooth behavior with better browser support
      document.documentElement.style.scrollBehavior = 'smooth';
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      // Reset scroll behavior after scrolling
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
      }, 1000);
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  };

  const scrollToPosition = (position: number, behavior: 'smooth' | 'instant' | 'auto' = 'smooth') => {
    try {
      window.scrollTo({
        top: position,
        left: 0,
        behavior: behavior,
      });
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, position);
    }
  };

  return {
    isVisible,
    scrollToTop,
    scrollToPosition,
    scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
  };
}