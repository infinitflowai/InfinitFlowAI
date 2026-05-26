'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  BellRing,
  Zap,
  FolderOpen,
  Send,
  RotateCcw,
} from 'lucide-react'

const STEPS = [
  {
    step: '01',
    icon: CheckCircle2,
    title: 'Cererea este preluată automat',
    text: 'Clientul completează formularul, iar datele ajung instant în sistem.',
    badge: 'Date preluate',
  },
  {
    step: '02',
    icon: BellRing,
    title: 'Echipa primește alerta',
    text: 'Primești notificare rapidă pe WhatsApp sau email, cu toate detaliile cererii.',
    badge: 'Alertă trimisă',
  },
  {
    step: '03',
    icon: Zap,
    title: 'AI-ul pregătește răspunsul',
    text: 'Sistemul organizează informațiile și creează un răspuns clar pentru client.',
    badge: 'Răspuns pregătit',
  },
  {
    step: '04',
    icon: FolderOpen,
    title: 'Lead-ul rămâne organizat',
    text: 'Cererea poate fi urmărită ulterior pentru ofertă, revenire sau programare.',
    badge: 'Lead salvat',
  },
]

const fieldClass =
  'w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none border border-slate-800 focus:border-[#00f2fe]/60 focus:ring-1 focus:ring-[#00f2fe]/20 transition-colors duration-200 disabled:opacity-50'

const fieldBg = { background: 'rgba(15,23,42,0.4)' }

export function DemoAutomatizarePage() {
  const [form, setForm] = useState({
    nume: '',
    telefon: '',
    tipAfacere: '',
    serviciuDorit: '',
    mesaj: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulationDone, setSimulationDone] = useState(false)

  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    return () => { timers.current.forEach(clearTimeout) }
  }, [])

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    clearTimers()
    setSubmitted(true)
    setSimulationDone(false)
    setIsSimulating(true)
    setActiveStep(1)                                    // step 01 — imediat

    timers.current.push(
      setTimeout(() => setActiveStep(2), 600)           // step 02 — +600ms
    )
    timers.current.push(
      setTimeout(() => setActiveStep(3), 1200)          // step 03 — +1200ms
    )
    timers.current.push(
      setTimeout(() => setActiveStep(4), 1800)          // step 04 — +1800ms
    )
    timers.current.push(
      setTimeout(() => {
        setIsSimulating(false)
        setSimulationDone(true)
      }, 2200)                                          // done — +2200ms
    )
  }

  const handleReset = () => {
    clearTimers()
    setSubmitted(false)
    setActiveStep(0)
    setIsSimulating(false)
    setSimulationDone(false)
    setForm({ nume: '', telefon: '', tipAfacere: '', serviciuDorit: '', mesaj: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-24 pb-2 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 bg-[#00f2fe]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-widest text-[#00f2fe] uppercase mb-1 px-3 py-1 rounded-full"
            style={{
              background: 'rgba(0,242,254,0.06)',
              border: '1px solid rgba(0,242,254,0.15)',
            }}
          >
            DEMO LIVE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center leading-tight mt-0 mb-1.5"
          >
            Testează live un
            <br />
            <span className="bg-linear-to-r from-[#2f80ff] via-[#00cfff] to-[#00f2fe] bg-clip-text text-transparent">
              sistem automat de vânzări
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto mb-2.5"
          >
            Completează formularul de mai jos și urmărește cum cererea este preluată,
            notificată și pregătită automat.
          </motion.p>
        </div>
      </section>

      {/* ── Form + Automation Flow ────────────────────────── */}
      <section id="demo-form" className="pt-0 pb-10 lg:pb-14">
        <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

            {/* Left — Form */}
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 md:p-8 h-full">
                <h2 className="text-white font-semibold text-xl mb-1">Formular demo</h2>
                <p className="text-slate-400 text-sm mb-3">
                  Completează datele de mai jos și urmărește fluxul automat.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">
                        Nume
                      </label>
                      <input
                        name="nume"
                        value={form.nume}
                        onChange={handleChange}
                        placeholder="Ex: Ion Popescu"
                        required
                        disabled={submitted}
                        className={fieldClass}
                        style={fieldBg}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">
                        Telefon
                      </label>
                      <input
                        name="telefon"
                        value={form.telefon}
                        onChange={handleChange}
                        placeholder="07xx xxx xxx"
                        required
                        disabled={submitted}
                        className={fieldClass}
                        style={fieldBg}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Tip afacere
                    </label>
                    <select
                      name="tipAfacere"
                      value={form.tipAfacere}
                      onChange={handleChange}
                      required
                      disabled={submitted}
                      className={`${fieldClass} appearance-none`}
                      style={fieldBg}
                    >
                      <option value="" disabled className="bg-slate-900">
                        Selectează...
                      </option>
                      <option value="Clinici" className="bg-slate-900">
                        Clinici dentare și medicale
                      </option>
                      <option value="Saloane" className="bg-slate-900">
                        Saloane de înfrumusețare
                      </option>
                      <option value="Cofetarii" className="bg-slate-900">
                        Cofetării &amp; Patiserii
                      </option>
                      <option value="Florarii" className="bg-slate-900">
                        Florării &amp; Cadouri
                      </option>
                      <option value="Restaurante" className="bg-slate-900">
                        Restaurante &amp; Cafenele
                      </option>
                      <option value="ServiceAuto" className="bg-slate-900">
                        Service-uri auto
                      </option>
                      <option value="MagazineOnline" className="bg-slate-900">
                        Magazine online
                      </option>
                      <option value="MagazineLocale" className="bg-slate-900">
                        Magazine locale
                      </option>
                      <option value="Veterinare" className="bg-slate-900">
                        Cabinete veterinare
                      </option>
                      <option value="Fitness" className="bg-slate-900">
                        Fitness &amp; săli de sport
                      </option>
                      <option value="Imobiliare" className="bg-slate-900">
                        Imobiliare
                      </option>
                      <option value="Altele" className="bg-slate-900">
                        Alte afaceri locale
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Serviciu dorit
                    </label>
                    <input
                      name="serviciuDorit"
                      value={form.serviciuDorit}
                      onChange={handleChange}
                      placeholder="Ex: Automatizare WhatsApp, Site web..."
                      required
                      disabled={submitted}
                      className={fieldClass}
                      style={fieldBg}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Mesaj
                    </label>
                    <textarea
                      name="mesaj"
                      value={form.mesaj}
                      onChange={handleChange}
                      placeholder="Descrie pe scurt ce ai nevoie..."
                      rows={4}
                      required
                      disabled={submitted}
                      className={`${fieldClass} resize-none`}
                      style={fieldBg}
                    />
                  </div>

                  {/* ── Button states ── */}
                  {!submitted ? (
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-[#00f2fe] text-white font-bold text-sm rounded-xl px-6 py-3 shadow-[0_0_16px_rgba(0,242,254,0.15)] hover:shadow-[0_0_28px_rgba(0,242,254,0.35)] transition-shadow duration-300 mt-2"
                    >
                      <Send size={15} />
                      Trimite cerere demo
                    </button>
                  ) : isSimulating ? (
                    <button
                      type="button"
                      disabled
                      className="w-full inline-flex items-center justify-center gap-2 text-slate-400 font-semibold text-sm rounded-xl px-6 py-3 border border-slate-800/80 cursor-not-allowed mt-2"
                      style={{ background: 'rgba(15,23,42,0.5)' }}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-700 border-t-[#00f2fe] animate-spin shrink-0" />
                      Se procesează...
                    </button>
                  ) : (
                    <div className="space-y-3 mt-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35 }}
                        className="w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[#00f2fe]"
                        style={{
                          background: 'rgba(0,242,254,0.06)',
                          border: '1px solid rgba(0,242,254,0.18)',
                        }}
                      >
                        <CheckCircle2 size={15} />
                        Simulare completă
                      </motion.div>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full flex items-center justify-center gap-1.5 text-slate-500 hover:text-slate-300 text-xs font-medium transition-colors duration-200"
                      >
                        <RotateCcw size={11} />
                        Testează din nou
                      </button>
                    </div>
                  )}

                  <p className="text-xs text-slate-700 text-center pt-1">
                    Demo vizual. Datele introduse nu sunt trimise sau stocate.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Right — Automation Flow */}
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 md:p-8 h-full flex flex-col">
                {/* Header */}
                <p className="text-xs font-semibold tracking-widest text-[#00f2fe] uppercase mb-1">
                  {submitted ? 'FLUX AUTOMAT — SIMULARE ACTIVĂ' : 'FLUX AUTOMAT'}
                </p>
                <p className="text-slate-400 text-sm mb-7">
                  {submitted
                    ? 'Cererea este procesată în timp real.'
                    : 'Apasă pe «Trimite cerere demo» și urmărește pașii activați automat.'}
                </p>

                {/* Steps */}
                <div className="flex flex-col gap-4 flex-1">
                  {STEPS.map((step, i) => {
                    const isActive = i < activeStep
                    return (
                      <div key={step.step} className="flex gap-3">
                        {/* Timeline dot + connector */}
                        <div className="flex flex-col items-center shrink-0 w-8">
                          <motion.div
                            animate={{ scale: isActive ? 1.05 : 1, opacity: 1 }}
                            transition={{ duration: 0.35 }}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                            style={
                              isActive
                                ? {
                                    background: 'rgba(0,242,254,0.12)',
                                    border: '1px solid rgba(0,242,254,0.45)',
                                    color: '#00f2fe',
                                  }
                                : {
                                    background: 'rgba(0,242,254,0.07)',
                                    border: '1px solid rgba(0,242,254,0.22)',
                                    color: 'rgba(0,242,254,0.75)',
                                  }
                            }
                          >
                            {step.step}
                          </motion.div>
                          {i < STEPS.length - 1 && (
                            <div
                              className="w-px flex-1"
                              style={{
                                background: isActive
                                  ? 'rgba(0,242,254,0.2)'
                                  : 'rgba(30,41,59,0.6)',
                                minHeight: 20,
                                margin: '3px 0',
                                transition: 'background 0.5s ease',
                              }}
                            />
                          )}
                        </div>

                        {/* Step card */}
                        <div className="pb-3 flex-1 min-w-0">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            className="rounded-xl p-5 flex items-start gap-3"
                            style={
                              isActive
                                ? {
                                    background: 'rgba(0,242,254,0.04)',
                                    border: '1px solid rgba(0,242,254,0.28)',
                                    boxShadow: '0 0 16px rgba(0,242,254,0.08)',
                                  }
                                : {
                                    background: 'rgba(2,6,23,0.4)',
                                    border: '1px solid rgba(30,41,59,0.55)',
                                  }
                            }
                          >
                            {/* Icon */}
                            <motion.div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                              animate={
                                isActive
                                  ? { scale: [1, 1.08, 1] }
                                  : { scale: 1 }
                              }
                              transition={
                                isActive
                                  ? { duration: 2, repeat: Infinity, ease: 'easeInOut' as const }
                                  : { duration: 0.3 }
                              }
                              style={
                                isActive
                                  ? {
                                      background: 'rgba(0,242,254,0.10)',
                                      border: '1px solid rgba(0,242,254,0.25)',
                                      boxShadow: '0 0 10px rgba(0,242,254,0.12)',
                                    }
                                  : {
                                      background: 'rgba(0,242,254,0.05)',
                                      border: '1px solid rgba(0,242,254,0.15)',
                                    }
                              }
                            >
                              <step.icon
                                size={15}
                                style={{ color: isActive ? '#00f2fe' : 'rgba(0,242,254,0.6)' }}
                              />
                            </motion.div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center flex-wrap gap-2 mb-0.5">
                                <h3
                                  className="font-semibold text-sm"
                                  style={{ color: isActive ? '#ffffff' : 'rgb(226,232,240)' }}
                                >
                                  {step.title}
                                </h3>
                                {isActive && step.badge && (
                                  <motion.span
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.15 }}
                                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                    style={{
                                      background: 'rgba(0,242,254,0.08)',
                                      border: '1px solid rgba(0,242,254,0.18)',
                                      color: '#00f2fe',
                                    }}
                                  >
                                    {step.badge}
                                  </motion.span>
                                )}
                              </div>
                              <p
                                className="text-xs leading-relaxed"
                                style={{ color: 'rgb(148,163,184)' }}
                              >
                                {step.text}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Footer: idle hint → success message */}
                <AnimatePresence>
                  {simulationDone ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="mt-4 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold"
                      style={{
                        background: 'rgba(0,242,254,0.05)',
                        border: '1px solid rgba(0,242,254,0.2)',
                        color: '#00f2fe',
                      }}
                    >
                      <CheckCircle2 size={13} />
                      Simulare completă — cererea este pregătită pentru follow-up.
                    </motion.div>
                  ) : !submitted ? (
                    <motion.p
                      key="idle"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-slate-500 text-center mt-4"
                    >
                      Pașii se activează automat, pe rând.
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
