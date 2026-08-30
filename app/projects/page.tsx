import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Projects — Landmarx Group',
  description:
    'Active and emerging real asset opportunities being originated, structured and progressed through the Landmarx platform.',
}

const focusAreas = [
  {
    num: '01',
    title: 'Commercial & Mixed-Use Projects',
    desc: 'Retail, office, mixed-use and activation precincts where underutilised sites can be repositioned into commercially viable and community-relevant assets.',
  },
  {
    num: '02',
    title: 'Housing & Residential Development',
    desc: 'Medium-density, townhouse, key worker, affordable and build-to-rent opportunities where housing demand can be matched with disciplined project structuring and delivery.',
  },
  {
    num: '03',
    title: 'Premium Co-Living',
    desc: 'Elevated share-style accommodation for professionals and short-term residents — private ensuited rooms, curated shared amenity and a hospitality-grade living experience.',
  },
  {
    num: '04',
    title: 'Civil & Infrastructure-Adjacent',
    desc: 'Projects requiring civil works, enabling infrastructure, site activation or infrastructure-led development pathways to unlock broader land and project value.',
  },
]

const pipeline = [
  {
    status: 'Active Project',
    active: true,
    sector: 'Internal Services & Coworking Building',
    name: 'The HQ Building',
    desc: 'A dedicated internal services building on Lake Street, Cairns, bringing independent property, construction and development businesses into one connected environment — with premium shared amenity, VIP facilities and flexible office or membership options.',
    role: 'Development, structuring and delivery of the building and its tenant ecosystem.',
    cta: 'Register interest — full details available',
    href: '/the-hq',
  },
  {
    status: 'Active Project',
    active: true,
    sector: 'Dual-Income Residential',
    name: 'Mountain View Estate',
    desc: 'A DA-approved dual-income duplex development in Edmonton, Cairns, delivering two independent dwellings on a single 600m² lot with a fixed price, rent guarantee and no body corporate.',
    role: 'Project structuring, delivery coordination and investor engagement — built by MyBuild Group.',
    cta: 'View investment details',
    href: '/cairns-dual',
  },
  {
    status: 'Under Assessment',
    active: false,
    sector: 'Housing & Residential',
    name: 'Regional Housing Program',
    desc: 'A staged housing delivery program targeting key worker and medium-density residential demand across high-growth regional Queensland markets.',
    role: 'Demand analysis, site origination, feasibility and structuring.',
    cta: null,
  },
  {
    status: 'Pipeline Opportunity',
    active: false,
    sector: 'Commercial & Mixed-Use',
    name: 'Mixed-Use Precinct',
    desc: 'An underutilised city-fringe landholding being assessed for repositioning into a commercially viable mixed-use and activation precinct.',
    role: 'Origination, approvals pathway and capital strategy.',
    cta: null,
  },
  {
    status: 'Coming Soon',
    active: false,
    sector: 'Infrastructure-Adjacent',
    name: 'Enabling Infrastructure Opportunity',
    desc: 'An infrastructure-led development pathway under early review, where enabling works can unlock broader land and project value for the surrounding precinct.',
    role: 'Early-stage assessment and stakeholder alignment.',
    cta: null,
  },
]

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-24 lg:pb-32 overflow-hidden bg-grid">
        <div className="glow absolute -top-40 right-0 w-[40rem] h-[40rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-up flex items-center gap-4 mb-8" style={{ animationDelay: '100ms' }}>
            <span className="h-px w-12 bg-gold" />
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold">Landmarx Projects</p>
          </div>
          <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5.5rem)] text-beech mb-10 max-w-5xl">
            <span className="hero-line"><span style={{ animationDelay: '200ms' }}>Where opportunity</span></span>
            <span className="hero-line">
              <span style={{ animationDelay: '350ms' }}>
                moves toward <em className="accent-serif text-gold lowercase">execution</em>
              </span>
            </span>
          </h1>
          <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-3xl" style={{ animationDelay: '550ms' }}>
            Landmarx Projects showcases the real asset opportunities being originated, structured
            and progressed through the Landmarx platform. From health and housing to mixed-use,
            regional growth and infrastructure-adjacent projects — each opportunity is shaped with
            a clear focus on commercial viability, capital readiness, delivery pathway and
            long-term value creation.
          </p>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-24 lg:py-32 bg-ink-deep border-y border-beech/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">Project Focus Areas</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-beech leading-tight mb-6">
              Where Landmarx looks <em className="accent-serif text-gold lowercase">for opportunity</em>
            </h2>
            <p className="text-beech/60 max-w-2xl leading-relaxed">
              We focus on real asset opportunities where market demand, land potential,
              stakeholder need and delivery capability can be brought together into a structured
              project pathway.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-beech/10 border border-beech/10">
            {focusAreas.map((f, i) => (
              <Reveal key={f.num} delay={i * 90} className="h-full">
                <div className="group h-full bg-ink-deep p-10 hover:bg-surface transition-colors duration-500">
                  <div className="font-display text-5xl font-bold text-beech/10 group-hover:text-gold/60 transition-colors duration-500 mb-6">
                    {f.num}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-beech mb-4 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-sm text-beech/60 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 pointer-events-none select-none" aria-hidden>
          <p className="outline-text font-display font-bold uppercase text-[12vw] leading-none -mr-6">Pipeline</p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 max-w-3xl">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">Active & Emerging Projects</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-beech leading-tight mb-6">
              A curated pipeline, <em className="accent-serif text-gold lowercase">not a catalogue</em>
            </h2>
            <p className="text-beech/60 leading-relaxed">
              Each project is assessed through the Landmarx platform with a focus on commercial
              viability, capital pathway, stakeholder alignment, delivery strategy and long-term
              value creation.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pipeline.map((p, i) => {
              const cardClass = `card-lift h-full flex flex-col border p-9 ${
                p.active ? 'bg-surface border-gold/40' : 'bg-surface/40 border-beech/10 hover:border-beech/25'
              }`
              const cardBody = (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-display text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 border ${
                        p.active ? 'border-gold/50 text-gold' : 'border-beech/20 text-beech-mute'
                      }`}
                    >
                      {p.status}
                    </span>
                    {p.active && <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden />}
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-beech-mute mb-3">{p.sector}</p>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-beech mb-4">{p.name}</h3>
                  <p className="text-sm text-beech/60 leading-relaxed mb-5">{p.desc}</p>
                  <p className="text-xs text-beech-mute leading-relaxed mb-8 flex-1">
                    <span className="text-beech/70 font-semibold">Landmarx role: </span>
                    {p.role}
                  </p>
                  {p.cta ? (
                    <span className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">
                      {p.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden>→</span>
                    </span>
                  ) : (
                    <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-beech-mute">
                      Details released in stages
                    </span>
                  )}
                </>
              )
              return (
                <Reveal key={p.name} delay={i * 100} className="h-full">
                  {p.cta ? (
                    <Link href={p.href || '/register-interest'} className="group block h-full">
                      <article className={cardClass}>{cardBody}</article>
                    </Link>
                  ) : (
                    <article className={cardClass}>{cardBody}</article>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 lg:py-36 border-t border-beech/10 overflow-hidden">
        <div className="glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95] text-beech mb-8">
              Have a project that <em className="accent-serif text-gold lowercase">belongs here?</em>
            </h2>
            <p className="text-beech/60 leading-relaxed max-w-2xl mx-auto mb-12">
              If you have a site, a stalled project or an opportunity that needs structure,
              capital or delivery capability — bring it forward. Within 48 hours of receiving the
              right information, we&apos;ll assess it and define the pathway.
            </p>
            <Link
              href="/register-interest"
              className="btn-sweep btn-sweep-beech inline-block bg-gold text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-10 py-4"
            >
              Bring Forward an Opportunity
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
