'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Native scroll is faster on mobile — skip Lenis below 768px
    if (window.matchMedia('(max-width: 767px)').matches) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenisRef.current = lenis

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Wait for the new page to render before scrolling to anchor
      const timer = setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          lenisRef.current?.scrollTo(element as HTMLElement, { immediate: false, duration: 0.8 })
        }
      }, 120)
      return () => clearTimeout(timer)
    } else {
      lenisRef.current?.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return <>{children}</>
}
