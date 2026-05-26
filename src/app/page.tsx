import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { IndustriesGrid } from '@/components/IndustriesGrid'
import { AutomationFlow } from '@/components/AutomationFlow'
import { PortfolioCards } from '@/components/PortfolioCards'
import { TestimonialCard } from '@/components/TestimonialCard'
import { CTASection } from '@/components/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <IndustriesGrid />
      <AutomationFlow />
      <PortfolioCards />
      <TestimonialCard />
      <CTASection sectionClassName="min-h-screen flex flex-col justify-center py-20 lg:py-24" />
    </>
  )
}
