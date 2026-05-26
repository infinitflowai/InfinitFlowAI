import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — InfinitFlowAI',
  description:
    'Spune-ne ce vrei să automatizezi. Îți răspundem în 24 de ore cu o propunere clară și gratuită.',
}

const INFO = [
  {
    icon: Mail,
    color: '#2D8FFF',
    label: 'Email',
    value: 'infinitflowai@gmail.com',
    href: 'mailto:infinitflowai@gmail.com',
  },
  {
    icon: Phone,
    color: '#00C8FF',
    label: 'Telefon',
    value: '0750 448 872',
    href: 'tel:+40750448872',
  },
  {
    icon: MessageCircle,
    color: '#1A4FD6',
    label: 'WhatsApp',
    value: 'Scrie-ne direct',
    href: 'https://wa.me/40750448872',
  },
  {
    icon: Clock,
    color: '#2D8FFF',
    label: 'Program răspuns',
    value: 'Luni - Vineri: 10:00 - 18:00',
    href: null,
  },
]


export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20 min-h-screen">

      {/* Compact header */}
      <section className="py-8 lg:py-10 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(0,77,94,0.18) 0%, transparent 65%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest text-[#00f2fe] uppercase block mb-2">
            HAI SĂ DISCUTĂM
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Spune-ne ce vrei să automatizezi
          </h1>
          <p className="text-base text-slate-400 max-w-2xl mx-auto mt-3 leading-relaxed">
            Completează formularul sau scrie-ne direct pe WhatsApp. Îți răspundem cu o idee clară
            despre ce se poate îmbunătăți în firma ta.
          </p>
        </div>
      </section>

      {/* Main grid */}
      <section className="pb-12 lg:pb-16">
        <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">

          {/* Contact cards + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mt-4">

            {/* Left: contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-white font-bold text-base mb-4">Informații contact</h2>
              <div className="space-y-3">
                {INFO.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/40 backdrop-blur-md border border-slate-800/60 transition-all duration-200 hover:border-[#00f2fe]/30 hover:shadow-[0_0_16px_rgba(0,242,254,0.08)]"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                    >
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-brand-muted text-xs uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-brand-silver text-sm font-medium hover:text-brand-cyan transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-brand-silver text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust card */}
              <div className="bg-slate-950/30 backdrop-blur-md border border-slate-800/60 rounded-2xl p-4 mt-5">
                <div className="space-y-2.5">
                  {[
                    'Răspundem în maximum 24h',
                    'Prima discuție este gratuită',
                    'Fără angajament',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="text-[#00f2fe] font-bold text-sm">✓</span>
                      <span className="text-slate-300 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl p-5 lg:p-6 bg-slate-950/40 backdrop-blur-md border border-slate-800/60">
                <h2 className="text-white font-bold text-base mb-5">Spune-ne ce vrei să îmbunătățim</h2>
                <ContactForm />
              </div>
            </div>
          </div>


</div>
      </section>
    </div>
  )
}
