import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
})

export const metadata: Metadata = {
  title: 'InfinitFlowAI — Website-uri, Chatbot-uri și Automatizări AI',
  description:
    'InfinitFlowAI construiește sisteme digitale care economisesc timp, organizează lead-urile și ajută firmele să răspundă mai rapid clienților. Website-uri premium, automatizări WhatsApp, CRM-uri și asistenți AI.',
  keywords:
    'automatizari AI, website-uri moderne, chatbot AI, CRM, automatizari WhatsApp, agentie AI Romania',
  openGraph: {
    title: 'InfinitFlowAI — Automatizări AI pentru afaceri moderne',
    description:
      'Transformăm procesele manuale în fluxuri inteligente. Website-uri, chatbot-uri, CRM-uri și automatizări AI.',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-brand-bg text-brand-silver antialiased">
        <LenisProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
