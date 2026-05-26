'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'

interface FormState {
  name: string
  email: string
  phone: string
  business: string
  message: string
}

const SERVICES = [
  'Site-uri care vând',
  'Asistenți Virtuali AI',
  'Automatizări WhatsApp & Email',
  'Cereri organizate automat',
  'Răspunsuri Social Media',
  'Automatizări AI personalizate',
  'Pachet complet',
  'Nu știu încă — vreau o recomandare',
]

const inputStyle = {
  background: 'rgba(2,6,23,0.92)',
  border: '1px solid rgba(30,41,59,0.8)',
}

const labelClass = 'block text-brand-silver text-xs font-medium mb-2 uppercase tracking-wider'
const inputClass =
  'w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00f2fe]/30 focus:border-[#00f2fe]/50 transition-all duration-200'

function ServiceDropdown({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div ref={ref} className="relative">
      {/* Hidden input for form submission */}
      <input type="hidden" name="service" value={value} />

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#00f2fe]/30 focus:border-[#00f2fe]/50"
        style={{
          background: 'rgba(6,26,36,0.8)',
          border: open ? '1px solid rgba(0,242,254,0.35)' : '1px solid rgba(0,200,255,0.12)',
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? 'text-white' : 'text-slate-500'}>
          {value || 'Selectează un serviciu...'}
        </span>
        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute z-50 mt-2 w-full rounded-xl overflow-y-auto overscroll-contain max-h-56 shadow-[0_0_25px_rgba(0,242,254,0.10)] pointer-events-auto"
            style={{
              background: 'rgba(6,15,26,0.97)',
              border: '1px solid rgba(30,41,59,0.9)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {SERVICES.map((s) => (
              <li
                key={s}
                role="option"
                aria-selected={value === s}
                onClick={() => { onChange(s); setOpen(false) }}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
                  value === s
                    ? 'bg-[#00f2fe]/10 text-[#00f2fe]'
                    : 'text-slate-300 hover:bg-[#00f2fe]/10 hover:text-white'
                }`}
              >
                {s}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  })
  const [service, setService] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [phoneError, setPhoneError] = useState('')

  function validatePhone(value: string): string {
    if (!value.trim()) return ''
    if (!/^[+\d\s]+$/.test(value)) return 'Introdu un număr de telefon valid.'
    if (value.replace(/\D/g, '').length < 9) return 'Introdu un număr de telefon valid.'
    return ''
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    if (name === 'phone') {
      if (value && !/^[+\d\s]*$/.test(value)) return
      setForm((prev) => ({ ...prev, phone: value }))
      if (phoneError) setPhoneError(validatePhone(value))
      return
    }
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const err = validatePhone(form.phone)
    if (err) { setPhoneError(err); return }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service }),
      })
      if (!res.ok) throw new Error('server error')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ background: 'rgba(0,200,255,0.12)', border: '1px solid rgba(0,200,255,0.25)' }}
        >
          <CheckCircle size={32} className="text-brand-cyan" />
        </div>
        <h3 className="text-white text-2xl font-bold mb-3">Cerere trimisă!</h3>
        <p className="text-brand-muted max-w-sm">
          Cererea ta a fost trimisă. Revenim în maximum 24h.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Nume *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Ion Popescu"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="ion@firma.ro"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Telefon</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={() => setPhoneError(validatePhone(form.phone))}
            placeholder="+40 7XX XXX XXX"
            className={`${inputClass} ${phoneError ? 'ring-1 ring-red-500/40 border-red-500/40' : ''}`}
            style={inputStyle}
          />
          {phoneError && (
            <p className="text-red-400/80 text-xs mt-1">{phoneError}</p>
          )}
        </div>
        <div>
          <label className={labelClass}>Afacerea ta *</label>
          <input
            name="business"
            value={form.business}
            onChange={handleChange}
            required
            placeholder="ex: Cabinet stomatologic, Salon beauty..."
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Ce serviciu te interesează?</label>
        <ServiceDropdown value={service} onChange={setService} />
      </div>

      <div>
        <label className={labelClass}>Mesaj / Detalii</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Descrie pe scurt situația actuală și ce vrei să îmbunătățești..."
          className={`${inputClass} resize-none min-h-27.5`}
          style={inputStyle}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle size={15} />
          A apărut o problemă. Te rugăm să ne scrii direct pe{' '}
          <a href="https://wa.me/40750448872" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-300">WhatsApp</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-linear-to-r from-blue-600 via-blue-500 to-[#00f2fe] text-white text-sm font-bold rounded-xl px-6 py-3.5 shadow-[0_0_20px_rgba(0,242,254,0.2)] hover:shadow-[0_0_30px_rgba(0,242,254,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Se trimite...
          </>
        ) : (
          <>
            Trimite cererea
            <Send size={15} />
          </>
        )}
      </button>

      <p className="text-brand-muted text-xs text-center">
        Prin trimiterea formularului ești de acord cu{' '}
        <a href="/privacy-policy" className="text-brand-cyan hover:underline">
          Politica de Confidențialitate
        </a>
        .
      </p>
    </form>
  )
}
