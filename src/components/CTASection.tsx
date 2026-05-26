'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Cog } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  compact?: boolean
  large?: boolean
  card?: boolean
  sectionClassName?: string
}

const INF_PATH =
  'M 8 32 C 8 22 14 14 24 14 C 34 14 38 24 42 32' +
  ' C 46 40 50 48 58 48 C 68 48 72 38 72 32' +
  ' C 72 26 68 16 58 16 C 50 16 46 22 42 32' +
  ' C 38 42 34 50 24 50 C 14 50 8 42 8 32 Z'

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 4, transition: { duration: 0.2, ease: 'easeOut' as const } },
}

export function CTASection({
  title = 'Vrei să vezi ce putem automatiza în firma ta?',
  subtitle = 'Îți arătăm concret unde se pierde timp, ce procese pot fi puse pe pilot automat și cum poți gestiona mai multe cereri fără să încarci echipa.',
  primaryLabel = 'Află cum te putem ajuta',
  primaryHref = '/contact',
  secondaryLabel = 'Scrie-ne pe WhatsApp',
  secondaryHref = 'https://wa.me/40750448872?text=Bun%C4%83%20ziua%21%20Am%20intrat%20de%20pe%20site-ul%20InfinitFlowAI%20%C8%99i%20a%C8%99%20vrea%20s%C4%83%20discut%C4%83m%20despre%20o%20solu%C8%9Bie%20pentru%20afacerea%20mea.%20M%C4%83%20intereseaz%C4%83%20s%C4%83%20v%C4%83d%20cum%20m%C4%83%20pute%C8%9Bi%20ajuta%20cu%20un%20site%2C%20automatiz%C4%83ri%20sau%20un%20asistent%20AI.',
  compact = false,
  large = false,
  card = false,
  sectionClassName,
}: CTASectionProps) {
  const bigText = large || card

  return (
    <section className={`relative overflow-hidden ${sectionClassName ?? (compact ? 'py-10 md:py-12' : 'py-24 lg:py-32')}`}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,242,254,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Decorative infinity — left side, desktop only */}
      <motion.div
        aria-hidden="true"
        className="absolute left-[5%] top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center pointer-events-none select-none"
        animate={{ opacity: [0.13, 0.20, 0.13] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 }}
      >
        <svg viewBox="8 14 64 36" width="162" height="91" fill="none" aria-hidden style={{ display: 'block' }}>
          <defs>
            <linearGradient id="ctaDecInfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A4FD6" />
              <stop offset="100%" stopColor="#00C8FF" />
            </linearGradient>
            <filter id="ctaDecInfGlow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="1.6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d={INF_PATH}
            stroke="url(#ctaDecInfGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#ctaDecInfGlow)"
          />
          <motion.path
            d={INF_PATH}
            stroke="#00E5FF"
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="28 200"
            animate={{ strokeDashoffset: [0, -228] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' as const }}
          />
        </svg>
      </motion.div>

      {/* Decorative gear — right side, desktop only */}
      <motion.div
        aria-hidden="true"
        className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center pointer-events-none select-none"
        animate={{ opacity: [0.13, 0.20, 0.13] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const }}
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' as const }}
          style={{
            display: 'flex',
            color: '#00d4f5',
            filter:
              'drop-shadow(0 0 16px rgba(0,242,254,0.55)) drop-shadow(0 0 40px rgba(0,150,255,0.28))',
          }}
        >
          <Cog size={145} strokeWidth={0.8} />
        </motion.span>
      </motion.div>

      <div className={`relative mx-auto px-4 sm:px-6 lg:px-8 text-center -translate-y-4 ${card ? 'max-w-6xl' : 'max-w-4xl'}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={card
            ? 'bg-slate-900/50 backdrop-blur-md border border-[#00f2fe]/20 rounded-3xl shadow-[0_0_80px_rgba(0,242,254,0.08),0_30px_80px_rgba(0,0,0,0.45)] px-10 py-12 md:px-16 md:py-16'
            : ''}
        >
          {/* Badge */}
          <span className={`font-bold tracking-widest text-[#00f2fe] uppercase bg-[#00f2fe]/10 border border-[#00f2fe]/40 rounded-full inline-block shadow-[0_0_15px_rgba(0,242,254,0.1)] ${card ? 'text-sm px-5 py-2 mb-7' : large ? 'text-sm px-5 py-2 mb-8' : compact ? 'text-xs px-4 py-1.5 mb-4' : 'text-xs px-4 py-1.5 mb-6'}`}>
            DISCUȚIE STRATEGICĂ DE 30 MINUTE
          </span>

          <h2 className={`font-bold tracking-tight text-white text-center max-w-5xl mx-auto mb-4 leading-tight ${compact ? 'text-3xl md:text-4xl' : bigText ? 'text-5xl md:text-6xl' : 'text-[42px] md:text-[54px]'}`}>
            {title}
          </h2>

          <p className={`text-slate-300 mx-auto leading-relaxed text-center font-normal ${compact ? 'text-base md:text-lg max-w-2xl mt-3 mb-7' : card ? 'text-lg md:text-xl max-w-3xl mt-5 mb-10' : large ? 'text-lg md:text-xl max-w-3xl mt-6 mb-12' : 'text-[17px] md:text-[19px] max-w-2xl mt-3 mb-9'}`}>
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary */}
            <motion.div initial="rest" whileHover="hover" className="w-full sm:w-auto">
              <Link
                href={primaryHref}
                className={`bg-linear-to-r from-blue-600 via-blue-500 to-[#00f2fe] text-white font-bold rounded-xl shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:shadow-[0_0_35px_rgba(0,242,254,0.5)] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center ${bigText ? 'text-base px-9 py-5' : 'text-base px-8 py-4.5'}`}
              >
                {primaryLabel}
                <motion.span variants={arrowVariants} className="inline-flex items-center">
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>

            {/* Secondary */}
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`group border border-slate-700 bg-slate-900/50 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center hover:border-green-500/60 hover:text-green-400 ${bigText ? 'text-base px-9 py-5' : 'text-base px-8 py-4.5'}`}
            >
              <FaWhatsapp size={16} className="transition-colors duration-300 group-hover:text-green-400" />
              {secondaryLabel}
            </a>
          </div>

          {/* Trust ticks */}
          <div className={`flex flex-wrap items-center justify-center gap-5 md:gap-8 ${compact ? 'mt-7' : card ? 'mt-12' : large ? 'mt-14' : 'mt-8'}`}>
            {[
              { check: '✓', label: 'Răspuns în 24h' },
              { check: '✓', label: 'Fără costuri ascunse' },
              { check: '✓', label: 'Propunere clară' },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <span className="text-[#00f2fe] font-bold">{item.check}</span>
                <span className={`text-slate-200 font-semibold ${bigText ? 'text-base md:text-lg' : 'text-[15px] md:text-[16px]'}`}>{item.label}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
