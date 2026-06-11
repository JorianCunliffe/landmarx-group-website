import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-ink-deep border-t border-beech/10 overflow-hidden">
      {/* Ghost watermark */}
      <div className="absolute -bottom-8 left-0 right-0 pointer-events-none select-none overflow-hidden" aria-hidden>
        <p className="outline-text font-display font-bold uppercase whitespace-nowrap text-[18vw] leading-none tracking-tight text-center">
          Landmarx
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Image src="/logo.svg" alt="Landmarx Development" width={64} height={74} className="h-16 w-auto mb-6" />
            <p className="text-sm text-beech-mute leading-relaxed">
              An integrated real asset development platform connecting land, capital, projects and
              delivery capability across Australia.
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Divisions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/development-services" className="text-beech/70 hover:text-gold transition-colors">Development Services</Link></li>
              <li><Link href="/investment" className="text-beech/70 hover:text-gold transition-colors">Investment</Link></li>
              <li><Link href="/projects" className="text-beech/70 hover:text-gold transition-colors">Projects</Link></li>
              <li><Link href="/products" className="text-beech/70 hover:text-gold transition-colors">Products</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-beech/70 hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-beech/70 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link href="/register-interest" className="text-beech/70 hover:text-gold transition-colors">Register Interest</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-beech/70">
              <li>
                <a href="tel:+61477842007" className="hover:text-gold transition-colors">+61 477 842 007</a>
              </li>
              <li>
                <a href="mailto:develop@landmarx.co" className="hover:text-gold transition-colors">develop@landmarx.co</a>
              </li>
              <li className="leading-relaxed">12/452 Sheridan St<br />Cairns North QLD 4870</li>
              <li className="text-beech-mute">Mon – Fri: 08:00 – 16:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-beech/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-beech-mute">© 2026 Landmarx Group Pty Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-beech-mute">
            <Link href="/privacy" className="hover:text-beech transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-beech transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-beech transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
