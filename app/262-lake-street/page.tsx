'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '@/components/Reveal'
import Counter from '@/components/Counter'

/* ------------------------------------------------------------------ */
/*  DATA                                                                */
/* ------------------------------------------------------------------ */

const stats = [
  { value: 8.6, suffix: '%', decimals: 1, label: 'Net Rental Yield (Indicative)' },
  { value: 14, suffix: '', label: 'Private Suites' },
  { value: 4.5, suffix: 'M', decimals: 1, prefix: '$', label: 'Total Package Price' },
  { value: 7.7, suffix: 'K', decimals: 1, prefix: '$', label: 'Weekly Rent, Combined' },
  { value: 392, suffix: 'K/yr', prefix: '$', label: 'Effective Annual Income' },
]

const buildingFeatures = [
  { n: '3', label: 'Storeys' },
  { n: '14', label: 'Private suites' },
  { n: '4', label: 'Shared kitchen & dining areas' },
  { n: '2', label: 'Ground floor suites' },
  { n: '1', label: 'Central lift' },
  { n: '1', label: 'Pool & BBQ entertaining area' },
]

const investmentHighlights = [
  {
    title: '8.6% to 8.7% Net Rental Yield',
    desc: 'An independent rental appraisal of $540 to $550 per room per week across all 14 suites, based on Knight Frank and Savills research into the co-living asset class, delivers an effective gross annual income of $385,258 to $392,392 against the $4.5M total package price.',
    gold: true,
  },
  { title: 'Individual Electricity Metering', desc: 'Each suite is individually metered, allowing operating costs to be recovered directly from residents.' },
  { title: 'Solar Power', desc: 'Rooftop solar power reduces common-area operating costs across the building, supporting long-term returns.' },
  { title: 'Secure, Keyed Access', desc: 'A sliding electric gate and key fob entry system control access to the site and building for every resident.' },
  { title: 'Lift-Serviced Building', desc: 'A central lift services all three levels, making every floor equally accessible for residents and guests alike.' },
  { title: 'Single Asset, Simple Structure', desc: 'Sold as one $4.5M package rather than by individual room, keeping ownership and management straightforward.' },
  { title: 'Emerging Asset Class', desc: 'Knight Frank and Savills recognise co-living as an emerging, institutional-grade asset class in Australia.' },
]

const suiteInclusions = [
  'Private bedroom with built-in robe',
  'Private lounge area',
  'Kitchenette with benchtop, sink and cabinetry',
  'Fully self-contained ensuite bathroom',
  'Two split-system air conditioning units',
  'Individual electricity metering and hot water system',
]

const sharedSpaces = [
  {
    title: 'Pool & BBQ Entertaining',
    desc: 'An in-ground pool and a paved BBQ and cinema entertaining area anchor the ground floor, shared by residents across all three levels.',
    gold: true,
  },
  { title: 'Shared Kitchen & Dining', desc: 'Four shared kitchen and dining areas, two on each upper floor, each fitted with a full oven, induction cooktop and rangehood.' },
  { title: 'Central Lift', desc: 'A central lift services all three levels from the ground floor entry, making every level equally accessible.' },
  { title: 'On-Site Parking', desc: 'Ground floor parking is accessed directly from McKenzie Street, right at the corner of the site, near the main entry.' },
  { title: 'Bin & Bike Storage', desc: 'A dedicated, secure storage area for bins and bicycles is provided at ground level for all residents to use.' },
  { title: 'Landscaped, Gated Grounds', desc: 'A sliding electric gate and landscaped grounds frame the corner site, with solar power supporting the building.' },
]

const financialSummary = [
  { label: 'Total Package Price', val: '$4,500,000', note: 'Build and land, combined, inc. GST', highlight: true },
  { label: 'Independent Rental Appraisal', val: '$540 to $550/wk', note: 'Per room, per Knight Frank & Savills research' },
  { label: 'Weekly Gross Rent (14 Rooms)', val: '$7,560 to $7,700', note: 'Combined, across all suites' },
  { label: 'Annual Gross Potential Rent', val: '$393,120 to $400,400', note: 'Based on 52 weeks' },
  { label: 'Vacancy & Collection Allowance', val: '2%', note: 'Approx. 98% managed occupancy' },
  { label: 'Effective Gross Annual Income', val: '$385,258 to $392,392', note: 'After vacancy allowance', highlight: true },
  { label: 'Indicative Net Rental Yield', val: '8.6% to 8.7%', note: 'Effective income over total package price', highlight: true },
  { label: 'Number of Suites', val: '14', note: 'Sold as a single asset' },
  { label: 'Documentation Status', val: 'In Documentation', note: 'Architectural drawings, issue B' },
]

const callTimes = ['Morning (8am–12pm)', 'Afternoon (12pm–5pm)', 'Evening (5pm–7pm)', 'Anytime']

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function LakeStreet() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', callTime: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/api/lake-street-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {}
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="/262-lake-street/exterior-tropical-green.jpg"
            alt="262 Lake Street, North Cairns"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
        </div>

        <div className="glow absolute top-1/3 right-1/4 w-[50rem] h-[50rem] opacity-40" aria-hidden />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <div className="fade-up flex items-center gap-4 mb-6" style={{ animationDelay: '100ms' }}>
              <span className="h-px w-10 bg-gold" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">
                262 Lake Street · North Cairns
              </p>
            </div>

            <h1 className="font-display font-bold uppercase tracking-tight leading-[0.92] text-[clamp(2.8rem,6.5vw,5.5rem)] text-beech mb-8">
              <span className="hero-line"><span style={{ animationDelay: '180ms' }}>Fourteen suites.</span></span>
              <span className="hero-line">
                <span style={{ animationDelay: '330ms' }}>
                  One <em className="accent-serif text-gold lowercase">investment-grade</em> asset.
                </span>
              </span>
            </h1>

            <div className="fade-up mb-6" style={{ animationDelay: '440ms' }}>
              <div className="inline-flex items-center gap-3 border border-gold/40 bg-gold/10 px-4 py-2.5">
                <span className="font-display text-2xl font-bold text-gold">8.6%</span>
                <div>
                  <div className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-gold">Net Rental Yield</div>
                  <div className="font-display text-[9px] uppercase tracking-[0.2em] text-beech/50">Indicative · Now Selling</div>
                </div>
              </div>
            </div>

            <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-xl mb-10"
              style={{ animationDelay: '520ms' }}>
              A purpose-built, 14-suite co-living development on a corner site in North Cairns, generating an indicative{' '}
              <span className="text-gold font-semibold">8.6% to 8.7% net rental yield</span>. Now selling as a single{' '}
              <span className="text-beech font-semibold">$4.5M package</span>.
            </p>

            <div className="fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '680ms' }}>
              <a
                href="#register-interest"
                className="btn-sweep btn-sweep-gold font-display font-bold uppercase tracking-widest text-sm px-8 py-4 border border-gold text-gold hover:text-ink transition-colors duration-400"
              >
                Register Interest →
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-2 opacity-40 fade-up" style={{ animationDelay: '900ms' }}>
          <div className="w-px h-12 bg-beech/50" />
          <span className="font-display text-[9px] tracking-[0.3em] uppercase text-beech rotate-90 origin-center mt-4">Scroll</span>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className="border-y border-beech/10 bg-surface overflow-hidden">
        <div className="marquee py-3.5">
          {[0, 1].map(i => (
            <div key={i} className="marquee-row flex items-center">
              {['14 PRIVATE SUITES', 'THREE-STOREY BUILDING', '262 LAKE STREET, NORTH CAIRNS', 'POOL & BBQ ENTERTAINING', '8.6% NET YIELD', 'NOW SELLING', 'LANDMARX DEVELOPMENT'].map(t => (
                <span key={t} className="flex items-center gap-6 mr-6">
                  <span className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-beech-mute whitespace-nowrap">{t}</span>
                  <span className="text-gold text-lg">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── STAT STRIP ── */}
      <section className="bg-ink border-b border-beech/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-beech/10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className={`px-8 py-10 text-center ${i === 0 ? 'bg-gold/10 border-b border-gold/20 lg:border-b-0 col-span-2 lg:col-span-1' : ''}`}>
                <div className={`font-display text-4xl sm:text-5xl font-bold mb-1 ${i === 0 ? 'text-gold text-5xl sm:text-6xl' : 'text-gold'}`}>
                  {s.prefix}<Counter end={s.value} suffix={s.suffix} duration={1600} decimals={(s as { decimals?: number }).decimals ?? 0} />
                </div>
                <div className={`font-display text-[10px] font-bold uppercase tracking-[0.25em] ${i === 0 ? 'text-gold/70' : 'text-beech-mute'}`}>{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE OPPORTUNITY ── */}
      <section className="py-20 lg:py-28 bg-ink bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-gold" />
                  <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">The Opportunity</p>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight text-beech mb-6">
                  A purpose-built<br />
                  <em className="accent-serif text-gold lowercase">co-living</em><br />
                  asset class.
                </h2>
                <p className="text-beech/60 leading-relaxed mb-5">
                  262 Lake Street is a three-storey, 14-suite co-living development on a corner site at Lake Street and McKenzie Street, North Cairns. Each suite is a self-contained private space, grouped around shared kitchen, dining and entertaining areas that give residents a genuine sense of community.
                </p>
                <p className="text-beech/60 leading-relaxed mb-8">
                  Co-living is an emerging, institutional-grade asset class, and the rental case here is built on independent appraisal referencing Knight Frank and Savills research, pointing to an indicative 8.6% to 8.7% net rental yield on the $4.5M total package price.
                </p>
                <div className="flex items-center gap-4">
                  <span className="h-px w-6 bg-gold/50" />
                  <p className="text-beech-mute text-sm">Originated and structured by Landmarx Development</p>
                </div>
              </Reveal>
            </div>
            <div className="grid grid-cols-3 gap-px bg-beech/10 border border-beech/10">
              {buildingFeatures.map((f, i) => (
                <Reveal key={f.label} delay={i * 60}>
                  <div className="bg-surface p-6 text-center h-full">
                    <div className="font-display text-3xl font-bold text-gold mb-1">{f.n}</div>
                    <div className="text-beech-mute text-xs leading-tight">{f.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT HIGHLIGHTS ── */}
      <section className="py-20 lg:py-28 bg-paper bg-grid-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold-deep" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold-deep">Investment Highlights</p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink">
              Why 262 Lake Street
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {investmentHighlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70} className={h.gold ? 'col-span-1 sm:col-span-2 lg:col-span-3' : ''}>
                <div className={`group h-full transition-colors duration-500 p-8 ${h.gold ? 'bg-ink flex flex-col sm:flex-row sm:items-center gap-6' : 'bg-paper hover:bg-ink'}`}>
                  {h.gold ? (
                    <>
                      <div className="shrink-0">
                        <div className="font-display text-5xl sm:text-6xl font-bold text-gold leading-none">8.6%</div>
                        <div className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold/60 mt-1">Net Rental Yield</div>
                        <div className="font-display text-[9px] uppercase tracking-[0.2em] text-beech/30 mt-0.5">Indicative, to 8.7%</div>
                      </div>
                      <div className="w-px h-16 bg-beech/10 hidden sm:block" />
                      <div>
                        <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-3 text-lg">{h.title}</h3>
                        <p className="text-sm text-beech/60 leading-relaxed max-w-2xl">{h.desc}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="font-display text-3xl font-bold text-ink/10 group-hover:text-gold transition-colors duration-500 mb-5">{String(i).padStart(2, '0')}</div>
                      <h3 className="font-display font-bold uppercase tracking-wide text-ink group-hover:text-beech transition-colors duration-500 mb-3">{h.title}</h3>
                      <p className="text-sm text-ink/60 group-hover:text-beech/60 transition-colors duration-500 leading-relaxed">{h.desc}</p>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIDE EACH SUITE ── */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold" />
                <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Inside Each Suite</p>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech mb-6">
                Fully self-contained,<br />
                <em className="accent-serif text-gold lowercase">by design.</em>
              </h2>
              <ul className="space-y-3">
                {suiteInclusions.map(s => (
                  <li key={s} className="flex items-start gap-4 text-sm text-beech/70">
                    <span className="text-gold mt-0.5 shrink-0">→</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/262-lake-street/exterior-tropical-green.jpg"
                  alt="262 Lake Street facade detail"
                  fill
                  className="object-cover object-[50%_30%]"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SHARED SPACES ── */}
      <section className="py-20 lg:py-28 bg-ink bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Shared Spaces</p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech">
              Private suites, resort-style amenity
            </h2>
          </Reveal>

          <Reveal className="mb-10">
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src="/262-lake-street/pool-amenity.jpg"
                alt="262 Lake Street pool and entertaining area"
                fill
                className="object-cover object-center"
                sizes="90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-beech/10 border border-beech/10">
            {sharedSpaces.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className={`group h-full transition-colors duration-500 p-8 ${h.gold ? 'bg-gold/10 border border-gold/20' : 'bg-surface hover:bg-ink'}`}>
                  {h.gold ? (
                    <>
                      <h3 className="font-display font-bold uppercase tracking-wide text-gold mb-3">{h.title}</h3>
                      <p className="text-sm text-beech/70 leading-relaxed">{h.desc}</p>
                    </>
                  ) : (
                    <>
                      <div className="font-display text-3xl font-bold text-beech/10 group-hover:text-gold transition-colors duration-500 mb-5">{String(i).padStart(2, '0')}</div>
                      <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-3">{h.title}</h3>
                      <p className="text-sm text-beech-mute group-hover:text-beech/60 transition-colors duration-500 leading-relaxed">{h.desc}</p>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCIAL SUMMARY ── */}
      <section id="financial-summary" className="py-20 lg:py-28 bg-paper bg-grid-paper scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 text-center">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold-deep" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold-deep">Financial Summary</p>
              <span className="h-px w-10 bg-gold-deep" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink">
              The numbers that matter
            </h2>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="border border-ink/10 divide-y divide-ink/10">
                {financialSummary.map(r => (
                  <div key={r.label} className={`flex items-center justify-between px-6 py-4 ${r.highlight ? 'bg-ink/5' : ''}`}>
                    <div>
                      <div className={`font-display text-sm font-bold uppercase tracking-wide ${r.highlight ? 'text-ink' : 'text-ink/70'}`}>{r.label}</div>
                      {r.note && <div className="text-xs text-ink/40 mt-0.5">{r.note}</div>}
                    </div>
                    <div className={`font-display font-bold text-right ${r.highlight ? 'text-lg text-gold-deep' : 'text-ink'}`}>{r.val}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100} className="mt-4 p-4 border border-amber-400/20 bg-amber-50/50 text-xs text-ink/50 leading-relaxed">
              Financial projections are indicative only, based on an independent rental appraisal referencing Knight Frank and Savills co-living research. Investors should obtain independent financial, legal and taxation advice before making any investment decision.
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REGISTER INTEREST ── */}
      <section id="register-interest" className="py-20 lg:py-28 bg-ink bg-grid scroll-mt-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Register Interest</p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech mb-4">
              Own a fully built{' '}
              <em className="accent-serif text-gold lowercase">co-living asset</em>
            </h2>
            <p className="text-beech/60 leading-relaxed">
              262 Lake Street is now selling as a single $4.5M package. Leave your details and a member of the Landmarx team will walk you through the numbers and send you the full information memorandum.
            </p>
          </Reveal>

          {submitted ? (
            <Reveal>
              <div className="border border-gold/30 bg-surface p-12 text-center">
                <div className="w-16 h-16 border border-gold/50 rotate-45 flex items-center justify-center mx-auto mb-8">
                  <span className="-rotate-45 text-2xl text-gold">✓</span>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-beech mb-4">We&apos;ll be in touch</h3>
                <p className="text-beech/60 leading-relaxed">
                  Thank you. A member of the Landmarx team will contact you within 24 hours to discuss 262 Lake Street and answer your questions.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/60 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-surface border border-beech/15 px-4 py-3 text-sm text-beech placeholder:text-beech-mute/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/60 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-surface border border-beech/15 px-4 py-3 text-sm text-beech placeholder:text-beech-mute/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/60 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-surface border border-beech/15 px-4 py-3 text-sm text-beech placeholder:text-beech-mute/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/60 mb-2">Best Time to Call</label>
                    <select
                      value={form.callTime}
                      onChange={e => setForm({ ...form, callTime: e.target.value })}
                      className="w-full bg-surface border border-beech/15 px-4 py-3 text-sm text-beech focus:outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option value="">Select a time</option>
                      {callTimes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/60 mb-2">Questions / Notes</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Any specific questions about the project..."
                    className="w-full bg-surface border border-beech/15 px-4 py-3 text-sm text-beech placeholder:text-beech-mute/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-sweep btn-sweep-gold w-full font-display font-bold uppercase tracking-widest text-sm px-8 py-4 border border-gold text-gold hover:text-ink transition-colors duration-400 disabled:opacity-50"
                >
                  {submitting ? 'Sending…' : 'Register My Interest →'}
                </button>
                <p className="text-center text-xs text-beech-mute/60 leading-relaxed">
                  Your information is kept confidential and used only to arrange a call about this project. This page is for information purposes only and does not constitute an offer to invest.
                </p>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── BOTTOM STRIP ── */}
      <div className="bg-surface border-t border-beech/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-beech-mute">
            LANDMARX <span className="text-gold">·</span> 262 Lake Street
          </p>
          <p className="text-xs text-beech-mute/50">
            This information is indicative only and subject to change. Seek independent advice before investing.
          </p>
        </div>
      </div>
    </>
  )
}
