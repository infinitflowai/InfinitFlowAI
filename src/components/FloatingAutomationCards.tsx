'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, BarChart3, Zap, Clock, CheckCircle2 } from 'lucide-react'

type CardId = 'chatbot' | 'crm' | 'automation' | 'whatsapp'

// ─── WhatsApp SVG ────────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25D366' }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── Sphere content per active card ─────────────────────────────────────────
const SPHERE_CONTENT: Record<CardId, React.ReactNode> = {
  chatbot: (
    <div className="flex flex-col items-center gap-1 select-none">
      <MessageSquare size={28} strokeWidth={1.5} style={{ color: '#00C8FF' }} />
      <span className="font-bold text-sm leading-none" style={{ color: '#00C8FF' }}>0s</span>
    </div>
  ),
  crm: (
    <div className="flex flex-col items-center gap-1 select-none">
      <CheckCircle2 size={28} strokeWidth={1.5} style={{ color: '#00C8FF' }} />
      <span className="font-bold text-[10px] leading-none" style={{ color: '#00C8FF' }}>Sync</span>
    </div>
  ),
  automation: (
    <div className="flex flex-col items-center gap-1 select-none">
      <Clock size={28} strokeWidth={1.5} style={{ color: '#00C8FF' }} />
      <span className="font-bold text-sm leading-none" style={{ color: '#00C8FF' }}>3.2h</span>
    </div>
  ),
  whatsapp: (
    <div className="flex items-center justify-center select-none">
      <WhatsAppIcon size={32} />
    </div>
  ),
}

// ─── Card data ───────────────────────────────────────────────────────────────
// desktopPos: absolute corner position within the canvas on md+
const CARDS = [
  {
    id: 'chatbot' as CardId,
    icon: <MessageSquare size={16} style={{ color: '#00C8FF' }} />,
    color: '#00C8FF',
    title: 'Clienții primesc răspuns imediat',
    subtitle: 'Chiar și când nu ești online',
    border: 'rgba(0,200,255,0.28)',
    glow: 'rgba(0,200,255,0.14)',
    floatDuration: 3.8,
    floatDelay: 0.2,
    desktopPos: 'md:top-2.5 md:left-0 lg:-left-12.5',
  },
  {
    id: 'crm' as CardId,
    icon: <BarChart3 size={16} style={{ color: '#2D8FFF' }} />,
    color: '#2D8FFF',
    title: 'Cererile nu se mai pierd',
    subtitle: 'Totul ajunge organizat la tine',
    border: 'rgba(45,143,255,0.28)',
    glow: 'rgba(45,143,255,0.14)',
    floatDuration: 4.1,
    floatDelay: 0.5,
    desktopPos: 'md:top-2.5 md:right-0 lg:-right-12.5',
  },
  {
    id: 'automation' as CardId,
    icon: <Zap size={16} style={{ color: '#6C8FFF' }} />,
    color: '#6C8FFF',
    title: 'Economisești timp zilnic',
    subtitle: 'AI-ul răspunde la întrebările simple',
    border: 'rgba(26,79,214,0.35)',
    glow: 'rgba(26,79,214,0.18)',
    floatDuration: 3.5,
    floatDelay: 1.5,
    desktopPos: 'md:bottom-2.5 md:left-0 lg:-left-12.5',
  },
  {
    id: 'whatsapp' as CardId,
    icon: <WhatsAppIcon size={16} />,
    color: '#25D366',
    title: 'Contact rapid pe WhatsApp',
    subtitle: 'Clientul te contactează dintr-un click',
    border: 'rgba(37,211,102,0.28)',
    glow: 'rgba(37,211,102,0.14)',
    floatDuration: 4.4,
    floatDelay: 0.9,
    desktopPos: 'md:bottom-2.5 md:right-0 lg:-right-12.5',
  },
]

// ─── Variants ────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
}

const cardEntranceVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

// ─── Card face (shared render) ───────────────────────────────────────────────
function CardFace({
  card,
  onEnter,
  onLeave,
}: {
  card: (typeof CARDS)[number]
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: card.floatDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: card.floatDelay,
      }}
      whileHover="hover"
      onHoverStart={onEnter}
      onHoverEnd={onLeave}
    >
      <motion.div
        variants={{
          hover: {
            y: -5,
            borderColor: 'rgba(0,200,255,0.72)',
            boxShadow:
              '0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(0,200,255,0.2), 0 0 0 1px rgba(0,200,255,0.55)',
            transition: { duration: 0.2, ease: 'easeOut' as const },
          },
        }}
        className="w-full md:w-75 min-h-30 flex items-start gap-3 px-5 py-4 rounded-xl backdrop-blur-md cursor-default"
        style={{
          background: 'rgba(255,255,255,0.05)',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: card.border,
          boxShadow: `0 4px 20px rgba(0,0,0,0.45), 0 0 14px ${card.glow}, 0 0 0 1px rgba(0,200,255,0)`,
        }}
      >
        {/* Icon badge — fixed size for all cards */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
          style={{
            background: `${card.color}18`,
            border: `1px solid ${card.color}35`,
          }}
        >
          {card.icon}
        </div>

        {/* Text — fills remaining width */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-base font-semibold leading-snug line-clamp-2">
            {card.title}
          </p>
          <p className="mt-1 text-3.25 font-normal text-slate-300 leading-snug line-clamp-2">
            {card.subtitle}
          </p>
        </div>

        {/* Live indicator */}
        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-blink shrink-0 mt-1.5" />
      </motion.div>
    </motion.div>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────
export function FloatingAutomationCards() {
  const [activeCard, setActiveCard] = useState<CardId | null>(null)

  return (
    /*
     * Outer canvas:
     *   mobile  — flex-col, h-auto; sphere + 2×2 card grid stack vertically
     *   desktop — fixed 500px height; sphere centered; cards absolute at 4 corners
     */
    <div className="relative w-full flex flex-col items-center gap-6 md:h-150 md:justify-center md:gap-0">

      {/* ── Sphere ─────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Sphere container — w-64 mobile, 460px desktop */}
          <div className="relative w-64 h-64 md:w-115 md:h-115">

            {/* Pulsing glow backdrop */}
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.9, 0.45] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-4 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(0,200,255,0.7) 0%, rgba(0,150,220,0.4) 45%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            {/* Outer ring — clockwise */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0%, rgba(0,200,255,0.55) 25%, transparent 50%, rgba(45,143,255,0.4) 75%, transparent 100%)',
                border: '2px solid rgba(0,200,255,0.55)',
              }}
            />

            {/* Inner ring — counter-clockwise */}
            <motion.div
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full"
              style={{ border: '1px dashed rgba(0,200,255,0.22)' }}
            />

            {/* Inner glow */}
            <div
              className="absolute inset-6 rounded-full animate-pulse-glow"
              style={{
                background: 'radial-gradient(circle, rgba(0,77,94,0.6) 0%, rgba(3,13,20,0.8) 70%)',
                border: '1px solid rgba(0,200,255,0.45)',
                boxShadow: '0 0 140px rgba(0,200,255,0.65), 0 0 70px rgba(0,150,220,0.45)',
              }}
            />

            {/* Center orb — interactive content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-20 h-20 md:w-35 md:h-35 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    'radial-gradient(circle at 38% 35%, rgba(210,245,255,0.98) 0%, rgba(0,190,230,0.9) 22%, rgba(0,110,160,0.95) 50%, rgba(3,13,20,1) 100%)',
                  boxShadow:
                    '0 0 80px rgba(0,200,255,0.8), 0 0 160px rgba(0,200,255,0.4), inset 0 1px 0 rgba(255,255,255,0.5)',
                  border: '1px solid rgba(0,200,255,0.7)',
                }}
              >
                <AnimatePresence mode="wait">
                  {activeCard !== null ? (
                    <motion.div
                      key={activeCard}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.25, ease: 'easeOut' as const }}
                      className="flex flex-col items-center justify-center"
                    >
                      {SPHERE_CONTENT[activeCard]}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' as const }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-12 h-12 rounded-full"
                        style={{
                          background:
                            'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,220,255,0.95) 30%, rgba(0,200,255,0.4) 65%, transparent 85%)',
                          boxShadow: '0 0 28px rgba(0,220,255,0.95), 0 0 50px rgba(0,200,255,0.5)',
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>

      {/*
       * ── Cards ──────────────────────────────────────────────────────────────
       * mobile:  2×2 grid, normal flow below the sphere
       * desktop: absolute overlay covering the full 500px canvas;
       *          each card entrance div becomes absolute at its corner
       */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-3 w-full px-2
                   md:absolute md:inset-0 md:grid-cols-1 md:px-0 md:pointer-events-none"
      >
        {CARDS.map((card) => (
          <motion.div
            key={card.id}
            variants={cardEntranceVariants}
            className={`md:absolute ${card.desktopPos} md:z-10 md:pointer-events-auto`}
          >
            <CardFace
              card={card}
              onEnter={() => setActiveCard(card.id)}
              onLeave={() => setActiveCard(null)}
            />
          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}
