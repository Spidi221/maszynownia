import { Link } from 'wouter';
import { ArrowLeft, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Footer } from '@/components/ui/footer';
import { CookieBanner } from '@/components/ui/cookie-banner';
import { LazyImage } from '@/components/ui/lazy-image';
import logoStrefa from '@/assets/logo-strefa-new.webp';

// Gallery images with lazy loading - only load when needed
const galleryImages = [
  { 
    src: () => import('@/assets/gallery-webp/IMG_0651.webp').then(m => m.default),
    alt: 'Zajęcia gimnastyczne - dzieci w ruchu',
    filename: 'IMG_0651.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_0676.webp').then(m => m.default),
    alt: 'Akrobatyka dla dzieci',
    filename: 'IMG_0676.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_7171.webp').then(m => m.default),
    alt: 'Gimnastyka artystyczna',
    filename: 'IMG_7171.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_7952.webp').then(m => m.default),
    alt: 'Trening koordynacji',
    filename: 'IMG_7952.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_8556.webp').then(m => m.default),
    alt: 'Zajęcia dla najmłodszych',
    filename: 'IMG_8556.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_8558.webp').then(m => m.default),
    alt: 'Ćwiczenia równowagi',
    filename: 'IMG_8558.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_8559.webp').then(m => m.default),
    alt: 'Gimnastyka dla dzieci',
    filename: 'IMG_8559.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_8577.webp').then(m => m.default),
    alt: 'Zajęcia grupowe',
    filename: 'IMG_8577.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_8966.webp').then(m => m.default),
    alt: 'Akrobatyka podstawowa',
    filename: 'IMG_8966.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_9259.webp').then(m => m.default),
    alt: 'Radość z ruchu',
    filename: 'IMG_9259.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_9260.webp').then(m => m.default),
    alt: 'Zajęcia w sali',
    filename: 'IMG_9260.webp'
  },
  { 
    src: () => import('@/assets/gallery-webp/IMG_9261.webp').then(m => m.default),
    alt: 'Młodzi gimnastycy',
    filename: 'IMG_9261.webp'
  }
];

export default function StrefaGaleria() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: string }>({});
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Intersection Observer for automatic lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => new Set(prev).add(index));
            loadImage(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '50px', // Load 50px before coming into view
        threshold: 0.1
      }
    );

    // Observe all gallery items
    const galleryItems = document.querySelectorAll('[data-gallery-item]');
    galleryItems.forEach(item => observer.observe(item));

    return () => {
      galleryItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  // Load image dynamically when visible
  const loadImage = async (index: number) => {
    if (loadedImages[index]) return;
    
    try {
      const imageSrc = await galleryImages[index].src();
      setLoadedImages(prev => ({ ...prev, [index]: imageSrc }));
    } catch (error) {
      console.error(`Failed to load image ${index}:`, error);
    }
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = async () => {
    if (selectedImage !== null) {
      const nextIndex = (selectedImage + 1) % galleryImages.length;
      setSelectedImage(nextIndex);
      
      // Preload next image for smoother navigation
      await loadImage(nextIndex);
      // Also preload the image after next
      const afterNext = (nextIndex + 1) % galleryImages.length;
      loadImage(afterNext);
    }
  };

  const prevImage = async () => {
    if (selectedImage !== null) {
      const prevIndex = (selectedImage - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(prevIndex);
      
      // Preload previous image for smoother navigation
      await loadImage(prevIndex);
      // Also preload the image before previous
      const beforePrev = (prevIndex - 1 + galleryImages.length) % galleryImages.length;
      loadImage(beforePrev);
    }
  };

  return (
    <>
      <Helmet>
        <title>Galeria Zdjęć - Strefa Gimnastyki | Zobacz nasze zajęcia dla dzieci</title>
        <meta name="description" content="Zobacz galerię zdjęć z zajęć gimnastycznych dla dzieci. Akrobatyka, gimnastyka artystyczna i radość z ruchu w Strefie Gimnastyki." />
        <meta name="keywords" content="galeria gimnastyka dzieci, zdjęcia zajęcia sportowe, akrobatyka dla dzieci zdjęcia, gimnastyka artystyczna galeria" />
      </Helmet>
      <div
      className="min-h-screen"
      style={{ backgroundColor: '#d97706', color: '#f9fafb' }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-md border-b border-orange-600/20" style={{ backgroundColor: 'rgba(217, 119, 6, 0.9)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/strefagimnastyki" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-4 w-4 flex-shrink-0" />
              <img 
                src={logoStrefa} 
                alt="Strefa Gimnastyki" 
                width={200} 
                height={80}
                className="h-12 w-auto object-contain flex-shrink-0" 
                loading="eager"
              />
              <span className="text-lg font-semibold flex-shrink-0" style={{ color: '#0c0a09' }}>Galeria</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight pb-2 gym-heading"
          >
            Galeria zdjęć
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto mb-12"
            style={{ color: '#f9fafb' }}
          >
            Zobacz jak wyglądają nasze zajęcia gymnastyczne dla dzieci w różnych lokalizacjach
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                data-gallery-item
                data-index={index}
                onClick={() => openLightbox(index)}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer border border-yellow-500/40 hover:border-yellow-400/80 transition-all duration-300 relative group shadow-sm hover:shadow-md"
              >
                {loadedImages[index] ? (
                  <img
                    src={loadedImages[index]}
                    alt={image.alt}
                    width="300"
                    height="300"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-yellow-300/30 to-yellow-400/40 flex items-center justify-center">
                    <div className="text-center">
                      {visibleImages.has(index) ? (
                        <>
                          <div className="w-8 h-8 border-2 border-yellow-500/60 border-t-yellow-500 rounded-full animate-spin mx-auto mb-2"></div>
                          <p className="text-xs" style={{ color: '#0c0a09' }}>Ładowanie...</p>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 bg-yellow-400/30 rounded-lg flex items-center justify-center mb-2 mx-auto opacity-50">
                            <svg className="w-6 h-6 text-yellow-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
                {/* Loading overlay with blur effect */}
                {visibleImages.has(index) && !loadedImages[index] && (
                  <div className="absolute inset-0 bg-yellow-300/25 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-yellow-500/70 border-t-yellow-500 rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            {loadedImages[selectedImage] ? (
              <img
                key={selectedImage}
                src={loadedImages[selectedImage]}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <div className="flex items-center justify-center w-96 h-96 bg-yellow-300/40 rounded-lg">
                <div className="text-center">
                  <div className="w-12 h-12 border-2 border-yellow-500/60 border-t-yellow-500 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-white">Ładowanie zdjęcia...</p>
                </div>
              </div>
            )}

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ArrowLeft className="h-6 w-6 rotate-180" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer variant="gym" />
      
      {/* Cookie Banner */}
      <CookieBanner variant="gym" />
    </div>
    </>
  );
}