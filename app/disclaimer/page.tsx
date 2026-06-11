import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Disclaimer — Landmarx Group' }

export default function Disclaimer() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
      <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-beech mb-8">
        Disclaimer
      </h1>
      <p className="text-beech/70 leading-relaxed mb-4">
        The information contained on this website is for general information purposes only. It does not constitute financial product advice, investment advice or a recommendation to acquire any financial product or interest in any project described herein.
      </p>
      <p className="text-beech/70 leading-relaxed mb-4">
        Any investment-related information on this website is directed only at wholesale investors or sophisticated investors as defined under the Corporations Act 2001 (Cth). If you do not meet these criteria, the investment-related content on this website does not apply to you.
      </p>
      <p className="text-beech/70 leading-relaxed mb-4">
        Past performance is not indicative of future results. All projects described are subject to risk and the achievement of projected outcomes is not guaranteed. Independent legal, financial and tax advice should be sought before making any investment decision.
      </p>
      <p className="text-beech/70 leading-relaxed mb-4">
        Landmarx Group Pty Ltd makes no representations or warranties as to the accuracy or completeness of information on this website and accepts no liability for any loss arising from reliance upon any information contained herein.
      </p>
      <p className="text-beech-mute text-sm mt-10">Last updated: January 2026. For enquiries, contact develop@landmarx.co</p>
    </div>
  )
}
