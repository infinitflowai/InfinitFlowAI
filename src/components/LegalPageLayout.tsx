import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-brand-muted mb-8">
          <Link href="/" className="hover:text-brand-cyan transition-colors">Acasă</Link>
          <ChevronRight size={12} />
          <span className="text-brand-silver">{title}</span>
        </div>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-[#004D5E]/20">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h1>
          <p className="text-brand-muted text-sm">Ultima actualizare: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose-legal">
          {children}
        </div>

        {/* Back link */}
        <div className="mt-14 pt-8 border-t border-[#004D5E]/20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-brand-cyan hover:text-white transition-colors"
          >
            ← Înapoi la pagina principală
          </Link>
        </div>
      </div>
    </div>
  )
}
