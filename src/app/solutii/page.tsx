import type { Metadata } from 'next'
import { IndustriesGrid } from '@/components/IndustriesGrid'
import { CTASection } from '@/components/CTASection'
import { IndustryDetails } from './_components/IndustryDetails'

export const metadata: Metadata = {
  title: 'Soluții pe industrii — InfinitFlowAI',
  description:
    'Soluții AI personalizate pentru clinici, saloane, cofetării, florării, restaurante, service-uri auto, magazine, cabinete veterinare, fitness, imobiliare și alte afaceri locale.',
}

export default function SolutiiPage() {
  return (
    <div className="pt-20">
      <section className="pt-5 pb-3 lg:pt-7 lg:pb-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(0,77,94,0.2) 0%, transparent 65%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-cyan text-sm font-semibold uppercase tracking-widest">
            Soluții specializate
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Soluții pentru <span className="text-gradient-blue">orice domeniu</span>
          </h1>
          <p className="mt-6 text-brand-muted text-base lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Fiecare industrie are provocări specifice. Noi le cunoaștem și construim soluții care se
            potrivesc exact cu nevoile tale.
          </p>
          <p className="mt-3 text-sm text-slate-300/80 max-w-lg mx-auto">
            Alege domeniul tău sau explorează exemplele de mai jos.
          </p>
          <div
            className="w-16 h-px mx-auto mt-5 rounded-full opacity-60"
            style={{ background: 'linear-gradient(to right, #2f80ff, #00f2fe)' }}
          />
        </div>
      </section>

      <IndustryDetails />

      <span id="solutii-contact" className="block" />
      <CTASection
        title="Nu îți vezi domeniul în listă?"
        subtitle="Spune-ne cum funcționează afacerea ta și îți arătăm ce procese pot fi automatizate."
        sectionClassName="min-h-screen flex flex-col justify-center pt-16 pb-32 lg:pt-20 lg:pb-40"
      />
    </div>
  )
}
