import { X } from 'lucide-react';
import { Link } from 'wouter';
import { useLocalStorage } from '@/hooks/use-local-storage';

interface CookieBannerProps {
  variant: 'ems' | 'gym';
}

export function CookieBanner({ variant }: CookieBannerProps) {
  const [cookieConsent, setCookieConsent] = useLocalStorage<string | null>('cookieConsent', null);
  const isVisible = !cookieConsent;
  const isEMS = variant === 'ems';
  const accentColor = isEMS ? 'bg-ems-gold hover:bg-ems-gold-light text-black' : 'bg-gym-orange hover:bg-gym-orange-light text-black';
  const secondaryColor = isEMS ? 'border-ems-gold/30 text-ems-gold hover:text-ems-gold-light' : 'border-gym-orange/30 text-gym-orange hover:text-gym-orange-light';

  const acceptAll = () => {
    setCookieConsent('all');
  };

  const acceptEssential = () => {
    setCookieConsent('essential');
  };

  const closeBanner = () => {
    setCookieConsent('essential');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-t border-stone-700 p-4 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">Ciasteczka na naszej stronie</h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Ta strona używa ciasteczek analitycznych, aby poprawić jakość usług i dostosować treści do Twoich preferencji. 
                  Możesz zarządzać swoimi preferencjami lub dowiedzieć się więcej w naszej {' '}
                  <Link href="/polityka-prywatnosci" className={`${isEMS ? 'text-ems-gold hover:text-ems-gold-light' : 'text-gym-orange hover:text-gym-orange-light'} underline transition-colors`}>
                    polityce prywatności
                  </Link>.
                </p>
              </div>
              <button
                onClick={closeBanner}
                className="text-stone-400 hover:text-white transition-colors p-1"
                aria-label="Zamknij banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptEssential}
              className={`px-4 py-2 border ${secondaryColor} rounded-md text-sm font-medium transition-colors hover:bg-stone-800/50`}
            >
              Tylko niezbędne
            </button>
            <button
              onClick={acceptAll}
              className={`px-6 py-2 ${accentColor} rounded-md text-sm font-semibold transition-colors`}
            >
              Akceptuję wszystkie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}