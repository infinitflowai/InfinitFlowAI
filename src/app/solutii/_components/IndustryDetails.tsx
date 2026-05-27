'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cross, Scissors, Cake, Flower2, UtensilsCrossed,
  Car, ShoppingBag, Store, PawPrint, Dumbbell, Building2, Briefcase,
  ChevronDown,
} from 'lucide-react'
import Link from 'next/link'

const INDUSTRIES = [
  {
    id: 'clinici',
    icon: Cross,
    color: '#2D8FFF',
    title: 'Clinici dentare și medicale',
    pain: 'Programările se pierd, pacienții uită de consultații, iar recepția răspunde constant la aceleași întrebări.',
    solution: 'Construim o prezență online clară pentru clinică, cu servicii prezentate profesionist, formular de programare și automatizări pentru confirmări, reamintiri și comunicare cu pacienții.',
    results: ['Mai puține programări ratate', 'Recepție mai liberă de apeluri repetitive', 'Imagine online mai profesionistă'],
  },
  {
    id: 'saloane',
    icon: Scissors,
    color: '#00C8FF',
    title: 'Saloane de înfrumusețare',
    pain: 'Mesajele vin din WhatsApp, Instagram sau telefon, iar programările se pot încurca ușor în zilele aglomerate.',
    solution: 'Construim o pagină de prezentare pentru servicii, prețuri și portofoliu, conectată cu WhatsApp sau Instagram pentru programări, confirmări și reamintiri automate.',
    results: ['Mai multe cereri din online', 'Clienți confirmați automat', 'Reveniri și reprogramări mai simple'],
  },
  {
    id: 'cofetarii',
    icon: Cake,
    color: '#1A4FD6',
    title: 'Cofetării & Patiserii',
    pain: 'Comenzile personalizate vin din mai multe canale, iar detaliile despre torturi, produse sau ridicare pot fi ușor uitate.',
    solution: 'Construim un catalog online pentru produse, torturi și comenzi personalizate, conectat cu formular sau WhatsApp pentru confirmări, detalii comandă și mesaje automate.',
    results: ['Produse prezentate mai profesionist', 'Comenzi organizate mai clar', 'Mai puține detalii pierdute'],
  },
  {
    id: 'florarii',
    icon: Flower2,
    color: '#2D8FFF',
    title: 'Florării & Cadouri',
    pain: 'În perioadele aglomerate, comenzile, adresele de livrare și mesajele pentru cadouri pot deveni greu de gestionat manual.',
    solution: 'Construim un catalog online pentru buchete, cadouri și livrări, conectat cu WhatsApp sau formular, astfel încât comenzile, adresele și mesajele pentru cadouri să fie preluate clar.',
    results: ['Catalog online ușor de accesat', 'Comenzi centralizate', 'Clienți informați despre statusul comenzii'],
  },
  {
    id: 'restaurante',
    icon: UtensilsCrossed,
    color: '#00C8FF',
    title: 'Restaurante & Cafenele',
    pain: 'Clienții întreabă despre program, meniu, rezervări sau oferte, iar răspunsurile repetitive consumă timp.',
    solution: 'Construim o prezență online cu meniu digital, program, rezervări și oferte, plus răspunsuri automate pe WhatsApp sau site pentru întrebările frecvente ale clienților.',
    results: ['Meniu și program vizibile online', 'Rezervări mai ușor de gestionat', 'Mai puține apeluri repetitive'],
  },
  {
    id: 'service-auto',
    icon: Car,
    color: '#1A4FD6',
    title: 'Service-uri auto',
    pain: 'Clienții sună pentru prețuri, disponibilitate, programări sau statusul mașinii, iar echipa pierde timp la telefon.',
    solution: 'Construim o pagină clară pentru servicii, prețuri orientative și cereri de programare, conectată cu notificări automate pentru statusul mașinii și comunicarea cu clientul.',
    results: ['Servicii prezentate mai clar', 'Programări organizate', 'Mai puțin timp pierdut la telefon'],
  },
  {
    id: 'magazine-online',
    icon: ShoppingBag,
    color: '#2D8FFF',
    title: 'Magazine online',
    pain: 'Clienții abandonează coșul, nu finalizează comanda sau cer informații repetitive despre livrare, plată și produse.',
    solution: 'Construim o prezență online pentru magazin cu pagini clare de produs, mesaje automate pentru coș abandonat, confirmări de comandă, urmărire livrare și mesaje după achiziție.',
    results: ['Experiență online mai clară', 'Recuperare coșuri abandonate', 'Clienți informați după comandă'],
  },
  {
    id: 'magazine-locale',
    icon: Store,
    color: '#00C8FF',
    title: 'Magazine locale',
    pain: 'Clienții întreabă despre program, stoc, produse, prețuri sau locație, iar răspunsurile repetitive consumă timp.',
    solution: 'Construim o pagină online pentru program, produse, promoții și locație, plus un asistent care răspunde la întrebări frecvente și direcționează clientul către magazin.',
    results: ['Magazin mai vizibil online', 'Răspunsuri rapide la întrebări frecvente', 'Clienți informați înainte să ajungă în magazin'],
  },
  {
    id: 'veterinare',
    icon: PawPrint,
    color: '#1A4FD6',
    title: 'Cabinete veterinare',
    pain: 'Programările, notificările pentru consultații și întrebările despre servicii pot aglomera telefonul și recepția.',
    solution: 'Construim o prezență online clară pentru servicii, programări și informații utile, conectată cu notificări automate și colectarea detaliilor despre animal înainte de consultație.',
    results: ['Servicii prezentate mai profesionist', 'Programări mai clare', 'Notificări automate pentru clienți'],
  },
  {
    id: 'fitness',
    icon: Dumbbell,
    color: '#2D8FFF',
    title: 'Fitness & săli de sport',
    pain: 'Oamenii întreabă despre abonamente, program, clase sau antrenori, iar lead-urile se pot pierde fără follow-up rapid.',
    solution: 'Construim o pagină online pentru abonamente, program, clase și antrenori, conectată cu formulare, WhatsApp și mesaje automate pentru lead-uri și membri existenți.',
    results: ['Abonamente prezentate mai clar', 'Mai multe lead-uri urmărite', 'Comunicare mai bună cu membrii'],
  },
  {
    id: 'imobiliare',
    icon: Building2,
    color: '#00C8FF',
    title: 'Imobiliare',
    pain: 'Lead-urile vin din anunțuri, site, WhatsApp sau email și se pierd ușor dacă nu sunt urmărite rapid.',
    solution: 'Construim o prezență online pentru proprietăți, cereri și vizionări, conectată cu formulare, WhatsApp și email, astfel încât fiecare lead să fie organizat și urmărit rapid.',
    results: ['Proprietăți prezentate mai profesionist', 'Lead-uri organizate centralizat', 'Follow-up mai rapid'],
  },
  {
    id: 'alte-afaceri',
    icon: Briefcase,
    color: '#1A4FD6',
    title: 'Alte afaceri locale',
    pain: 'Fiecare afacere are cereri repetitive: întrebări, programări, comenzi, mesaje sau solicitări care consumă timp în fiecare zi.',
    solution: 'Construim o prezență online adaptată afacerii tale, cu site, formular, WhatsApp, email, chatbot sau CRM simplu, în funcție de serviciile și procesele tale.',
    results: ['Imagine online mai profesionistă', 'Soluție personalizată pentru afacerea ta', 'Mai puțină muncă manuală'],
  },
]

export function IndustryDetails() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className="pt-4 pb-16 lg:pt-5 lg:pb-24">
      <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 space-y-3">
        {INDUSTRIES.map((ind, i) => {
          const isOpen = openId === ind.id
          return (
            <motion.div
              key={ind.id}
              id={ind.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              animate={{
                borderColor: isOpen ? '#2D8FFF' : 'rgba(30,41,59,0.6)',
                boxShadow: isOpen
                  ? '0 0 24px rgba(45,143,255,0.14)'
                  : '0 0 0px rgba(45,143,255,0)',
              }}
              className="rounded-2xl border overflow-hidden"
              style={{ background: 'rgba(2,6,23,0.45)' }}
            >
              {/* Rând închis: icon + titlu + chevron */}
              <button
                onClick={() => toggle(ind.id)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105"
                  style={{
                    background: `${ind.color}18`,
                    border: `1px solid ${ind.color}30`,
                  }}
                >
                  <ind.icon size={19} style={{ color: ind.color }} />
                </div>

                <span className="flex-1 text-white font-semibold text-xl leading-snug">
                  {ind.title}
                </span>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="shrink-0"
                >
                  <ChevronDown
                    size={20}
                    className="text-slate-400 group-hover:text-slate-200 transition-colors duration-200"
                  />
                </motion.div>
              </button>

              {/* Conținut expandabil */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 py-8 border-t border-slate-800/50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">

                        {/* Problema */}
                        <div>
                          <p className="text-brand-muted text-sm font-bold tracking-widest uppercase mb-3">
                            Problema
                          </p>
                          <p className="text-brand-silver text-lg leading-relaxed">
                            {ind.pain}
                          </p>
                        </div>

                        {/* Soluția + beneficii + buton */}
                        <div>
                          <p className="text-brand-cyan text-sm font-bold tracking-widest uppercase mb-3">
                            Soluția noastră
                          </p>
                          <p className="text-brand-silver text-lg leading-relaxed mb-5">
                            {ind.solution}
                          </p>
                          <div className="flex flex-col gap-2.5 mb-6">
                            {ind.results.map((r) => (
                              <div
                                key={r}
                                className="flex items-center gap-2 text-base text-brand-silver"
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full shrink-0"
                                  style={{ background: ind.color }}
                                />
                                {r}
                              </div>
                            ))}
                          </div>
                          <Link
                            href="#solutii-contact"
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-lg btn-primary"
                          >
                            Vreau această soluție
                          </Link>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
