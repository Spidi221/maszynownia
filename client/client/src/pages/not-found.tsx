import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import logoEms from '@/assets/logo-ems-new.webp';
import logoStrefa from '@/assets/logo-strefa-new.webp';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Strona nie znaleziona | Maszynownia</title>
        <meta name="description" content="Strona, której szukasz, nie istnieje. Wróć do strony głównej Maszynowni i znajdź to, czego potrzebujesz." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen w-full flex items-center justify-center bg-stone-950">
        <Card className="w-full max-w-lg mx-4 bg-stone-900/90 border-stone-800">
          <CardContent className="pt-8 pb-8">
            {/* Logo Section */}
            <div className="flex justify-center gap-6 mb-8">
              <img src={logoEms} alt="Maszynownia EMS" className="h-12 w-auto opacity-80 object-contain" />
              <img src={logoStrefa} alt="Strefa Gimnastyki" className="h-12 w-auto opacity-80 object-contain" />
            </div>
            
            {/* Error Message */}
            <div className="text-center mb-6">
              <AlertCircle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white mb-3">404</h1>
              <h2 className="text-xl text-gray-300 mb-4">Strona nie znaleziona</h2>
            </div>

            <p className="text-gray-400 text-center mb-8 leading-relaxed">
              Ups! Strona, której szukasz, nie istnieje lub została przeniesiona. 
              Sprawdź adres URL lub wróć do strony głównej.
            </p>
            
            {/* CTA Button */}
            <div className="text-center">
              <Link href="/">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Home className="h-5 w-5" />
                  Powrót do strony głównej
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
