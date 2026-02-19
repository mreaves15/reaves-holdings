import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Reaves Holdings',
  description:
    'Reaves Holdings is a Florida-based, family-operated land investment company helping landowners convert unused property into cash quickly and hassle-free.',
};

const values = [
  {
    icon: '🤝',
    title: 'Fair Offers',
    body: 'We research every property thoroughly and make offers based on real market data. We want the deal to work for both sides.',
  },
  {
    icon: '⚡',
    title: 'Fast Closings',
    body: 'We close with cash, which means no financing delays. We can close in as little as 2 weeks — or on your timeline.',
  },
  {
    icon: '💬',
    title: 'Honest Communication',
    body: 'No runaround, no confusing jargon. We tell you exactly what we\'re offering and why. Straight talk, every time.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Our Story
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
                  Florida-Based. Family-Operated.
                </h2>
                <div className="flex flex-col gap-4 text-charcoal/70 leading-relaxed">
                  <p>
                    Reaves Holdings was founded with a simple mission: make it easy for Florida landowners to sell their vacant land without the hassle of the traditional real estate process.
                  </p>
                  <p>
                    We&apos;re a family-operated company based right here in Florida. We understand the land, the counties, and the people. We&apos;ve helped property owners in Putnam, Marion, Highlands, Lee, and other counties throughout the state turn unused parcels into cash — quickly and fairly.
                  </p>
                  <p>
                    Whether you&apos;ve inherited land you don&apos;t need, have a vacant lot you&apos;ve been paying taxes on for years, or simply want to sell — we&apos;re here to make the process easy.
                  </p>
                  <p>
                    We specialize in the types of land that are harder to sell through traditional channels: landlocked parcels, properties with back taxes, rural acreage, inherited land going through probate. These are the situations where we can help the most.
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
                  We know Florida land. We know the counties, the markets, and the challenges local landowners face.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-black/5 shadow-sm">
                <blockquote className="text-charcoal/75 italic leading-relaxed text-sm">
                  &ldquo;Whether you&apos;ve inherited land you don&apos;t need, have a vacant lot you&apos;ve been paying taxes on for years, or simply want to sell — we&apos;re here to make the process easy.&rdquo;
                </blockquote>
                <div className="mt-4 font-semibold text-forest text-sm">
                  — Reaves Holdings
                </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-4xl font-bold text-charcoal">Our Values</h2>
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
            Who We Serve
          </p>
          <h2 className="font-serif text-4xl font-bold text-charcoal mb-6">
            We Help Landowners Like You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left mb-10">
            {[
              { icon: '🏡', label: 'Inherited land from a family member and don\'t know what to do with it' },
              { icon: '💸', label: 'Paying property taxes on land you\'ve never used or visited' },
              { icon: '📄', label: 'Going through probate or estate settlement and need to liquidate assets' },
              { icon: '🗺️', label: 'Own a landlocked parcel or land with access challenges' },
              { icon: '📉', label: 'Tried listing with a realtor but couldn\'t find a buyer' },
              { icon: '✅', label: 'Simply want a fast, fair, hassle-free sale with cash in hand' },
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
            Get Your Free Cash Offer →
          </Link>
        </div>
      </section>
    </>
  );
}
