import type { Metadata } from 'next'
import { ServicesGrid } from '@/components/ServicesGrid'
import { CTASection } from '@/components/CTASection'
import { ServiceDetails } from './_components/ServiceDetails'

export const metadata: Metadata = {
  title: 'Servicii — InfinitFlowAI',
  description:
    'Website-uri moderne, chatbot-uri AI, automatizări WhatsApp & Email, CRM pentru lead-uri, automatizări social media și soluții AI custom.',
}

export default function ServiciiPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="pt-6 pb-5 lg:pt-12 lg:pb-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(0,77,94,0.2) 0%, transparent 65%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-cyan text-sm font-semibold uppercase tracking-widest">
            Servicii pentru afaceri moderne
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Afacerea ta, </span>
            <span className="bg-linear-to-r from-[#2f80ff] via-[#00cfff] to-[#00f2fe] bg-clip-text text-transparent">
              mai vizibilă, mai rapidă și mai organizată
            </span>
          </h1>
          <p className="mt-6 text-brand-muted text-base lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Construim site-uri, asistenți AI și automatizări care îți prezintă afacerea mai clar,
            preiau cererile clienților și transformă comunicarea zilnică într-un sistem simplu,
            rapid și ușor de gestionat.
          </p>
        </div>
      </section>

      <ServiceDetails />

      <CTASection
        title="Discutăm despre proiectul tău?"
        subtitle="Spune-ne ce vrei să construiești și îți arătăm ce soluție se potrivește cel mai bine afacerii tale."
        sectionClassName="min-h-screen flex flex-col justify-center pt-10 pb-24 lg:pt-12 lg:pb-32 mt-4 lg:mt-6"
      />
    </div>
  )
}
