'use client'

import { motion } from 'framer-motion'
import { Globe, Flower2, Zap } from 'lucide-react'
import Link from 'next/link'

const PROJECTS = [
  {
    icon: Globe,
    badge: 'PROIECTUL NOSTRU',
    title: 'InfinitFlowAI',
    desc: 'Platforma noastră de prezentare pentru servicii AI, creată pentru claritate, viteză și conversie.',
    result: 'design premium, mesaj clar și structură orientată spre clienți.',
    tags: ['Website modern', 'AI', 'Automatizări'],
    href: '/servicii',
    external: false,
    iconVariants: {
      hovered: { rotate: 15, scale: 1.08, transition: { duration: 0.4, ease: 'easeOut' as const } },
    },
  },
  {
    icon: Flower2,
    badge: 'SITE LIVE',
    title: 'LuxeFlora',
    desc: 'Website pentru o florărie modernă, cu prezentare elegantă, catalog de produse și contact rapid pentru comenzi.',
    result: 'experiență vizuală mai bună și traseu mai simplu către comandă.',
    tags: ['Website live', 'Florărie', 'Comenzi rapide'],
    href: 'https://luxeflora.ro/',
    external: true,
    iconVariants: {
      hovered: { scale: 1.18, transition: { duration: 0.3, ease: 'easeOut' as const } },
    },
  },
  {
    id: 'sistem-automat-cereri',
    icon: Zap,
    badge: 'CONCEPT INTERN',
    title: 'Sistem automat pentru cereri',
    desc: 'Concept intern de automatizare pentru firme care primesc solicitări repetitive pe WhatsApp, email sau formular.',
    result: 'cereri organizate, răspuns mai rapid și mai puțină muncă manuală.',
    tags: ['Exemplu', 'Automatizare', 'Răspuns rapid'],
    href: '/demo-automatizare',
    external: false,
    iconVariants: {
      hovered: { y: -2, scale: 1.15, transition: { duration: 0.25, ease: 'easeOut' as const } },
    },
  },
]

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
}

const cardHoverVariants = {
  hovered: {
    y: -6,
    borderColor: 'rgba(0,242,254,0.32)',
    boxShadow: '0 0 30px rgba(0,242,254,0.10)',
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
}

const arrowVariants = {
  hovered: { x: 4, transition: { duration: 0.2, ease: 'easeOut' as const } },
}

export function PortfolioCards() {
  return (
    <section className="relative min-h-[calc(100vh-96px)] lg:min-h-190 flex flex-col pt-14 pb-12 md:pt-16 lg:pt-10 md:pb-7 lg:pb-7">
      <div className="w-full max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 flex flex-col flex-1 pt-4 translate-y-10 xl:translate-y-0">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="text-xs font-semibold tracking-widest text-[#00f2fe] uppercase block mb-3">
            DOVEZI CONCRETE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Sisteme create pentru{' '}
            <span className="text-gradient-blue">rezultate reale</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            Vezi exemple de soluții construite pentru afaceri care vor mai multe cereri, răspunsuri
            mai rapide și mai puțină muncă manuală.
          </p>
        </motion.div>

        {/* Cards — relative wrapper holds the decorative glow */}
        <div className="relative mt-16 isolate">

          {/* Decorative glow behind center card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div className="w-130 h-95 rounded-full bg-[#00f2fe]/5 blur-[120px]" />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {PROJECTS.map((p) => (
              <motion.div key={p.title} id={'id' in p ? p.id : undefined} variants={cardVariants} className="h-full">
                <motion.div
                  whileHover="hovered"
                  variants={cardHoverVariants}
                  className="h-full md:min-h-90 bg-slate-950/40 backdrop-blur-md rounded-2xl p-7 flex flex-col border"
                  style={{ borderColor: 'rgba(0,242,254,0.10)' }}
                >
                  {/* Top row: icon + badge */}
                  <div className="flex items-start justify-between mb-5">
                    <motion.div
                      variants={p.iconVariants}
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-[#00f2fe] bg-[#00f2fe]/5 border border-[#00f2fe]/10"
                    >
                      <p.icon size={20} />
                    </motion.div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/20 text-[#00f2fe]">
                      {p.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>

                  {/* Description — flex-1 keeps result/tags/link anchored below */}
                  <p className="text-slate-400 text-sm md:text-[15px] leading-relaxed mt-3 mb-3 flex-1">
                    {p.desc}
                  </p>

                  {/* Result line */}
                  <p className="text-xs leading-relaxed mb-4">
                    <span className="text-[#00f2fe] font-bold mr-1">Rezultat:</span>
                    <span className="text-slate-400/90">{p.result}</span>
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-slate-900/40 border border-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <Link
                    href={p.href}
                    {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-[#00f2fe] font-medium text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Vezi soluția</span>
                    <motion.span variants={arrowVariants} className="inline-block">
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Equal spacers sandwich the trust line midway in the remaining space */}
        <div className="flex-1" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="text-center py-5 md:py-6 mt-12"
        >
          <div className="w-16 h-px bg-[#00f2fe]/40 mx-auto mb-4" />
          <p className="text-slate-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Fiecare soluție poate fi adaptată pentru afacerea ta — de la site de prezentare până la
            automatizări pentru cereri, WhatsApp și email.
          </p>
        </motion.div>

        <div className="flex-1" />

      </div>
    </section>
  )
}
