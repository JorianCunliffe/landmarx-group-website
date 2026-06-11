'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/development-services', label: 'Development Services' },
  { href: '/investment', label: 'Investment' },
  { href: '/projects', label: 'Projects' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        scrolled || mobileOpen
          ? 'bg-ink-deep/90 backdrop-blur-md border-beech/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setMobileOpen(false)}>
            <Image src="/logo.svg" alt="Landmarx Development" width={48} height={56} className="h-12 w-auto" priority />
            <span className="hidden sm:block font-display text-[10px] font-medium tracking-[0.4em] uppercase text-beech-mute">
              Group
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-[13px] font-medium tracking-wide text-beech/80 hover:text-beech transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              href="/register-interest"
              className="btn-sweep btn-sweep-beech bg-gold text-ink hover:text-ink text-[13px] font-display font-bold uppercase tracking-[0.15em] px-6 py-3"
            >
              Register Interest
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 p-2 text-beech"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="w-7 flex flex-col gap-[7px]">
              <span
                className={`block h-px bg-current transition-transform duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span className={`block h-px bg-current transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span
                className={`block h-px bg-current transition-transform duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 h-[calc(100dvh-5rem)] bg-ink-deep border-t border-beech/10 overflow-y-auto">
          <div className="px-6 py-10 flex flex-col gap-1">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="menu-item font-display text-3xl font-bold uppercase tracking-tight text-beech hover:text-gold transition-colors py-3 border-b border-beech/10"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/register-interest"
              onClick={() => setMobileOpen(false)}
              className="menu-item mt-8 bg-gold text-ink text-center font-display font-bold uppercase tracking-[0.15em] px-6 py-4"
              style={{ animationDelay: `${links.length * 60}ms` }}
            >
              Register Interest
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
