'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Target, Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
}

const cardClass =
  'bg-slate-950/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 sm:p-9 relative overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-[#00f2fe]/30 hover:shadow-[0_0_25px_rgba(0,242,254,0.08)] hover:-translate-y-1'

const iconWrapperClass =
  'w-14 h-14 text-[#00f2fe] bg-[#00f2fe]/5 p-3.5 rounded-full flex items-center justify-center mb-5 border border-[#00f2fe]/10 shrink-0'

const labelStyle = {
  background: 'rgba(0,242,254,0.06)',
  border: '1px solid rgba(0,242,254,0.12)',
  color: '#00f2fe',
}

export function TestimonialCard() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] lg:min-h-170 flex flex-col justify-center xl:justify-start pt-32! pb-32!">
      <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-[#00f2fe] uppercase text-center block mb-2">
            CE SPUN PARTENERII
          </span>
          <h2 className="text-4xl md:text-[54px] font-bold tracking-tight text-center leading-tight">
            <span className="text-white">Încredere construită pe </span>
            <span className="bg-linear-to-r from-[#2f80ff] via-[#00cfff] to-[#00f2fe] bg-clip-text text-transparent">rezultate</span>
          </h2>
          <p className="text-lg md:text-xl font-normal text-slate-400 max-w-2xl mx-auto mt-4 leading-relaxed text-center mb-10">
            Primele proiecte arată cum automatizările pot face o afacere mai clară, mai rapidă și
            mai ușor de gestionat.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >

          {/* Card 1 — LuxeFlora testimonial placeholder */}
          <motion.div variants={cardVariants} className="h-full">
            <div className={cardClass}>

              {/* Top: icon + stars + quote */}
              <div className="flex-1">
                <div className={iconWrapperClass}>
                  <Quote size={22} />
                </div>

                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                <blockquote className="text-slate-300 text-[15px] leading-relaxed italic">
                  &ldquo;Colaborarea cu InfinitFlowAI a fost rapidă, clară și profesionistă.
                  Site-ul arată modern și transmite mai multă încredere clienților.&rdquo;
                </blockquote>
              </div>

              {/* Bottom: author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-800/60">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1A4FD6, #00C8FF)' }}
                >
                  <span className="text-white font-bold text-xs">L</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">LuxeFlora</p>
                  <p className="text-slate-500 text-xs">Florărie premium</p>
                </div>
                <span
                  className="text-[10px] font-medium px-2 py-1 rounded-full shrink-0"
                  style={{
                    background: 'rgba(0,200,255,0.06)',
                    border: '1px solid rgba(0,200,255,0.14)',
                    color: '#7A8899',
                  }}
                >
                  Pregătit pentru publicare
                </span>
              </div>

            </div>
          </motion.div>

          {/* Card 2 — What we measure */}
          <motion.div variants={cardVariants} className="h-full">
            <div className={cardClass}>

              <div className="flex-1">
                <div className={iconWrapperClass}>
                  <Target size={22} />
                </div>

                <h3 className="text-white font-semibold text-xl mb-3">
                  Ce urmărim pentru fiecare client
                </h3>
                <p className="text-slate-400 text-[15px] leading-relaxed">
                  Măsurăm unde se pierde timp, câte cereri sunt preluate mai rapid și ce procese
                  pot fi automatizate fără să complicăm activitatea firmei.
                </p>
              </div>

              <div className="mt-6">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={labelStyle}
                >
                  Focus pe rezultate reale
                </span>
              </div>

            </div>
          </motion.div>

          {/* Card 3 — Why it matters */}
          <motion.div variants={cardVariants} className="h-full">
            <div className={cardClass}>

              <div className="flex-1">
                <div className={iconWrapperClass}>
                  <Sparkles size={22} />
                </div>

                <h3 className="text-white font-semibold text-xl mb-3">
                  De ce contează
                </h3>
                <p className="text-slate-400 text-[15px] leading-relaxed">
                  O afacere care răspunde mai rapid, organizează cererile și reduce munca
                  repetitivă inspiră mai multă încredere și pierde mai puține oportunități.
                </p>
              </div>

              <div className="mt-6">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={labelStyle}
                >
                  Claritate · Timp salvat · Răspuns rapid
                </span>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
