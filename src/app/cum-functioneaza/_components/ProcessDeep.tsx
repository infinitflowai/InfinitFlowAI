'use client'

import { motion } from 'framer-motion'
import { Clock, FileText, Rocket, HeartHandshake } from 'lucide-react'

const DETAILS = [
  {
    icon: Clock,
    title: 'Analiză gratuită — 30 minute',
    points: [
      'Discuție video sau telefonică, la o oră convenabilă',
      'Înțelegem afacerea ta și procesele actuale',
      'Identificăm primele zone care pot fi automatizate',
      'Primești o direcție clară, fără obligații',
    ],
  },
  {
    icon: FileText,
    title: 'Propunere și plan de acțiune',
    points: [
      'Propunere adaptată afacerii tale',
      'Timeline clar cu etape și livrabile',
      'Costuri transparente, fără surprize',
      'Posibilitate de întrebări și ajustări',
    ],
  },
  {
    icon: Rocket,
    title: 'Implementare rapidă și testată',
    points: [
      'Construim sistemul în pași clari',
      'Primești update-uri pe parcurs',
      'Testăm totul înainte de lansare',
      'Îți arătăm cum se folosește sistemul',
    ],
  },
  {
    icon: HeartHandshake,
    title: 'Suport continuu',
    points: [
      'Suport post-lansare inclus',
      'Ajustări rapide dacă apar schimbări',
      'Optimizări pentru rezultate mai bune',
      'Parteneriat pe termen lung, nu doar livrare',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
}

const cardHoverVariants = {
  hovered: {
    y: -4,
    borderColor: 'rgba(0,242,254,0.35)',
    boxShadow: '0 0 28px rgba(0,242,254,0.10)',
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
}

export function ProcessDeep() {
  return (
    <section className="relative pt-32 pb-10 lg:pb-18 bg-linear-to-b from-transparent via-brand-card/20 to-transparent">

      {/* Glow decorativ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-96 h-96 rounded-full bg-[#00f2fe]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ce se întâmplă la{' '}
            <span className="bg-linear-to-r from-[#2f80ff] via-[#00cfff] to-[#00f2fe] bg-clip-text text-transparent">
              fiecare pas
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto leading-relaxed">
            Transparență completă — știi de la început ce primești, când se livrează și cum te ajută concret.
          </p>
          {/* Linie decorativă */}
          <div
            className="w-16 h-px mx-auto mt-5 mb-16 lg:mb-20 rounded-full opacity-60"
            style={{ background: 'linear-gradient(to right, #2f80ff, #00f2fe)' }}
          />
        </motion.div>

        {/* Carduri */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {DETAILS.map((d, i) => (
            <motion.div
              key={d.title}
              variants={cardVariants}
              whileHover="hovered"
              className="bg-transparent rounded-2xl p-6 border border-slate-800/60 relative overflow-hidden flex flex-col"
            >
              {/* Număr mare discret */}
              <motion.span
                variants={{
                  hovered: { color: 'rgba(0,242,254,0.10)' },
                }}
                className="absolute top-3 right-4 text-5xl font-bold select-none z-0"
                style={{ color: 'rgba(148,163,184,0.15)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </motion.span>

              {/* Icon + titlu */}
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <motion.div
                  variants={{
                    hovered: {
                      scale: 1.07,
                      boxShadow: '0 0 12px rgba(0,242,254,0.18)',
                      transition: { duration: 0.25, ease: 'easeOut' as const },
                    },
                  }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(0,242,254,0.06)',
                    border: '1px solid rgba(0,242,254,0.15)',
                  }}
                >
                  <d.icon size={20} className="text-[#00f2fe]" />
                </motion.div>
                <h3 className="text-lg text-white font-semibold">{d.title}</h3>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 relative z-10">
                {d.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-base text-slate-400 leading-relaxed">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#00f2fe]/55" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
