'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'

// ═══════════════════════════════════════════════════════════════════════════
//  TUNING — change these to adjust visual intensity
// ═══════════════════════════════════════════════════════════════════════════
const CFG = {
  // ← Gear rotation: higher number = SLOWER (seconds per full turn)
  gearDuration: 14,

  // ← Glow intensity on gear ring (0 → 1)
  glowAlpha: 0.7,

  // ← Number of orbiting particles
  particleCount: 8,

  // ← Orbit radius in px (desktop). Scales down on mobile automatically.
  orbitRadius: 88,

  // ← Logo width in px (desktop)
  logoWidth: 280,

  // ← Logo width in px (mobile — screens < 640px)
  logoWidthMobile: 190,

  // ← Seconds between each light streak pass
  streakRepeatDelay: 5.5,

  // ← Infinity symbol pulse: scale range (subtle ↔ more visible)
  infinityPulseScale: [1, 1.08, 1] as number[],
} as const
// ═══════════════════════════════════════════════════════════════════════════

// SVG logo intrinsic dimensions
const SVG_VB_W = 320
const SVG_VB_H = 64
// Infinity symbol bounding box in SVG viewBox coords (measured from the path)
const INF_CX = 40   // center x in viewBox units
const INF_CY = 32   // center y in viewBox units
const INF_R  = 24   // approximate radius of the symbol in viewBox units

// Gear ring rendered as an SVG overlay — surrounds the infinity symbol
function GearRing({ size, glowAlpha }: { size: number; glowAlpha: number }) {
  const r1 = size * 0.48   // outer dashed ring radius
  const r2 = size * 0.36   // inner dashed ring radius
  const cx = size / 2
  const cy = size / 2
  const glowColor = `rgba(0,200,255,${glowAlpha})`

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A4FD6" stopOpacity="1" />
          <stop offset="50%" stopColor="#00C8FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#2D8FFF" stopOpacity="1" />
        </linearGradient>
        <filter id="gearGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer notched ring — looks like gear teeth */}
      <circle
        cx={cx} cy={cy} r={r1}
        stroke="url(#gearGrad)"
        strokeWidth="2.5"
        strokeDasharray="7 3.5"
        strokeLinecap="round"
        filter="url(#gearGlow)"
        opacity={0.85}
      />

      {/* Middle solid arc (270° — gap on one side for asymmetry) */}
      <circle
        cx={cx} cy={cy} r={(r1 + r2) / 2}
        stroke={`rgba(0,200,255,${glowAlpha * 0.4})`}
        strokeWidth="1"
        strokeDasharray={`${Math.PI * (r1 + r2) * 0.75} ${Math.PI * (r1 + r2) * 0.25}`}
        strokeLinecap="round"
        opacity={0.5}
      />

      {/* Inner fine ring */}
      <circle
        cx={cx} cy={cy} r={r2}
        stroke="url(#gearGrad)"
        strokeWidth="1"
        strokeDasharray="4 5"
        strokeLinecap="round"
        opacity={0.45}
      />

      {/* Center cross-hair dot */}
      <circle cx={cx} cy={cy} r={2.5} fill="#00C8FF" opacity={0.7} />
      <line
        x1={cx - 5} y1={cy} x2={cx + 5} y2={cy}
        stroke={`rgba(0,200,255,${glowAlpha * 0.6})`}
        strokeWidth="0.8"
      />
      <line
        x1={cx} y1={cy - 5} x2={cx} y2={cy + 5}
        stroke={`rgba(0,200,255,${glowAlpha * 0.6})`}
        strokeWidth="0.8"
      />
    </svg>
  )
}

// Single orbiting particle via rotate wrapper trick
function OrbitParticle({
  index,
  total,
  radius,
  reducedMotion,
}: {
  index: number
  total: number
  radius: number
  reducedMotion: boolean
}) {
  const initialAngle = (index / total) * 360
  const duration = 9 + index * 1.3           // staggered speeds for variety
  const size = index % 3 === 0 ? 3.5 : 2.2
  const color = index % 2 === 0 ? '#00C8FF' : '#2D8FFF'
  const opacity = 0.25 + (index % 4) * 0.1

  if (reducedMotion) return null

  return (
    <motion.div
      className="absolute"
      style={{ top: '50%', left: '50%', width: 0, height: 0 }}
      initial={{ rotate: initialAngle }}
      animate={{ rotate: initialAngle + 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {/* The particle is offset from center by orbitRadius */}
      <div
        style={{
          position: 'absolute',
          width: size,
          height: size,
          borderRadius: '50%',
          background: color,
          opacity,
          transform: `translate(-50%, -50%) translateX(${radius}px)`,
          boxShadow: `0 0 ${size * 3}px ${color}80`,
        }}
      />
    </motion.div>
  )
}

interface AnimatedLogoAreaProps {
  className?: string
  /** Override logo width. Defaults to CFG.logoWidth on desktop. */
  logoWidth?: number
}

export function AnimatedLogoArea({ className = '', logoWidth }: AnimatedLogoAreaProps) {
  const prefersReduced = useReducedMotion() ?? false
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640

  // Responsive logo width
  const lw = logoWidth ?? (isMobile ? CFG.logoWidthMobile : CFG.logoWidth)
  const lh = Math.round(lw * (SVG_VB_H / SVG_VB_W))  // keep aspect ratio

  // Scale factor for overlay positions
  const scale = lw / SVG_VB_W

  // Gear size = slightly larger than the infinity symbol circle
  const gearSize = Math.round(INF_R * 2 * scale * 2.2)

  // Gear center in rendered-logo px coords (from logo top-left)
  const gearCX = Math.round(INF_CX * scale)
  const gearCY = Math.round(INF_CY * scale)

  // Container padding (space for orbiting particles)
  const pad = Math.round(CFG.orbitRadius * 1.15)

  // Orbit radius on mobile
  const orbitR = isMobile ? Math.round(CFG.orbitRadius * 0.65) : CFG.orbitRadius

  // Particle counts (fewer on mobile)
  const pCount = isMobile
    ? Math.max(4, Math.floor(CFG.particleCount * 0.5))
    : CFG.particleCount

  const particles = useMemo(
    () => Array.from({ length: pCount }),
    [pCount]
  )

  return (
    // Outer float wrapper
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      // ── Reveal on mount ──────────────────────────────────────────────────
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
    >
      {/* ── Continuous floating motion ──────────────────────────────────── */}
      <motion.div
        animate={prefersReduced ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ padding: pad, position: 'relative' }}
      >
        {/* ── 1. Outer radial glow blob ──────────────────────────────────── */}
        <motion.div
          animate={prefersReduced ? {} : { opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at center, rgba(0,77,94,0.5) 0%, rgba(26,79,214,0.2) 50%, transparent 75%)',
            filter: 'blur(24px)',
          }}
        />

        {/* ── 2. Glassmorphism frame ─────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: Math.round(pad * 0.35),
            borderRadius: 20,
            background: 'rgba(6, 26, 36, 0.75)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(0, 200, 255, 0.14)',
            boxShadow:
              '0 0 40px rgba(0,200,255,0.07), inset 0 0 30px rgba(0,77,94,0.15)',
          }}
        />

        {/* ── 3. Infinity symbol glow pulse (behind logo) ───────────────── */}
        <motion.div
          animate={
            prefersReduced
              ? {}
              : {
                  opacity: [0.3, 0.65, 0.3],
                  scale: [1, 1.15, 1],
                }
          }
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: pad + gearCX - gearSize * 0.6,
            top: pad + gearCY - gearSize * 0.6,
            width: gearSize * 1.2,
            height: gearSize * 1.2,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(0,200,255,${CFG.glowAlpha * 0.45}) 0%, transparent 70%)`,
            filter: 'blur(8px)',
            transformOrigin: 'center center',
          }}
        />

        {/* ── 4. Gear ring (rotating) ───────────────────────────────────── */}
        <motion.div
          animate={prefersReduced ? {} : { rotate: 360 }}
          transition={{
            duration: CFG.gearDuration,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: pad + gearCX - gearSize / 2,
            top: pad + gearCY - gearSize / 2,
            width: gearSize,
            height: gearSize,
            filter: `drop-shadow(0 0 6px rgba(0,200,255,${CFG.glowAlpha}))`,
          }}
        >
          <GearRing size={gearSize} glowAlpha={CFG.glowAlpha} />
        </motion.div>

        {/* ── 5. Light streak sweeping through ──────────────────────────── */}
        {!prefersReduced && (
          <motion.div
            initial={{ x: -lw * 0.4, opacity: 0 }}
            animate={{ x: lw * 1.3, opacity: [0, 0.9, 0.9, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: CFG.streakRepeatDelay,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: pad + lh * 0.3,
              left: pad,
              width: lw * 0.35,
              height: '2px',
              borderRadius: 2,
              background:
                'linear-gradient(90deg, transparent, rgba(0,200,255,0.9), rgba(255,255,255,0.7), rgba(0,200,255,0.9), transparent)',
              filter: 'blur(1px)',
              zIndex: 15,
            }}
          />
        )}

        {/* ── 6. Logo image ──────────────────────────────────────────────── */}
        <div style={{ position: 'relative', zIndex: 10, width: lw, height: lh }}>
          <Image
            src="/logo/infinitflowai-logo.svg"
            alt="InfinitFlowAI"
            width={lw}
            height={lh}
            priority
            style={{
              width: lw,
              height: lh,
              userSelect: 'none',
              filter: `drop-shadow(0 0 16px rgba(45,143,255,0.35))`,
            }}
          />
        </div>

        {/* ── 7. Orbiting particles ──────────────────────────────────────── */}
        {!prefersReduced && (
          <div
            style={{
              position: 'absolute',
              // Center on the logo + half-padding
              top: pad + lh / 2,
              left: pad + lw / 2,
              width: 0,
              height: 0,
              zIndex: 20,
            }}
          >
            {particles.map((_, i) => (
              <OrbitParticle
                key={i}
                index={i}
                total={pCount}
                radius={orbitR}
                reducedMotion={prefersReduced}
              />
            ))}
          </div>
        )}

        {/* ── 8. Corner accent dots ─────────────────────────────────────── */}
        {[
          { x: pad * 0.4, y: pad * 0.4 },
          { x: pad + lw + pad * 0.55, y: pad * 0.4 },
          { x: pad * 0.4, y: pad + lh + pad * 0.55 },
          { x: pad + lw + pad * 0.55, y: pad + lh + pad * 0.55 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            animate={prefersReduced ? {} : { opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: pos.x,
              top: pos.y,
              width: 3,
              height: 3,
              borderRadius: '50%',
              background: '#00C8FF',
              boxShadow: '0 0 6px #00C8FF',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
