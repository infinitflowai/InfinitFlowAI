import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { IndustriesGrid } from '@/components/IndustriesGrid'
import { AutomationFlow } from '@/components/AutomationFlow'
import { PortfolioCards } from '@/components/PortfolioCards'
import { TestimonialCard } from '@/components/TestimonialCard'
import { CTASection } from '@/components/CTASection'

function MobileDivider() {
  return (
    <div className="block lg:hidden max-w-360 mx-auto px-6 sm:px-8">
      <div
        className="w-full h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(0,200,255,0.22) 30%, rgba(0,200,255,0.22) 70%, transparent)',
          boxShadow: '0 0 8px rgba(0,200,255,0.10)',
        }}
      />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MobileDivider />
      <ServicesGrid />
      <MobileDivider />
      <IndustriesGrid />
      <MobileDivider />
      <AutomationFlow />
      <MobileDivider />
      <PortfolioCards />
      <MobileDivider />
      <TestimonialCard />
      <MobileDivider />
      <CTASection sectionClassName="min-h-screen lg:min-h-140 min-[1200px]:min-h-screen flex flex-col justify-center py-20 lg:py-16 min-[1200px]:py-24" />
    </>
  )
}
