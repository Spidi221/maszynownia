import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/ui/footer';
import { CookieBanner } from '@/components/ui/cookie-banner';

export default function RODO() {
  return (
    <>
      <Helmet>
        <title>RODO - Maszynownia | Ochrona danych osobowych</title>
        <meta name="description" content="Informacje RODO Maszynowni - jak przetwarzamy dane osobowe zgodnie z Rozporządzeniem o Ochronie Danych Osobowych." />
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
        <h1 className="text-4xl font-bold mb-8">Informacja RODO</h1>
        <div className="text-stone-300 space-y-6">
          <p><strong>Informacja o przetwarzaniu danych osobowych zgodnie z art. 13 i 14 RODO</strong></p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Administrator danych osobowych</h2>
            <div className="space-y-2">
              <p><strong>Maszynownia Klaudia Nowicka</strong></p>
              <p>NIP: 7311991516</p>
              <p>REGON: 368484010</p>
              <p>Adres: zgodnie z lokalizacjami podanymi na stronie</p>
              <p>E-mail: maszynowniaems@gmail.com</p>
              <p>Telefon: 696 376 377</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Cel i podstawa prawna przetwarzania danych</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Świadczenie usług treningowych:</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. b RODO (wykonanie umowy)</li>
                  <li><strong>Dane:</strong> imię, nazwisko, wiek, numer telefonu, informacje o stanie zdrowia</li>
                  <li><strong>Cel:</strong> organizacja i przeprowadzenie zajęć</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Marketing i kontakt:</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)</li>
                  <li><strong>Dane:</strong> numer telefonu, adres e-mail</li>
                  <li><strong>Cel:</strong> informowanie o ofercie, kontakt w sprawach usług</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Obowiązki prawne:</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. c RODO (obowiązek prawny)</li>
                  <li><strong>Dane:</strong> dane do celów księgowych i podatkowych</li>
                  <li><strong>Cel:</strong> wypełnienie obowiązków wynikających z przepisów prawa</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Okres przechowywania danych</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Dane związane z usługami:</strong> przez okres świadczenia usług i 3 lata po ich zakończeniu</li>
              <li><strong>Dane księgowe:</strong> 5 lat (zgodnie z ustawą o rachunkowości)</li>
              <li><strong>Dane marketingowe:</strong> do momentu wycofania zgody lub sprzeciwu</li>
              <li><strong>Dane w celach bezpieczeństwa:</strong> 6 lat od zakończenia roku kalendarzowego</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Odbiorcy danych</h2>
            <p>Twoje dane osobowe mogą być przekazywane następującym kategoriom odbiorców:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Podmioty świadczące usługi księgowe</li>
              <li>Dostawcy systemów IT i usług technicznych</li>
              <li>Kancelarie prawne</li>
              <li>Organy publiczne (gdy wynika to z przepisów prawa)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Twoje prawa</h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-white">Masz prawo do:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Dostępu</strong> - możesz uzyskać informacje o przetwarzanych danych</li>
                  <li><strong>Sprostowania</strong> - możesz poprawić nieprawidłowe dane</li>
                  <li><strong>Usunięcia</strong> - możesz żądać usunięcia danych ("prawo do bycia zapomnianym")</li>
                  <li><strong>Ograniczenia przetwarzania</strong> - możesz ograniczyć sposób przetwarzania</li>
                  <li><strong>Przenoszenia danych</strong> - możesz otrzymać dane w ustrukturyzowanym formacie</li>
                  <li><strong>Sprzeciwu</strong> - możesz sprzeciwić się przetwarzaniu danych</li>
                  <li><strong>Cofnięcia zgody</strong> - w każdym momencie (gdy podstawą jest zgoda)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">Jak skorzystać z praw:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Skontaktuj się z nami: maszynowniaems@gmail.com lub 696 376 377</li>
                  <li>Podaj swoje dane identyfikacyjne i opisz żądanie</li>
                  <li>Odpowiedź otrzymasz w ciągu miesiąca</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Automatyczne podejmowanie decyzji</h2>
            <p>Nie podejmujemy wobec Ciebie zautomatyzowanych decyzji, w tym profilowania, które wywołuje skutki prawne lub w podobny sposób istotnie na Ciebie wpływa.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Przekazywanie danych do państw trzecich</h2>
            <p>Twoje dane osobowe nie są przekazywane do państw trzecich ani organizacji międzynarodowych.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Skarga do organu nadzorczego</h2>
            <p>Masz prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeśli uważasz, że przetwarzanie Twoich danych osobowych narusza przepisy RODO.</p>
            
            <div className="mt-4 space-y-1">
              <p><strong>Urząd Ochrony Danych Osobowych</strong></p>
              <p>ul. Stawki 2, 00-193 Warszawa</p>
              <p>Telefon: 22 531 03 00</p>
              <p>E-mail: kancelaria@uodo.gov.pl</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Źródło danych osobowych</h2>
            <p>Twoje dane osobowe pochodzą bezpośrednio od Ciebie podczas:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Kontaktu telefonicznego lub SMS</li>
              <li>Korzystania z naszej strony internetowej</li>
              <li>Uczestnictwa w zajęciach</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Kontakt w sprawach ochrony danych</h2>
            <p>W przypadku pytań dotyczących przetwarzania danych osobowych, skontaktuj się z nami:</p>
            <div className="ml-4 space-y-1">
              <p><strong>E-mail:</strong> maszynowniaems@gmail.com</p>
              <p><strong>Telefon:</strong> 696 376 377</p>
              <p><strong>Temat:</strong> "Ochrona danych osobowych"</p>
            </div>
          </section>
        </div>
      </div>

      <Footer variant="ems" />
      <CookieBanner variant="ems" />
    </div>
    </>
  );
}