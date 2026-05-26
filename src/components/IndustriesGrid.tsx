'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cross, Scissors, Cake, Flower2, UtensilsCrossed, Car, ShoppingBag, Store, PawPrint, Dumbbell, Building2, Sparkles } from 'lucide-react'
import Link from 'next/link'

const INDUSTRIES = [
  {
    icon: Cross,
    title: 'Clinici dentare și medicale',
    sub: 'Servicii prezentate clar, programări online și confirmări automate pentru pacienți.',
    href: '/solutii#clinici',
  },
  {
    icon: Scissors,
    title: 'Saloane de înfrumusețare',
    sub: 'Servicii, prețuri și portofoliu online, cu programări și confirmări rapide.',
    href: '/solutii#saloane',
  },
  {
    icon: Cake,
    title: 'Cofetării & Patiserii',
    sub: 'Catalog online pentru produse și comenzi personalizate, cu confirmări automate.',
    href: '/solutii#cofetarii',
  },
  {
    icon: Flower2,
    title: 'Florării & Cadouri',
    sub: 'Catalog pentru buchete și cadouri, comenzi centralizate și răspunsuri rapide.',
    href: '/solutii#florarii',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurante & Cafenele',
    sub: 'Meniu digital, rezervări online și răspunsuri automate la întrebări frecvente.',
    href: '/solutii#restaurante',
  },
  {
    icon: Car,
    title: 'Service-uri auto',
    sub: 'Servicii prezentate clar, programări online și notificări despre statusul mașinii.',
    href: '/solutii#service-auto',
  },
  {
    icon: ShoppingBag,
    title: 'Magazine online',
    sub: 'Pagini de produs mai clare, mesaje pentru coș abandonat, livrare și follow-up.',
    href: '/solutii#magazine',
  },
  {
    icon: Store,
    title: 'Magazine locale',
    sub: 'Program, produse, promoții și locație vizibile online, cu răspunsuri rapide.',
    href: '/solutii#magazine-locale',
  },
  {
    icon: PawPrint,
    title: 'Cabinete veterinare',
    sub: 'Servicii, programări și mesaje de reamintire pentru consultații, organizate clar.',
    href: '/solutii#veterinare',
  },
  {
    icon: Dumbbell,
    title: 'Fitness & săli de sport',
    sub: 'Abonamente, clase și antrenori prezentați online, cu lead-uri și mesaje automate.',
    href: '/solutii#fitness',
  },
  {
    icon: Building2,
    title: 'Imobiliare',
    sub: 'Proprietăți prezentate profesionist, cereri organizate și follow-up pentru vizionări.',
    href: '/solutii#imobiliare',
  },
  {
    icon: Sparkles,
    title: 'Alte afaceri locale',
    sub: 'Prezență online și automatizări adaptate proceselor tale zilnice.',
    href: '/solutii#alte-afaceri',
  },
]

const BENEFITS = [
  'Prezență online mai profesionistă',
  'Cereri și programări organizate',
  'Răspunsuri rapide pentru clienți',
  'Mesaje automate către clienți',
  'Mai puține cereri pierdute',
  'Mai puțină muncă repetitivă',
]

export function IndustriesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 lg:py-20 bg-linear-to-b from-transparent via-brand-card/30 to-transparent">
      <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-center gap-12 lg:gap-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="max-w-xl mx-auto lg:mx-0 w-full"
          >
            <span className="text-xs font-semibold tracking-widest text-[#00f2fe] uppercase block mb-5">
              UNDE PRODUCEM REZULTATE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="block text-white">Soluții inteligente pentru</span>
              <span className="block bg-linear-to-r from-[#00f2fe] via-blue-400 to-blue-600 bg-clip-text text-transparent">
                orice tip de afacere
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mt-4 leading-relaxed">
              Construim prezență online, formulare, chatbot-uri și automatizări adaptate domeniului
              tău — ca să atragi mai mulți clienți, să răspunzi mai rapid și să pierzi mai puține
              cereri.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3.5 mt-7">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <span className="text-[#00f2fe] font-bold text-[15px] mt-0.5 shrink-0">✓</span>
                  <span className="text-slate-300 font-medium text-[15px]">{b}</span>
                </div>
              ))}
            </div>

            <Link
              href="/solutii"
              className="inline-flex items-center mt-9 bg-linear-to-r from-blue-600 to-[#00f2fe] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] text-white text-[15px] font-semibold rounded-xl px-7 py-3.5 transition-all duration-300"
            >
              Vezi cum te ajutăm →
            </Link>
          </motion.div>

          {/* Right: industry stack — 2 cols on md+ */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {INDUSTRIES.map((ind, i) => {
              const dimmed = hoveredIndex !== null && hoveredIndex !== i
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <Link href={ind.href} className="block">
                    <motion.div
                      onHoverStart={() => setHoveredIndex(i)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      whileHover="hovered"
                      animate={{ opacity: dimmed ? 0.6 : 1 }}
                      variants={{
                        hovered: {
                          y: -3,
                          backgroundColor: 'rgba(15,23,42,0.6)',
                          borderColor: 'rgba(0,242,254,0.3)',
                          transition: { duration: 0.2, ease: 'easeOut' as const },
                        },
                      }}
                      transition={{ duration: 0.2, ease: 'easeOut' as const }}
                      className="flex items-center gap-4 rounded-xl p-5 h-26 overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(2,6,23,0.2)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'rgba(15,23,42,0.8)',
                      }}
                    >
                      {/* Icon */}
                      <motion.div
                        variants={{
                          hovered: {
                            boxShadow: '0 0 14px rgba(0,242,254,0.5)',
                            borderColor: 'rgba(0,242,254,0.4)',
                            transition: { duration: 0.2, ease: 'easeOut' as const },
                          },
                        }}
                        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          background: 'rgba(0,200,255,0.08)',
                          borderWidth: 1,
                          borderStyle: 'solid',
                          borderColor: 'rgba(0,200,255,0.15)',
                        }}
                      >
                        <ind.icon size={20} className="text-[#00f2fe]" />
                      </motion.div>

                      {/* Text */}
                      <div className="min-w-0">
                        <p className="text-white font-semibold text-[15px] leading-snug">{ind.title}</p>
                        <p className="text-[13px] text-slate-400 mt-0.5 leading-relaxed">{ind.sub}</p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
