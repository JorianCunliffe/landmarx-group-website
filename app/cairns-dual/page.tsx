'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '@/components/Reveal'
import Counter from '@/components/Counter'

/* ------------------------------------------------------------------ */
/*  DATA                                                                */
/* ------------------------------------------------------------------ */

const stats = [
  { value: 19, suffix: '%', label: 'Capital Growth — Edmonton (Last 12 Months)', prefix: '' },
  { value: 5.2, suffix: '%', label: 'Gross Yield', prefix: '' },
  { value: 1500, suffix: '/wk', label: 'Combined Rent', prefix: '$' },
  { value: 78000, suffix: '/yr', label: 'Annual Income', prefix: '$' },
  { value: 4, suffix: ' months', label: 'To Completion', prefix: '' },
]

const features = [
  { n: '3', label: 'Bedrooms per unit' },
  { n: '2', label: 'Bathrooms per unit' },
  { n: '1', label: 'Garage per unit' },
  { n: '2', label: 'Separate dwellings' },
  { n: '600', label: 'm² Land area' },
  { n: '299', label: 'm² Total build' },
]

const unitSpecs = [
  'Master bedroom with walk-in robe and ensuite',
  '2 further bedrooms',
  '2 bathrooms total',
  'Single garage with separate driveway',
  'Office / study',
  'Separate laundry',
  'Individual entry and utility connections',
]

const highlights = [
  { title: '19% Capital Growth', desc: 'Edmonton recorded 19% capital growth in the last 12 months — one of the strongest performing suburbs in Far North Queensland. Buy now, before the market moves further.', gold: true },
  { title: 'DA Approved', desc: 'Planning approval is in place. Building is already underway, removing development risk.' },
  { title: 'Fixed Price', desc: '$1,500,000 total fixed price. No surprises on construction cost.' },
  { title: 'Rent Guarantee', desc: '12-month developer-funded guarantee at $750/week per unit from settlement.' },
  { title: 'No Body Corporate', desc: 'Subject to final legal title — no ongoing body corporate fees reducing your net return.' },
  { title: 'Dual Income', desc: 'Two fully independent dwellings on one 600m² lot — two rent cheques, one purchase.' },
]

const gallery = [
  { src: '/cairns-dual/exterior.jpg', alt: 'Mountain View Estate exterior architectural render' },
  { src: '/cairns-dual/interior-2.jpg', alt: 'Living area interior render' },
  { src: '/cairns-dual/pool.jpg', alt: 'Outdoor entertaining area' },
  { src: '/cairns-dual/interior-3.jpg', alt: 'Dining and kitchen interior' },
  { src: '/cairns-dual/render-kitchen.png', alt: 'Kitchen render' },
  { src: '/cairns-dual/render-front.png', alt: 'Street-view exterior render' },
]

const callTimes = ['Morning (8am–12pm)', 'Afternoon (12pm–5pm)', 'Evening (5pm–7pm)', 'Anytime']

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function CairnsDual() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', callTime: '', message: '' })
  const [active, setActive] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-ink">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/cairns-dual/exterior.jpg"
            alt="Mountain View Estate — Edmonton, Cairns"
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
                Mountain View Estate · Edmonton, Cairns
              </p>
            </div>

            <h1 className="font-display font-bold uppercase tracking-tight leading-[0.92] text-[clamp(2.8rem,6.5vw,5.5rem)] text-beech mb-8">
              <span className="hero-line"><span style={{ animationDelay: '180ms' }}>Two incomes.</span></span>
              <span className="hero-line">
                <span style={{ animationDelay: '330ms' }}>
                  One <em className="accent-serif text-gold lowercase">investment.</em>
                </span>
              </span>
            </h1>

            <div className="fade-up mb-6" style={{ animationDelay: '440ms' }}>
              <div className="inline-flex items-center gap-3 border border-gold/40 bg-gold/10 px-4 py-2.5">
                <span className="font-display text-2xl font-bold text-gold">19%</span>
                <div>
                  <div className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-gold">Capital Growth</div>
                  <div className="font-display text-[9px] uppercase tracking-[0.2em] text-beech/50">Edmonton · Last 12 Months</div>
                </div>
              </div>
            </div>

            <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-xl mb-10"
              style={{ animationDelay: '520ms' }}>
              Edmonton posted <span className="text-gold font-semibold">19% capital growth</span> last year — making it one of Cairns&apos; fastest-moving suburbs. Lock in now with a DA-approved dual-income duplex delivering{' '}
              <span className="text-beech font-semibold">$1,500/week</span> at a{' '}
              <span className="text-gold font-semibold">5.2% gross yield</span>, fixed price, rent guaranteed.
            </p>

            <div className="fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '680ms' }}>
              <a
                href="#book-a-call"
                className="btn-sweep btn-sweep-gold font-display font-bold uppercase tracking-widest text-sm px-8 py-4 border border-gold text-gold hover:text-ink transition-colors duration-400"
              >
                Book a Call →
              </a>
              <a
                href="#investment-overview"
                className="btn-sweep btn-sweep-beech font-display font-bold uppercase tracking-widest text-sm px-8 py-4 border border-beech/30 text-beech/70 hover:text-ink transition-colors duration-400"
              >
                View the Numbers
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
              {['19% CAPITAL GROWTH · EDMONTON', 'DA APPROVED', 'BUILDING UNDERWAY', '4 MONTHS TO COMPLETION', 'NO BODY CORPORATE', '$1,500/WK COMBINED RENT', '5.2% GROSS YIELD', '12-MONTH RENT GUARANTEE', 'FIXED PRICE $1,500,000', 'DUAL INCOME DUPLEX'].map(t => (
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
      <section id="investment-overview" className="bg-ink border-b border-beech/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-beech/10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className={`px-8 py-10 text-center ${i === 0 ? 'bg-gold/10 border-b border-gold/20 lg:border-b-0 col-span-2 lg:col-span-1' : ''}`}>
                <div className={`font-display text-4xl sm:text-5xl font-bold mb-1 ${i === 0 ? 'text-gold text-5xl sm:text-6xl' : 'text-gold'}`}>
                  {s.prefix}<Counter end={s.value} suffix={s.suffix} duration={1600} />
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
                  One block.<br />
                  Two dwellings.<br />
                  <em className="accent-serif text-gold lowercase">Dual income.</em>
                </h2>
                <p className="text-beech/60 leading-relaxed mb-5">
                  Edmonton recorded <span className="text-beech font-semibold">19% capital growth in the last 12 months</span> — one of the strongest growth rates in Far North Queensland. Mountain View Estate puts you into this market now: a DA-approved dual-income duplex structured by Landmarx Development Pty Ltd and built by MyBuild Group, delivering two fully independent dwellings on a single 600m² lot.
                </p>
                <p className="text-beech/60 leading-relaxed mb-8">
                  Each unit earns $750 per week. Combined, the investment generates $1,500 per week — $78,000 annually — at a 5.2% gross yield, with a developer-funded 12-month rent guarantee from settlement. The income pays you while the land works.
                </p>
                <div className="flex items-center gap-4">
                  <span className="h-px w-6 bg-gold/50" />
                  <p className="text-beech-mute text-sm">Structured by Landmarx Development Pty Ltd · Built by MyBuild Group</p>
                </div>
              </Reveal>
            </div>
            <div className="grid grid-cols-3 gap-px bg-beech/10 border border-beech/10">
              {features.map((f, i) => (
                <Reveal key={f.label} delay={i * 60}>
                  <div className="bg-surface p-6 text-center">
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
              Why Mountain View Estate
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className={`group transition-colors duration-500 p-8 ${h.gold ? 'bg-ink col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row sm:items-center gap-6' : 'bg-paper hover:bg-ink'}`}>
                  {h.gold ? (
                    <>
                      <div className="shrink-0">
                        <div className="font-display text-6xl sm:text-7xl font-bold text-gold leading-none">19%</div>
                        <div className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold/60 mt-1">Capital Growth</div>
                        <div className="font-display text-[9px] uppercase tracking-[0.2em] text-beech/30 mt-0.5">Edmonton · Last 12 Months</div>
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

      {/* ── GALLERY ── */}
      <section className="py-20 lg:py-28 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Gallery</p>
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-beech">
              Renders &amp; Visualisations
            </h2>
          </Reveal>

          {/* Featured large image */}
          <Reveal className="mb-2">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                fill
                className="object-cover object-center transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
          </Reveal>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-6 gap-px bg-beech/5">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-square overflow-hidden transition-all ${i === active ? 'ring-1 ring-gold' : 'opacity-50 hover:opacity-80'}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="15vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIT SPECIFICATIONS ── */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold" />
                <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Unit Specifications</p>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech mb-6">
                Each dwelling includes
              </h2>
              <ul className="space-y-3 mb-8">
                {unitSpecs.map(s => (
                  <li key={s} className="flex items-start gap-4 text-sm text-beech/70">
                    <span className="text-gold mt-0.5 shrink-0">→</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="border border-beech/10 rounded p-6">
                <div className="grid grid-cols-2 gap-6 text-sm">
                  {[
                    { label: 'Per unit floor area', val: '~149.63m²' },
                    { label: 'Total build area', val: '~299m²' },
                    { label: 'Land area', val: '600m²' },
                    { label: 'Total price', val: '$1,500,000' },
                    { label: 'Weekly rent (combined)', val: '$1,500/wk' },
                    { label: 'Body corporate', val: 'None' },
                  ].map(r => (
                    <div key={r.label}>
                      <div className="text-beech-mute text-xs uppercase tracking-wider mb-1">{r.label}</div>
                      <div className="font-display font-bold text-beech">{r.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/cairns-dual/render-front.png"
                  alt="Mountain View Estate front render"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              <div className="mt-4 relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/cairns-dual/render-kitchen.png"
                  alt="Mountain View Estate kitchen render"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FINANCIAL SUMMARY ── */}
      <section className="py-20 lg:py-28 bg-paper bg-grid-paper">
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
                {[
                  { label: 'Edmonton Capital Growth', val: '19%', note: 'Last 12 months — suburb median price movement', highlight: true },
                  { label: 'Total Fixed Price', val: '$1,500,000', note: 'No construction cost variation' },
                  { label: 'Rent — Unit 1', val: '$750/week', note: 'Proposed market rent' },
                  { label: 'Rent — Unit 2', val: '$750/week', note: 'Proposed market rent' },
                  { label: 'Combined Weekly Income', val: '$1,500/week', note: '$78,000 per annum', highlight: true },
                  { label: 'Indicative Gross Yield', val: '5.2%', note: 'Based on proposed income', highlight: true },
                  { label: 'Rent Guarantee Period', val: '12 months', note: 'Developer-funded, from settlement' },
                  { label: 'Body Corporate', val: 'None', note: 'Subject to final legal title confirmation' },
                  { label: 'DA Status', val: 'Approved', note: 'Building underway' },
                  { label: 'Estimated Completion', val: '~4 months', note: 'From current date' },
                ].map(r => (
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
              Financial projections are indicative only. Rental income figures are proposed and not guaranteed beyond the 12-month rent guarantee period. Investors should obtain independent financial, legal and taxation advice before making any investment decision.
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHY EDMONTON ── */}
      <section className="py-20 lg:py-28 bg-ink bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src="/cairns-dual/pool.jpg"
                  alt="Edmonton development — outdoor entertaining area"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>
              <div className="relative aspect-[3/2] overflow-hidden mt-2">
                <Image
                  src="/cairns-dual/interior-2.jpg"
                  alt="Interior render — living area"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-gold" />
                  <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Location</p>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech mb-6">
                  Edmonton,<br />
                  <em className="accent-serif text-gold lowercase">Cairns South</em>
                </h2>

                {/* Capital growth callout */}
                <div className="border-l-2 border-gold pl-5 mb-6">
                  <div className="font-display text-4xl font-bold text-gold">19%</div>
                  <div className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold/70">Capital Growth in 12 Months</div>
                  <p className="text-beech/60 text-sm mt-2 leading-relaxed">
                    Edmonton&apos;s median property price grew 19% over the last year — one of the highest rates in Far North Queensland and a signal of sustained demand from both owner-occupiers and investors.
                  </p>
                </div>

                <p className="text-beech/60 leading-relaxed mb-5">
                  Edmonton sits in Cairns&apos; southern growth corridor — one of the most active residential expansion zones in the region. Infrastructure investment, population growth, and tight rental supply are all driving values upward. Investors who move early capture the most growth.
                </p>
                <p className="text-beech/60 leading-relaxed mb-8">
                  With Cairns continuing to expand as a hub for health, education, tourism and services, demand for quality housing in southern suburbs continues to outpace supply.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: '19% Capital Growth', desc: 'Suburb median — last 12 months' },
                    { title: 'Strong Rental Demand', desc: 'Tight supply, consistent tenant demand' },
                    { title: 'Infrastructure Investment', desc: 'Active regional infrastructure spend' },
                    { title: 'Regional Hub Growth', desc: 'Cairns expanding as a services centre' },
                  ].map(p => (
                    <Reveal key={p.title}>
                      <div className="border border-beech/10 p-4">
                        <div className="font-display text-xs font-bold uppercase tracking-wide text-beech mb-1">{p.title}</div>
                        <div className="text-xs text-beech-mute">{p.desc}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEVELOPERS ── */}
      <section className="py-20 lg:py-28 bg-surface border-y border-beech/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Developer &amp; Builder</p>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-beech">
              Structured and built by specialists
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-beech/10 max-w-3xl mx-auto border border-beech/10">
            <Reveal className="bg-surface p-10 text-left">
              <div className="w-6 h-px bg-gold mb-5" />
              <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-3">Landmarx Development</h3>
              <p className="text-sm text-beech/60 leading-relaxed">
                Landmarx Development Pty Ltd structures real asset opportunities across feasibility, commercial modelling, capital pathways and delivery coordination — ensuring the project is built on sound fundamentals before any investor is engaged.
              </p>
            </Reveal>
            <Reveal delay={100} className="bg-surface p-10 text-left">
              <div className="w-6 h-px bg-gold mb-5" />
              <h3 className="font-display font-bold uppercase tracking-wide text-beech mb-3">MyBuild Group</h3>
              <p className="text-sm text-beech/60 leading-relaxed">
                MyBuild Residential Pty Ltd is a Cairns-based construction company with deep local market expertise. Building is already underway, with an estimated 4-month timeline to completion and handover.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BOOK A CALL ── */}
      <section id="book-a-call" className="py-20 lg:py-28 bg-ink bg-grid scroll-mt-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold" />
              <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold">Book a Call</p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech mb-4">
              Get the full{' '}
              <em className="accent-serif text-gold lowercase">information pack</em>
            </h2>
            <p className="text-beech/60 leading-relaxed">
              Edmonton posted <span className="text-beech font-semibold">19% capital growth</span> last year and the market is still moving. Leave your details and a member of the Landmarx team will call you to walk through the numbers, answer your questions, and send you the full information pack.
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
                  Thank you. A member of the Landmarx team will contact you within 24 hours to discuss Mountain View Estate and answer your questions.
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
                  className="btn-sweep btn-sweep-gold w-full font-display font-bold uppercase tracking-widest text-sm px-8 py-4 border border-gold text-gold hover:text-ink transition-colors duration-400"
                >
                  Book My Call →
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
            LANDMARX <span className="text-gold">·</span> Mountain View Estate
          </p>
          <p className="text-xs text-beech-mute/50">
            This information is indicative only and subject to change. Seek independent advice before investing.
          </p>
        </div>
      </div>
    </>
  )
}
