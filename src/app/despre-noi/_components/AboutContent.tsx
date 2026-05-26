'use client'

import { motion } from 'framer-motion'
import { Target, ShieldCheck, Heart, Zap } from 'lucide-react'

const VALUES = [
  {
    icon: Target,
    title: 'Rezultate măsurabile',
    desc: 'Nu construim de dragul tehnologiei. Fiecare soluție are un scop clar: să economisești timp, să câștigi mai mulți clienți și să reduci efortul manual.',
  },
  {
    icon: ShieldCheck,
    title: 'Corectitudine completă',
    desc: 'Știi exact ce construim, cât costă și când livrăm. Fără taxe ascunse, fără contracte complicate și fără termeni tehnici de neînțeles.',
  },
  {
    icon: Heart,
    title: 'Suport pe termen lung',
    desc: 'Lansarea este doar începutul. Suntem alături de tine cu mentenanță, optimizări și idei noi pe măsură ce afacerea ta crește.',
  },
  {
    icon: Zap,
    title: 'Viteză de execuție',
    desc: 'Lucrăm rapid și livrăm exact la termenul stabilit. Un site este gata în 7–14 zile, iar o automatizare în 3–5 zile. Fără blocaje, fără așteptare.',
  },
]

const METRICS = [
  { value: '6+', label: 'Soluții oferite' },
  { value: '12+', label: 'Tipuri de afaceri analizate' },
  { value: '24h', label: 'Timp răspuns propunere' },
  { value: '100%', label: 'Focalizare pe rezultate' },
]

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const cardHover = {
  y: -5,
  borderColor: 'rgba(0,242,254,0.4)',
  boxShadow: '0 0 25px rgba(0,242,254,0.10)',
  transition: { duration: 0.25, ease: 'easeOut' as const },
}

export function AboutContent() {
  return (
    <div className="pt-5 pb-10 lg:pt-6 lg:pb-14">
      <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">

        {/* Story + Metrics — side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-brand-cyan text-xs font-semibold uppercase tracking-widest">
              Povestea noastră
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white mb-4">
              De ce am creat InfinitFlowAI
            </h2>
            <div className="section-divider mb-5" />
            <p className="text-brand-muted leading-relaxed mb-4">
              Am văzut prea multe afaceri locale care pierd timp și bani pe procese manuale ce
              pot fi automatizate ușor: mesaje la care se răspunde târziu, programări greu de
              gestionat, cereri pierdute și sarcini repetitive care consumă ore în fiecare
              săptămână.
            </p>
            <p className="text-brand-muted leading-relaxed mb-4">
              InfinitFlowAI a fost creat pentru a aduce automatizările moderne mai aproape de
              firmele din România — într-un mod simplu, clar și ușor de folosit.
            </p>
            <p className="text-brand-muted leading-relaxed">
              Nu vindem promisiuni vagi. Construim site-uri, asistenți virtuali și sisteme
              automate care economisesc timp, reduc erorile și ajută firmele să răspundă mai
              rapid clienților.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {METRICS.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={cardHover}
                className="bg-slate-950/30 backdrop-blur-sm border rounded-xl p-5 text-center"
                style={{ borderColor: 'rgba(15,23,42,0.6)' }}
              >
                <p className="text-3xl font-black mb-1 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-[#00f2fe]">
                  {s.value}
                </p>
                <p className="text-brand-muted text-sm">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-16 lg:mt-28">

        {/* Values heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Valorile noastre</h2>
          <div className="section-divider mx-auto mt-4" />
        </motion.div>

        {/* Values cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              whileHover={cardHover}
              className="rounded-2xl p-6 bg-slate-950/40 backdrop-blur-md border text-center flex flex-col items-center"
              style={{ borderColor: 'rgba(30,41,59,0.6)' }}
            >
              <div className="text-[#00f2fe] bg-[#00f2fe]/5 border border-[#00f2fe]/10 p-3 rounded-full mb-4 flex items-center justify-center">
                <v.icon size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">{v.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        </div>{/* end Values wrapper */}
      </div>
    </div>
  )
}
