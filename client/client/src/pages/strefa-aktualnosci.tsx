import { Link } from 'wouter';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { LazyImage } from '@/components/ui/lazy-image';
import { Footer } from '@/components/ui/footer';
import { CookieBanner } from '@/components/ui/cookie-banner';
import logoStrefa from '@/assets/logo-strefa-new.webp';

export default function StrefaAktualnosci() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Aktualności - Strefa Gimnastyki | Najnowsze wiadomości</title>
        <meta name="description" content="Najnowsze aktualności ze Strefy Gimnastyki. Wydarzenia, sukcesy naszych podopiecznych i informacje o zajęciach gimnastycznych dla dzieci." />
        <meta name="keywords" content="aktualności gimnastyka dzieci, wydarzenia strefa gimnastyki, sukcesy sportowe dzieci, nowości zajęcia gimnastyczne" />
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
              <span className="text-lg font-semibold flex-shrink-0" style={{ color: '#0c0a09' }}>Aktualności</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight pb-2 gym-heading"
          >
            Aktualności
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto mb-12"
            style={{ color: '#f9fafb' }}
          >
            Najnowsze informacje o zajęciach, wydarzeniach i sukcesach naszych małych gimnastyków
          </p>
        </div>
      </section>

      {/* Empty State */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white/95 p-12 rounded-xl border border-yellow-500/40 text-center shadow-lg"
            style={{ color: '#0c0a09' }}
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-yellow-400/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0c0a09' }}>Wkrótce więcej aktualności!</h2>
              <p className="mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#0c0a09' }}>
                Ta sekcja będzie wkrótce wypełniona najnowszymi informacjami o naszych zajęciach, 
                sukcesach dzieci, nowych lokalizacjach i nadchodzących wydarzeniach.
              </p>
            </div>

            {/* Placeholder cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/95 p-6 rounded-lg border border-yellow-500/40 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-yellow-600 text-sm font-medium">
                  <Tag className="h-4 w-4" />
                  <span>Nadchodzące</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#0c0a09' }}>Nowe grupy wiekowe</h3>
                <p className="text-sm" style={{ color: '#0c0a09' }}>Planujemy uruchomienie dodatkowych grup dla różnych wieku...</p>
              </div>
              <div className="bg-white/95 p-6 rounded-lg border border-yellow-500/40 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-yellow-600 text-sm font-medium">
                  <Clock className="h-4 w-4" />
                  <span>Wkrótce</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#0c0a09' }}>Wydarzenia specjalne</h3>
                <p className="text-sm" style={{ color: '#0c0a09' }}>Przygotowujemy pokazy i zawody dla naszych małych sportowców...</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-yellow-500/40">
              <p className="text-sm" style={{ color: '#0c0a09' }}>
                Aby być na bieżąco z naszymi aktualnościami, śledź nas w mediach społecznościowych 
                lub zapisz się na zajęcia, aby otrzymywać informacje bezpośrednio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="gym" />
      
      {/* Cookie Banner */}
      <CookieBanner variant="gym" />
    </div>
    </>
  );
}