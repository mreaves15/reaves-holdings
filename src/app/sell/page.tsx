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
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  county: string;
  acreage: string;
  situation: string;
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
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
            No Obligation · Free Offer
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Tell Us About Your Property
          </h1>
          <p className="text-charcoal/65 text-lg">
            Fill out the form below and we&apos;ll get back to you with a fair cash offer within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-10 pb-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === 'success' ? (
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-black/5 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="font-serif text-3xl font-bold text-forest mb-3">
                We Received Your Request!
              </h2>
              <p className="text-charcoal/70 text-lg mb-6">
                Thank you! We&apos;ll review your property and reach out within 24 hours with a fair cash offer.
              </p>
              <Link
                href="/"
                className="inline-block bg-gold hover:bg-gold-dark text-white px-7 py-3 rounded-xl font-semibold transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
              {/* Trust bar */}
              <div className="bg-forest/5 border-b border-black/5 px-8 py-3 flex items-center gap-2 text-sm text-charcoal/70 font-medium">
                <span>🔒</span>
                <span>Your information is secure and confidential</span>
              </div>

              <form onSubmit={handleSubmit} className="p-8 lg:p-10">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5">
                      First Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5">
                      Last Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Smith"
                      className={inputClass}
                    />
                  </div>
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
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
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
                    placeholder="123 Main St, Palatka, FL or Parcel #"
                    className={inputClass}
                  />
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

                {/* Situation */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">
                    Tell Us About Your Situation
                  </label>
                  <textarea
                    name="situation"
                    value={form.situation}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Inherited property, back taxes, just want to sell, etc. Any details help us give you a better offer."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm mb-4">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gold hover:bg-gold-dark disabled:bg-gold/60 text-white py-4 rounded-xl text-lg font-bold transition-all shadow-md hover:shadow-lg"
                >
                  {status === 'loading' ? 'Sending...' : 'Request My Cash Offer →'}
                </button>

                <p className="text-center text-charcoal/50 text-sm mt-4">
                  We typically respond within 24 hours. No obligation, ever.
                </p>
              </form>
            </div>
          )}

          {/* Trust signals below form */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: '⚡', label: 'Fast Response', sub: 'Within 24 hours' },
              { icon: '🤝', label: 'No Obligation', sub: 'Completely free offer' },
              { icon: '🔒', label: 'Confidential', sub: 'Your info is private' },
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
