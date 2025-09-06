import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Phone, Mail, MapPin, Users, Heart, Star, Calendar, Clock, Instagram, Facebook, Camera, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useDeviceDetection } from '@/hooks/use-device-detection';
import { SmartContactButton } from '@/components/ui/smart-contact-button';
import { MobileNav } from '@/components/ui/mobile-nav';
import { LazyImage } from '@/components/ui/lazy-image';
import { BlogSection } from '@/components/ui/blog-section';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { Footer } from '@/components/ui/footer';
import { CookieBanner } from '@/components/ui/cookie-banner';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import logoStrefa from '@/assets/logo-strefa-new.webp';
import gallery1 from '@/assets/gallery-webp/IMG_8966.webp';
import gallery2 from '@/assets/gallery-webp/IMG_7171.webp';
import gallery3 from '@/assets/gallery-webp/IMG_9259.webp';
import klaudiaPhoto from '@/assets/klaudia-kolodziejska.jpg';

export default function StrefaGimnastyki() {
  const [activeLocation, setActiveLocation] = useState(0);
  const { scrollToSection, activeSection } = useSmoothScroll();
  const { isMobile } = useDeviceDetection();
  
  const navSections = [
    { id: 'zajecia', label: 'Zajęcia' },
    { id: 'lokalizacje', label: 'Lokalizacje' },
    { id: 'kadra', label: 'Kadra' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'zapisy', label: 'Zapisy' }
  ];

  const locations = [
    {
      name: "Józefów",
      address: "ul. Dolna 19",
      schedule: [
        "Wtorki i czwartki",
        "16:30 - grupa 4-6 lat",
        "17:30 - grupa 7-9 lat", 
        "18:30 - grupa 10-13 lat"
      ],
      start: "Start: 9 września 2025",
      prices: ["160 zł (1x/tyg)", "260 zł (2x/tyg)"],
      mapUrl: "https://maps.app.goo.gl/DnvYvg56dvt17BCK8",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7!2d21.2342!3d52.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb1234567890%3A0x1234567890abcdef!2sDolna%2019%2C%20J%C3%B3zef%C3%B3w!5e0!3m2!1spl!2spl!4v1234567890"
    },
    {
      name: "Michalin", 
      address: "ul. Sienkiewicza 2",
      schedule: [
        "Piątki",
        "13:30",
        "14:30"
      ],
      start: "Zajęcia pokazowe: 5 września 2025",
      prices: ["160 zł (1x/tyg)"],
      mapUrl: "https://maps.app.goo.gl/CY1z53FRVMVQtDHVA",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8!2d21.3157!3d52.1789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd12345678ab%3A0xabcdef1234567890!2sSienkiewicza%202%2C%2005-462%20Michalin!5e0!3m2!1spl!2spl!4v1693567890001"
    },
    {
      name: "Góra Kalwaria",
      address: "sala Hop sa sa, ul. Ojca Papczyńskiego 1a",
      schedule: [
        "Poniedziałki i środy",
        "15:00 - grupa 4-5 lat",
        "16:00 - grupa 6 lat",
        "17:00 - grupa 7-8 lat", 
        "18:00 - grupa 9-11 lat"
      ],
      start: "Start: 15 września 2025",
      prices: ["160 zł (1x/tyg)", "300 zł (2x/tyg)"],
      mapUrl: "https://maps.app.goo.gl/YiKoVtSUxyQhmrwz6",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.3!2d21.4567!3d52.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb3456789012%3A0x3456789012cdef01!2sOjca%20Papczynskiego%201a%2C%20G%C3%B3ra%20Kalwaria!5e0!3m2!1spl!2spl!4v1234567892"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gimnastyka dla Dzieci - Strefa Gimnastyki | Józefów, Michalin, Góra Kalwaria</title>
        <meta name="description" content="Zajęcia gimnastyczne dla dzieci 4-13 lat. Akrobatyka, gimnastyka artystyczna i sportowa w trzech lokalizacjach. Trener Klaudia Kołodziejska." />
        <meta name="keywords" content="gimnastyka dla dzieci, akrobatyka dla dzieci, zajęcia sportowe dzieci, Józefów, Michalin, Góra Kalwaria, gimnastyka artystyczna" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Gimnastyka dla Dzieci - Strefa Gimnastyki" />
        <meta property="og:description" content="Zajęcia gimnastyczne dla dzieci 4-13 lat. Akrobatyka, gimnastyka artystyczna i sportowa w trzech lokalizacjach." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maszynownia.org/strefagimnastyki" />
        <meta property="og:site_name" content="Maszynownia - Strefa Gimnastyki" />
        <meta property="og:locale" content="pl_PL" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gimnastyka dla Dzieci - Strefa Gimnastyki" />
        <meta name="twitter:description" content="Zajęcia gimnastyczne dla dzieci 4-13 lat w trzech lokalizacjach." />
      </Helmet>
      <div className="min-h-screen landing-page bg-gradient-to-tl from-yellow-400 via-orange-500 to-yellow-600"
           style={{ color: '#1E1B18' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-yellow-500/30" style={{ backgroundColor: 'rgba(217, 119, 6, 0.95)', color: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-4 w-4 flex-shrink-0" />
              <img 
                src={logoStrefa} 
                alt="Strefa Gimnastyki" 
                width={200} 
                height={80}
                className="h-12 w-auto object-contain flex-shrink-0" 
                loading="eager"
              />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('zajecia')}
                className={`hover:text-gym-orange transition-colors ${activeSection === 'zajecia' ? 'text-gym-orange' : ''}`}
              >
                Zajęcia
              </button>
              <button 
                onClick={() => scrollToSection('lokalizacje')}
                className={`hover:text-gym-orange transition-colors ${activeSection === 'lokalizacje' ? 'text-gym-orange' : ''}`}
              >
                Lokalizacje
              </button>
              <button 
                onClick={() => scrollToSection('kadra')}
                className={`hover:text-gym-orange transition-colors ${activeSection === 'kadra' ? 'text-gym-orange' : ''}`}
              >
                Kadra
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className={`hover:text-gym-orange transition-colors ${activeSection === 'galeria' ? 'text-gym-orange' : ''}`}
              >
                Galeria
              </button>
              <Link href="/strefagimnastyki/aktualnosci" className="hover:text-gym-orange transition-colors">
                Aktualności
              </Link>
              <button 
                onClick={() => scrollToSection('zapisy')}
                className={`hover:text-gym-orange transition-colors ${activeSection === 'zapisy' ? 'text-gym-orange' : ''}`}
              >
                Zapisy
              </button>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gym-orange/30">
                <a 
                  href="https://www.facebook.com/profile.php?id=100063143113987" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gym-orange transition-colors p-1"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/maszynownia_strefa_gimnastyki" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gym-orange transition-colors p-1"
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
                  href="https://www.facebook.com/profile.php?id=100063143113987" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gym-orange transition-colors p-1"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/maszynownia_strefa_gimnastyki" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gym-orange transition-colors p-1"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <MobileNav 
                sections={navSections}
                onSectionClick={scrollToSection}
                activeSection={activeSection}
                accentColor="orange"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 px-6 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight pb-2 transition-all duration-500 hover:scale-105 hover:drop-shadow-lg cursor-default" style={{ color: '#1E1B18' }}>
            Gimnastyka dla dzieci w każdym wieku
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium text-white/90">
            Profesjonalne zajęcia gimnastyczne prowadzone przez doświadczonych trenerów w trzech lokalizacjach na Mazowszu.
          </p>
          <button
            
            
            
            className="bg-zinc-900 hover:bg-zinc-800 text-white px-12 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() => scrollToSection('zapisy')}
          >
            Zapisz dziecko
          </button>
        </div>
      </section>

      {/* Grupy wiekowe */}
      <section id="zajecia" className="py-20 px-6 bg-yellow-100/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 transition-all duration-300 hover:scale-105 cursor-default" style={{ color: '#1E1B18' }}>Grupy wiekowe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-orange-200/50 hover:border-orange-300/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
              <Users className="h-12 w-12 text-gym-orange mb-6 transition-all duration-300 hover:scale-110 hover:rotate-3" />
              <h3 className="text-xl font-bold mb-4 text-zinc-700">4-6 lat</h3>
              <p className="text-zinc-700">
                Podstawy gimnastyki, rozwój koordynacji i równowagi. 
                Zajęcia w formie zabawy z elementami akrobatyki.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-orange-200/50 hover:border-orange-300/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
              <Heart className="h-12 w-12 text-gym-orange mb-6 transition-all duration-300 hover:scale-110 hover:rotate-3" />
              <h3 className="text-xl font-bold mb-4 text-zinc-700">7-9 lat</h3>
              <p className="text-zinc-700">
                Rozwijanie siły i gibkości. Nauka podstawowych elementów 
                gimnastycznych i akrobatycznych.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-orange-200/50 hover:border-orange-300/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
              <Star className="h-12 w-12 text-gym-orange mb-6 transition-all duration-300 hover:scale-110 hover:rotate-3" />
              <h3 className="text-xl font-bold mb-4 text-zinc-700">10-13 lat</h3>
              <p className="text-zinc-700">
                Zaawansowane elementy gimnastyczne, przygotowanie do startów 
                sportowych, doskonalenie techniki.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lokalizacje i harmonogram */}
      <section id="lokalizacje" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 transition-all duration-300 hover:scale-105 cursor-default" style={{ color: '#1E1B18' }}>Lokalizacje i harmonogram</h2>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-4 sticky top-24">
                {locations.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLocation(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeLocation === index
                        ? 'bg-zinc-900 text-white'
                        : 'bg-white/90 backdrop-blur-sm text-zinc-700 hover:bg-white/95'
                    }`}
                  >
                    <div className="font-semibold">{location.name}</div>
                    <div className="text-sm opacity-75">{location.address}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <div
                key={activeLocation}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-orange-200/50 shadow-lg"
                style={{ color: '#fefce8' }}
              >
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1E1B18' }}>
                  {locations[activeLocation].name}
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Informacje o zajęciach */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2 text-zinc-700">
                        <Calendar className="h-5 w-5" />
                        Harmonogram
                      </h4>
                      <ul className="space-y-2">
                        {locations[activeLocation].schedule.map((item, index) => (
                          <li key={index} className="text-zinc-700">{item}</li>
                        ))}
                      </ul>
                      <div className="mt-4 text-gym-orange font-semibold">
                        {locations[activeLocation].start}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2 text-zinc-700">
                        <Clock className="h-5 w-5" />
                        Cennik
                      </h4>
                      <ul className="space-y-2">
                        {locations[activeLocation].prices.map((price, index) => (
                          <li key={index} className="text-zinc-900 font-semibold">{price}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Mapa */}
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-zinc-900">
                      <MapPin className="h-5 w-5" />
                      Lokalizacja na mapie
                    </h4>
                    <div className="aspect-video rounded-lg overflow-hidden border border-gym-orange/20 mb-4">
                      <iframe
                        src={locations[activeLocation].embedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Lokalizacja ${locations[activeLocation].name}`}
                      ></iframe>
                    </div>
                    <a 
                      href={locations[activeLocation].mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-900 hover:text-zinc-700 transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      Otwórz w Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kadra */}
      <section id="kadra" className="py-20 px-6 bg-orange-100/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 transition-all duration-300 hover:scale-105 cursor-default" style={{ color: '#1E1B18' }}>Nasi trenerzy</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-orange-200/50 hover:border-orange-300/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-stone-700/50 border-2 border-gym-orange/30 flex items-center justify-center mb-4">
                  <div className="text-stone-400 text-center">
                    <div className="text-xs">Zdjęcie</div>
                    <div className="text-xs">wkrótce</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-black">Anna Błaszkiewicz</h3>
              </div>
              <p className="text-zinc-900 mb-4 font-medium">
                Kierownik i wychowawca wypoczynku, od 10 lat pracuje w szkole jako nauczyciel wychowania fizycznego. 
                Instruktor gimnastyki, pasjonatka siatkówki, piłki ręcznej i wszelkich gier zespołowych.
              </p>
              <p className="text-zinc-700">
                Jako kierownik wypoczynku oraz instruktor gimnastyki posiada bogate doświadczenie w organizacji 
                zajęć rekreacyjnych, programów sportowych i obozów. Potrafi zarażać entuzjazmem do ruchu 
                łącząc dyscyplinę z dobrą zabawą.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-orange-200/50 hover:border-orange-300/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-gym-orange/30 mb-4">
                  <LazyImage 
                    src={klaudiaPhoto} 
                    alt="Klaudia Kołodziejska"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-black">Klaudia Kołodziejska</h3>
              </div>
              <p className="text-zinc-900 mb-4 font-medium">
                Posiada uprawnienia instruktora sportu w gimnastyce sportowej zdobyte na AWF Gdańsk. 
                Jest również sędziną Polskiego Związku Gimnastycznego w gimnastyce sportowej kobiet i trenerką personalną.
              </p>
              <p className="text-zinc-700">
                Rozpoczęcie swojej przygody z gimnastyką sportową zaczęła już jako sześciolatka. 
                Swoją wiedzę i umiejętności zarówno w prowadzeniu treningów grupowych jak i personalnych 
                zdobywa już od 8 lat. Jako trenerka chce pokazać, że ruchem można się bawić i że trenować 
                bezpiecznie można w każdym wieku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dodatkowe usługi */}
      <section id="uslugi" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-16" style={{ color: '#1E1B18' }}>Dodatkowe usługi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200/50 hover:border-orange-300/60 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
            >
              <h3 className="font-bold mb-2 text-zinc-900">Warsztaty gimnastyczne</h3>
              <p className="text-sm text-zinc-700">Intensywne szkolenia weekendowe</p>
            </div>
            <div
              
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200/50 hover:border-orange-300/60 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
            >
              <h3 className="font-bold mb-2 text-zinc-900">Urodziny dla dzieci</h3>
              <p className="text-sm text-zinc-700">Aktywne święta z gimnastyką</p>
            </div>
            <div
              
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200/50 hover:border-orange-300/60 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
            >
              <h3 className="font-bold mb-2 text-zinc-900">Pikniki sportowe</h3>
              <p className="text-sm text-zinc-700">Rodzinne wydarzenia na świeżym powietrzu</p>
            </div>
            <div
              
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200/50 hover:border-orange-300/60 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
            >
              <h3 className="font-bold mb-2 text-zinc-900">Zajęcia w placówkach</h3>
              <p className="text-sm text-zinc-700">Z dojazdem i własnym sprzętem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20 px-6 bg-yellow-100/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-16" style={{ color: '#1E1B18' }}>Galeria</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div
              
              className="aspect-square rounded-xl overflow-hidden border border-gym-orange/20 hover:border-gym-orange/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg group cursor-pointer"
            >
              <LazyImage 
                src={gallery1} 
                alt="Zajęcia gimnastyczne - dzieci"
                width={300}
                height={300}
                sizes="(max-width: 768px) 150px, 300px" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div
              
              className="aspect-square rounded-xl overflow-hidden border border-gym-orange/20 hover:border-gym-orange/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg group cursor-pointer"
            >
              <LazyImage 
                src={gallery2} 
                alt="Akrobatyka dla dzieci"
                width={300}
                height={300}
                sizes="(max-width: 768px) 150px, 300px" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div
              
              className="aspect-square rounded-xl overflow-hidden border border-gym-orange/20 hover:border-gym-orange/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg group cursor-pointer"
            >
              <LazyImage 
                src={gallery3} 
                alt="Gimnastyka artystyczna"
                width={300}
                height={300}
                sizes="(max-width: 768px) 150px, 300px" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <Link 
            href="/strefagimnastyki/galeria"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Camera className="h-5 w-5" />
            Przejdź do galerii
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Aktualności */}
      <div className="bg-orange-100/30">
        <BlogSection category="strefa" accentColor="orange" maxPosts={3} />
      </div>

      {/* Zapisy */}
      <section id="zapisy" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-16" style={{ color: '#1E1B18' }}>Zapisy na zajęcia</h2>
          <div className="bg-gradient-to-br from-stone-50/90 to-zinc-100/80 backdrop-blur-sm p-8 rounded-xl border border-stone-200/50 max-w-2xl mx-auto shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <Phone className="h-16 w-16 text-gym-orange mx-auto mb-8 transition-all duration-300 hover:scale-110 hover:rotate-6" />
            <h3 className="text-2xl font-bold mb-6 text-zinc-700">Wyślij SMS na numer</h3>
            <div className="text-4xl font-bold text-gym-orange mb-8">696 376 377</div>
            <div className="text-left space-y-4 mb-8">
              <p className="font-semibold text-zinc-700">W wiadomości podaj:</p>
              <ul className="space-y-2 text-zinc-700">
                <li>• Imię i nazwisko dziecka</li>
                <li>• Wiek dziecka</li>
                <li>• Lokalizację zajęć</li>
                <li>• Preferowaną godzinę</li>
              </ul>
            </div>
            <div className="bg-gym-orange/20 border border-gym-orange/50 p-4 rounded-lg">
              <p className="text-gym-orange font-semibold">
                ⚠️ Liczy się kolejność zgłoszeń - liczba miejsc ograniczona!
              </p>
            </div>
            <div className={`mt-8 grid gap-4 ${isMobile ? 'grid-cols-3' : 'grid-cols-2 max-w-md mx-auto'}`}>
              <SmartContactButton
                phoneNumber="+48696376377"
                variant="sms"
                smsMessage="Chciałbym zapisać dziecko na zajęcia gimnastyczne. Imię: [IMIĘ], Wiek: [WIEK], Lokalizacja: [JÓZEFÓW/MICHALIN/GÓRA KALWARIA], Godzina: [GODZINA]"
                className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Wyślij SMS
              </SmartContactButton>
              {isMobile && (
                <SmartContactButton
                  phoneNumber="+48696376377"
                  variant="call"
                  className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Zadzwoń
                </SmartContactButton>
              )}
              <SmartContactButton
                phoneNumber="maszynowniastrefagimnastyki@gmail.com"
                variant="email"
                className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-md transition-colors"
              >
                Email
              </SmartContactButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer variant="gym" />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Cookie Banner */}
      <CookieBanner variant="gym" />
    </div>
    </>
  );
}