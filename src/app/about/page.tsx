import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Reaves Holdings — Florida Land Buyers',
  description:
    'Reaves Holdings is run by Matt Reaves — a Florida-based land buyer helping landowners sell vacant property for cash with zero fees and fast closings.',
};

const values = [
  {
    icon: '🤝',
    title: 'Fair, Transparent Offers',
    body: 'We show you the comparable sales we used and explain exactly how we arrived at our number. No games, no lowballing — just real data.',
  },
  {
    icon: '⚡',
    title: 'Close in 14 Days, Not 14 Months',
    body: 'We close with cash. No financing contingencies, no bank delays. Pick your closing date and we make it happen.',
  },
  {
    icon: '💬',
    title: 'Straight Talk, Every Time',
    body: 'No confusing jargon, no pressure tactics, no "limited-time" nonsense. We give you a fair offer and let you decide on your own time.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Meet the Person Behind the Offer
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
            About Reaves Holdings
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-10 pb-20 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Main story */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-black/5">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-5">
                  Hi, I&apos;m Matt Reaves.
                </h2>
                <div className="flex flex-col gap-4 text-charcoal/70 leading-relaxed">
                  <p>
                    I started Reaves Holdings because I saw how hard it is to sell vacant land through traditional channels. Realtors don&apos;t want to list it. Buyers are hard to find. And the whole time, you&apos;re still getting tax bills.
                  </p>
                  <p>
                    I&apos;m based right here in Florida and work directly with every seller. When you call Reaves Holdings, you get me — not a call center, not an assistant, not a recorded message. I answer the phone, I make the offer, and I see the deal through to closing.
                  </p>
                  <p>
                    We specialize in the situations that are hardest to solve on your own: inherited land you didn&apos;t ask for, lots with back taxes piling up, landlocked parcels nobody seems to want, properties stuck in probate. These are the exact situations where we can help the most.
                  </p>
                  <p>
                    My goal is simple — give you a fair cash offer, handle all the work, and make it easy for you to move on. If the offer works for you, great. If not, no hard feelings. I&apos;d rather lose a deal than lose someone&apos;s trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Side callout */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="bg-forest rounded-2xl p-7 text-white">
                <div className="font-serif text-4xl font-bold text-gold mb-1">Florida</div>
                <div className="text-white/70 text-sm mb-4">Based &amp; Operated</div>
                <p className="text-white/80 text-sm leading-relaxed">
                  We know the counties, the markets, and the challenges Florida landowners face — because we live here too.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-black/5 shadow-sm">
                <h4 className="font-semibold text-charcoal mb-3 text-sm">Why Vacant Land?</h4>
                <p className="text-charcoal/65 text-sm leading-relaxed">
                  Most land buyers focus on houses. We don&apos;t. Vacant land is all we do — which means we understand the unique challenges sellers face and how to solve them quickly.
                </p>
              </div>

              <div className="bg-gold/10 rounded-2xl p-7 border border-gold/20">
                <h4 className="font-semibold text-charcoal mb-3 text-sm uppercase tracking-wider">
                  Where We Buy
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Putnam', 'Marion', 'Highlands', 'Lee', 'Alachua', 'Columbia', 'and more...'].map((c) => (
                    <span
                      key={c}
                      className="bg-white text-charcoal/70 text-xs px-3 py-1 rounded-full border border-black/10"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-forest/5 rounded-2xl p-7 border border-forest/10 text-center">
                <p className="text-charcoal/60 text-sm mb-2">Talk to Matt directly</p>
                <a
                  href="tel:+13525550100"
                  className="text-xl font-bold text-forest hover:text-gold transition-colors"
                >
                  📞 (352) 555-0100
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              How We Do Business
            </p>
            <h2 className="font-serif text-4xl font-bold text-charcoal">Our Commitments to You</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-warm-white border border-black/5"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">{value.title}</h3>
                <p className="text-charcoal/65 leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Is This You?
          </p>
          <h2 className="font-serif text-4xl font-bold text-charcoal mb-6">
            We Help Landowners Who Are Ready to Move On
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left mb-10">
            {[
              { icon: '🏡', label: 'You inherited land and don\'t know what to do with it' },
              { icon: '💸', label: 'You\'ve been paying taxes on land you never use or visit' },
              { icon: '📄', label: 'You\'re settling an estate and need to liquidate property' },
              { icon: '🗺️', label: 'Your land is landlocked or has access issues' },
              { icon: '📉', label: 'You tried listing with a realtor but got zero offers' },
              { icon: '✅', label: 'You just want cash in hand without the hassle' },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 items-start bg-white rounded-xl p-5 border border-black/5 shadow-sm">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="text-charcoal/70 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/sell"
            className="inline-block bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-md hover:shadow-lg"
          >
            Get My Free Cash Offer →
          </Link>
        </div>
      </section>
    </>
  );
}
