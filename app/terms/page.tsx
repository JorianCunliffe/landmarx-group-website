import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Terms of Use — Landmarx Group' }

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
      <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech mb-8">
        Terms of <em className="accent-serif text-gold lowercase">Use</em>
      </h1>
      <p className="text-beech/70 leading-relaxed mb-4">
        By accessing and using this website, you agree to be bound by these Terms of Use. This website is operated by Landmarx Group Pty Ltd ABN [to be confirmed].
      </p>
      <p className="text-beech/70 leading-relaxed mb-4">
        The information on this website is general in nature and does not constitute financial, investment or legal advice. Nothing on this website constitutes an offer to invest or a solicitation of investment.
      </p>
      <p className="text-beech/70 leading-relaxed mb-4">
        Landmarx Group Pty Ltd reserves the right to update these terms at any time without notice. Continued use of this website constitutes acceptance of any revised terms.
      </p>
      <p className="text-beech-mute text-sm mt-10">Last updated: January 2026. For enquiries, contact develop@landmarx.co</p>
    </div>
  )
}
