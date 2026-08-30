'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '@/components/Reveal'
import Counter from '@/components/Counter'

/* ------------------------------------------------------------------ */
/*  DATA                                                                */
/* ------------------------------------------------------------------ */

const stats = [
  { value: 3, suffix: '', label: 'Sectors Under One Roof — Property, Construction, Development' },
  { value: 10, suffix: '+', label: 'Shared Amenities & Services' },
  { value: 1, suffix: '', label: 'Address, Full Ecosystem' },
]

const disciplines = ['Planning', 'Engineering', 'Design', 'Costing', 'Construction', 'Approvals', 'Legal', 'Valuation', 'Project Management']

const heroHighlight = {
  title: 'VIP & VVIP-Level Client Service',
  desc: 'Full cafe and restaurant service is planned throughout the building, with tenants and guests ordering food and beverages by QR code from wherever they are. Together, the shared amenities create a premium environment for VIP and VVIP-level client service — without any one business carrying the full cost alone.',
}

const highlights = [
  { title: 'Coffee, Cocktails & Barber', desc: 'A full-service coffee shop, restaurant, cocktail bar and barber at ground level.' },
  { title: 'Communal Commercial Kitchen', desc: 'A shared commercial kitchen supporting the building’s food and beverage offering.' },
  { title: 'Conference & Meeting Rooms', desc: 'Large shared conference rooms and meeting rooms, available to every tenant.' },
  { title: 'Hot Desks & Coworking Pods', desc: 'Membership access to shared coworking space, hot desks and private pods — for teams who don’t need a full office but want a place to work from.' },
  { title: 'Building-Wide QR Ordering', desc: 'Order food and beverages by QR code from wherever you’re working in the building.' },
  { title: 'X-Golf & Gym', desc: 'An X-Golf simulator and gym on site for tenants and their clients.' },
  { title: 'VIP Whiskey Lounge', desc: 'A private VIP whiskey lounge and VIP area for high-value client meetings.' },
  { title: 'Media Lounge & Secure Meetings', desc: 'A media lounge room plus secure meeting spaces for sensitive discussions.' },
  { title: 'Internal Car Wash', desc: 'An internal car wash — plus more facilities still to be announced.' },
]

const callTimes = ['Morning (8am–12pm)', 'Afternoon (12pm–5pm)', 'Evening (5pm–7pm)', 'Anytime']

const spaceTypes = ['Full Office Space', 'Hot Desk & Facility Membership', 'Not Sure Yet']

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function TheHQ() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', spaceType: '', teamSize: '', spaceRequired: '', callTime: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/api/hq-lead', {
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
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/the-hq/exterior-night.jpg"
            alt="The HQ Building — Lake Street, Cairns"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
        </div>

        {/* Glow */}
        <div className="glow absolute top-1/3 right-1/4 w-[50rem] h-[50rem] opacity-40" aria-hidden />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <div className="fade-up flex items-center gap-4 mb-6" style={{ animationDelay: '100ms' }}>
              <span className="h-px w-10 bg-gold" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">
                The HQ Building · Lake Street, Cairns
              </p>
            </div>

            <h1 className="font-display font-bold uppercase tracking-tight leading-[0.92] text-[clamp(2.8rem,6.5vw,5.5rem)] text-beech mb-8">
              <span className="hero-line"><span style={{ animationDelay: '180ms' }}>Built to move</span></span>
              <span className="hero-line">
                <span style={{ animationDelay: '330ms' }}>
                  business <em className="accent-serif text-gold lowercase">forward.</em>
                </span>
              </span>
            </h1>

            <div className="fade-up mb-6" style={{ animationDelay: '440ms' }}>
              <div className="inline-flex items-center gap-3 border border-gold/40 bg-gold/10 px-4 py-2.5">
                <span className="font-display text-sm font-bold text-gold uppercase tracking-wide">One address for the people who build Cairns</span>
              </div>
            </div>

            <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-xl mb-10"
              style={{ animationDelay: '520ms' }}>
              The HQ brings independent property, construction and development businesses into{' '}
              <span className="text-gold font-semibold">one connected environment</span>. Each tenant keeps its own identity and commercial independence, while gaining faster access to relevant expertise,{' '}
              <span className="text-beech font-semibold">stronger shared facilities</span> and a more complete client experience.
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

        {/* Scroll indicator */}
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
              {['LAKE STREET, CAIRNS', 'COFFEE SHOP & COCKTAIL BAR', 'X-GOLF & GYM', 'VIP WHISKEY LOUNGE', 'COWORKING SPACES', 'CONFERENCE & MEETING ROOMS', 'BUILDING-WIDE QR ORDERING', 'INTERNAL CAR WASH', 'LANDMARX DEVELOPMENT'].map(t => (
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

      {/* ── THE HQ BUILDING ── */}
      <section className="py-20 lg:py-28 bg-ink bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-gold" />
                  <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">The Challenge</p>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight text-beech mb-6">
                  Answers, gathered<br />
                  <em className="accent-serif text-gold lowercase">one consultant</em><br />
                  at a time.
                </h2>
                <p className="text-beech/60 leading-relaxed mb-5">
                  Across Cairns, property and construction professionals work from separate offices. When a project involves planning, engineering, hydraulics, design, costing, construction or approvals, answers are gathered one consultant at a time. Each handover creates delays, information has to be repeated and decisions wait for the next piece of advice.
                </p>
                <p className="text-beech/60 leading-relaxed mb-8">
                  Straightforward projects lose momentum. Complicated questions can take weeks to resolve, and difficult sites can stall or remain undeveloped because the right perspectives are not brought together early enough to establish a clear path to delivery.
                </p>
                <div className="flex items-center gap-4">
                  <span className="h-px w-6 bg-gold/50" />
                  <p className="text-beech-mute text-sm">Landmarx Development · The HQ Building, Lake Street</p>
                </div>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-beech/10 border border-beech/10">
              {disciplines.map((d, i) => (
                <Reveal key={d} delay={i * 60}>
                  <div className="bg-surface p-6 text-center h-full flex items-center justify-center">
                    <div className="font-display text-sm font-bold uppercase tracking-wide text-gold">{d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── UNDER ONE ROOF ── */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/the-hq/exterior-night.jpg"
                  alt="The HQ Building entrance — Lake Street, Cairns"
                  fill
                  className="object-cover object-[50%_25%]"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold" />
                <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Under One Roof</p>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech mb-6">
                Independence,<br />
                <em className="accent-serif text-gold lowercase">without distance.</em>
              </h2>
              <p className="text-beech/60 leading-relaxed mb-5">
                The HQ brings independent businesses into close proximity without merging them or requiring shared commercial arrangements. Every tenant keeps its own clients, identity and professional independence. What changes is the speed of access to the other expertise a project may require.
              </p>
              <p className="text-beech/60 leading-relaxed mb-8">
                Questions can reach the right people sooner, issues can be identified earlier and clients can move through the development process with fewer gaps. By sharing premium facilities, every tenant also gains a higher standard of amenity, presentation and client experience than most businesses could efficiently provide alone.
              </p>
              <div className="border-l-2 border-gold pl-5">
                <p className="text-beech/60 text-sm leading-relaxed">
                  Membership at The HQ ranges from <span className="text-beech font-semibold">full private office space</span> to a <span className="text-beech font-semibold">hot desk &amp; facility membership</span> — access to coworking pods and shared amenity without leasing a full office.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── AMENITIES / HIGHLIGHTS ── */}
      <section className="py-20 lg:py-28 bg-paper bg-grid-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold-deep" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold-deep">Internal Services & Shared Spaces</p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink">
              A building built for its tenants
            </h2>
            <p className="text-ink/60 max-w-2xl mt-4 leading-relaxed">
              Designed around the people who use it, with shared amenity, food, entertainment and private VIP spaces built into the everyday experience.
            </p>
          </Reveal>

          {/* Hero highlight banner */}
          <Reveal className="mb-10">
            <div className="bg-ink border-l-2 border-gold p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold">The HQ</span>
                <span className="text-gold/40">·</span>
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-beech/40">Lake Street, Cairns</span>
              </div>
              <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-3 text-xl sm:text-2xl">{heroHighlight.title}</h3>
              <p className="text-sm text-beech/60 leading-relaxed max-w-2xl">{heroHighlight.desc}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="group transition-colors duration-500 p-8 bg-paper hover:bg-ink">
                  <div className="font-display text-3xl font-bold text-ink/10 group-hover:text-gold transition-colors duration-500 mb-5">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-display font-bold uppercase tracking-wide text-ink group-hover:text-beech transition-colors duration-500 mb-3">{h.title}</h3>
                  <p className="text-sm text-ink/60 group-hover:text-beech/60 transition-colors duration-500 leading-relaxed">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPER ── */}
      <section className="py-20 lg:py-28 bg-ink bg-grid border-y border-beech/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Developer</p>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-beech">
              Structured by Landmarx Development
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-beech/10 max-w-3xl mx-auto border border-beech/10">
            <Reveal className="bg-surface p-10 text-left">
              <div className="w-6 h-px bg-gold mb-5" />
              <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-3">Landmarx Development</h3>
              <p className="text-sm text-beech/60 leading-relaxed">
                Landmarx Development Pty Ltd structures real asset opportunities across feasibility, commercial modelling, capital pathways and delivery coordination — bringing the same platform thinking to its own home at The HQ.
              </p>
            </Reveal>
            <Reveal delay={100} className="bg-surface p-10 text-left">
              <div className="w-6 h-px bg-gold mb-5" />
              <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-3">The HQ Building</h3>
              <p className="text-sm text-beech/60 leading-relaxed">
                A dedicated internal services building on Lake Street, Cairns, purpose-built to bring property, construction and development businesses into one connected environment.
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
              One address for the people{' '}
              <em className="accent-serif text-gold lowercase">who build Cairns</em>
            </h2>
            <p className="text-beech/60 leading-relaxed">
              Leave your details and a member of the Landmarx team will be in touch to discuss availability, floorplates and tenancy options at The HQ Building.
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
                  Thank you. A member of the Landmarx team will contact you within 24 hours to discuss The HQ Building and answer your questions.
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
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/60 mb-2">Company / Business Name</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-surface border border-beech/15 px-4 py-3 text-sm text-beech placeholder:text-beech-mute/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/60 mb-2">Type of Space</label>
                    <select
                      value={form.spaceType}
                      onChange={e => setForm({ ...form, spaceType: e.target.value })}
                      className="w-full bg-surface border border-beech/15 px-4 py-3 text-sm text-beech focus:outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option value="">Select an option</option>
                      {spaceTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/60 mb-2">Team Size</label>
                    <input
                      type="number"
                      min="1"
                      value={form.teamSize}
                      onChange={e => setForm({ ...form, teamSize: e.target.value })}
                      placeholder="Number of people"
                      className="w-full bg-surface border border-beech/15 px-4 py-3 text-sm text-beech placeholder:text-beech-mute/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/60 mb-2">Approximate Space Required (m²)</label>
                    <input
                      type="number"
                      min="1"
                      value={form.spaceRequired}
                      onChange={e => setForm({ ...form, spaceRequired: e.target.value })}
                      placeholder="e.g. 50"
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
                    placeholder="Any specific questions about The HQ Building..."
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
                  Your information is kept confidential and used only to discuss The HQ Building with you. This page is for information purposes only and does not constitute an offer of tenancy.
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
            LANDMARX <span className="text-gold">·</span> The HQ Building
          </p>
          <p className="text-xs text-beech-mute/50">
            This information is indicative only and subject to change. Facilities and services to be confirmed prior to launch.
          </p>
        </div>
      </div>
    </>
  )
}
