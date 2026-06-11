'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'

const nextSteps = [
  {
    num: '01',
    title: 'Submit your interest',
    desc: 'Tell us who you are, what type of opportunity you are bringing forward and how Landmarx may be able to assist.',
  },
  {
    num: '02',
    title: '48-hour review',
    desc: 'Our team reviews your submission and identifies the most relevant pathway across Development Services, Investment, Projects, Products or strategic partnerships.',
  },
  {
    num: '03',
    title: 'Pathway confirmed',
    desc: 'Where there is a clear fit, Landmarx will contact you to clarify the opportunity, required information and next steps.',
  },
  {
    num: '04',
    title: 'Move toward execution',
    desc: 'Next steps may include a meeting, NDA, project review, investor qualification, product discussion, development assessment or partnership pathway.',
  },
]

const interestTypes = [
  'Land / Site Opportunity',
  'Investment Access',
  'Development Services',
  'Project Partnership',
  'Products / Procurement',
  'Government / Council',
  'Tenant / Operator Interest',
  'General / Strategic Partnership',
]

const inputClass =
  'w-full bg-surface border border-beech/15 px-4 py-3 text-sm text-beech placeholder:text-beech-mute/60 focus:outline-none focus:border-gold transition-colors'

export default function RegisterInterest() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', organisation: '', interestType: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-20 lg:pb-28 overflow-hidden bg-grid">
        <div className="glow absolute -top-40 right-0 w-[40rem] h-[40rem]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-up flex items-center gap-4 mb-8" style={{ animationDelay: '100ms' }}>
            <span className="h-px w-12 bg-gold" />
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold">Register Interest</p>
          </div>
          <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.2rem,5.5vw,5rem)] text-beech mb-10 max-w-5xl">
            <span className="hero-line"><span style={{ animationDelay: '200ms' }}>Bring forward</span></span>
            <span className="hero-line">
              <span style={{ animationDelay: '350ms' }}>
                an <em className="accent-serif text-gold lowercase">opportunity</em>
              </span>
            </span>
          </h1>
          <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-3xl" style={{ animationDelay: '550ms' }}>
            Landmarx works with landowners, investors, government, project owners, delivery
            partners, tenants and suppliers to assess, structure and progress real asset
            opportunities. Whether you have land, capital, a project, a partnership opportunity,
            a tenancy requirement or a construction product pathway to explore — register your
            interest and our team will direct your enquiry to the right Landmarx pathway.
          </p>
        </div>
      </section>

      {/* What happens next — beech inversion */}
      <section className="bg-paper text-ink py-20 lg:py-28 bg-grid-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold-deep mb-5">What Happens Next</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-tight">
              From submission to <em className="accent-serif text-gold-deep lowercase">pathway</em> in 48 hours
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
            {nextSteps.map((s, i) => (
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

      {/* Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <Reveal>
              <div className="bg-surface border border-gold/30 p-12 text-center">
                <div className="w-16 h-16 border border-gold/50 rotate-45 flex items-center justify-center mx-auto mb-8">
                  <span className="-rotate-45 text-2xl text-gold">✓</span>
                </div>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-beech mb-4">
                  Interest registered
                </h2>
                <p className="text-beech/60 leading-relaxed">
                  Thank you for registering your interest with Landmarx. All submissions are
                  confidential. Our team will review your enquiry and be in contact within 48
                  hours where there is a clear pathway to explore.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-beech mb-2">
                    Register your interest
                  </h2>
                  <p className="text-sm text-beech-mute">All submissions are confidential.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/70 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/70 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/70 mb-2">
                      Organisation
                    </label>
                    <input
                      type="text"
                      value={form.organisation}
                      onChange={e => setForm({ ...form, organisation: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/70 mb-2">
                    Interest Type *
                  </label>
                  <select
                    required
                    value={form.interestType}
                    onChange={e => setForm({ ...form, interestType: e.target.value })}
                    className={`${inputClass} bg-surface`}
                  >
                    <option value="">Select interest type</option>
                    {interestTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/70 mb-2">
                    Message / Opportunity Summary *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe what you are bringing forward and how Landmarx may be able to assist..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-sweep btn-sweep-beech w-full bg-gold text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-10 py-4"
                >
                  Register Interest
                </button>
              </form>
            </Reveal>
          )}

          {/* Who should register */}
          <Reveal delay={120}>
            <div className="mt-14 p-8 bg-surface/60 border border-beech/10">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold mb-4">
                Who should register?
              </h3>
              <p className="text-sm text-beech/60 leading-relaxed mb-4">
                Landowners, investors, project owners, government stakeholders, delivery
                partners, tenants, suppliers and strategic partners are invited to register
                interest where they have a real asset opportunity, capital pathway, project
                requirement or commercial partnership to explore.
              </p>
              <p className="text-xs text-beech-mute leading-relaxed">
                Investment-related enquiries may require additional qualification before access
                to project information, confidential materials or investment documentation is
                provided.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
