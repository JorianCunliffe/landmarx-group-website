import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Marquee from '@/components/Marquee'

export const metadata: Metadata = {
  title: 'Products — Landmarx Group',
  description:
    'Construction products, materials and prefabricated components that support better project delivery — cost visibility, quality control and delivery certainty.',
}

const capabilities = [
  {
    num: '01',
    title: 'Building Products & Materials',
    desc: 'Sourcing selected construction materials and building products — board systems, façade products, structural materials, cladding, glazing and fit-out components.',
  },
  {
    num: '02',
    title: 'Prefabricated & Modular Components',
    desc: 'Identifying and procuring prefabricated building components — bathroom pods, modular systems and repeatable construction elements that improve speed, consistency and quality.',
  },
  {
    num: '03',
    title: 'Procurement & Supplier Management',
    desc: 'Managing supplier relationships, product selection, commercial terms, procurement timing and supply pathways to support project cost and delivery certainty.',
  },
  {
    num: '04',
    title: 'Quality Assurance & Compliance',
    desc: 'Ensuring selected products are reviewed against project specifications, compliance requirements, warranty considerations and performance expectations.',
  },
  {
    num: '05',
    title: 'Logistics & Delivery Coordination',
    desc: 'Coordinating staging, storage, delivery timing and site integration so products arrive in line with project programs and construction sequencing.',
  },
  {
    num: '06',
    title: 'Project Integration',
    desc: 'Working with design, construction and delivery teams to ensure selected products are fit for purpose, commercially viable and properly integrated into the delivery model.',
  },
]

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-24 lg:pb-32 overflow-hidden bg-grid">
        <div className="glow absolute -top-40 right-0 w-[40rem] h-[40rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-up flex items-center gap-4 mb-8" style={{ animationDelay: '100ms' }}>
            <span className="h-px w-12 bg-gold" />
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold">Landmarx Products</p>
          </div>
          <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5.5rem)] text-beech mb-10 max-w-5xl">
            <span className="hero-line"><span style={{ animationDelay: '200ms' }}>Products that build</span></span>
            <span className="hero-line">
              <span style={{ animationDelay: '350ms' }}>
                <em className="accent-serif text-gold lowercase">certainty</em> into delivery
              </span>
            </span>
          </h1>
          <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-3xl" style={{ animationDelay: '550ms' }}>
            Landmarx Products manages access to selected construction materials, building
            products and prefabricated components for Landmarx projects and approved delivery
            partners. From magnesium board, bathroom pods and modular components to structural,
            façade, fit-out and specialist building products — our focus is improving cost
            visibility, quality control and delivery certainty across the construction pathway.
          </p>
        </div>
      </section>

      <Marquee
        items={[
          'Magnesium Board',
          'Bathroom Pods',
          'Modular Systems',
          'Structural Materials',
          'Façade Products',
          'Cladding & Glazing',
          'Fit-Out Components',
        ]}
      />

      {/* Capabilities */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 pointer-events-none select-none" aria-hidden>
          <p className="outline-text font-display font-bold uppercase text-[12vw] leading-none -mr-6">Supply</p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">Product Capabilities</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-beech">
              Controlling the <em className="accent-serif text-gold lowercase">supply chain</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-beech/10 border border-beech/10">
            {capabilities.map((c, i) => (
              <Reveal key={c.num} delay={i * 80} className="h-full">
                <div className="group h-full bg-ink p-9 hover:bg-surface transition-colors duration-500">
                  <div className="font-display text-4xl font-bold text-beech/10 group-hover:text-gold/60 transition-colors duration-500 mb-6">
                    {c.num}
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-beech mb-4 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-beech/60 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* eCommerce platform — beech inversion */}
      <section className="bg-paper text-ink py-24 lg:py-32 bg-grid-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-8">
              <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold-deep mb-5">The Platform</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                Sourcing, procurement and ordering —{' '}
                <em className="accent-serif text-gold-deep lowercase">in one place</em>
              </h2>
              <p className="text-ink/70 leading-relaxed max-w-2xl">
                The Landmarx Products platform provides access to selected construction
                materials, building products and prefabricated components used across Landmarx
                projects and approved partner developments. Through a dedicated ecommerce
                environment, buyers and project teams can review product information,
                specifications, supplier details and procurement pathways.
              </p>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="btn-sweep btn-sweep-gold inline-block bg-ink text-beech hover:text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-10 py-4"
              >
                View Product Catalogue →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95] text-beech mb-8">
              Source products<span className="text-gold">.</span> Supply products<span className="text-gold">.</span><br />
              <em className="accent-serif text-gold lowercase">Build with certainty.</em>
            </h2>
            <p className="text-beech/60 leading-relaxed max-w-2xl mx-auto mb-12">
              Landmarx Products connects selected construction materials, building products and
              prefabricated components with the projects and partners that need them. For product
              access, procurement support or supplier onboarding — contact the Landmarx Products
              team.
            </p>
            <Link
              href="/contact"
              className="btn-sweep btn-sweep-beech inline-block bg-gold text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-10 py-4"
            >
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
