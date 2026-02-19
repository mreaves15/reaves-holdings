import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reaves Holdings | We Buy Vacant Land in Florida',
  description:
    'We buy vacant land throughout Florida for cash. Fast closings, no fees, no commissions. Get your fair cash offer today.',
};

const whyCards = [
  {
    icon: '💵',
    title: 'Cash Offers',
    body: 'No financing contingencies or bank delays. We close with cash — as fast as 2 weeks.',
  },
  {
    icon: '🚫',
    title: 'No Fees or Commissions',
    body: "You keep more money. We cover all closing costs — there's nothing out of pocket for you.",
  },
  {
    icon: '🌿',
    title: 'Any Condition',
    body: 'Vacant lots, inherited property, back taxes, landlocked parcels — we buy it all.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Tell Us About Your Property',
    body: 'Fill out our quick form or give us a call. Just a few details about your land is all we need.',
  },
  {
    num: '02',
    title: 'Receive a Fair Cash Offer',
    body: 'We research your property and present a no-obligation cash offer — typically within 24 hours.',
  },
  {
    num: '03',
    title: 'Close on Your Timeline',
    body: "Accept the offer and pick a closing date that works for you. We handle all the paperwork.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-end"
        style={{
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="text-gold font-semibold tracking-[0.25em] uppercase text-sm mb-4 animate-fade-in-up-delay-1">
              Florida Land Buyers
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide leading-tight mb-4 animate-fade-in-up-delay-1">
              REAVES HOLDINGS
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-white/95 mb-3 animate-fade-in-up-delay-2">
              We Buy Vacant Land in Florida
            </p>
            <p className="text-lg text-white/80 mb-8 animate-fade-in-up-delay-2">
              Cash offers. Fast closings. No fees.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up-delay-3">
              <Link
                href="/sell"
                className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Your Cash Offer →
              </Link>
              <a
                href="tel:+1XXXXXXXXXX"
                className="text-white/90 hover:text-gold transition-colors font-medium text-lg"
              >
                📞 (XXX) XXX-XXXX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY SELL TO US ─── */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              The Smart Way to Sell
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal">
              Why Sell to Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-black/5"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-forest mb-3">
                  {card.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              Simple &amp; Straightforward
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex flex-col items-center text-center relative">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[55%] w-full h-px bg-gold/30" />
                )}
                <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center text-white font-serif text-2xl font-bold mb-5 relative z-10 shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal/65 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/sell"
              className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-md hover:shadow-lg"
            >
              Start the Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                Who We Are
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                Florida-Based. <br />Family-Operated.
              </h2>
              <p className="text-charcoal/70 leading-relaxed text-lg mb-6">
                Reaves Holdings is a Florida-based land investment company. We specialize in
                purchasing vacant land throughout Central and North Florida, providing fair cash
                offers and hassle-free closings.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Whether you&apos;ve inherited land you don&apos;t need, have been paying taxes on an empty
                lot for years, or simply want to convert your property to cash — we make the
                process fast, simple, and stress-free.
              </p>
              <Link
                href="/about"
                className="inline-block border-2 border-forest text-forest hover:bg-forest hover:text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Learn About Us →
              </Link>
            </div>

            {/* Stats / Trust signals */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '2 Weeks', label: 'Average Closing Time' },
                { num: '$0', label: 'Fees or Commissions' },
                { num: '100%', label: 'Cash Purchases' },
                { num: '24 hrs', label: 'Offer Response Time' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-7 text-center shadow-sm border border-black/5"
                >
                  <div className="font-serif text-3xl font-bold text-forest mb-2">
                    {stat.num}
                  </div>
                  <div className="text-charcoal/60 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Ready to Sell Your Land?
          </h2>
          <p className="text-white/75 text-lg mb-8">
            Get a no-obligation cash offer in 24 hours. It costs you nothing to find out what your land is worth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sell"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg"
            >
              Get Your Cash Offer →
            </Link>
            <a
              href="tel:+1XXXXXXXXXX"
              className="text-white/80 hover:text-gold transition-colors font-medium text-lg"
            >
              Or call (XXX) XXX-XXXX
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
