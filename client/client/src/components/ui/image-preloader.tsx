import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  priority?: 'high' | 'low';
}

export const ImagePreloader: React.FC<ImagePreloaderProps> = ({ 
  images, 
  priority = 'high' 
}) => {
  useEffect(() => {
    // Preload critical images on component mount
    const preloadImages = () => {
      images.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        
        if (priority === 'high') {
          link.fetchPriority = 'high';
        }
        
        document.head.appendChild(link);
        
        // Also create Image object for browser cache
        const img = new Image();
        img.src = src;
      });
    };

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadImages);
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(preloadImages, 1);
    }
  }, [images, priority]);

  return null; // This component doesn't render anything
};