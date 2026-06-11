import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Privacy Policy — Landmarx Group' }

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
      <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech mb-8">
        Privacy <em className="accent-serif text-gold lowercase">Policy</em>
      </h1>
      <p className="text-beech/70 leading-relaxed mb-4">
        Landmarx Group Pty Ltd (&ldquo;Landmarx&rdquo;) is committed to protecting your personal information. This policy explains how we collect, use and protect information you provide to us.
      </p>
      <p className="text-beech/70 leading-relaxed mb-4">
        Personal information collected through this website is used solely for the purpose of responding to your enquiry, progressing an opportunity assessment or managing an investor access pathway.
      </p>
      <p className="text-beech/70 leading-relaxed mb-4">
        We do not sell, rent or share your personal information with third parties except where required by law or where necessary to progress an opportunity you have brought forward.
      </p>
      <p className="text-beech-mute text-sm mt-10">Last updated: January 2026. For privacy enquiries, contact develop@landmarx.co</p>
    </div>
  )
}
