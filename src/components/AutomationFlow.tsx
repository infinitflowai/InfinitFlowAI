'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ClipboardList, Wrench, Zap } from 'lucide-react'
import Link from 'next/link'

const STEPS = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Discuția inițială',
    desc: 'Începem cu o analiză gratuită de 30 minute, în care înțelegem afacerea ta, unde se pierde timp și ce procese pot fi automatizate primele.',
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'Planul de lucru',
    desc: 'Primești o direcție clară: ce automatizăm, cum va funcționa sistemul și ce rezultate urmărește.',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Construcția',
    desc: 'Construim și testăm sistemul pas cu pas: site, formulare, chatbot, notificări și fluxuri automate.',
  },
  {
    step: '04',
    icon: Zap,
    title: 'Pilot automat',
    desc: 'După lansare, sistemul preia cereri, notifică echipa și reduce munca repetitivă din fiecare zi.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    borderColor: 'rgba(30,41,59,0.6)',
    boxShadow: '0 0 0px rgba(0,242,254,0)',
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
  hovered: {
    y: -5,
    borderColor: 'rgba(0,242,254,0.4)',
    boxShadow: '0 0 24px rgba(0,242,254,0.16)',
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
}

export function AutomationFlow() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] lg:min-h-195 flex flex-col pt-7 pb-10 lg:pt-8 lg:pb-10">
      {/* Inner wrapper stretches to fill remaining height, distributes 3 blocks evenly */}
      <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 flex flex-col flex-1 xl:flex-none -translate-y-3 xl:translate-y-0">

        {/* Block 1 — Introducere */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center pt-7"
        >
          <span className="text-xs font-semibold tracking-widest text-[#00f2fe] uppercase text-center block mb-2">
            PAS CU PAS SPRE REZULTATE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Cum îți{' '}
            <span className="bg-linear-to-r from-[#2f80ff] via-[#00cfff] to-[#00f2fe] bg-clip-text text-transparent">
              automatizăm afacerea
            </span>
          </h2>
          <p className="text-base md:text-lg font-normal text-slate-400 max-w-2xl mx-auto mt-4 leading-relaxed text-center">
            De la prima discuție până la lansare, construim un sistem clar, testat și adaptat afacerii
            tale — ca tu să câștigi timp, iar clienții să primească răspunsuri mai rapide.
          </p>
          {/* Decorative divider */}
          <div
            className="w-16 h-px mx-auto mt-5 rounded-full opacity-60"
            style={{ background: 'linear-gradient(to right, #2f80ff, #00f2fe)' }}
          />
        </motion.div>

        {/* Block 2 — Carduri */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9 lg:mt-13"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.step}
              variants={cardVariants}
              whileHover="hovered"
              className="bg-slate-950/40 backdrop-blur-md border border-slate-800/60 rounded-2xl pt-3 px-6 pb-8 sm:px-8 sm:pb-13 relative overflow-hidden flex flex-col sm:min-h-60"
            >
              <span className="absolute top-4 right-5 text-7xl font-bold text-slate-800/30 z-0 select-none">
                {step.step}
              </span>
              <div className="relative z-10 mb-6">
                <div
                  className="inline-flex items-center justify-center p-3.5 rounded-xl"
                  style={{
                    background: 'rgba(0,242,254,0.05)',
                    border: '1px solid rgba(0,242,254,0.10)',
                  }}
                >
                  <step.icon size={25} className="text-[#00f2fe]" />
                </div>
              </div>
              <h3 className="relative z-10 text-white font-semibold text-[23px] mb-3">{step.title}</h3>
              <p className="relative z-10 text-slate-400 text-[17px] font-normal leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline decorativ — same grid as cards, dots aligned per column */}
        <div className="hidden lg:block lg:mt-10">
          <div className="relative grid grid-cols-4 gap-6">
            {/* Linia gradient — spans centrul col 1 → centrul col 4, ușor scurtată */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-px pointer-events-none"
              style={{
                left: 'calc((100% - 3 * 1.5rem) / 8 + 2%)',
                right: 'calc((100% - 3 * 1.5rem) / 8 + 2%)',
                background:
                  'linear-gradient(to right, transparent, rgba(0,242,254,0.38) 22%, rgba(0,242,254,0.38) 78%, transparent)',
                boxShadow: '0 0 6px rgba(0,242,254,0.08)',
              }}
            />
            {/* Puncte */}
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex justify-center items-center py-1.5">
                <motion.div
                  animate={{ scale: [1, 1.18, 1] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: i * 0.45,
                    ease: 'easeInOut' as const,
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]/55 relative z-10 shrink-0"
                  style={{ boxShadow: '0 0 4px rgba(0,242,254,0.35)' }}
                />
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm text-center max-w-145 mx-auto mt-4 leading-relaxed">
            Un proces clar, construit ca să știi exact ce primești la fiecare etapă.
          </p>
        </div>

        {/* Block 3 — Buton */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6 lg:mt-8"
        >
          <motion.div className="inline-flex" whileHover="hover">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-[#00f2fe] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] text-white text-sm font-semibold rounded-xl px-6 py-3 transition-all duration-300"
            >
              Programează o întâlnire
              <motion.span
                variants={{
                  hover: { x: 4, transition: { duration: 0.2, ease: 'easeOut' as const } },
                }}
                className="inline-block"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
