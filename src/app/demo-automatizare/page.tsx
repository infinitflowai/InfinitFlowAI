import type { Metadata } from 'next'
import { DemoAutomatizarePage } from '@/components/DemoAutomatizarePage'

export const metadata: Metadata = {
  title: 'Demo: Sistem Automat pentru Cereri — InfinitFlowAI',
  description:
    'Testează un demo interactiv care arată cum funcționează un sistem automat de preluare cereri: notificare echipă, organizare date și răspuns rapid pentru client.',
}

export default function Page() {
  return <DemoAutomatizarePage />
}
