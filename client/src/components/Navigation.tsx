import { Link, useLocation } from 'wouter';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <span className="font-serif text-2xl text-foreground">
              Saniya's Wanderlust
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" data-testid="link-nav-home">
              <span className={`text-sm tracking-wide uppercase transition-colors ${
                isActive('/') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}>
                Home
              </span>
            </Link>
            <Link href="/destinations" data-testid="link-nav-destinations">
              <span className={`text-sm tracking-wide uppercase transition-colors ${
                isActive('/destinations') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}>
                Destinations
              </span>
            </Link>
            <Link href="/coffee-culture" data-testid="link-nav-coffee">
              <span className={`text-sm tracking-wide uppercase transition-colors ${
                isActive('/coffee-culture') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}>
                Coffee Culture
              </span>
            </Link>
            <Link href="/about" data-testid="link-nav-about">
              <span className={`text-sm tracking-wide uppercase transition-colors ${
                isActive('/about') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}>
                About
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-home">
              <span className={`block text-sm tracking-wide uppercase ${
                isActive('/') ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                Home
              </span>
            </Link>
            <Link href="/destinations" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-destinations">
              <span className={`block text-sm tracking-wide uppercase ${
                isActive('/destinations') ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                Destinations
              </span>
            </Link>
            <Link href="/coffee-culture" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-coffee">
              <span className={`block text-sm tracking-wide uppercase ${
                isActive('/coffee-culture') ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                Coffee Culture
              </span>
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-about">
              <span className={`block text-sm tracking-wide uppercase ${
                isActive('/about') ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                About
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
