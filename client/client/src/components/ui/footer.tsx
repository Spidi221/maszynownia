import { Link } from 'wouter';

interface FooterProps {
  variant: 'ems' | 'gym';
}

export function Footer({ variant }: FooterProps) {
  const isEMS = variant === 'ems';
  const accentColor = isEMS ? 'text-ems-gold hover:text-ems-gold-light' : 'text-gym-orange hover:text-gym-orange-light';
  const borderColor = isEMS ? 'border-ems-gold/20' : 'border-gym-orange/20';
  const passionText = isEMS ? 'skutecznego treningu 💪' : 'szczęśliwego dzieciństwa 🤸';

  return (
    <footer className={`py-12 px-6 border-t ${borderColor}`} style={{ backgroundColor: '#0c0a09' }}>
      <div className="max-w-6xl mx-auto">
        {/* Główna sekcja z linkami */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Dane firmy */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-3">Maszynownia</h4>
            <p className="text-stone-400 text-sm">Klaudia Nowicka</p>
            <div className="text-stone-400 text-sm space-y-1">
              <p>NIP: 7311991516</p>
              <p>REGON: 368484010</p>
            </div>
          </div>

          {/* Kontakt */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-3">Kontakt</h4>
            <div className="text-stone-400 text-sm space-y-1">
              <p>Tel: 696 376 377</p>
              <p>{isEMS ? 'maszynowniaems@gmail.com' : 'maszynowniastrefagimnastyki@gmail.com'}</p>
            </div>
          </div>

          {/* Lokalizacje */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-3">{isEMS ? 'Lokalizacja' : 'Lokalizacje'}</h4>
            <div className="text-stone-400 text-sm space-y-1">
              {isEMS ? (
                <p>Józefów - ul. Generała Sikorskiego 113</p>
              ) : (
                <>
                  <p>Józefów - ul. Dolna 19</p>
                  <p>Michalin - ul. Sienkiewicza 2</p>
                  <p>Góra Kalwaria - ul. Ojca Papczyńskiego 1a</p>
                </>
              )}
            </div>
          </div>

          {/* Legalne */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-3">Informacje prawne</h4>
            <div className="space-y-2">
              <Link href="/polityka-prywatnosci" className={`block text-sm ${accentColor} transition-colors`}>
                Polityka prywatności
              </Link>
              <Link href="/regulamin" className={`block text-sm ${accentColor} transition-colors`}>
                Regulamin
              </Link>
              <Link href="/rodo" className={`block text-sm ${accentColor} transition-colors`}>
                RODO
              </Link>
            </div>
          </div>
        </div>

        {/* Linia oddzielająca */}
        <div className={`border-t ${borderColor} pt-6`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-stone-400 text-sm">
              © 2025 Maszynownia. Wszystkie prawa zastrzeżone.
            </div>
            
            {/* Passion note */}
            <div className="text-stone-400 text-sm">
              Strona wykonana z pasją do {passionText}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}