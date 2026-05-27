'use client'

import { motion } from 'framer-motion'
import { Globe, Bot, MessageSquare, LayoutDashboard, Share2, Cpu, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const SERVICES = [
  {
    id: 'website',
    icon: Globe,
    color: '#2D8FFF',
    label: 'Site profesional',
    title: 'Site-uri de prezentare profesionale',
    desc: 'Creăm site-uri moderne, rapide și clare, care prezintă afacerea ta profesionist și îi ajută pe clienți să înțeleagă rapid ce oferi și cum te pot contacta.',
    features: [
      'Design premium personalizat',
      'Optimizat pentru telefon și desktop',
      'Structură clară pentru servicii și oferte',
      'Formular de contact sau cerere',
    ],
  },
  {
    id: 'chatbot',
    icon: Bot,
    color: '#00C8FF',
    label: 'Asistent AI',
    title: 'Asistenți AI pentru clienți',
    desc: 'Implementăm asistenți AI care răspund automat la întrebări frecvente, colectează cereri și ghidează clientul către următorul pas: programare, comandă sau solicitare de ofertă.',
    features: [
      'Răspunsuri rapide pentru clienți',
      'Întrebări frecvente automatizate',
      'Colectare cereri și lead-uri',
      'Integrare pe site sau WhatsApp',
    ],
  },
  {
    id: 'whatsapp',
    icon: MessageSquare,
    color: '#1A4FD6',
    label: 'Comunicare automată',
    title: 'Automatizări WhatsApp & Email',
    desc: 'Confirmările, notificările și mesajele de revenire pot fi trimise automat, astfel încât clienții să primească răspuns la timp, fără muncă manuală zilnică.',
    features: [
      'Confirmări automate pentru cereri sau comenzi',
      'Reminder pentru programări',
      'Mesaje de revenire către clienți',
      'Comunicare mai rapidă și mai organizată',
    ],
  },
  {
    id: 'crm',
    icon: LayoutDashboard,
    color: '#2D8FFF',
    label: 'Cereri organizate',
    title: 'Cereri organizate într-un singur loc',
    desc: 'Toate mesajele și solicitările ajung într-un sistem clar, ca să știi cine te-a contactat, ce dorește și ce trebuie făcut mai departe.',
    features: [
      'Cereri centralizate',
      'Istoric de comunicare pe client',
      'Notificări pentru follow-up',
      'Acces de pe telefon și desktop',
    ],
  },
  {
    id: 'social',
    icon: Share2,
    color: '#00C8FF',
    label: 'Prezență online',
    title: 'Prezență online constantă',
    desc: 'Afacerea ta poate rămâne activă și vizibilă online prin conținut mai bine organizat, răspunsuri rapide și o imagine coerentă pe canalele importante.',
    features: [
      'Idei de conținut adaptate afacerii',
      'Programare postări',
      'Răspunsuri rapide la mesaje frecvente',
      'Imagine mai activă și profesionistă',
    ],
  },
  {
    id: 'custom',
    icon: Cpu,
    color: '#1A4FD6',
    label: 'Fluxuri automate',
    title: 'Automatizări pentru procese repetitive',
    desc: 'Activitățile care se repetă zilnic pot fi transformate în fluxuri automate simple, ca să economisești timp și să reduci haosul din firmă.',
    features: [
      'Analiză proces existent',
      'Flux personalizat de automatizare',
      'Integrare cu instrumentele folosite deja',
      'Suport după implementare',
    ],
  },
]

export function ServiceDetails() {
  return (
    <section className="pt-1 pb-16 lg:pt-2 lg:pb-20">
      <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 space-y-4">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.id}
            id={s.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: i * 0.05 }}
            className="bg-slate-950/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00f2fe]/35 hover:shadow-[0_0_24px_rgba(0,242,254,0.07)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-14 items-center">

              {/* Left: all text content */}
              <div>
                {/* Icon + Label */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}
                  >
                    <s.icon size={19} style={{ color: s.color }} />
                  </div>
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{ background: `${s.color}18`, color: s.color }}
                  >
                    {s.label}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-white font-bold text-2xl mb-3">{s.title}</h2>

                {/* Description */}
                <p className="text-brand-muted text-base leading-relaxed mb-5">{s.desc}</p>

                {/* Features — 2 columns on sm+ */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] text-brand-silver leading-snug">
                      <CheckCircle size={15} style={{ color: s.color }} className="mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-primary"
                >
                  Vreau o soluție similară
                </Link>
              </div>

              {/* Right: decorative icon — desktop only */}
              <div
                className="hidden lg:flex items-center justify-center w-40 h-40 rounded-2xl shrink-0"
                style={{
                  background: `radial-gradient(circle at center, ${s.color}12 0%, ${s.color}04 65%, transparent 100%)`,
                  border: `1px solid ${s.color}14`,
                }}
              >
                <s.icon size={56} style={{ color: s.color, opacity: 0.4, filter: `drop-shadow(0 0 12px ${s.color})` }} />
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
