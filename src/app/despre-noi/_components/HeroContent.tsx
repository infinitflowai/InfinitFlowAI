'use client'

import { motion } from 'framer-motion'

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <span className="text-xs font-semibold tracking-widest text-[#00f2fe] uppercase block mb-2">
        DESPRE NOI
      </span>
      <h1 className="mt-3 text-4xl md:text-6xl font-bold text-white leading-tight">
        Oameni care construiesc{' '}
        <span className="text-gradient-blue">soluții reale</span>
      </h1>
      <p className="mt-5 text-brand-muted text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
        Construim sisteme AI clare și ușor de folosit pentru antreprenori care vor să
        economisească timp, să răspundă mai rapid clienților și să își organizeze mai bine
        afacerea.
      </p>
    </motion.div>
  )
}
