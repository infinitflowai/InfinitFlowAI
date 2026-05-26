'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedLogo } from '@/components/AnimatedLogo'

const NAV_LINKS = [
  { href: '/', label: 'Acasă' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/solutii', label: 'Soluții' },
  { href: '/cum-functioneaza', label: 'Cum funcționează' },
  { href: '/portofoliu', label: 'Portofoliu' },
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const rawPathname = usePathname()
  // Defer to client so SSR and hydration always agree (avoids mismatch when
  // usePathname returns null before the router context initialises on the client).
  const [pathname, setPathname] = useState<string | null>(null)
  useEffect(() => { setPathname(rawPathname) }, [rawPathname])

  // Robust active check: exact match for "/", prefix match for deeper routes.
  const isActive = (href: string) => {
    if (!pathname) return false
    const p = pathname.replace(/\/$/, '') || '/'
    if (href === '/') return p === '/'
    return p === href || p.startsWith(href + '/')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 backdrop-blur-md bg-slate-950/50 border-b border-slate-800/40 ${
        scrolled || mobileOpen ? 'shadow-[0_4px_24px_rgba(0,0,0,0.4)]' : ''
      }`}
    >
      <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
        {/* Header row — taller to accommodate the animated card */}
        <div className="flex items-center justify-between h-19 lg:h-23 xl:h-25">

          {/* Animated brand card as logo */}
          <Link href="/" className="shrink-0" aria-label="InfinitFlowAI — pagina principală">
            <AnimatedLogo idPrefix="nav" />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-0 min-[1200px]:gap-0.5"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                className={`relative px-2 py-1 text-[13px] min-[1200px]:px-3 min-[1200px]:py-1.5 min-[1200px]:text-[15px] font-medium rounded-full transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-brand-cyan'
                    : hoveredLink === link.href
                      ? 'text-white'
                      : 'text-slate-300'
                }`}
              >
                {/* Active indicator */}
                {isActive(link.href) && (
                  <span className="absolute inset-0 bg-brand-navy/25 rounded-full" />
                )}
                {/* Hover floating pill */}
                {hoveredLink === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/5 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring' as const, bounce: 0.15, duration: 0.35 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-3 py-1.5 text-[13px] min-[1200px]:px-5 min-[1200px]:py-2.5 min-[1200px]:text-[15px] font-medium text-white rounded-xl transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)]"
              style={{ background: 'linear-gradient(to right, #2563EB, #00f2fe)' }}
            >
              Consultanță Gratuită
            </Link>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2 rounded-lg text-brand-silver hover:text-white hover:bg-brand-navy/20 transition-colors"
              aria-label="Meniu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-6 pt-2 flex flex-col gap-1 border-t border-brand-navy/20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive(link.href)
                  ? 'text-brand-cyan bg-brand-navy/20'
                  : 'text-brand-silver hover:text-white hover:bg-brand-navy/15'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 w-full text-center px-4 py-3 text-sm font-semibold text-white rounded-lg btn-primary"
          >
            Consultanță Gratuită
          </Link>
        </nav>
      </div>
    </header>
  )
}
