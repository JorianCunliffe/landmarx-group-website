import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Development Services — Landmarx Group',
  description:
    'End-to-end development management for complex real asset opportunities — from early assessment through funding, approvals, delivery and completion.',
}

const services = [
  {
    num: '01',
    title: 'Opportunity Assessment',
    desc: 'We assess the site, project or strategic objective to understand value drivers, constraints, risks, feasibility and the pathway required to progress.',
  },
  {
    num: '02',
    title: 'Feasibility & Commercial Structuring',
    desc: 'We shape the feasibility, development model, funding requirement, commercial arrangements and delivery structure needed to support informed decision-making.',
  },
  {
    num: '03',
    title: 'Capital Readiness & Investment Pathway',
    desc: 'We prepare projects for capital engagement by clarifying the investor proposition, funding pathway, governance model, risk profile and supporting documentation.',
  },
  {
    num: '04',
    title: 'Planning & Approvals',
    desc: 'We define and coordinate the planning pathway, approvals strategy, government interface and stakeholder requirements needed to keep projects moving.',
  },
  {
    num: '05',
    title: 'Design & Procurement Management',
    desc: 'We coordinate design teams, technical consultants, procurement strategy and delivery partners to align the project with market demand, cost, buildability and commercial objectives.',
  },
  {
    num: '06',
    title: 'Delivery & Governance',
    desc: 'We manage delivery coordination, reporting, risk, compliance, stakeholder alignment and decision pathways through to execution and completion.',
  },
]

export default function DevelopmentServices() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-24 lg:pb-32 overflow-hidden bg-grid">
        <div className="glow absolute -top-40 right-0 w-[40rem] h-[40rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-up flex items-center gap-4 mb-8" style={{ animationDelay: '100ms' }}>
            <span className="h-px w-12 bg-gold" />
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold">Development Services</p>
          </div>
          <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5.5rem)] text-beech mb-10 max-w-5xl">
            <span className="hero-line"><span style={{ animationDelay: '200ms' }}>End-to-end development</span></span>
            <span className="hero-line">
              <span style={{ animationDelay: '350ms' }}>
                management, <em className="accent-serif text-gold lowercase">done properly</em>
              </span>
            </span>
          </h1>
          <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-3xl" style={{ animationDelay: '550ms' }}>
            Landmarx Development Services helps landowners, councils, developers, project owners
            and strategic partners move opportunities from early assessment through to funding,
            approvals, delivery and completion. We can manage the full development pathway — or
            support specific stages where required.
          </p>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="py-20 border-y border-beech/10 bg-ink-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-2xl sm:text-3xl font-medium leading-snug text-beech max-w-4xl">
              Our role is to reduce fragmentation, create accountability and provide a clear
              execution pathway for projects that need more than advice — they need{' '}
              <em className="accent-serif text-gold">structure, momentum and disciplined delivery.</em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 pointer-events-none select-none" aria-hidden>
          <p className="outline-text font-display font-bold uppercase text-[13vw] leading-none -mr-6">Deliver</p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">Services</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-beech">
              From concept <em className="accent-serif text-gold lowercase">to completion</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-beech/10 border border-beech/10">
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 80} className="h-full">
                <div className="group h-full bg-ink p-9 hover:bg-surface transition-colors duration-500">
                  <div className="font-display text-4xl font-bold text-beech/10 group-hover:text-gold/60 transition-colors duration-500 mb-6">
                    {s.num}
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-beech mb-4 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-beech/60 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — beech inversion */}
      <section className="bg-paper text-ink py-24 lg:py-32 bg-grid-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                Need a development partner to{' '}
                <em className="accent-serif text-gold-deep lowercase">move your project forward?</em>
              </h2>
              <p className="text-ink/70 leading-relaxed max-w-2xl">
                Whether you have a site, a stalled project, an approval challenge, a funding
                requirement or an active development needing execution support — Landmarx can
                help assess, structure and manage the pathway forward.
              </p>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="btn-sweep btn-sweep-gold inline-block bg-ink text-beech hover:text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-10 py-4"
              >
                Discuss Your Project
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
