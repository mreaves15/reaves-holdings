'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Sell Your Land', href: '/sell' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-warm-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif text-xl lg:text-2xl font-bold tracking-wide transition-colors ${
              solid ? 'text-forest' : 'text-white'
            }`}
          >
            REAVES HOLDINGS
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  solid ? 'text-charcoal' : 'text-white/90'
                } ${pathname === link.href ? 'text-gold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+13525550100"
              className={`text-sm font-medium transition-colors ${
                solid ? 'text-charcoal' : 'text-white/90'
              }`}
            >
              (352) 555-0100
            </a>
            <Link
              href="/sell"
              className="bg-gold hover:bg-gold-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              Get an Offer
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              solid ? 'text-charcoal hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  solid ? 'bg-charcoal' : 'bg-white'
                } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  solid ? 'bg-charcoal' : 'bg-white'
                } ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  solid ? 'bg-charcoal' : 'bg-white'
                } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-warm-white ${
          menuOpen ? 'max-h-96 border-t border-black/10' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium py-1 transition-colors hover:text-gold ${
                pathname === link.href ? 'text-gold' : 'text-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-black/10 flex flex-col gap-3">
            <a href="tel:+13525550100" className="text-charcoal font-medium">
              (352) 555-0100
            </a>
            <Link
              href="/sell"
              className="bg-gold hover:bg-gold-dark text-white text-center px-5 py-3 rounded-lg font-semibold transition-colors"
            >
              Get an Offer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
