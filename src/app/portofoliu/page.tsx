import type { Metadata } from 'next'
import { PortfolioCards } from '@/components/PortfolioCards'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Portofoliu — InfinitFlowAI',
  description:
    'Exemple de proiecte realizate: website-uri moderne, automatizări AI și sisteme digitale pentru afaceri din România.',
}

export default function PortofoliuPage() {
  return (
    <div className="pt-20">
      <PortfolioCards />

      <CTASection
        large
        card
        sectionClassName="min-h-[90vh] flex flex-col justify-center py-14 md:py-20"
        title="Vrei un proiect similar?"
        subtitle="Spune-ne ce ai în minte și îți arătăm concret ce putem construi pentru afacerea ta."
      />
    </div>
  )
}
