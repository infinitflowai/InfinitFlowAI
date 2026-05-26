import type { Metadata } from 'next'
import { CTASection } from '@/components/CTASection'
import { AboutContent } from './_components/AboutContent'
import { HeroContent } from './_components/HeroContent'

export const metadata: Metadata = {
  title: 'Despre noi — InfinitFlowAI',
  description:
    'InfinitFlowAI este o agenție de automatizări AI din România. Construim sisteme digitale care economisesc timp și ajută afacerile să crească.',
}

export default function DespreNoiPage() {
  return (
    <div className="pt-20 pb-0">
      <section className="pt-12 pb-6 md:pt-14 md:pb-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(0,77,94,0.2) 0%, transparent 65%)',
          }}
        />
        <HeroContent />
      </section>

      <AboutContent />

      <CTASection
        compact
        title="Hai să construim împreună"
        subtitle="Discutăm despre afacerea ta și vedem ce putem automatiza. Gratuit, clar și fără presiune."
      />
    </div>
  )
}
