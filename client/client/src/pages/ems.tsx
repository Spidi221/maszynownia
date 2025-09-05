import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Phone, Mail, MapPin, Zap, Clock, Target, Instagram, Facebook } from 'lucide-react';
import { SmartContactButton } from '@/components/ui/smart-contact-button';
import { MobileNav } from '@/components/ui/mobile-nav';
import { LazyImage } from '@/components/ui/lazy-image';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { Footer } from '@/components/ui/footer';
import { CookieBanner } from '@/components/ui/cookie-banner';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import logoEms from '@/assets/logo-ems-new.webp';
import { Helmet } from 'react-helmet-async';

export default function EMS() {
  const { scrollToSection, activeSection } = useSmoothScroll();
  
  const navSections = [
    { id: 'o-nas', label: 'O nas' },
    { id: 'cennik', label: 'Cennik' },
    { id: 'kontakt', label: 'Kontakt' }
  ];
  
  return (
    <>
      <Helmet>
        <title>Trening EMS Józefów - Maszynownia | Skuteczny trening w 30 minut</title>
        <meta name="description" content="Dołącz do rewolucji w fitnessie. Trening EMS w Maszynowni to gwarancja szybkich efektów, oszczędność czasu i bezpieczeństwo. Umów trening próbny!" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Trening EMS Józefów - Maszynownia | Skuteczny trening w 30 minut" />
        <meta property="og:description" content="Dołącz do rewolucji w fitnessie. Trening EMS w Maszynowni to gwarancja szybkich efektów, oszczędność czasu i bezpieczeństwo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maszynownia.org/ems" />
        <meta property="og:site_name" content="Maszynownia" />
        <meta property="og:locale" content="pl_PL" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trening EMS Józefów - Maszynownia" />
        <meta name="twitter:description" content="Skuteczny trening EMS w 30 minut. Dołącz do rewolucji w fitnessie!" />
      </Helmet>
      <div
      
      
      
      
      className="min-h-screen text-white landing-page"
      style={{ backgroundColor: '#0c0a09' }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-ems-gold/20" style={{ backgroundColor: 'rgba(12, 10, 9, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-4 w-4 flex-shrink-0" />
              <img 
                src={logoEms} 
                alt="Maszynownia EMS" 
                width={200} 
                height={80}
                className="h-12 w-auto object-contain flex-shrink-0" 
                loading="eager"
              />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('o-nas')}
                className={`hover:text-ems-gold transition-colors ${activeSection === 'o-nas' ? 'text-ems-gold' : ''}`}
              >
                O nas
              </button>
              <button 
                onClick={() => scrollToSection('cennik')}
                className={`hover:text-ems-gold transition-colors ${activeSection === 'cennik' ? 'text-ems-gold' : ''}`}
              >
                Cennik
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className={`hover:text-ems-gold transition-colors ${activeSection === 'kontakt' ? 'text-ems-gold' : ''}`}
              >
                Kontakt
              </button>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-ems-gold/30">
                <a 
                  href="https://www.facebook.com/maszynowniatreningems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-ems-gold transition-colors p-1"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/maszynownia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-ems-gold transition-colors p-1"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Mobile Social Icons + Hamburger */}
            <div className="md:hidden flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/maszynowniatreningems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-ems-gold transition-colors p-1"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/maszynownia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-ems-gold transition-colors p-1"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <MobileNav 
                sections={navSections}
                onSectionClick={scrollToSection}
                activeSection={activeSection}
                accentColor="gold"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 px-6 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            
            
            
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-ems-gold bg-clip-text text-transparent ems-title leading-tight pb-2"
          >
            Skuteczny trening dla dorosłych w 30 minut
          </h1>
          <p
            
            
            
            className="text-xl mb-12 text-stone-300 max-w-2xl mx-auto leading-relaxed"
          >
            Trening EMS to rewolucyjna metoda, która pozwala osiągnąć rezultaty tradycyjnego 90-minutowego treningu w zaledwie 30 minut.
          </p>
          <button
            
            
            
            onClick={() => scrollToSection('kontakt')}
            className="bg-ems-gold hover:bg-ems-gold-light text-black px-12 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-ems-gold/20"
          >
            Umów trening próbny
          </button>
        </div>
      </section>

      {/* Czym jest EMS */}
      <section id="o-nas" className="py-20 px-6 bg-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl font-bold text-center mb-16 text-ems-gold ems-section-title">Czym jest trening EMS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              
              className="bg-stone-800/50 p-8 rounded-xl border border-ems-gold/20 hover:border-ems-gold/40 transition-colors"
            >
              <Zap className="h-12 w-12 text-ems-gold mb-6" />
              <h3 className="text-xl font-semibold mb-4">Elektrostymulacja</h3>
              <p className="text-stone-300">
                Bezpieczne impulsy elektryczne aktywują 90% mięśni jednocześnie, 
                maksymalizując efektywność każdego ruchu.
              </p>
            </div>
            <div
              
              className="bg-stone-800/50 p-8 rounded-xl border border-ems-gold/20 hover:border-ems-gold/40 transition-colors"
            >
              <Clock className="h-12 w-12 text-ems-gold mb-6" />
              <h3 className="text-xl font-semibold mb-4">Oszczędność czasu</h3>
              <p className="text-stone-300">
                30 minut treningu EMS = 90 minut tradycyjnego treningu siłowego.
                Idealny dla zapracowanych osób.
              </p>
            </div>
            <div
              
              className="bg-stone-800/50 p-8 rounded-xl border border-ems-gold/20 hover:border-ems-gold/40 transition-colors"
            >
              <Target className="h-12 w-12 text-ems-gold mb-6" />
              <h3 className="text-xl font-semibold mb-4">Szybkie efekty</h3>
              <p className="text-stone-300">
                Pierwsze rezultaty widoczne już po 2-3 treningach.
                Spalanie tłuszczu, budowa masy mięśniowej.
              </p>
            </div>
          </div>
          
          {/* Extended EMS Description */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-stone-800/30 p-8 rounded-xl border border-ems-gold/20">
              <p className="text-stone-200 text-lg leading-relaxed text-center">
                Trening opierający się na elektrostymulacji mięśni (ang. Electrical Muscle Stimulation), to niezwykle szybko rozwijająca się metoda ćwiczeń, która kompleksowo rozwija cały układ mięśniowy człowieka. Jest doskonałą alternatywą dla siłowni i treningów outdoor, umożliwiającą poprawę całej sylwetki przy maksymalnej oszczędności czasu. Od kilku lat metoda EMS znajduje zastosowanie i przynosi znakomite efekty w fitnessie, fizjoterapii oraz medycynie estetycznej. <span className="text-ems-gold font-semibold">Maszynownia to jedyne miejsce w Józefowie i Warszawie, gdzie możesz przekonać się o fantastycznym wpływie treningu EMS na Twoje zdrowie oraz kondycję fizyczną.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cennik */}
      <section id="cennik" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl font-bold text-center mb-16 text-ems-gold ems-section-title">Cennik</h2>
          
          {/* Treningi Pojedyncze */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">Treningi Pojedyncze</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div 
                
                className="bg-stone-800/50 p-6 rounded-xl border border-ems-gold/20 hover:border-ems-gold/40 transition-colors"
              >
                <h4 className="text-lg font-semibold mb-3 text-ems-gold">Trening intro</h4>
                <div className="text-2xl font-bold text-ems-gold mb-3">79 zł</div>
                <p className="text-stone-300 text-sm">1 trening wprowadzający</p>
              </div>
              <div 
                
                className="bg-stone-800/50 p-6 rounded-xl border border-ems-gold/20 hover:border-ems-gold/40 transition-colors"
              >
                <h4 className="text-lg font-semibold mb-3 text-ems-gold">Trening jednorazowy</h4>
                <div className="text-2xl font-bold text-ems-gold mb-3">160 zł</div>
                <p className="text-stone-300 text-sm">Pojedynczy trening</p>
              </div>
            </div>
          </div>

          {/* Karnety */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">Karnety</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div 
                
                className="bg-stone-800/50 p-8 rounded-xl border border-ems-gold/20 hover:border-ems-gold/40 transition-colors"
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4 text-white">Standard</h4>
                  <div className="text-3xl font-bold text-ems-gold mb-2">600 zł</div>
                  <div className="text-lg text-ems-gold mb-4">4 treningi</div>
                  <p className="text-stone-300 mb-6">150 zł za 1 trening</p>
                  <button className="w-full bg-stone-700 hover:bg-stone-600 text-white py-3 rounded-md transition-colors">
                    Wybierz
                  </button>
                </div>
              </div>
              
              <div 
                
                className="bg-stone-800/50 p-8 rounded-xl border-2 border-ems-gold hover:border-ems-gold transition-colors relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ems-gold text-black px-6 py-2 rounded-full text-sm font-semibold">
                  Najpopularniejszy
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4 text-white">Premium</h4>
                  <div className="text-3xl font-bold text-ems-gold mb-2">1120 zł</div>
                  <div className="text-lg text-ems-gold mb-4">8 treningów</div>
                  <p className="text-stone-300 mb-6">140 zł za 1 trening</p>
                  <button className="w-full bg-ems-gold hover:bg-ems-gold-light text-black py-3 rounded-md transition-colors font-semibold">
                    Wybierz
                  </button>
                </div>
              </div>
              
              <div 
                
                className="bg-stone-800/50 p-8 rounded-xl border border-ems-gold/20 hover:border-ems-gold/40 transition-colors"
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4 text-white">Elite</h4>
                  <div className="text-3xl font-bold text-ems-gold mb-2">1560 zł</div>
                  <div className="text-lg text-ems-gold mb-4">12 treningów</div>
                  <p className="text-stone-300 mb-6">130 zł za 1 trening</p>
                  <button className="w-full bg-stone-700 hover:bg-stone-600 text-white py-3 rounded-md transition-colors">
                    Wybierz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela porównawcza EMS vs Siłownia */}
      <section className="py-20 px-6 bg-stone-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl font-bold text-center mb-16 text-ems-gold ems-section-title">EMS vs Tradycyjna siłownia</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-stone-800/30 rounded-xl border border-ems-gold/20 overflow-hidden">
              <thead>
                <tr className="bg-ems-gold/10">
                  <th className="px-6 py-4 text-left text-lg font-semibold text-white border-r border-ems-gold/20">Cecha</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-ems-gold border-r border-ems-gold/20">Trening EMS</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-stone-300">Trening na siłowni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-700">
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Widoczne rezultaty</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">po 4-6 sesjach</td>
                  <td className="px-6 py-4 text-center text-stone-300">po 15-20 sesjach</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Optymalna częstotliwość treningów</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">max 2-3 w tygodniu</td>
                  <td className="px-6 py-4 text-center text-stone-300">4-5 dni w tygodniu</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Optymalny czas sesji treningowej</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">30 minut</td>
                  <td className="px-6 py-4 text-center text-stone-300">30-90 minut</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Ryzyko kontuzji</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">brak</td>
                  <td className="px-6 py-4 text-center text-stone-300">wysokie</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Obciążenie stawów</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">brak</td>
                  <td className="px-6 py-4 text-center text-stone-300">wysokie</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Ilość spalonych kalorii podczas sesji</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">nawet 1200 kcal</td>
                  <td className="px-6 py-4 text-center text-stone-300">do 500 kcal</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Trening mięśni posturalnych (głębokich)</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">zawsze</td>
                  <td className="px-6 py-4 text-center text-stone-300">w wybranych ćwiczeniach</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Przyrost mięśni posturalnych</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">do 5 razy szybciej</td>
                  <td className="px-6 py-4 text-center text-stone-300">standardowo</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Przyspieszenie metabolizmu</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">wysokie</td>
                  <td className="px-6 py-4 text-center text-stone-300">niskie</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Redukcja cellulitu</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">widoczna w krótkim czasie</td>
                  <td className="px-6 py-4 text-center text-stone-300">długotrwały proces</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Poprawa elastyczności skóry</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">bardzo szybko odczuwalna</td>
                  <td className="px-6 py-4 text-center text-stone-300">długotrwały proces</td>
                </tr>
                <tr className="hover:bg-stone-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Utrata tkanki tłuszczowej</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">do 3 razy szybciej</td>
                  <td className="px-6 py-4 text-center text-stone-300">standardowo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-6 bg-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl font-bold text-center mb-16 text-ems-gold ems-section-title">Kontakt</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informacje kontaktowe */}
            <div className="space-y-8">
              <div className="bg-stone-800/30 p-6 rounded-xl border border-ems-gold/20">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="h-8 w-8 text-ems-gold" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Telefon</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <SmartContactButton
                    phoneNumber="+48696376377"
                    variant="call"
                    className="w-full bg-ems-gold hover:bg-ems-gold-light text-black px-6 py-3 rounded-md font-semibold transition-colors"
                  />
                  {/* SMS tylko na mobile */}
                  <div className="block md:hidden">
                    <SmartContactButton
                      phoneNumber="+48696376377"
                      variant="sms"
                      smsMessage="Chciałbym umówić się na trening próbny EMS"
                      className="w-full bg-stone-700 hover:bg-stone-600 text-white px-6 py-3 rounded-md transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/30 p-6 rounded-xl border border-ems-gold/20">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-8 w-8 text-ems-gold" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">E-mail</h3>
                  </div>
                </div>
                <SmartContactButton
                  phoneNumber="maszynowniaems@gmail.com"
                  variant="email"
                  className="w-full bg-stone-700 hover:bg-stone-600 text-white px-6 py-3 rounded-md transition-colors"
                />
              </div>

              <div className="bg-stone-800/30 p-6 rounded-xl border border-ems-gold/20">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="h-8 w-8 text-ems-gold" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Adres</h3>
                    <p className="text-stone-300">Generała Sikorskiego 113</p>
                    <p className="text-stone-300">Józefów, Warszawa</p>
                    <p className="text-stone-300">Polska</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa Google */}
            <div className="space-y-6">
              <div className="bg-stone-800/30 p-6 rounded-xl border border-ems-gold/20">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Lokalizacja na mapie</h3>
                <div className="aspect-video rounded-lg overflow-hidden border border-ems-gold/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.0123456789!2d21.2345678!3d52.1345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR2VuZXJhxYJhIFNpa29yc2tpZWdvIDExMywgSsOzemVmw7N3!5e0!3m2!1spl!2spl!4v1693567890123"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokalizacja Maszynownia EMS"
                  ></iframe>
                </div>
                <p className="text-stone-400 text-sm mt-3 text-center">
                  Generała Sikorskiego 113, Józefów
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ScrollToTop />
      <Footer variant="ems" />
      <CookieBanner />
    </div>
    </>
  );
}