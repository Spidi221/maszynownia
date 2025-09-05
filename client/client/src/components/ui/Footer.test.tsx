import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component', () => {
  describe('EMS variant', () => {
    it('renders correctly with EMS variant', () => {
      render(<Footer variant="ems" />);
      
      // Check if company name is rendered
      expect(screen.getByText('Maszynownia')).toBeInTheDocument();
      
      // Check if EMS-specific email is rendered
      expect(screen.getByText('maszynowniaems@gmail.com')).toBeInTheDocument();
      
      // Check if EMS-specific location is rendered
      expect(screen.getByText('Józefów - ul. Generała Sikorskiego 113')).toBeInTheDocument();
      
      // Check if EMS-specific passion text is rendered
      expect(screen.getByText(/skutecznego treningu/)).toBeInTheDocument();
      
      // Check if copyright is present
      expect(screen.getByText(/© 2025 Maszynownia/)).toBeInTheDocument();
    });

    it('renders legal links for EMS variant', () => {
      render(<Footer variant="ems" />);
      
      expect(screen.getByRole('link', { name: 'Polityka prywatności' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Regulamin' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'RODO' })).toBeInTheDocument();
    });
  });

  describe('Gym variant', () => {
    it('renders correctly with gym variant', () => {
      render(<Footer variant="gym" />);
      
      // Check if company name is rendered
      expect(screen.getByText('Maszynownia')).toBeInTheDocument();
      
      // Check if gym-specific email is rendered
      expect(screen.getByText('maszynowniastrefagimnastyki@gmail.com')).toBeInTheDocument();
      
      // Check if gym-specific locations are rendered
      expect(screen.getByText('Józefów - ul. Dolna 19')).toBeInTheDocument();
      expect(screen.getByText('Michalin - ul. Sienkiewicza 2')).toBeInTheDocument();
      expect(screen.getByText('Góra Kalwaria - ul. Ojca Papczyńskiego 1a')).toBeInTheDocument();
      
      // Check if gym-specific passion text is rendered
      expect(screen.getByText(/szczęśliwego dzieciństwa/)).toBeInTheDocument();
    });

    it('renders "Lokalizacje" plural for gym variant', () => {
      render(<Footer variant="gym" />);
      expect(screen.getByText('Lokalizacje')).toBeInTheDocument();
    });
  });

  describe('Common elements', () => {
    it('renders contact information', () => {
      render(<Footer variant="ems" />);
      
      expect(screen.getByText('Tel: 696 376 377')).toBeInTheDocument();
      expect(screen.getByText('Klaudia Nowicka')).toBeInTheDocument();
      expect(screen.getByText('NIP: 7311991516')).toBeInTheDocument();
      expect(screen.getByText('REGON: 368484010')).toBeInTheDocument();
    });

    it('has proper footer tag', () => {
      const { container } = render(<Footer variant="ems" />);
      const footer = container.querySelector('footer');
      
      expect(footer).toBeInTheDocument();
      expect(footer).toHaveClass('py-12', 'px-6', 'border-t');
    });
  });
});