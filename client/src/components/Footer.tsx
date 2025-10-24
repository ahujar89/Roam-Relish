import { Instagram, Facebook, Mail } from 'lucide-react';
import { SiPinterest } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Roam & Relish</h3>
            <p className="text-muted-foreground leading-relaxed">
              Exploring the world's cultures, one destination at a time. Join me on a journey through coffee shops, ancient streets, and hidden gems across the globe.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                  Home
                </a>
              </li>
              <li>
                <a href="/destinations" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-destinations">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/coffee-culture" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-coffee">
                  Coffee Culture
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wide text-sm">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ahuja.saniya/"
                className="hover-elevate active-elevate-2 p-2 rounded-md border border-border transition-all duration-300"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              </a>
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-md border border-border transition-all duration-300"
                aria-label="Pinterest"
                data-testid="link-pinterest"
              >
                <SiPinterest className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              </a>
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-md border border-border transition-all duration-300"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              </a>
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-md border border-border transition-all duration-300"
                aria-label="Email"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Roam & Relish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
