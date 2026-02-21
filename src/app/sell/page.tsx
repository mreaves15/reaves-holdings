'use client';

import { useState } from 'react';
import Link from 'next/link';

const floridaCounties = [
  'Putnam', 'Marion', 'Highlands', 'Lee', 'Alachua', 'Baker', 'Bay', 'Bradford',
  'Brevard', 'Broward', 'Calhoun', 'Charlotte', 'Citrus', 'Clay', 'Collier',
  'Columbia', 'DeSoto', 'Dixie', 'Duval', 'Escambia', 'Flagler', 'Franklin',
  'Gadsden', 'Gilchrist', 'Glades', 'Gulf', 'Hamilton', 'Hardee', 'Hendry',
  'Hernando', 'Hillsborough', 'Holmes', 'Indian River', 'Jackson', 'Jefferson',
  'Lafayette', 'Lake', 'Leon', 'Levy', 'Liberty', 'Madison', 'Manatee',
  'Martin', 'Miami-Dade', 'Monroe', 'Nassau', 'Okaloosa', 'Okeechobee',
  'Orange', 'Osceola', 'Palm Beach', 'Pasco', 'Pinellas', 'Polk', 'Santa Rosa',
  'Sarasota', 'Seminole', 'St. Johns', 'St. Lucie', 'Sumter', 'Suwannee',
  'Taylor', 'Union', 'Volusia', 'Wakulla', 'Walton', 'Washington',
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  county: string;
  acreage: string;
  situation: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  address: '',
  county: '',
  acreage: '',
  situation: '',
};

export default function SellPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-black/15 bg-white text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors';

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            No Fees · No Obligation · Cash in as Little as 14 Days
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Get Your Free Cash Offer
          </h1>
          <p className="text-charcoal/65 text-lg">
            Tell us a few details about your land. We&apos;ll send you a fair, no-obligation cash offer within 24 hours.
          </p>
        </div>
      </section>

      {/* Phone CTA */}
      <section className="bg-warm-white pb-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest rounded-2xl p-6 text-center text-white">
            <p className="text-white/80 text-sm mb-2">Prefer to talk to a real person?</p>
            <a
              href="tel:+13525550100"
              className="text-2xl font-bold text-gold hover:text-gold-dark transition-colors"
            >
              📞 (352) 555-0100
            </a>
            <p className="text-white/60 text-sm mt-2">Matt answers personally — no call center.</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-10 pb-16 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === 'success' ? (
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 shadow-sm border border-black/5 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="font-serif text-3xl font-bold text-forest mb-3">
                Your Offer Request Is In!
              </h2>
              <p className="text-charcoal/70 text-lg mb-2">
                We&apos;ve received your property details and are already getting to work.
              </p>
              <p className="text-charcoal/60 mb-6">
                Expect to hear from Matt within 24 hours with a written cash offer. Check your phone and email.
              </p>
              <Link
                href="/"
                className="inline-block bg-gold hover:bg-gold-dark text-white px-7 py-3 rounded-xl font-semibold transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
                  {/* Trust bar */}
                  <div className="bg-forest/5 border-b border-black/5 px-8 py-3 flex items-center gap-2 text-sm text-charcoal/70 font-medium">
                    <span>🔒</span>
                    <span>Your information is secure and will never be shared</span>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 lg:p-10">
                    {/* Name */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-charcoal mb-1.5">
                        Your Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className={inputClass}
                      />
                    </div>

                    {/* Contact row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-1.5">
                          Phone Number <span className="text-gold">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="(555) 123-4567"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* County + Acreage */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-1.5">
                          County <span className="text-gold">*</span>
                        </label>
                        <select
                          name="county"
                          value={form.county}
                          onChange={handleChange}
                          required
                          className={`${inputClass} cursor-pointer`}
                        >
                          <option value="">Select a county...</option>
                          <optgroup label="Primary Counties">
                            {['Putnam', 'Marion', 'Highlands', 'Lee'].map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </optgroup>
                          <optgroup label="All Florida Counties">
                            {floridaCounties
                              .filter((c) => !['Putnam', 'Marion', 'Highlands', 'Lee'].includes(c))
                              .sort()
                              .map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                          </optgroup>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-1.5">
                          Approximate Acreage
                        </label>
                        <input
                          type="text"
                          name="acreage"
                          value={form.acreage}
                          onChange={handleChange}
                          placeholder="e.g. 5 acres"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-charcoal mb-1.5">
                        Property Address or Parcel ID
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="123 Main St, Palatka, FL or Parcel # (optional)"
                        className={inputClass}
                      />
                    </div>

                    {/* Situation */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-charcoal mb-1.5">
                        Anything Else We Should Know? <span className="text-charcoal/40">(optional)</span>
                      </label>
                      <textarea
                        name="situation"
                        value={form.situation}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Inherited it, back taxes, just want to sell — any details help."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-600 text-sm mb-4">
                        Something went wrong. Please try again or call us at (352) 555-0100.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gold hover:bg-gold-dark disabled:bg-gold/60 text-white py-4 rounded-xl text-lg font-bold transition-all shadow-md hover:shadow-lg"
                    >
                      {status === 'loading' ? 'Sending...' : 'Get My Cash Offer — Free, No Obligation →'}
                    </button>

                    <p className="text-center text-charcoal/50 text-sm mt-4">
                      ✓ No commitment required &nbsp; ✓ We respond within 24 hours &nbsp; ✓ $0 cost to you
                    </p>
                  </form>
                </div>
              </div>

              {/* Sidebar - Benefits & Trust */}
              <div className="lg:col-span-1 flex flex-col gap-5">
                <div className="bg-white rounded-2xl p-7 border border-black/5 shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-4">
                    Here&apos;s What You Get:
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {[
                      'A fair, written cash offer within 24 hours',
                      'Close in as little as 14 days',
                      'We pay ALL closing costs',
                      'No realtor commissions (save 6%)',
                      'No repairs or cleanup needed',
                      'We handle all the paperwork',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-charcoal/70 text-sm">
                        <span className="text-forest font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-forest/5 rounded-2xl p-7 border border-forest/10">
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-3">
                    We Buy Land With:
                  </h3>
                  <ul className="flex flex-col gap-2 text-charcoal/65 text-sm">
                    {[
                      'Back taxes owed',
                      'Probate or estate situations',
                      'No road access (landlocked)',
                      'Code violations',
                      'Any condition — we don\'t care',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-gold font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-forest/5 rounded-2xl p-7 border border-forest/10">
                  <div className="text-forest text-2xl mb-3">🤝</div>
                  <p className="text-charcoal/75 text-sm leading-relaxed font-medium">
                    Every deal goes through a licensed Florida title company. Matt works with you directly from first call to closing.
                  </p>
                  <div className="mt-4 pt-4 border-t border-forest/10 text-sm text-charcoal/55">
                    No call centers. No middlemen. No surprises.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-charcoal">
              What Happens After You Submit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                icon: '📱',
                title: 'We Call You',
                body: 'Within 24 hours, Matt will reach out to confirm your property details and answer any questions.',
              },
              {
                num: '2',
                icon: '📊',
                title: 'You Get a Written Offer',
                body: 'We research comps and send you a fair cash offer in writing. No obligation to accept.',
              },
              {
                num: '3',
                icon: '💰',
                title: 'You Get Paid',
                body: 'Accept the offer, we handle the paperwork through a title company, and you get cash at closing.',
              },
            ].map((step) => (
              <div key={step.num} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center font-serif font-bold text-xl mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2">{step.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-10 pb-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: '🏢', label: 'Registered FL LLC', sub: 'Legitimate business' },
              { icon: '📜', label: 'Licensed Title Company', sub: 'Handles every closing' },
              { icon: '🤝', label: 'Family-Operated', sub: 'Matt works with you directly' },
            ].map((t) => (
              <div key={t.label} className="bg-white rounded-xl p-5 border border-black/5 shadow-sm">
                <div className="text-2xl mb-1">{t.icon}</div>
                <div className="font-semibold text-charcoal text-sm">{t.label}</div>
                <div className="text-charcoal/50 text-xs mt-0.5">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
