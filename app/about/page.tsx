import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'About — Landmarx Group',
  description:
    'Landmarx exists to unlock real asset opportunities trapped by complexity, fragmented ownership, funding gaps or unclear delivery pathways.',
}

const values = [
  {
    num: '01',
    title: 'Transparency',
    desc: 'Clear project information, structured documentation, disciplined reporting and visibility across the pathway — from opportunity assessment to execution.',
  },
  {
    num: '02',
    title: 'Accountability',
    desc: 'A single platform approach designed to reduce fragmentation, clarify responsibility and align the parties required to move projects forward.',
  },
  {
    num: '03',
    title: 'Commercial Discipline',
    desc: 'Feasibility, funding strategy, governance and risk assessment are built into the process before opportunities are advanced.',
  },
  {
    num: '04',
    title: 'Execution Bias',
    desc: 'Landmarx is built to progress opportunities, not simply discuss them — moving from concept to structure, funding, approvals and delivery.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-24 lg:pb-32 overflow-hidden bg-grid">
        <div className="glow absolute -top-40 right-0 w-[40rem] h-[40rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-up flex items-center gap-4 mb-8" style={{ animationDelay: '100ms' }}>
            <span className="h-px w-12 bg-gold" />
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold">About Landmarx</p>
          </div>
          <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5.5rem)] text-beech mb-10 max-w-5xl">
            <span className="hero-line"><span style={{ animationDelay: '200ms' }}>A platform for turning</span></span>
            <span className="hero-line">
              <span style={{ animationDelay: '350ms' }}>
                <em className="accent-serif text-gold lowercase">opportunity</em> into execution
              </span>
            </span>
          </h1>
          <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-3xl" style={{ animationDelay: '550ms' }}>
            Landmarx exists to unlock real asset opportunities that are often trapped by
            complexity, fragmented ownership, funding gaps or unclear delivery pathways. We bring
            together development expertise, capital structuring, project origination and scalable
            delivery solutions through four connected verticals — Development Services,
            Investment, Projects and Products. From our base in Cairns, we work across Australia
            with landowners, investors, government and strategic partners.
          </p>
        </div>
      </section>

      {/* Mission — beech inversion */}
      <section className="bg-paper text-ink py-24 lg:py-32 bg-grid-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold-deep mb-6">Our Mission</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-tight">
                Changing how real asset opportunities are{' '}
                <em className="accent-serif text-gold-deep lowercase">structured, funded</em> and delivered
              </h2>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-8">
              <p className="text-ink/70 leading-relaxed mb-6 text-lg">
                Too many valuable projects stall because the traditional development model is
                fragmented. Land, capital, approvals, delivery capability and stakeholder
                priorities are often disconnected — leaving opportunities underutilised, poorly
                structured or unable to progress.
              </p>
              <p className="text-ink/70 leading-relaxed mb-6">
                Investors are also too often asked to assess private development opportunities
                without the transparency, governance or execution discipline required to properly
                understand and manage risk.
              </p>
              <p className="font-display text-xl font-bold uppercase tracking-tight">
                Landmarx was created to change that.
              </p>
              <p className="text-ink/70 leading-relaxed mt-4">
                We bring landowners, investors, government and strategic partners into a more
                structured platform model — built around transparency, accountability, commercial
                discipline and a clear pathway to execution.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 border-b border-beech/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">What Drives Us</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-beech">
              Four principles. <em className="accent-serif text-gold lowercase">No exceptions.</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-beech/10 border border-beech/10">
            {values.map((v, i) => (
              <Reveal key={v.num} delay={i * 90} className="h-full">
                <div className="group h-full bg-ink p-10 hover:bg-surface transition-colors duration-500">
                  <div className="font-display text-5xl font-bold text-beech/10 group-hover:text-gold/60 transition-colors duration-500 mb-6">
                    {v.num}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-beech mb-4">{v.title}</h3>
                  <p className="text-sm text-beech/60 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership teaser */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-t border-beech/10">
        <div className="absolute bottom-0 left-0 pointer-events-none select-none" aria-hidden>
          <p className="outline-text font-display font-bold uppercase text-[16vw] leading-none -ml-6">Team</p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="max-w-3xl mx-auto">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">Leadership</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-beech leading-tight mb-6">
              Leadership built <em className="accent-serif text-gold lowercase">for execution</em>
            </h2>
            <p className="text-beech/60 leading-relaxed mb-10">
              Landmarx is led by operators with experience across development, construction,
              investment, infrastructure, government, strategy and complex project delivery. The
              team was assembled to do more than identify opportunities, it is built to assess
              risk, align stakeholders, structure commercial pathways and move real asset
              opportunities toward investment and execution.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-gold group"
            >
              Meet the team
              <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden>→</span>
            </Link>
          </Reveal>
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
