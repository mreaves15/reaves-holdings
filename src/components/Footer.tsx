import Link from 'next/link';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Sell Your Land', href: '/sell' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-wide mb-3">
              REAVES HOLDINGS
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Florida&apos;s trusted land buying company. We make selling easy — cash offers, fast closings, no fees.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 uppercase tracking-wider text-xs">
              Contact Us
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/70">
              <a href="tel:+1XXXXXXXXXX" className="hover:text-gold transition-colors">
                (XXX) XXX-XXXX
              </a>
              <a href="mailto:info@reavesholdings.com" className="hover:text-gold transition-colors">
                info@reavesholdings.com
              </a>
              <p className="text-white/50 text-xs mt-1">Florida, United States</p>
            </div>
            <div className="mt-5">
              <Link
                href="/sell"
                className="inline-block bg-gold hover:bg-gold-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Get Your Cash Offer
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <p>© 2026 Reaves Holdings LLC. All rights reserved.</p>
          <p>Florida Land Buyers · Fast &amp; Fair</p>
        </div>
      </div>
    </footer>
  );
}
