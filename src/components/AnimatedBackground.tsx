'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const COLORS = ['#2D8FFF', '#00C8FF', '#004D5E', '#1A4FD6']
    const COUNT = window.innerWidth < 768 ? 40 : 80
    const particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.5 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })
    }

    let animId: number

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle =
          p.color +
          Math.round(p.opacity * 255)
            .toString(16)
            .padStart(2, '0')
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(document.body)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Teal radial glow — top centre (mimics logo light) */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full animate-pulse-glow"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,77,94,0.35) 0%, rgba(26,79,214,0.12) 50%, transparent 75%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Blue glow — bottom left */}
      <div
        className="absolute bottom-0 -left-32 w-[600px] h-[500px] animate-pulse-glow"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(26,79,214,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '2s',
        }}
      />

      {/* Cyan glow — right side */}
      <div
        className="absolute top-1/3 -right-32 w-[500px] h-[500px] animate-pulse-glow"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,200,255,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animationDelay: '4s',
        }}
      />

      {/* Light rays */}
      <div
        className="absolute top-0 left-1/4 w-px h-[70vh] origin-top animate-ray-fade"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,200,255,0.3), transparent)',
          animationDelay: '0s',
        }}
      />
      <div
        className="absolute top-0 left-1/2 w-px h-[60vh] origin-top animate-ray-fade"
        style={{
          background: 'linear-gradient(to bottom, rgba(45,143,255,0.25), transparent)',
          animationDelay: '3s',
        }}
      />
      <div
        className="absolute top-0 left-3/4 w-px h-[50vh] origin-top animate-ray-fade"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,200,255,0.2), transparent)',
          animationDelay: '6s',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}
