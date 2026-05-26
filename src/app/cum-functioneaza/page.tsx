import type { Metadata } from 'next'
import { AutomationFlow } from '@/components/AutomationFlow'
import { CTASection } from '@/components/CTASection'
import { ProcessDeep } from './_components/ProcessDeep'

export const metadata: Metadata = {
  title: 'Cum funcționează — InfinitFlowAI',
  description:
    'Procesul nostru în 4 pași: analiză, strategie, implementare și optimizare. Prima analiză este gratuită.',
}

export default function CumFunctioneazaPage() {
  return (
    <div className="pt-20">
      <AutomationFlow />
      <ProcessDeep />

      <CTASection
        title="Gata să automatizezi?"
        subtitle="Programează o analiză gratuită de 30 minute și îți spunem ce poți automatiza în afacerea ta."
        primaryLabel="Programează analiza gratuită"
        sectionClassName="min-h-screen flex flex-col justify-center pt-16 pb-32 lg:pt-20 lg:pb-40"
      />
    </div>
  )
}
