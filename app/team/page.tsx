import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Our Team — Landmarx Group',
  description:
    'Landmarx is led by operators with experience across development, construction, investment, infrastructure, government, strategy and complex project delivery.',
}

const leaders = [
  {
    initials: 'JC',
    name: 'Jorian Cunliffe',
    role: 'Managing Director',
    bio: 'Jorian brings more than 20 years of leadership experience across education, healthcare infrastructure, real estate development, energy and construction. He leads Landmarx with a focus on strategy, partnerships, organisational growth and project origination, converting complex opportunities into structured pathways for investment and delivery.',
  },
  {
    initials: 'BM',
    name: 'Beau Moriarty',
    role: 'Director of Construction',
    bio: 'Beau brings more than 15 years of construction and project delivery experience across project management, strategic planning and complex infrastructure. He leads construction strategy, procurement, buildability and delivery planning, ensuring every Landmarx opportunity is assessed with practical execution discipline from the outset.',
  },
  {
    initials: 'PV',
    name: 'Paul Vamvakaris',
    role: 'Deal Origination',
    bio: 'Paul brings more than 25 years of experience across real estate, construction, planning and law, having entered the property market in 1998. He has built and project managed in excess of $500 million in projects, including the Pullman Hotel Cairns, HMAS Cairns redevelopment and Fitzroy Island Resort. He supports Landmarx on deal origination and structuring.',
  },
]

const credibility = [
  { stat: '100+', label: 'Years combined leadership and delivery experience across the broader network' },
  { stat: '$500M+', label: 'Major project, infrastructure and housing portfolio experience' },
  { stat: '8 Sectors', label: 'Property, infrastructure, housing, health, energy, education, construction and investment' },
  { stat: 'End-to-End', label: 'Origination, structuring, governance, capital and delivery discipline in one model' },
]

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-24 lg:pb-32 overflow-hidden bg-grid">
        <div className="glow absolute -top-40 right-0 w-[40rem] h-[40rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-up flex items-center gap-4 mb-8" style={{ animationDelay: '100ms' }}>
            <span className="h-px w-12 bg-gold" />
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold">Our Team</p>
          </div>
          <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5.5rem)] text-beech mb-10 max-w-5xl">
            <span className="hero-line"><span style={{ animationDelay: '200ms' }}>Leadership built</span></span>
            <span className="hero-line">
              <span style={{ animationDelay: '350ms' }}>
                for <em className="accent-serif text-gold lowercase">execution</em>
              </span>
            </span>
          </h1>
          <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-3xl" style={{ animationDelay: '550ms' }}>
            Landmarx is led by operators with experience across development, construction,
            investment, infrastructure, government, strategy and complex project delivery. The
            team was assembled to do more than identify opportunities — it is built to assess
            risk, align stakeholders, structure commercial pathways and move real asset
            opportunities toward investment and execution.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 pointer-events-none select-none" aria-hidden>
          <p className="outline-text font-display font-bold uppercase text-[16vw] leading-none -ml-6">Team</p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 110} className="h-full">
                <article className="card-lift h-full bg-surface border border-beech/10 hover:border-gold/40 p-8 flex flex-col">
                  <div className="w-16 h-16 border border-gold/40 flex items-center justify-center mb-8">
                    <span className="font-display text-xl font-bold text-gold">{l.initials}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-beech mb-1">{l.name}</h3>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-6">{l.role}</p>
                  <p className="text-sm text-beech/60 leading-relaxed">{l.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Credibility row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-beech/10 border border-beech/10">
            {credibility.map((c, i) => (
              <Reveal key={c.stat} delay={i * 80} className="h-full">
                <div className="h-full bg-ink-deep p-8">
                  <p className="font-display text-3xl font-bold text-gold mb-3">{c.stat}</p>
                  <p className="text-xs text-beech-mute leading-relaxed">{c.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-28 lg:py-36 border-t border-beech/10 overflow-hidden">
        <div className="glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95] text-beech mb-8">
              Bring us the opportunity.<br />
              <em className="accent-serif text-gold lowercase">We&apos;ll shape the pathway.</em>
            </h2>
            <p className="text-beech/60 leading-relaxed max-w-2xl mx-auto mb-12">
              Landmarx works with landowners, investors, government, project owners and strategic
              partners to assess, structure and progress real asset opportunities across Australia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/register-interest"
                className="btn-sweep btn-sweep-beech bg-gold text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-10 py-4"
              >
                Register Interest
              </Link>
              <Link
                href="/contact"
                className="btn-sweep btn-sweep-beech border border-beech/30 text-beech hover:text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-10 py-4"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
