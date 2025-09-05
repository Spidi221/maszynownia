import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/ui/footer';
import { CookieBanner } from '@/components/ui/cookie-banner';

export default function PolitykaPrywatnosci() {
  return (
    <>
      <Helmet>
        <title>Polityka Prywatności - Maszynownia | Ochrona danych osobowych</title>
        <meta name="description" content="Polityka prywatności Maszynowni - jak chronimy Twoje dane osobowe, zasady przetwarzania i prawa użytkowników zgodnie z RODO." />
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
        <h1 className="text-4xl font-bold mb-8">Polityka Prywatności</h1>
        <div className="text-stone-300 space-y-6">
          <p><strong>Data ostatniej aktualizacji:</strong> 3 września 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Administrator danych</h2>
            <p>Administratorem Twoich danych osobowych jest:</p>
            <div className="ml-4 space-y-1">
              <p><strong>Maszynownia Klaudia Nowicka</strong></p>
              <p>NIP: 7311991516</p>
              <p>REGON: 368484010</p>
              <p>E-mail: maszynowniaems@gmail.com</p>
              <p>Telefon: 696 376 377</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Jakie dane zbieramy</h2>
            <p>Zbieramy następujące kategorie danych:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Dane kontaktowe</strong> - gdy dzwonisz lub piszesz SMS (numer telefonu)</li>
              <li><strong>Dane analityczne</strong> - informacje o korzystaniu ze strony (cookies analityczne)</li>
              <li><strong>Dane techniczne</strong> - adres IP, typ przeglądarki, system operacyjny</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Podstawa prawna przetwarzania</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Zgoda</strong> (art. 6 ust. 1 lit. a RODO) - dla cookies analitycznych</li>
              <li><strong>Prawnie uzasadniony interes</strong> (art. 6 ust. 1 lit. f RODO) - dla kontaktu i analityki</li>
              <li><strong>Wykonanie umowy</strong> (art. 6 ust. 1 lit. b RODO) - przy świadczeniu usług</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Cele przetwarzania danych</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Umożliwienie kontaktu telefonicznego lub SMS</li>
              <li>Świadczenie usług treningowych</li>
              <li>Analiza ruchu na stronie i jej optymalizacja</li>
              <li>Wypełnienie obowiązków prawnych</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Okres przechowywania danych</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Dane kontaktowe</strong> - do momentu wycofania zgody lub przez 3 lata</li>
              <li><strong>Cookies analityczne</strong> - maksymalnie 26 miesięcy</li>
              <li><strong>Dane księgowe</strong> - przez okres wymagany przepisami (5 lat)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Twoje prawa</h2>
            <p>Zgodnie z RODO przysługują Ci następujące prawa:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Prawo dostępu do swoich danych</li>
              <li>Prawo do sprostowania danych</li>
              <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym")</li>
              <li>Prawo do ograniczenia przetwarzania</li>
              <li>Prawo do przenoszenia danych</li>
              <li>Prawo do sprzeciwu wobec przetwarzania</li>
              <li>Prawo do wycofania zgody</li>
            </ul>
            <p className="mt-4">W celu skorzystania z powyższych praw, skontaktuj się z nami: maszynowniaems@gmail.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Cookies</h2>
            <p>Nasza strona używa cookies w następujących celach:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Cookies niezbędne</strong> - zapewniają podstawowe funkcjonowanie strony</li>
              <li><strong>Cookies analityczne</strong> - pomagają nam analizować ruch na stronie</li>
            </ul>
            <p className="mt-4">Możesz zarządzać ustawieniami cookies w swojej przeglądarce lub za pomocą bannera na stronie.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Bezpieczeństwo danych</h2>
            <p>Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych przed nieuprawnionym dostępem, utratą, zniszczeniem lub zmianą.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Kontakt</h2>
            <p>W przypadku pytań dotyczących ochrony danych osobowych, skontaktuj się z nami:</p>
            <div className="ml-4 space-y-1">
              <p>E-mail: maszynowniaems@gmail.com</p>
              <p>Telefon: 696 376 377</p>
            </div>
            <p className="mt-4">Masz również prawo do złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</p>
          </section>
        </div>
      </div>

      <Footer variant="ems" />
      <CookieBanner variant="ems" />
    </div>
    </>
  );
}