'use client'

import { motion } from 'framer-motion'
import { Globe, Bot, MessageSquare, LayoutDashboard, Share2, Cpu, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const SERVICES = [
  {
    icon: Globe,
    title: 'Prezență online profesionistă',
    desc: 'Un site clar, rapid și adaptat afacerii tale, ca oamenii să înțeleagă ce oferi și să te contacteze mai ușor.',
    anchor: '#website',
  },
  {
    icon: Bot,
    title: 'Asistent AI pentru clienți',
    desc: 'Răspunde automat la întrebări frecvente, preia cereri și îndrumă clientul către programare, comandă sau ofertă.',
    anchor: '#chatbot',
  },
  {
    icon: MessageSquare,
    title: 'Comunicare automată',
    desc: 'Confirmări, notificări și mesaje de revenire trimise automat pe WhatsApp sau email, fără muncă manuală zilnică.',
    anchor: '#whatsapp',
  },
  {
    icon: LayoutDashboard,
    title: 'Cereri organizate într-un singur loc',
    desc: 'Toate mesajele și solicitările ajung într-un sistem clar, ca să știi cine a scris, ce dorește și ce urmează.',
    anchor: '#crm',
  },
  {
    icon: Share2,
    title: 'Imagine online constantă',
    desc: 'Postări programate, idei de conținut și răspunsuri rapide, ca afacerea ta să rămână activă și prezentă online.',
    anchor: '#social',
  },
  {
    icon: Cpu,
    title: 'Automatizări pentru procese repetitive',
    desc: 'Transformăm activitățile care îți consumă timp în fluxuri automate, simple și ușor de folosit.',
    anchor: '#custom',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export function ServicesGrid() {
  return (
    <section className="relative pt-9 md:pt-5 min-[1200px]:pt-12 pb-12 min-[1200px]:pb-16">
      <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
            <span className="text-white">Afacerea ta, </span>
            <span className="bg-linear-to-r from-[#2f80ff] via-[#00cfff] to-[#00f2fe] bg-clip-text text-transparent">
              mai vizibilă, mai rapidă și mai organizată
            </span>
          </h2>

          <div className="w-12 h-0.5 bg-[#00f2fe] mx-auto mt-3 rounded-full opacity-70" />

          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mt-3 leading-relaxed">
            Construim site-uri, asistenți AI și automatizări care îți{' '}
            <span className="text-white font-semibold">prezintă afacerea mai clar</span>,{' '}
            <span className="text-white font-semibold">organizează cererile</span> și ajută clienții să primească{' '}
            <span className="text-white font-semibold">răspuns mai rapid</span>.
          </p>

          <div className="mt-5 flex justify-center">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' as const }}
            >
              <Link
                href="/servicii"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)]"
              >
                Vezi toate serviciile <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover="hovered"
            >
              <motion.div
                variants={{
                  hovered: {
                    y: -6,
                    scale: 1.01,
                    borderColor: 'rgba(0,242,254,0.50)',
                    boxShadow: '0 0 40px rgba(0,242,254,0.08)',
                    transition: { duration: 0.25, ease: 'easeOut' as const },
                  },
                }}
                className="h-full rounded-2xl backdrop-blur-md p-6 flex flex-col relative overflow-hidden"
                style={{
                  background: 'rgba(2,6,23,0.45)',
                  border: '1px solid rgba(30,41,59,0.70)',
                }}
              >
                {/* Accent line top */}
                <motion.div
                  variants={{
                    hovered: { opacity: 1, transition: { duration: 0.25 } },
                  }}
                  initial={{ opacity: 0 }}
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgba(0,242,254,0.5), transparent)',
                  }}
                />

                <Link href={`/servicii${s.anchor}`} className="flex flex-col flex-1">
                  {/* Icon */}
                  <motion.div
                    variants={{
                      hovered: {
                        scale: 1.08,
                        boxShadow: '0 0 14px rgba(0,242,254,0.35)',
                        transition: { duration: 0.25, ease: 'easeOut' as const },
                      },
                    }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                    style={{
                      background: 'rgba(0,242,254,0.06)',
                      border: '1px solid rgba(0,242,254,0.12)',
                    }}
                  >
                    <s.icon size={19} className="text-[#00f2fe]" />
                  </motion.div>

                  <h3 className="text-white font-semibold tracking-tight text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.desc}</p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00f2fe] mt-4">
                    Află mai mult{' '}
                    <motion.span
                      variants={{
                        hovered: { x: 4, transition: { duration: 0.2, ease: 'easeOut' as const } },
                      }}
                      className="inline-flex"
                    >
                      <ArrowRight size={13} />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
