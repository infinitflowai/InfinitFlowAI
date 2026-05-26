'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════
//  size="sm"  — navbar CTA
//  size="lg"  — hero primary CTA
// ═══════════════════════════════════════════════════════════════

interface Premium3DButtonProps {
  href: string
  children: React.ReactNode
  size?: 'sm' | 'lg'
  showArrow?: boolean
  className?: string
}

const SIZE = {
  sm: {
    padding: 'px-5 py-3',
    text: 'text-sm',
    weight: 'font-semibold',
    arrow: 14,
    depth: 3,
    blur: 14,
    glowHover: 'rgba(0,200,255,0.6)',
  },
  lg: {
    padding: 'px-7 py-4',
    text: 'text-base',
    weight: 'font-bold',
    arrow: 17,
    depth: 4,
    blur: 22,
    glowHover: 'rgba(0,200,255,0.78)',
  },
} as const

export function Premium3DButton({
  href,
  children,
  size = 'lg',
  showArrow = true,
  className = '',
}: Premium3DButtonProps) {
  const s = SIZE[size]

  return (
    <motion.div
      className={`relative inline-flex ${className}`}
      whileHover="hover"
      whileTap="pressed"
    >
      {/* ── Depth layer ── */}
      <motion.span
        aria-hidden
        variants={{
          hover:   { y: s.depth + 1, opacity: 0.65 },
          pressed: { y: 1,           opacity: 0.45 },
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: '#061522',
          transform: `translateY(${s.depth}px)`,
          borderRadius: 12,
        }}
      />

      {/* ── Glow halo ── */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0.6 }}
        variants={{
          hover:   { opacity: 1,   scale: 1.06 },
          pressed: { opacity: 0.4, scale: 0.97 },
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute -inset-1 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 115%, ${s.glowHover} 0%, transparent 65%)`,
          filter: `blur(${s.blur}px)`,
          borderRadius: 16,
        }}
      />

      {/* ── Face ── */}
      <motion.div
        variants={{
          hover:   { y: -(s.depth * 0.55), scale: 1.015 },
          pressed: { y: s.depth * 0.45,    scale: 0.975 },
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="relative overflow-hidden"
        style={{
          borderRadius: 12,
          boxShadow: '0 0 0 1px rgba(0,200,255,0.25), inset 0 1px 0 rgba(255,255,255,0.14)',
        }}
      >
        <Link
          href={href}
          className={`relative z-10 inline-flex items-center justify-center gap-2 text-white ${s.weight} ${s.padding} ${s.text}`}
          style={{
            background: 'linear-gradient(160deg, #008CFF 0%, #1D4ED8 55%, #0070CC 100%)',
            borderRadius: 12,
          }}
        >
          {/* Shimmer on hover */}
          <motion.span
            aria-hidden
            initial={{ x: '-110%' }}
            variants={{
              hover: {
                x: ['-110%', '210%'],
                transition: { duration: 0.55, ease: 'easeInOut' },
              },
            }}
            className="absolute inset-0 pointer-events-none"
            style={{
              width: '55%',
              background:
                'linear-gradient(90deg,transparent,rgba(255,255,255,0.2),rgba(0,200,255,0.15),rgba(255,255,255,0.2),transparent)',
            }}
          />

          {/* Top-edge highlight */}
          <span
            aria-hidden
            className="absolute top-0 left-5 right-5 h-px pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)',
            }}
          />

          {children}
          {showArrow && <ArrowRight size={s.arrow} strokeWidth={2.2} />}
        </Link>
      </motion.div>
    </motion.div>
  )
}
