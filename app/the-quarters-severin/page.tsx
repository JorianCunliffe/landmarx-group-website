'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '@/components/Reveal'
import Counter from '@/components/Counter'

/* ------------------------------------------------------------------ */
/*  DATA                                                                */
/* ------------------------------------------------------------------ */

const stats = [
  { value: 16, suffix: '', label: 'Private Ensuited Suites' },
  { value: 2, suffix: '', label: 'Connected Three-Storey Buildings' },
  { value: 4, suffix: '', label: 'Shared Kitchen & Living Spaces' },
]

const residentProfiles = [
  { title: 'Health Workers', desc: 'Locum doctors and agency nurses covering rural and regional workforce gaps, typically rotating through on assignments of weeks to months.' },
  { title: 'Agriculture & Harvest', desc: 'Seasonal workers supporting the Tablelands, Mareeba, Innisfail and Tully harvest calendar, needing housing for a season rather than a 12-month lease.' },
  { title: 'Resources & Infrastructure', desc: 'Contractors and tradespeople transiting through Cairns between rotations on major projects, needing accommodation that matches a roster.' },
  { title: 'Tourism & Hospitality', desc: 'Dive instructors, tour operators and hospitality staff serving the Reef and Port Douglas visitor economy, often on itinerant work patterns.' },
  { title: 'Students & Locals', desc: 'Young professionals, students and singles priced out of the standard rental market, seeking a well-managed, above-board place to live.' },
]

const buildingFeatures = [
  { n: '2', label: 'Three-storey buildings' },
  { n: '16', label: 'Self-contained suites' },
  { n: '4', label: 'Shared kitchen & lounge levels' },
  { n: '4', label: 'Dedicated laundries' },
  { n: '1', label: 'Central pool & courtyard' },
  { n: '1', label: 'Covered inter-building walkway' },
]

const suiteInclusions = [
  'Private bedroom with built-in robe',
  'Living zone with kitchenette, including benchtop, sink and cabinetry',
  'Fully self-contained ensuite bathroom',
  'Split-system air conditioning',
  'Individual electric hot water system',
]

const sharedSpaces = [
  {
    title: 'Central Pool & Courtyard',
    desc: 'A 168m² landscaped central courtyard connects the two buildings, anchored by a shared pool with glass balustrade fencing. It\'s the social heart of the site.',
    gold: true,
  },
  { title: 'Shared Kitchen & Lounge', desc: 'Each accommodation level has its own common kitchen and living space, fully equipped with oven, cooktop and rangehood.' },
  { title: 'Dedicated Laundry', desc: 'A dedicated laundry on every accommodation level, fitted with its own sink, cabinetry and hot water system.' },
  { title: 'Covered Walkway', desc: 'A covered, post-free walkway physically links Building A and Building B across the central courtyard.' },
  { title: 'On-Site Parking', desc: 'Resident parking is accessed directly from Severin Street, right at the front of the site, near both buildings.' },
  { title: 'BBQ Area', desc: 'A dedicated BBQ and service area at ground level, shared by residents of both buildings throughout the site.' },
  { title: 'Landscaped Grounds', desc: 'Landscaping and screening around the site perimeter, framing the street frontage and courtyard.' },
]

const timeline = [
  { phase: 'Pre-Construction', when: 'Aug to Sep 2026', desc: 'Final contract execution, approvals, engineering and procurement preparation.' },
  { phase: 'Construction Commences', when: 'Oct 2026', desc: 'Site establishment and start of works.' },
  { phase: 'Construction', when: 'Oct 2026 to Jul 2027', desc: 'Approximately ten months of construction across both buildings.' },
  { phase: 'Completion & Handover', when: 'Aug to Sep 2027', desc: 'Defects rectification, certification and practical completion.' },
  { phase: 'Target Operations', when: 'Oct 2027', desc: 'Target commencement of occupancy and operations.' },
]

export default function TheQuartersSeverin() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/api/severin-lead', {
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
            src="/the-quarters-severin/exterior-dusk.jpg"
            alt="The Quarters Severin, Parramatta Park, Cairns"
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
                The Quarters Severin · Parramatta Park, Cairns
              </p>
            </div>

            <h1 className="font-display font-bold uppercase tracking-tight leading-[0.92] text-[clamp(2.8rem,6.5vw,5.5rem)] text-beech mb-8">
              <span className="hero-line"><span style={{ animationDelay: '180ms' }}>Built to house</span></span>
              <span className="hero-line">
                <span style={{ animationDelay: '330ms' }}>
                  the people <em className="accent-serif text-gold lowercase">who keep Cairns moving.</em>
                </span>
              </span>
            </h1>

            <div className="fade-up mb-6" style={{ animationDelay: '440ms' }}>
              <div className="inline-flex items-center gap-3 border border-gold/40 bg-gold/10 px-4 py-2.5">
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Secured &amp; In Delivery</span>
              </div>
            </div>

            <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-xl mb-10"
              style={{ animationDelay: '520ms' }}>
              A 16-suite co-living development in Parramatta Park, Cairns, built across two connected three-storey buildings around a shared pool and courtyard. Structured and delivered through the Landmarx platform, this opportunity is now{' '}
              <span className="text-gold font-semibold">secured and under construction</span>.
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
              {['16 PRIVATE SUITES', 'TWO CONNECTED BUILDINGS', 'PARRAMATTA PARK, CAIRNS', 'CENTRAL POOL & COURTYARD', 'CO-LIVING', 'SECURED & IN DELIVERY', 'LANDMARX DEVELOPMENT'].map(t => (
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
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-x-0 sm:divide-x divide-y sm:divide-y-0 divide-beech/10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="px-8 py-10 text-center">
                <div className="font-display text-4xl sm:text-5xl font-bold mb-1 text-gold">
                  <Counter end={s.value} suffix={s.suffix} duration={1400} />
                </div>
                <div className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech-mute">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CO-LIVING ── */}
      <section className="py-20 lg:py-28 bg-ink bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-gold" />
                  <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Why Co-Living</p>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight text-beech mb-6">
                  A region that runs<br />
                  on <em className="accent-serif text-gold lowercase">rotation,</em><br />
                  not just residency.
                </h2>
                <p className="text-beech/60 leading-relaxed mb-5">
                  Far North Queensland has a housing problem with two faces: one of the tightest rental markets in the country, layered on a regional economy that depends on rotating and seasonal workforces as much as permanent residents.
                </p>
                <p className="text-beech/60 leading-relaxed">
                  Co-living addresses both at once. It delivers more usable rooms per unit of land and construction cost than a standard dwelling, with flexible-term, professionally managed housing that fits how people in FNQ actually need to live, rather than an informal share-house arrangement.
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal delay={80} className="mb-6">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold-deep">Who It Houses</p>
              </Reveal>
              <div className="space-y-px bg-beech/10 border border-beech/10">
                {residentProfiles.map((p, i) => (
                  <Reveal key={p.title} delay={i * 70}>
                    <div className="bg-surface p-6">
                      <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-2 text-sm">{p.title}</h3>
                      <p className="text-xs text-beech-mute leading-relaxed">{p.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROJECT ── */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-gold" />
                  <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">The Project</p>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech mb-6">
                  Two buildings,<br />
                  <em className="accent-serif text-gold lowercase">one community.</em>
                </h2>
                <p className="text-beech/60 leading-relaxed mb-5">
                  The Quarters Severin comprises two connected three-storey buildings at 310 &amp; 312A Severin Street, Parramatta Park, with eight self-contained suites per building spread across the upper two floors, and ground-level entry, services and parking.
                </p>
                <p className="text-beech/60 leading-relaxed">
                  A landscaped central courtyard and shared pool sit between the two buildings, linked by a covered walkway, forming the physical and social heart of the site.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-3 gap-px bg-beech/10 border border-beech/10">
              {buildingFeatures.map((f, i) => (
                <Reveal key={f.label} delay={i * 60}>
                  <div className="bg-paper p-6 text-center h-full">
                    <div className="font-display text-3xl font-bold text-gold-deep mb-1">{f.n}</div>
                    <div className="text-ink/60 text-xs leading-tight">{f.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INSIDE EACH SUITE ── */}
      <section className="py-20 lg:py-28 bg-ink bg-grid">
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
                  src="/the-quarters-severin/exterior-dusk.jpg"
                  alt="The Quarters Severin facade detail"
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
      <section className="py-20 lg:py-28 bg-paper bg-grid-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold-deep" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold-deep">Shared Spaces</p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink">
              Private suites, shared amenity
            </h2>
          </Reveal>

          <Reveal className="mb-10">
            <div className="bg-ink border-l-2 border-gold p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold">The Quarters Severin</span>
                <span className="text-gold/40">·</span>
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-beech/40">Parramatta Park, Cairns</span>
              </div>
              <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-3 text-xl sm:text-2xl">{sharedSpaces[0].title}</h3>
              <p className="text-sm text-beech/60 leading-relaxed max-w-2xl">{sharedSpaces[0].desc}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {sharedSpaces.slice(1).map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="group h-full transition-colors duration-500 p-8 bg-paper hover:bg-ink">
                  <div className="font-display text-3xl font-bold text-ink/10 group-hover:text-gold transition-colors duration-500 mb-5">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-display font-bold uppercase tracking-wide text-ink group-hover:text-beech transition-colors duration-500 mb-3">{h.title}</h3>
                  <p className="text-sm text-ink/60 group-hover:text-beech/60 transition-colors duration-500 leading-relaxed">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY TIMELINE ── */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Delivery Timeline</p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech">
              From secured to standing
            </h2>
          </Reveal>
          <div className="max-w-3xl">
            <div className="border border-beech/10 divide-y divide-beech/10">
              {timeline.map(t => (
                <Reveal key={t.phase}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 gap-2">
                    <div>
                      <div className="font-display text-sm font-bold uppercase tracking-wide text-beech">{t.phase}</div>
                      <div className="text-xs text-beech-mute mt-0.5">{t.desc}</div>
                    </div>
                    <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold-deep shrink-0">{t.when}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY TEAM ── */}
      <section className="py-20 lg:py-28 bg-ink bg-grid border-y border-beech/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Delivery Team</p>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-beech">
              Structured and built
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-beech/10 max-w-3xl mx-auto border border-beech/10">
            <Reveal className="bg-surface p-8 text-left">
              <div className="w-6 h-px bg-gold mb-5" />
              <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-3">Landmarx Development</h3>
              <p className="text-sm text-beech/60 leading-relaxed">
                Originated the project and structured the opportunity, from feasibility through to design direction and delivery coordination.
              </p>
            </Reveal>
            <Reveal delay={80} className="bg-surface p-8 text-left">
              <div className="w-6 h-px bg-gold mb-5" />
              <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-3">MyBuild Commercial</h3>
              <p className="text-sm text-beech/60 leading-relaxed">
                QBCC-licensed builder delivering construction under a standard Master Builders commercial contract.
              </p>
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
              Secured. But the model{' '}
              <em className="accent-serif text-gold lowercase">isn&apos;t a one-off.</em>
            </h2>
            <p className="text-beech/60 leading-relaxed">
              The Quarters Severin is fully secured and now in delivery. Landmarx is developing further co-living opportunities across Far North Queensland, so leave your details to hear about the next one.
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
                  Thank you. A member of the Landmarx team will contact you when the next co-living opportunity is ready to share.
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
                  <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/60 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you're looking for..."
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
                  Your information is kept confidential and used only to contact you about future Landmarx opportunities. This page is for information purposes only and does not constitute an offer of investment.
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
            LANDMARX <span className="text-gold">·</span> The Quarters Severin
          </p>
          <p className="text-xs text-beech-mute/50">
            This project is secured and in delivery. Details are indicative only and subject to change.
          </p>
        </div>
      </div>
    </>
  )
}
