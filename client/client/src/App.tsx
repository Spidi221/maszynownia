import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { ImagePreloader } from '@/components/ui/image-preloader';

// Lazy load all page components
const Home = lazy(() => import("@/pages/home"));
const EMS = lazy(() => import("@/pages/ems"));
const StrefaGimnastyki = lazy(() => import("@/pages/strefa-gimnastyki"));
const StrefaGaleria = lazy(() => import("@/pages/strefa-galeria"));
const StrefaAktualnosci = lazy(() => import("@/pages/strefa-aktualnosci"));
const Admin = lazy(() => import("@/pages/admin"));
const PolitykaPrywatnosci = lazy(() => import("@/pages/polityka-prywatnosci"));
const Regulamin = lazy(() => import("@/pages/regulamin"));
const RODO = lazy(() => import("@/pages/rodo"));
const NotFound = lazy(() => import("@/pages/not-found"));

// A simple fallback component for suspense
function PageLoader() {
  return (
    <div className="w-full min-h-screen bg-[#0c0a09] flex items-center justify-center">
      <div className="text-white text-xl">Ładowanie...</div>
    </div>
  );
}

function Router() {
  return (
    <div className="transition-opacity duration-300 ease-out">
      {/* Wrap the Switch in Suspense */}
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/ems" component={EMS} />
          <Route path="/strefagimnastyki" component={StrefaGimnastyki} />
          <Route path="/strefagimnastyki/galeria" component={StrefaGaleria} />
          <Route path="/strefagimnastyki/aktualnosci" component={StrefaAktualnosci} />
          <Route path="/admin" component={Admin} />
          <Route path="/polityka-prywatnosci" component={PolitykaPrywatnosci} />
          <Route path="/regulamin" component={Regulamin} />
          <Route path="/rodo" component={RODO} />
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ImagePreloader 
            images={[
              '/src/assets/logo-ems-new.webp',
              '/src/assets/logo-strefa-new.webp'
            ]}
            priority="high" 
          />
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
