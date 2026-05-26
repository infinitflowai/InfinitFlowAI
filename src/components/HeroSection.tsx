'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Play } from 'lucide-react'
import { AnimatedBackground } from './AnimatedBackground'
import { FloatingAutomationCards } from './FloatingAutomationCards'
import { Premium3DButton } from './ui/Premium3DButton'

// ─── Fade-up helper ────────────────────────────────────────────────────────
function fu(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.68, delay, ease: 'easeOut' as const },
  }
}

// ─── True outline secondary CTA ───────────────────────────────────────────
function DemoButton() {
  return (
    <motion.div
      className="relative inline-flex"
      whileHover="hover"
      whileTap="pressed"
    >
      {/* Glow halo on hover */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: 1 }, pressed: { opacity: 0.3 } }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute -inset-1 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 115%, rgba(0,200,255,0.22) 0%, transparent 68%)',
          filter: 'blur(12px)',
          borderRadius: 14,
        }}
      />

      {/* Face */}
      <motion.div
        variants={{ hover: { y: -2 }, pressed: { y: 1.5, scale: 0.975 } }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="relative overflow-hidden"
        style={{ borderRadius: 12 }}
      >
        {/* Hover: brighter border + soft fill overlay */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0 }}
          variants={{ hover: { opacity: 1 }, pressed: { opacity: 0 } }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'rgba(0,200,255,0.07)',
            border: '1px solid rgba(0,200,255,0.65)',
            boxShadow: '0 0 14px rgba(0,200,255,0.18)',
            borderRadius: 12,
          }}
        />

        <Link
          href="/demo-automatizare"
          className="relative inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-white"
          style={{
            background: 'transparent',
            border: '1px solid rgba(0,200,255,0.38)',
            borderRadius: 12,
          }}
        >
          <Play size={14} strokeWidth={0} fill="currentColor" className="text-brand-cyan" />
          <span>Vezi cum funcționează</span>
        </Link>
      </motion.div>
    </motion.div>
  )
}

// ─── Stats card ────────────────────────────────────────────────────────────
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex-1 min-w-0 px-4 py-5 rounded-2xl text-center"
      style={{
        background: 'rgba(6,26,36,0.65)',
        border: '1px solid rgba(0,200,255,0.12)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      <p className="text-2xl sm:text-3xl font-bold text-gradient-blue leading-none mb-2">
        {value}
      </p>
      <p className="text-white/80 text-xs sm:text-sm leading-snug">{label}</p>
    </div>
  )
}

// ─── Hero section ──────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-19 lg:pt-36 pb-16 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* ── Left: copy ────────────────────────────────────────────── */}
          <div>
            {/* Headline */}
            <motion.h1
              {...fu(0.18)}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold leading-[1.12] tracking-tight mb-6"
            >
              <span className="block text-white">Pune-ți afacerea pe</span>
              <span className="block text-gradient-blue">pilot automat.</span>
              <span className="block text-white">Clienți fericiți,</span>
              <span className="block text-gradient-blue">zero timp pierdut.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fu(0.36)}
              className="text-slate-300 text-base lg:text-lg font-normal leading-relaxed mb-9 max-w-130"
            >
              Dezvoltăm site-uri inteligente, chatbot-uri și automatizări AI care preiau apelurile,
              răspund instant pe WhatsApp/Email și îți organizează CRM-ul. În timp ce tu te ocupi
              de creșterea firmei, tehnologia lucrează pentru tine{' '}
              <span className="text-gradient-blue font-semibold">24/7</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fu(0.52)} className="flex flex-col sm:flex-row gap-3 items-start">
              <Premium3DButton href="/contact" size="lg">
                Vreau Analiza Gratuită
              </Premium3DButton>
              <DemoButton />
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fu(0.64)}
              className="flex items-stretch gap-3 mt-10 pt-8 border-t border-brand-navy/30"
            >
              <StatCard value="0 sec" label="timp de răspuns" />
              <StatCard value="3h+" label="economisite / zi" />
              <StatCard value="24/7" label="disponibilitate" />
            </motion.div>
          </div>

          {/* ── Right: automation visual ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end items-center xl:translate-x-10"
          >
            <FloatingAutomationCards />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex flex-col items-center gap-1.5 text-brand-muted mt-10 sm:mt-14"
        >
          <span className="text-[9px] tracking-widest uppercase">Scroll</span>
          <ChevronDown size={13} className="animate-float-y" />
        </motion.div>
      </div>
    </section>
  )
}
