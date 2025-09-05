import { ArrowUp } from 'lucide-react';
import { useScrollVisibility } from '@/hooks/use-scroll-visibility';

export function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollVisibility({ threshold: 300 });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 bg-stone-800 hover:bg-stone-700 text-white p-3 rounded-full shadow-lg border border-stone-600 hover:border-stone-500 transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-90 ${
        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-60 translate-y-5 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}