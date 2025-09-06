import React from 'react';
import logoEms from '@/assets/logo-ems-new.webp';
import logoStrefa from '@/assets/logo-strefa-new.webp';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { LazyImage } from '@/components/ui/lazy-image';

export default function Home() {

  return (
    <>
      <Helmet>
        <title>Maszynownia - Trening EMS i Gimnastyka dla Dzieci | Józefów</title>
        <meta name="description" content="Odkryj trening EMS dla dorosłych i zajęcia gimnastyczne dla dzieci w Maszynowni. Dwie strefy, jeden cel: zdrowie i sprawność. Zapraszamy do Józefowa." />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Maszynownia - Trening EMS i Gimnastyka dla Dzieci | Józefów" />
        <meta property="og:description" content="Odkryj trening EMS dla dorosłych i zajęcia gimnastyczne dla dzieci w Maszynowni. Dwie strefy, jeden cel: zdrowie i sprawność." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maszynownia.org/" />
        <meta property="og:site_name" content="Maszynownia" />
        <meta property="og:locale" content="pl_PL" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maszynownia - Trening EMS i Gimnastyka dla Dzieci" />
        <meta name="twitter:description" content="Odkryj trening EMS dla dorosłych i zajęcia gimnastyczne dla dzieci w Maszynowni." />
      </Helmet>
    <main className="min-h-screen flex flex-col">
      <div className="split-screen flex-1 flex flex-col lg:flex-row transition-all duration-800 ease-out animate-in fade-in zoom-in-95">
        {/* Left Panel - MASZYNOWNIA EMS */}
        <div className="split-panel ems-panel flex-1" data-testid="ems-panel">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 gradient-overlay-ems pointer-events-none"></div>
          
          {/* Content Container */}
          <div className="relative z-10 text-center w-full mx-auto px-4 lg:px-6 flex flex-col h-full justify-center items-center gap-4 lg:gap-6 min-w-0">
            {/* Logo Section - Bigger on mobile */}
            <div className="flex-shrink-0 flex flex-col justify-center items-center w-full">
              <div className="w-full flex justify-center items-center min-w-0">
                <img 
                  src={logoEms} 
                  alt="Maszynownia EMS" 
                  width={560} 
                  height={224}
                  className="w-48 lg:h-32 lg:w-auto logo-hover max-w-full object-contain" 
                  loading="eager"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center items-center gap-4 lg:gap-4">
              <Link href="/ems" className="flex-shrink-0">
                <button className="btn-ems text-base lg:text-xl px-6 py-3 lg:px-8 lg:py-4" data-testid="button-ems-cta">
                  SPRAWDŹ EMS
                </button>
              </Link>
              <p className="ems-subtitle flex-shrink-0 text-sm lg:text-xl" data-testid="text-ems-subtitle">
                Skuteczny trening dla dorosłych w 30 minut
              </p>
              <div className="ems-location-border flex-shrink-0">
                <p className="ems-location text-sm lg:text-base" data-testid="text-ems-location">
                  📍 Józefów k. Warszawy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - STREFA GIMNASTYKI */}
        <div className="split-panel gym-panel flex-1" data-testid="gym-panel">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 gradient-overlay-gym pointer-events-none"></div>
          
          {/* Content Container */}
          <div className="relative z-10 text-center w-full mx-auto px-4 lg:px-6 flex flex-col h-full justify-center items-center gap-4 lg:gap-6 min-w-0">
            {/* Logo Section - Bigger on mobile */}
            <div className="flex-shrink-0 flex flex-col justify-center items-center w-full">
              <div className="w-full flex justify-center items-center min-w-0">
                <img 
                  src={logoStrefa} 
                  alt="Strefa Gimnastyki" 
                  width={240} 
                  height={96}
                  className="w-40 lg:h-24 lg:w-auto logo-hover max-w-full object-contain logo-strefa-fixed-20250104"
                  loading="eager"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center items-center gap-4 lg:gap-4">
              <Link href="/strefagimnastyki" className="flex-shrink-0">
                <button className="btn-gym text-base lg:text-xl px-6 py-3 lg:px-8 lg:py-4" data-testid="button-gym-cta">
                  SPRAWDŹ ZAJĘCIA
                </button>
              </Link>
              <p className="gym-subtitle flex-shrink-0 text-sm lg:text-xl" data-testid="text-gym-subtitle">
                Gimnastyka dla dzieci w każdym wieku
              </p>
              <div className="gym-locations-border flex-shrink-0">
                <p className="gym-location text-sm lg:text-base" data-testid="text-gym-location-1">
                  📍 Józefów k. Warszawy
                </p>
                <p className="gym-location text-sm lg:text-base" data-testid="text-gym-location-2">
                  📍 Michalin
                </p>
                <p className="gym-location text-sm lg:text-base" data-testid="text-gym-location-3">
                  📍 Góra Kalwaria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
