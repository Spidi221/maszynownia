import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileNavProps {
  sections: { id: string; label: string }[];
  onSectionClick: (sectionId: string) => void;
  activeSection: string;
  accentColor: 'gold' | 'orange';
}

export function MobileNav({ sections, onSectionClick, activeSection, accentColor }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const colorClass = accentColor === 'gold' ? 'text-ems-gold' : 'text-gym-orange';
  const bgColorClass = accentColor === 'gold' ? 'bg-ems-gold' : 'bg-gym-orange';

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 hover:opacity-80 transition-opacity"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 z-40 md:hidden transition-opacity duration-300 animate-in fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel */}
          <div
            className="fixed top-0 right-0 w-64 h-full bg-stone-950 border-l-2 border-stone-700 z-50 md:hidden transition-transform duration-300 animate-in slide-in-from-right"
            style={{
              backgroundColor: '#0c0a09', // force solid background
              boxShadow: '-4px 0 20px rgba(0,0,0,0.5)'
            }}
          >
              {/* Close button */}
              <div className="flex justify-end p-4" style={{ backgroundColor: '#0c0a09' }}>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:opacity-80 transition-opacity"
                  aria-label="Zamknij menu"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              
              <div className="p-6 pt-4" style={{ backgroundColor: '#0c0a09' }}>
                <nav className="space-y-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? `${bgColorClass} text-black`
                          : `text-white hover:${colorClass}`
                      }`}
                      style={{ backgroundColor: activeSection === section.id ? undefined : 'transparent' }}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
          </div>
        </>
      )}
    </>
  );
}