import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works | Reaves Holdings',
  description:
    'Selling your Florida land to Reaves Holdings is simple — 3 easy steps to a cash offer and a fast closing with zero fees.',
};

const steps = [
  {
    num: '01',
    title: 'Contact Us',
    description:
      'Fill out our short online form or give us a call. Just tell us a little about your property — location, county, and rough acreage is all we need to get started. There\'s no obligation and no pressure.',
    detail:
      'We work with landowners throughout Central and North Florida. Whether your land is landlocked, has access issues, or has been sitting idle for years — we want to hear from you.',
    icon: '📋',
  },
  {
    num: '02',
    title: 'We Research & Make an Offer',
    description:
      'After you reach out, we do our homework. We pull county records, research comparable sales, review the parcel details, and assess the land\'s value — all on our time, not yours.',
    detail:
      'Within 24 hours, we present you with a fair, no-obligation cash offer in writing. You\'re free to accept, decline, or ask questions. We\'re transparent about how we arrived at our number.',
    icon: '🔍',
  },
  {
    num: '03',
    title: 'Close & Get Paid',
    description:
      'Accept the offer and we\'ll schedule closing at a time that works for you — as fast as 2 weeks, or longer if you need it. We handle all the paperwork through a licensed title company.',
    detail:
      'At closing, you receive your funds. We cover all closing costs, title fees, and recording fees. You walk away with cash in hand and nothing comes out of your pocket.',
    icon: '💰',
  },
];

const faqs = [
  {
    q: 'How fast can you close?',
    a: 'As fast as 2 weeks from the time you accept the offer. We use cash, so there\'s no waiting on banks or financing. If you need more time, we\'re flexible — we close on your timeline.',
  },
  {
    q: 'Do I need a realtor?',
    a: 'No. We buy directly from you, which means no agent commissions (typically 6%) and no listing fees. You deal directly with us from start to finish.',
  },
  {
    q: 'Are there any fees?',
    a: 'None. We cover all closing costs, title insurance, and recording fees. The offer we make is what you receive at closing — no deductions, no surprises.',
  },
  {
    q: 'What kind of land do you buy?',
    a: 'Vacant land of all types — residential lots, rural acreage, timber land, inherited parcels, landlocked tracts, and more. If it\'s in Florida and it\'s land, we\'re interested.',
  },
  {
    q: 'What if the land has back taxes?',
    a: 'We still buy it. We\'ll factor outstanding taxes into our offer and handle them at closing. You don\'t need to pay off back taxes before selling to us.',
  },
  {
    q: 'Is there any obligation?',
    a: 'Absolutely none. Our offer is 100% free with no strings attached. You can take it, decline it, or sit on it as long as you need. We never pressure anyone.',
  },
  {
    q: 'What areas do you buy in?',
    a: 'We focus primarily on Central and North Florida — Putnam, Marion, Highlands, and Lee counties are our sweet spot, but we consider land throughout the state.',
  },
  {
    q: 'How do I know your offer is fair?',
    a: 'We base our offers on real comparable sales data, county records, and current market conditions. We\'re happy to walk you through our reasoning and show you the comps we used.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Clear &amp; Simple
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            How It Works
          </h1>
          <p className="text-charcoal/65 text-lg max-w-2xl mx-auto">
            Selling your land doesn&apos;t have to be complicated. Here&apos;s exactly what to expect when you work with Reaves Holdings.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 pb-24 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`flex flex-col lg:flex-row gap-8 items-start ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Icon + Number */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3 w-full lg:w-48">
                  <div className="w-20 h-20 rounded-full bg-forest flex items-center justify-center text-3xl shadow-lg">
                    {step.icon}
                  </div>
                  <span className="font-serif text-6xl font-bold text-forest/15 leading-none">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-black/5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                    {step.title}
                  </h2>
                  <p className="text-charcoal/75 leading-relaxed mb-4 text-lg">
                    {step.description}
                  </p>
                  <p className="text-charcoal/55 leading-relaxed text-sm border-t border-black/5 pt-4 mt-4">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/sell"
              className="inline-block bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-md hover:shadow-lg"
            >
              Get My Cash Offer →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              Got Questions?
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-warm-white rounded-2xl p-6 sm:p-7 border border-black/5"
              >
                <h3 className="font-serif text-lg font-bold text-forest mb-2">
                  {faq.q}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 bg-forest rounded-2xl text-white text-center">
            <h3 className="font-serif text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-white/75 mb-5">
              Call or text us directly — we&apos;re happy to chat about your property with no pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+1XXXXXXXXXX"
                className="bg-gold hover:bg-gold-dark text-white px-7 py-3 rounded-xl font-semibold transition-colors"
              >
                📞 Call (XXX) XXX-XXXX
              </a>
              <Link
                href="/sell"
                className="border-2 border-white/40 hover:border-white text-white px-7 py-3 rounded-xl font-semibold transition-colors"
              >
                Fill Out the Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
