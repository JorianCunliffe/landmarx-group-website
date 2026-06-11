import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Investment — Landmarx Group',
  description:
    'A clearer way to participate in real asset opportunities. Glass box transparency for qualified, wholesale and strategic investors.',
}

const glassBox = [
  {
    title: 'Capital Contribution',
    desc: 'How investor capital is contributed and applied to the opportunity.',
  },
  {
    title: 'Project Costs',
    desc: 'The major cost categories, assumptions and delivery requirements underpinning the project.',
  },
  {
    title: 'Landmarx Fees & Margins',
    desc: 'The project-level fees, management costs and commercial margins associated with origination, funding, management and delivery.',
  },
  {
    title: 'Project Performance',
    desc: 'How the project is progressing against key milestones, budget, program and commercial assumptions.',
  },
  {
    title: 'Investor Economics',
    desc: 'The expected economic exposure, return profile, timing and risk considerations relevant to the opportunity.',
  },
  {
    title: 'Underlying Records',
    desc: 'Structured reporting and project-level financial records where appropriate — including Xero-level visibility where suitable.',
  },
]

const pathway = [
  {
    num: '01',
    title: 'Qualified Investor Access',
    desc: 'Participation is limited to qualified investors who meet the relevant eligibility requirements for each opportunity.',
  },
  {
    num: '02',
    title: 'Project-Specific Review',
    desc: 'Each opportunity is presented with its own documentation, commercial assumptions, risk considerations, governance pathway and investor economics.',
  },
  {
    num: '03',
    title: 'Glass Box Transparency',
    desc: 'Investors are given visibility over the elements that matter — capital contribution, project costs, Landmarx fees, performance, reporting and underlying records where appropriate.',
  },
  {
    num: '04',
    title: 'Disciplined Investor Process',
    desc: 'Engagement follows a controlled pathway from qualification and NDA through to information review, EOI, diligence and allocation.',
  },
]

export default function Investment() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-24 lg:pb-32 overflow-hidden bg-grid">
        <div className="glow absolute -top-40 right-0 w-[40rem] h-[40rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-up flex items-center gap-4 mb-8" style={{ animationDelay: '100ms' }}>
            <span className="h-px w-12 bg-gold" />
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold">Landmarx Invest</p>
          </div>
          <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5.5rem)] text-beech mb-10 max-w-5xl">
            <span className="hero-line"><span style={{ animationDelay: '200ms' }}>A clearer way to</span></span>
            <span className="hero-line">
              <span style={{ animationDelay: '350ms' }}>
                participate in <em className="accent-serif text-gold lowercase">real assets</em>
              </span>
            </span>
          </h1>
          <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-3xl" style={{ animationDelay: '550ms' }}>
            Landmarx Invest gives qualified investors access to selected property and real asset
            opportunities — backed by disciplined project structuring, transparent reporting and
            execution-focused governance. Understand the opportunity, the structure, the costs,
            the risks and the fees <em className="accent-serif text-gold text-xl">before</em> capital
            is committed.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 border-y border-beech/10 bg-ink-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-6">The Approach</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech leading-tight">
                Clarity <em className="accent-serif text-gold lowercase">before</em> capital
              </h2>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-8">
              <p className="text-beech/60 leading-relaxed mb-6">
                Private real asset opportunities are difficult to assess when the structure, fees,
                project costs, risks and delivery pathway are not clearly visible. Landmarx Invest
                is designed to solve that problem — presenting selected opportunities with
                disciplined project documentation, transparent assumptions, clear investor
                economics and defined governance.
              </p>
              <p className="text-beech/60 leading-relaxed">
                Our focus is not simply access to projects. It is access to opportunities that
                have been assessed, structured and prepared for informed investor review.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Glass box model */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-10 right-0 pointer-events-none select-none" aria-hidden>
          <p className="outline-text font-display font-bold uppercase text-[12vw] leading-none -mr-6">Glass</p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 max-w-3xl">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">The Differentiator</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-beech leading-tight mb-6">
              Built around the <em className="accent-serif text-gold lowercase">glass box</em> model
            </h2>
            <p className="text-beech/60 leading-relaxed">
              The Landmarx investment approach is based on clear project-level visibility. Where
              appropriate, investors can see straight through to the elements that matter:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glassBox.map((g, i) => (
              <Reveal key={g.title} delay={i * 80} className="h-full">
                <div className="card-lift h-full border border-gold/25 bg-gold/[0.04] backdrop-blur-sm p-8 hover:border-gold/50">
                  <div className="w-8 h-8 border border-gold/50 rotate-45 mb-8 flex items-center justify-center">
                    <span className="block w-2 h-2 bg-gold -rotate-45" aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-beech mb-3 leading-snug">
                    {g.title}
                  </h3>
                  <p className="text-sm text-beech/60 leading-relaxed">{g.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investor pathway — beech inversion */}
      <section className="bg-paper text-ink py-24 lg:py-32 bg-grid-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold-deep mb-5">How It Works</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight">
              The investor <em className="accent-serif text-gold-deep lowercase">pathway</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
            {pathway.map((s, i) => (
              <Reveal key={s.num} delay={i * 100} className="h-full">
                <div className="group h-full bg-paper p-8 hover:bg-ink hover:text-beech transition-colors duration-500">
                  <div className="font-display text-5xl font-bold text-ink/15 group-hover:text-gold transition-colors duration-500 mb-6">
                    {s.num}
                  </div>
                  <h3 className="font-display text-base font-bold uppercase tracking-wide mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/60 group-hover:text-beech/60 transition-colors duration-500">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investor access */}
      <section className="py-24 lg:py-32 border-b border-beech/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-8">
              <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">Investor Access</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech leading-tight mb-6">
                Controlled access to <em className="accent-serif text-gold lowercase">selected</em> opportunities
              </h2>
              <p className="text-beech/60 leading-relaxed max-w-2xl">
                Investor access is managed through a staged process — registration,
                qualification, confidentiality documentation and release of available project
                materials. Qualified investors may be invited to review selected opportunities
                through a controlled pathway covering project materials, diligence and expression
                of interest.
              </p>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-4 lg:text-right">
              <Link
                href="/register-interest"
                className="btn-sweep btn-sweep-beech inline-block bg-gold text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-10 py-4"
              >
                Request Investor Access
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compliance note */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-beech-mute leading-relaxed max-w-3xl">
            Investment-related information on this page is directed only at wholesale and
            sophisticated investors within the meaning of the Corporations Act 2001 (Cth).
            Nothing on this page constitutes an offer to invest, financial product advice or a
            recommendation to acquire any financial product. Past performance is not indicative
            of future results.
          </p>
        </div>
      </section>
    </>
  )
}
