import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { TooltipProvider } from '@/components/ui/tooltip';
import App from '../App';

// Mock all complex components to avoid issues in tests
vi.mock('@/components/ui/image-preloader', () => ({
  ImagePreloader: ({ children }: { children?: React.ReactNode }) => <>{children}</>
}));

vi.mock('@/components/ui/smart-contact-button', () => ({
  SmartContactButton: ({ children }: { children?: React.ReactNode }) => <button>{children}</button>
}));

vi.mock('@/components/ui/mobile-nav', () => ({
  MobileNav: () => <nav data-testid="mobile-nav">Mobile Navigation</nav>
}));

vi.mock('@/components/ui/scroll-to-top', () => ({
  ScrollToTop: () => <button data-testid="scroll-to-top">Scroll to top</button>
}));

vi.mock('@/components/ui/cookie-banner', () => ({
  CookieBanner: () => <div data-testid="cookie-banner">Cookie Banner</div>
}));

vi.mock('@/hooks/use-smooth-scroll', () => ({
  useSmoothScroll: () => ({
    scrollToSection: vi.fn(),
    activeSection: 'o-nas'
  })
}));

// Framer Motion mock removed - no longer used in the application

// Mock the LazyImage component
vi.mock('@/components/ui/lazy-image', () => ({
  LazyImage: ({ alt, ...props }: any) => <img alt={alt} {...props} />
}));

// Create a test wrapper component
function TestWrapper({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

describe('Integration Tests', () => {
  it('renders home page components correctly', async () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Wait for home page to load
    await waitFor(() => {
      expect(screen.getByTestId('ems-panel')).toBeInTheDocument();
    });

    // Verify key elements are present
    expect(screen.getByTestId('ems-panel')).toBeInTheDocument();
  });

  it('loads application with all required providers', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getByTestId('ems-panel')).toBeInTheDocument();
    });

    // Check that no console errors were logged during rendering
    expect(consoleSpy).not.toHaveBeenCalled();
    
    // Verify that providers are working
    const bodyElement = document.body;
    expect(bodyElement).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  it('renders router without errors', () => {
    const { container } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Check that the app container is rendered
    expect(container.firstChild).toBeInTheDocument();
  });

  it('handles lazy loading correctly', async () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Should show loading state initially, then render content
    await waitFor(() => {
      expect(screen.getByTestId('ems-panel')).toBeInTheDocument();
    });
  });
});