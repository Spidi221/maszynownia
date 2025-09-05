import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/ui/footer';
import { CookieBanner } from '@/components/ui/cookie-banner';

export default function Regulamin() {
  return (
    <>
      <Helmet>
        <title>Regulamin - Maszynownia | Zasady korzystania z usług</title>
        <meta name="description" content="Regulamin usług Maszynowni - zasady korzystania z treningów EMS i zajęć gimnastycznych dla dzieci." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div
      className="min-h-screen text-white"
      style={{ backgroundColor: '#0c0a09' }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-stone-700" style={{ backgroundColor: 'rgba(12, 10, 9, 0.8)' }}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            <span>Powrót na stronę główną</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Regulamin</h1>
        <div className="text-stone-300 space-y-6">
          <p><strong>Data ostatniej aktualizacji:</strong> 3 września 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">§ 1. Postanowienia ogólne</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Niniejszy Regulamin określa zasady świadczenia usług przez Maszynownia Klaudia Nowicka.</li>
              <li>Usługodawca: Maszynownia Klaudia Nowicka, NIP: 7311991516, REGON: 368484010</li>
              <li>Kontakt: telefon 696 376 377, e-mail: maszynowniaems@gmail.com</li>
              <li>Regulamin wchodzi w życie z dniem 3 września 2025 roku.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">§ 2. Rodzaje usług</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Treningi EMS</strong> - treningi z elektrostymulacją mięśni dla osób dorosłych</li>
              <li><strong>Gimnastyka dla dzieci</strong> - zajęcia gimnastyczne dla dzieci w wieku 4-13 lat</li>
              <li>Usługi świadczone są w lokalizacjach: Józefów, Michalin, Góra Kalwaria</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">§ 3. Zapisy na zajęcia</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Zapisy na zajęcia odbywają się telefonicznie pod numerem 696 376 377 lub SMS.</li>
              <li>Przy zapisie należy podać: imię i nazwisko, wiek (dla dzieci), preferowaną lokalizację i godzinę.</li>
              <li>Miejsca na zajęciach są ograniczone - obowiązuje kolejność zgłoszeń.</li>
              <li>Potwierdzenie uczestnictwa następuje telefonicznie lub SMS.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">§ 4. Płatności</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Płatności przyjmowane są gotówkowo w dniu zajęć lub przelewem na wskazane konto.</li>
              <li>Ceny usług są podane na stronie internetowej i mogą ulec zmianie.</li>
              <li>W przypadku karnetu, ważność wynosi 3 miesiące od daty zakupu.</li>
              <li>Faktury wystawiane są na życzenie klienta.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">§ 5. Odwołania i zwroty</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Odwołanie zajęć możliwe jest do 2 godzin przed planowanym treningiem.</li>
              <li>W przypadku choroby lub siły wyższej, odwołanie możliwe jest do 30 minut przed zajęciami.</li>
              <li>Nieodwołane zajęcia są traktowane jako wykorzystane.</li>
              <li>Zwrot środków możliwy jest jedynie w uzasadnionych przypadkach, po indywidualnym rozpatrzeniu.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">§ 6. Przeciwwskazania i bezpieczeństwo</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Uczestnik zobowiązany jest do poinformowania o przeciwwskazaniach zdrowotnych.</li>
              <li>Dla treningów EMS wymagana jest konsultacja lekarska w przypadku problemów zdrowotnych.</li>
              <li>Instruktor może odmówić przeprowadzenia zajęć w przypadku stwierdzenia przeciwwskazań.</li>
              <li>Uczestnik bierze udział w zajęciach na własną odpowiedzialność.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">§ 7. Zachowanie na zajęciach</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Uczestnik zobowiązany jest do przestrzegania wskazówek instruktora.</li>
              <li>Na zajęcia należy przychodzić punktualnie i w odpowiednim stroju sportowym.</li>
              <li>Zabrania się wnoszenia na zajęcia przedmiotów niebezpiecznych.</li>
              <li>W przypadku nieprzestrzegania regulaminu, uczestnik może zostać wykluczony z zajęć.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">§ 8. Odpowiedzialność</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Usługodawca nie ponosi odpowiedzialności za przedmioty pozostawione na terenie obiektu.</li>
              <li>Odpowiedzialność za bezpieczeństwo dzieci spoczywa na rodzicach/opiekunach.</li>
              <li>Usługodawca nie odpowiada za skutki nieprzestrzegania zaleceń instruktora.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">§ 9. Reklamacje</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Reklamacje można zgłaszać telefonicznie (696 376 377) lub mailowo (maszynowniaems@gmail.com).</li>
              <li>Reklamacja powinna zawierać opis problemu i oczekiwany sposób rozwiązania.</li>
              <li>Reklamacje rozpatrywane są w terminie 14 dni roboczych.</li>
              <li>Odpowiedź na reklamację udzielana jest w formie uzgodnionej z klientem.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">§ 10. Postanowienia końcowe</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Regulamin może zostać zmieniony w każdym czasie. Klienci będą informowani o zmianach.</li>
              <li>W sprawach nieuregulowanych stosuje się przepisy Kodeksu Cywilnego.</li>
              <li>Spory rozstrzygane są przez sąd właściwy dla siedziby usługodawcy.</li>
            </ol>
          </section>
        </div>
      </div>

      <Footer variant="ems" />
      <CookieBanner variant="ems" />
    </div>
    </>
  );
}