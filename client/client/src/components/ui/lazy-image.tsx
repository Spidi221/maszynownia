import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  rootMargin?: string;
  threshold?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '100vw',
  priority = false,
  quality = 85,
  rootMargin = '50px 0px',
  threshold = 0.1,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  console.log(`LazyImage init: src=${src}, priority=${priority}, isInView=${isInView}`);

  // Generate responsive srcset with different qualities and sizes
  const generateSrcSet = (baseSrc: string, quality: number) => {
    // For local imported images (dev: /src/, prod: /assets/), just return the original src
    if (baseSrc.startsWith('/src/') || baseSrc.startsWith('/assets/') || baseSrc.startsWith('data:') || !baseSrc.includes('http')) {
      return baseSrc;
    }
    
    // Handle WebP images with quality parameters for CDN
    const baseUrl = baseSrc.split('?')[0].replace(/\.(webp|jpg|jpeg|png)$/i, '');
    const ext = baseSrc.match(/\.(webp|jpg|jpeg|png)$/i)?.[1] || 'webp';
    
    return [
      `${baseUrl}?w=480&q=${Math.max(quality - 15, 60)}&fm=${ext} 480w`,
      `${baseUrl}?w=768&q=${quality}&fm=${ext} 768w`,
      `${baseUrl}?w=1024&q=${quality}&fm=${ext} 1024w`,
      `${baseUrl}?w=1200&q=${Math.min(quality + 5, 95)}&fm=${ext} 1200w`
    ].join(', ');
  };

  // Low quality placeholder (LQIP) - for local images use a simple gray placeholder
  const placeholder = src.startsWith('/src/') || src.startsWith('/assets/') || src.startsWith('data:') || !src.includes('http') 
    ? 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3Crect width="1" height="1" fill="%23374151"/%3E%3C/svg%3E'
    : `${src.split('?')[0]}?w=50&q=10&blur=10`;

  // Main optimized source - for local images use original
  const optimizedSrc = src.startsWith('/src/') || src.startsWith('/assets/') || src.startsWith('data:') || !src.includes('http') 
    ? src 
    : `${src.split('?')[0]}?w=${width}&q=${quality}`;

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    const currentImg = imgRef.current;
    if (currentImg && !isInView) {
      observer.observe(currentImg);
    }

    return () => {
      if (currentImg) {
        observer.unobserve(currentImg);
      }
    };
  }, [priority, isInView, rootMargin, threshold]);

  const handleLoad = () => {
    console.log(`LazyImage LOADED: ${src}`);
    setIsLoaded(true);
  };

  const handleError = () => {
    console.log(`LazyImage ERROR: ${src}`);
    setImageError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        aspectRatio: `${width}/${height}`,
        contentVisibility: 'auto',
        containIntrinsicSize: `${width}px ${height}px`
      }}
    >
      {/* LQIP - Low Quality Image Placeholder */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          width={width}
          height={height}
          className={`absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300 ${isInView ? 'opacity-70' : 'opacity-100'}`}
          aria-hidden="true"
        />
      )}
      
      {/* Main optimized image */}
      <img
        ref={imgRef}
        src={isInView ? optimizedSrc : placeholder}
        srcSet={isInView && !imageError && (src.includes('http') && !src.startsWith('/src/') && !src.startsWith('/assets/')) ? generateSrcSet(src, quality) : undefined}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchpriority={priority ? 'high' : 'low'}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-all duration-600 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        {...props}
      />
      
      {/* Error fallback */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400 animate-in fade-in duration-300">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      
      {/* Loading indicator for priority images */}
      {priority && !isLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin animate-in fade-in duration-500 delay-500" />
        </div>
      )}
    </div>
  );
};