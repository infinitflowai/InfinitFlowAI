'use client'

import { Cog } from 'lucide-react'
import { motion } from 'framer-motion'

const GEAR_DURATION = 12

const INF_PATH =
  'M 8 32 C 8 22 14 14 24 14 C 34 14 38 24 42 32' +
  ' C 46 40 50 48 58 48 C 68 48 72 38 72 32' +
  ' C 72 26 68 16 58 16 C 50 16 46 22 42 32' +
  ' C 38 42 34 50 24 50 C 14 50 8 42 8 32 Z'

function InfinityMark({ idPrefix }: { idPrefix: string }) {
  const gradId = `${idPrefix}InfGrad`
  const glowId = `${idPrefix}InfGlow`
  const flowId = `${idPrefix}FlowGlow`

  return (
    <motion.div
      whileHover="hover"
      initial="idle"
      variants={{
        idle: { scale: 1, transition: { duration: 0.25, ease: 'easeOut' as const } },
        hover: { scale: 1.03, transition: { duration: 0.25, ease: 'easeOut' as const } },
      }}
      style={{ flexShrink: 0, display: 'block' }}
    >
      <svg
        viewBox="8 14 64 36"
        fill="none"
        aria-hidden
        className="block w-10.5 sm:w-13.5 lg:w-10.5 min-[1200px]:w-13.5"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A4FD6" />
            <stop offset="100%" stopColor="#00C8FF" />
          </linearGradient>
          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={flowId} x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="2.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={INF_PATH}
          stroke={`url(#${gradId})`}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter={`url(#${glowId})`}
        />

        <motion.path
          d={INF_PATH}
          stroke="#00E5FF"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter={`url(#${flowId})`}
          strokeDasharray="25 200"
          variants={{
            idle: { opacity: 0.82, transition: { duration: 0.3 } },
            hover: { opacity: 1, transition: { duration: 0.2 } },
          }}
          animate={{ strokeDashoffset: [0, -225] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' as const }}
        />

        <circle cx="42" cy="32" r="2.8" fill={`url(#${gradId})`} opacity="0.85" />
      </svg>
    </motion.div>
  )
}

export function AnimatedLogo({ idPrefix = 'nav' }: { idPrefix?: string }) {
  return (
    <div className="relative w-fit">
      {/* Outer glow ring — pulses */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0, 0.3, 0], scale: [1, 1.018, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-2 rounded-3xl pointer-events-none"
        style={{
          border: '1px solid rgba(0,200,255,0.5)',
          boxShadow: '0 0 22px rgba(0,200,255,0.16)',
        }}
      />

      {/* Card */}
      <div
        className="relative flex items-center gap-2.5 sm:gap-3.5 lg:gap-2.5 min-[1200px]:gap-3.5 px-4 sm:px-6 lg:px-4 min-[1200px]:px-6 py-3 sm:py-4.5 lg:py-3 min-[1200px]:py-4.5 rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(6,26,36,0.9)',
          border: '1px solid rgba(0,200,255,0.24)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 0 48px rgba(0,200,255,0.08), inset 0 0 28px rgba(0,77,94,0.2)',
        }}
      >
        {/* Shimmer sweep — every ~8 s */}
        <motion.div
          aria-hidden
          initial={{ x: '-120%' }}
          animate={{ x: '230%' }}
          transition={{
            duration: 1.9,
            repeat: Infinity,
            repeatDelay: 7,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 pointer-events-none"
          style={{
            width: '45%',
            background:
              'linear-gradient(90deg,transparent,rgba(0,200,255,0.1),rgba(255,255,255,0.06),rgba(0,200,255,0.1),transparent)',
          }}
        />

        <InfinityMark idPrefix={idPrefix} />

        <div
          className="h-5 sm:h-6 lg:h-5 min-[1200px]:h-6 w-px shrink-0"
          style={{ background: 'rgba(0,200,255,0.2)' }}
        />

        <div className="flex items-center" style={{ gap: '2px', lineHeight: 1 }}>
          <span
            className="font-bold text-[1.1rem] sm:text-[1.35rem] lg:text-[1.1rem] min-[1200px]:text-[1.35rem] text-brand-silver select-none"
            style={{ letterSpacing: '-0.02em' }}
          >
            InfinitFlow
          </span>

          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: GEAR_DURATION, repeat: Infinity, ease: 'linear' }}
            className="flex items-center"
            style={{
              filter:
                'drop-shadow(0 0 5px rgba(0,200,255,1)) drop-shadow(0 0 14px rgba(45,143,255,0.7))',
              marginLeft: '1px',
              marginRight: '1px',
            }}
          >
            <Cog size={20} strokeWidth={2.1} className="text-brand-cyan" />
          </motion.span>

          <span
            className="font-bold text-[1.1rem] sm:text-[1.35rem] lg:text-[1.1rem] min-[1200px]:text-[1.35rem] select-none"
            style={{
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg,#2D8FFF,#00C8FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI
          </span>
        </div>
      </div>
    </div>
  )
}
