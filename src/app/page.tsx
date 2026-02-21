import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sell Your Vacant Land in Florida for Cash | Reaves Holdings',
  description:
    'Own vacant land in Florida you don\'t need? We buy land for cash. Close in as little as 14 days with zero fees. Get your free cash offer today.',
};

const painPoints = [
  {
    icon: '💸',
    title: 'Stop Paying Taxes on Land You Don\'t Use',
    body: 'Every year, another tax bill for a property that just sits there. We\'ll buy it from you so you can stop the bleeding and walk away with cash.',
  },
  {
    icon: '📦',
    title: 'Inherited Land You Don\'t Want? We\'ll Take It.',
    body: 'Dealing with inherited property is stressful enough. We handle the paperwork, cover all costs, and put cash in your hands — even if there\'s probate involved.',
  },
  {
    icon: '🚫',
    title: 'Can\'t Sell Through a Realtor? We Get It.',
    body: 'Vacant land sits on the MLS for months (or years). No showings, no offers. We buy directly from you — no listing, no commissions, no waiting.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Tell Us About Your Land',
    body: 'Fill out our short form or call us. We just need a few details — takes about 60 seconds.',
  },
  {
    num: '02',
    title: 'Get a Cash Offer Within 24 Hours',
    body: 'We research your property, pull comps, and send you a fair, no-obligation cash offer in writing.',
  },
  {
    num: '03',
    title: 'Close in as Little as 14 Days',
    body: 'Accept the offer, pick your closing date, and get paid. We cover all closing costs. Nothing comes out of your pocket.',
  },
];

// Testimonials removed — will be replaced with real seller stories after first deals close

const faqs = [
  {
    q: 'Is this a scam? How do I know you\'re legitimate?',
    a: 'We completely understand the concern. Reaves Holdings is a registered Florida LLC operated by Matt Reaves right here in the state. Every transaction goes through a licensed title company, and you\'ll have all documents reviewed before signing anything. We\'re happy to provide references and answer any questions before you commit.',
  },
  {
    q: 'How do you determine the price you offer?',
    a: 'We research recent comparable sales in your county, review property records, assess market conditions, and factor in the land\'s characteristics (access, zoning, location). We\'re transparent about our process and happy to walk you through the comps we used to arrive at our number.',
  },
  {
    q: 'What if I owe back taxes on the property?',
    a: 'We still buy it. Outstanding taxes are factored into the offer, and we handle them at closing. You don\'t need to pay anything upfront or get current on taxes before selling to us.',
  },
  {
    q: 'Do I need a lawyer?',
    a: 'You\'re welcome to have an attorney review everything — we encourage it if it gives you peace of mind. That said, most sellers don\'t find it necessary since we use a licensed title company that handles all the legal paperwork and ensures everything is done properly.',
  },
  {
    q: 'How fast can you actually close?',
    a: 'As fast as 14 days from acceptance. Because we pay cash, there are no bank approvals or financing delays. If you need more time, that\'s fine too — we close on your schedule.',
  },
  {
    q: 'Are there really no fees?',
    a: 'Zero. We pay all closing costs, title fees, and recording fees. The offer amount is what you receive at closing — no deductions, no hidden charges, no surprises.',
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="hidden sm:block text-gold font-semibold tracking-[0.25em] uppercase text-sm mb-4 animate-fade-in-up-delay-1">
              Florida Land Buyers · Cash · No Fees
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide leading-tight mb-4 animate-fade-in-up-delay-1">
              Tired of Paying Taxes on Land You Don&apos;t Use?
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-white/95 mb-3 animate-fade-in-up-delay-2">
              We&apos;ll buy your vacant Florida land for cash — close in as little as 14 days, with zero fees.
            </p>
            <p className="text-lg text-white/70 mb-8 animate-fade-in-up-delay-2">
              No realtors. No commissions. No waiting. Just a fair offer from a real Florida family business.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up-delay-3">
              <Link
                href="/sell"
                className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get My Cash Offer →
              </Link>
              <a
                href="tel:+13525550100"
                className="text-white/90 hover:text-gold transition-colors font-medium text-lg"
              >
                📞 (352) 555-0100
              </a>
            </div>
            <p className="text-white/50 text-sm mt-4 animate-fade-in-up-delay-3">
              ✓ No obligation &nbsp; ✓ 100% free &nbsp; ✓ Response within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / WHY SELL TO US ─── */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              Sound Familiar?
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal">
              Your Land Shouldn&apos;t Be a Burden
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-black/5"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">
                  {card.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/sell"
              className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-md hover:shadow-lg"
            >
              Get My Cash Offer — It&apos;s Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              Simple 3-Step Process
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal">
              Sell Your Land in 3 Easy Steps
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
              Start With Step 1 — It Takes 60 Seconds →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Our Track Record
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            We&apos;re Just Getting Started
          </h2>
          <p className="text-charcoal/65 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Reaves Holdings is a new company built on one promise: treat every seller with honesty and respect.
            We don&apos;t have a wall of reviews yet — but we&apos;d love for your deal to be our first story.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { value: '100%', label: 'Cash purchases — no financing delays' },
              { value: '$0', label: 'Fees or commissions to you — ever' },
              { value: '24 hrs', label: 'Written offer turnaround time' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
                <div className="font-serif text-3xl font-bold text-forest mb-1">{s.value}</div>
                <div className="text-charcoal/60 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
          <Link
            href="/sell"
            className="inline-block bg-forest hover:bg-forest-dark text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-md hover:shadow-lg"
          >
            Get the First Offer →
          </Link>
        </div>
      </section>

      {/* ─── TRUST / ABOUT SNIPPET ─── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                Who You&apos;re Working With
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                A Real Person. <br />Not a Faceless Corporation.
              </h2>
              <p className="text-charcoal/70 leading-relaxed text-lg mb-6">
                Reaves Holdings is run by Matt Reaves — a Florida-based land buyer who works directly with every seller. No call centers, no middlemen, no corporate runaround.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                We specialize in buying vacant land throughout Central and North Florida. Whether you inherited a property, have been paying taxes on an empty lot, or just want it off your plate — Matt will give you a straight answer and a fair offer.
              </p>
              <Link
                href="/about"
                className="inline-block border-2 border-forest text-forest hover:bg-forest hover:text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Learn More About Us →
              </Link>
            </div>

            {/* Stats / Trust signals */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '14 Days', label: 'Average Time to Close' },
                { num: '$0', label: 'Fees to You — Ever' },
                { num: '100%', label: 'Cash Purchases' },
                { num: '24 hrs', label: 'Offer Turnaround' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-warm-white rounded-2xl p-7 text-center shadow-sm border border-black/5"
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

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              Common Questions
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal">
              You&apos;re Probably Wondering...
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-black/5"
              >
                <h3 className="font-serif text-lg font-bold text-forest mb-2">
                  {faq.q}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA BANNER ─── */}
      <section className="py-16 bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Your Land Could Be Sold in 14 Days
          </h2>
          <p className="text-white/75 text-lg mb-3">
            No fees. No commissions. No obligation. Just a fair cash offer from a Florida family business.
          </p>
          <p className="text-white/60 text-sm mb-8">
            Over 90% of sellers who request an offer say the process was easier than they expected.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sell"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg"
            >
              Get My Cash Offer Now →
            </Link>
            <a
              href="tel:+13525550100"
              className="text-white/80 hover:text-gold transition-colors font-medium text-lg"
            >
              Or call (352) 555-0100
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
