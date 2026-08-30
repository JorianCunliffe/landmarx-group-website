import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Counter from '@/components/Counter'
import Marquee from '@/components/Marquee'

const divisions = [
  {
    num: '01',
    name: 'Development Services',
    mandate:
      'For landowners, government, councils, developers and project owners seeking support with feasibility, structuring, approvals strategy, development management or delivery coordination.',
    href: '/development-services',
  },
  {
    num: '02',
    name: 'Investment',
    mandate:
      'For sophisticated, wholesale and strategic investors seeking access to selected real asset opportunities that have been commercially assessed, structured and prepared for execution.',
    href: '/investment',
  },
  {
    num: '03',
    name: 'Projects',
    mandate:
      "For partners, investors and stakeholders seeking to understand or participate in Landmarx's active and emerging project pipeline.",
    href: '/projects',
  },
  {
    num: '04',
    name: 'Products',
    mandate:
      'For clients and partners seeking repeatable housing, procurement, construction, development or delivery solutions that can be deployed across multiple sites and markets.',
    href: '/products',
  },
]

const projects = [
  {
    status: 'Leasing Now',
    active: true,
    sector: 'Internal Services & Coworking Building',
    name: 'The HQ Building',
    desc: 'A dedicated internal services building on Lake Street, Cairns, bringing independent property, construction and development businesses into one connected environment — with premium shared amenity and VIP facilities.',
    relevance:
      'The Landmarx platform in action — structuring, developing and delivering its own home base, and bringing the people who build Cairns together under one roof.',
    href: '/the-hq',
  },
  {
    status: 'EOI Open',
    active: true,
    sector: 'Dual-Income Residential',
    name: 'Mountain View Estate',
    desc: 'A DA-approved dual-income duplex in Edmonton, Cairns — two fully independent dwellings on one 600m² lot, delivering $1,500 per week combined rent with a 12-month rent guarantee.',
    relevance:
      'A structured, fixed-price investment opportunity in one of Cairns\' fastest-growing suburbs, built and delivered through the Landmarx platform.',
    href: '/cairns-dual',
  },
  {
    status: 'Under Assessment',
    active: false,
    sector: 'Housing & Residential',
    name: 'Regional Housing Program',
    desc: 'A staged housing delivery program targeting key worker and medium-density residential demand across high-growth regional Queensland markets.',
    relevance:
      'Demonstrates the platform pathway from demand analysis and site origination through to structured, repeatable housing delivery.',
  },
  {
    status: 'Pipeline Opportunity',
    active: false,
    sector: 'Commercial & Mixed-Use',
    name: 'Mixed-Use Precinct',
    desc: 'An underutilised city-fringe landholding being assessed for repositioning into a commercially viable mixed-use and activation precinct.',
    relevance:
      'Origination and structuring underway — feasibility, approvals pathway and capital strategy in development.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Bring the Opportunity',
    desc: 'Bring forward a site, project, capital requirement, partnership opportunity or strategic objective.',
  },
  {
    num: '02',
    title: 'Assess the Pathway',
    desc: 'Landmarx reviews the commercial drivers, constraints, feasibility, approvals position, funding requirement, governance needs and delivery pathway.',
  },
  {
    num: '03',
    title: 'Define the Plan',
    desc: 'We establish the next steps, structure, timeframe, required partners and decision points required to move the opportunity forward.',
  },
  {
    num: '04',
    title: 'Progress to Execution',
    desc: 'The opportunity is advanced through the appropriate Landmarx pathway — development services, investment, project delivery, partner engagement or product deployment.',
  },
]

const capabilities = [
  { title: 'Development & Origination', desc: 'Identifying sites, shaping opportunities and creating viable project pathways.' },
  { title: 'Capital & Structuring', desc: 'Building commercial models, funding pathways, governance and investor-ready opportunities.' },
  { title: 'Construction & Delivery', desc: 'Managing delivery strategy, procurement, buildability and execution risk.' },
  { title: 'Government & Stakeholder Alignment', desc: 'Working across councils, agencies, landowners, operators and strategic partners.' },
  { title: 'Infrastructure & Major Projects', desc: 'Applying large-scale project discipline to real asset opportunities.' },
  { title: 'Technology & Productisation', desc: 'Creating repeatable systems, products and delivery models that can scale.' },
]

export default function Home() {
  return (
    <>
      {/* ============================== Hero ============================== */}
      <section className="relative min-h-svh flex flex-col justify-center overflow-hidden bg-grid">
        <div className="glow absolute -top-40 -right-40 w-[42rem] h-[42rem]" aria-hidden />
        <div className="glow absolute -bottom-64 -left-64 w-[50rem] h-[50rem]" style={{ animationDelay: '3s' }} aria-hidden />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28 w-full">
          <div className="fade-up flex items-center gap-4 mb-10" style={{ animationDelay: '120ms' }}>
            <span className="h-px w-12 bg-gold" />
            <p className="font-display text-[11px] sm:text-xs font-bold tracking-[0.4em] uppercase text-gold">
              Integrated Real Asset Platform
            </p>
          </div>

          <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.6rem,7.5vw,6.5rem)] text-beech mb-10">
            <span className="hero-line"><span style={{ animationDelay: '200ms' }}>Complex opportunities,</span></span>
            <span className="hero-line">
              <span style={{ animationDelay: '350ms' }}>
                made <em className="accent-serif text-gold not-italic lowercase">structured,</em>
              </span>
            </span>
            <span className="hero-line">
              <span style={{ animationDelay: '500ms' }}>
                <em className="accent-serif text-gold lowercase">investable</em> &amp; built.
              </span>
            </span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <p className="fade-up text-base sm:text-lg text-beech/70 leading-relaxed max-w-xl" style={{ animationDelay: '700ms' }}>
              Valuable sites stall when land, capital, approvals and delivery capability are
              disconnected. Landmarx brings them together — one platform that originates,
              structures, funds and delivers commercially compelling real asset opportunities
              across Australia.
            </p>
            <div className="fade-up flex flex-col sm:flex-row lg:justify-end gap-4" style={{ animationDelay: '850ms' }}>
              <Link
                href="/register-interest"
                className="btn-sweep btn-sweep-beech bg-gold text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 text-center"
              >
                Register Interest
              </Link>
              <Link
                href="/projects"
                className="btn-sweep btn-sweep-beech border border-beech/30 text-beech hover:text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 text-center"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="fade-up absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animationDelay: '1100ms' }} aria-hidden>
          <span className="text-[10px] uppercase tracking-[0.35em] text-beech-mute">Scroll</span>
          <span className="block w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ============================ Marquee ============================= */}
      <Marquee
        items={[
          'Health Precincts',
          'Housing & Residential',
          'Mixed-Use',
          'Regional Growth',
          'Infrastructure-Adjacent',
          'Capital Structuring',
          'Development Management',
        ]}
      />

      {/* ====================== The Problem / Position ==================== */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-6">Why Landmarx</p>
                <div className="h-px w-full bg-gradient-to-r from-gold/60 to-transparent" />
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={120}>
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug text-beech mb-8">
                  Too many valuable projects never happen. Land, capital, approvals and delivery
                  sit in separate hands — and investors are asked to commit without the{' '}
                  <em className="accent-serif text-gold">structure, transparency or discipline</em>{' '}
                  required to properly manage risk.
                </p>
                <p className="text-beech/60 leading-relaxed max-w-2xl">
                  Landmarx was built to close that gap. We operate as a single, integrated
                  development platform — aligning landowners, investors, government and delivery
                  partners around opportunities with a clear pathway to execution.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ Divisions =========================== */}
      <section className="py-24 lg:py-32 bg-ink-deep border-y border-beech/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">Our Divisions</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-beech leading-tight mb-6">
              Four ways in.<br />
              <em className="accent-serif text-gold lowercase">One platform</em> behind them.
            </h2>
            <p className="text-beech/60 max-w-2xl leading-relaxed">
              Landmarx provides multiple entry points for landowners, investors, government,
              project owners and strategic partners. Each division operates independently — or
              combines with the others when a project demands a fully integrated pathway from
              opportunity to execution.
            </p>
          </Reveal>

          <div className="border-t border-beech/10">
            {divisions.map((d, i) => (
              <Reveal key={d.num} delay={i * 80}>
                <Link
                  href={d.href}
                  className="group grid sm:grid-cols-12 gap-4 sm:gap-8 items-start py-10 border-b border-beech/10 hover:bg-surface/60 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4"
                >
                  <span className="sm:col-span-1 font-display text-sm font-bold text-gold/50 group-hover:text-gold transition-colors pt-2">
                    {d.num}
                  </span>
                  <h3 className="sm:col-span-4 font-display text-2xl lg:text-3xl font-bold uppercase tracking-tight text-beech group-hover:text-gold transition-colors leading-tight">
                    {d.name}
                  </h3>
                  <p className="sm:col-span-6 text-sm text-beech/60 leading-relaxed pt-1">{d.mandate}</p>
                  <span className="sm:col-span-1 hidden sm:flex justify-end pt-2 text-gold text-xl transition-transform duration-500 group-hover:translate-x-2" aria-hidden>
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== Featured Projects ======================= */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 pointer-events-none select-none" aria-hidden>
          <p className="outline-text font-display font-bold uppercase text-[14vw] leading-none -mr-8">Built</p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">Featured Projects</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-beech leading-tight">
                A pipeline in <em className="accent-serif text-gold lowercase">motion</em>
              </h2>
            </div>
            <p className="text-beech/60 max-w-md leading-relaxed text-sm">
              Real asset opportunities across health, housing, mixed-use, regional growth and
              infrastructure-adjacent development — each one a different part of the platform at work.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => {
              const cardClass = `card-lift h-full flex flex-col border p-8 ${
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
                    <span className="text-beech/70 font-semibold">Platform relevance: </span>
                    {p.relevance}
                  </p>
                  {p.active ? (
                    <span className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">
                      View project details
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
                <Reveal key={p.name} delay={i * 110} className="h-full">
                  {p.active ? (
                    <Link href={p.href || '/projects'} className="group block h-full">
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

      {/* ====================== How It Works — beech ===================== */}
      <section className="relative bg-paper text-ink py-24 lg:py-32 bg-grid-paper overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-6">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold-deep mb-5">How It Works</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95] mb-8">
              Walk in with an opportunity.<br />
              <em className="accent-serif text-gold-deep lowercase">Leave with a plan.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-ink/70 leading-relaxed max-w-2xl mb-16">
              Landmarx is built to move opportunities from conversation to clarity at speed.
              Within <span className="font-bold text-ink">48 hours</span> of receiving the right
              information, we assess the opportunity, identify the pathway and define the next
              steps toward execution — an initial pathway assessment, delivered with commercial
              discipline.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
            {steps.map((s, i) => (
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

          <Reveal delay={200} className="mt-12">
            <Link
              href="/register-interest"
              className="btn-sweep btn-sweep-gold inline-block bg-ink text-beech hover:text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-8 py-4"
            >
              Start the process →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ========================== Leadership ============================ */}
      <section className="py-24 lg:py-32 border-b border-beech/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <Reveal>
              <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">Leadership</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-beech leading-tight mb-8">
                Built for complex<br />
                <em className="accent-serif text-gold lowercase">real asset</em> execution
              </h2>
              <p className="text-beech/60 leading-relaxed mb-6">
                Landmarx brings together development, construction, infrastructure, capital,
                government and project delivery specialists — more than 100 years of combined
                experience across the broader leadership and delivery network.
              </p>
              <p className="text-beech/60 leading-relaxed mb-10">
                This is not a single-discipline development team. It is a platform team built to
                align land, capital, approvals, delivery partners and commercial strategy around
                high-value real asset opportunities.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-gold group"
              >
                Meet the full team
                <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden>→</span>
              </Link>
            </Reveal>

            <div className="space-y-0 border-t border-beech/10">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 70}>
                  <div className="group flex gap-6 py-5 border-b border-beech/10">
                    <span className="w-1.5 h-1.5 mt-2.5 shrink-0 bg-gold/40 group-hover:bg-gold transition-colors" aria-hidden />
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-wide text-beech mb-1">{c.title}</h3>
                      <p className="text-sm text-beech-mute leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Metric counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-beech/10 border border-beech/10">
            <Reveal className="h-full">
              <div className="h-full bg-ink p-10">
                <p className="font-display text-5xl lg:text-6xl font-bold text-gold mb-3">
                  <Counter end={100} suffix="+" />
                </p>
                <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-beech mb-2">Years Combined</p>
                <p className="text-sm text-beech-mute leading-relaxed">
                  Leadership and delivery experience across our collective network.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <div className="h-full bg-ink p-10">
                <p className="font-display text-5xl lg:text-6xl font-bold text-gold mb-3">
                  <Counter end={120} prefix="$" suffix="B+" />
                </p>
                <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-beech mb-2">Portfolio Experience</p>
                <p className="text-sm text-beech-mute leading-relaxed">
                  Major project, infrastructure and housing development execution experience.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240} className="h-full">
              <div className="h-full bg-ink p-10">
                <p className="font-display text-5xl lg:text-6xl font-bold text-gold mb-3">100%</p>
                <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-beech mb-2">Fully Integrated</p>
                <p className="text-sm text-beech-mute leading-relaxed">
                  Seamless capability across origination, capital, construction and final asset delivery.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================== Get Involved ========================== */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-8">Get Involved</p>
            <h2 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.4rem,6.5vw,5.5rem)] text-beech mb-10">
              Land<span className="text-gold">.</span> Capital<span className="text-gold">.</span><br />
              Projects<span className="text-gold">.</span> Partners<span className="text-gold">.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-beech/60 leading-relaxed max-w-2xl mx-auto mb-12">
              Landmarx brings together the people, structures and capability required to move real
              asset opportunities forward. If you have land, capital, a project opportunity,
              delivery capability or a strategic partnership to explore — start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/register-interest"
                className="btn-sweep btn-sweep-beech bg-gold text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-10 py-4"
              >
                Register Your Interest
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
