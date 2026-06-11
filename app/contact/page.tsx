'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'

const enquiryTypes = [
  'Land / Site Opportunity',
  'Investment / Capital',
  'Development Services',
  'Project Partnership',
  'Products / Procurement',
  'Government / Council',
  'Media / General Enquiry',
]

const inputClass =
  'w-full bg-surface border border-beech/15 px-4 py-3 text-sm text-beech placeholder:text-beech-mute/60 focus:outline-none focus:border-gold transition-colors'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', organisation: '', enquiryType: '', message: '',
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
            <p className="font-display text-xs font-bold tracking-[0.4em] uppercase text-gold">Contact</p>
          </div>
          <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.2rem,5.5vw,5rem)] text-beech mb-10 max-w-5xl">
            <span className="hero-line"><span style={{ animationDelay: '200ms' }}>Bring us the opportunity.</span></span>
            <span className="hero-line">
              <span style={{ animationDelay: '350ms' }}>
                <em className="accent-serif text-gold lowercase">We&apos;ll shape the pathway.</em>
              </span>
            </span>
          </h1>
          <p className="fade-up text-beech/70 text-lg leading-relaxed max-w-3xl" style={{ animationDelay: '550ms' }}>
            Whether you have land, capital, a project, a partnership opportunity, a procurement
            requirement or a strategic objective to explore — Landmarx provides a clear pathway
            from first conversation to execution planning. Tell us what you are working on and
            the right person from our team will respond.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-beech/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact info */}
            <Reveal>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-beech mb-10">Get in touch</h2>
              <div className="space-y-8 text-sm">
                <div>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-2">Email</p>
                  <a href="mailto:opportunities@landmarx.co" className="text-beech/80 hover:text-gold transition-colors">
                    opportunities@landmarx.co
                  </a>
                </div>
                <div>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-2">Phone</p>
                  <a href="tel:+61477842007" className="text-beech/80 hover:text-gold transition-colors">
                    +61 477 842 007
                  </a>
                </div>
                <div>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-2">Office HQ</p>
                  <p className="text-beech/80 leading-relaxed">
                    12/452 Sheridan St<br />
                    Cairns North QLD 4870
                  </p>
                </div>
                <div>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-2">Operating Hours</p>
                  <p className="text-beech/80">Monday – Friday: 08:00 – 16:00</p>
                  <p className="text-beech-mute">Saturday – Sunday: Closed</p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={120} className="lg:col-span-2">
              {submitted ? (
                <div className="bg-surface border border-gold/30 p-12 text-center">
                  <div className="w-16 h-16 border border-gold/50 rotate-45 flex items-center justify-center mx-auto mb-8">
                    <span className="-rotate-45 text-2xl text-gold">✓</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-beech mb-4">Message received</h3>
                  <p className="text-beech/60 leading-relaxed max-w-md mx-auto">
                    Thank you for getting in touch. We aim to respond within one business day. A
                    member of the Landmarx team will be in contact with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-8">
                    <h2 className="font-display text-xl font-bold uppercase tracking-tight text-beech mb-2">
                      Start the conversation
                    </h2>
                    <p className="text-sm text-beech-mute">We aim to respond within one business day.</p>
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
                        Organisation Name
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
                      Enquiry Type *
                    </label>
                    <select
                      required
                      value={form.enquiryType}
                      onChange={e => setForm({ ...form, enquiryType: e.target.value })}
                      className={`${inputClass} bg-surface`}
                    >
                      <option value="">Select enquiry type</option>
                      {enquiryTypes.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-beech/70 mb-2">
                      Message / Summary *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you are working on..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-sweep btn-sweep-beech bg-gold text-ink font-display font-bold uppercase tracking-[0.15em] text-sm px-10 py-4"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
