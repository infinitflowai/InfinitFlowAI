import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { AnimatedLogo } from '@/components/AnimatedLogo'

const SERVICES = [
  { href: '/servicii#website', label: 'Site-uri care vând' },
  { href: '/servicii#chatbot', label: 'Asistenți Virtuali AI' },
  { href: '/servicii#whatsapp', label: 'Automatizări WhatsApp & Email' },
  { href: '/servicii#crm', label: 'Cereri organizate automat' },
  { href: '/servicii#social', label: 'Răspunsuri Social Media' },
  { href: '/servicii#custom', label: 'Automatizări AI personalizate' },
]

const COMPANY = [
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/portofoliu', label: 'Portofoliu' },
  { href: '/cum-functioneaza', label: 'Cum funcționează' },
  { href: '/contact', label: 'Contact' },
]

const LEGAL = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Termeni și Condiții' },
  { href: '/cookie-policy', label: 'Politica Cookie' },
]

const SOCIALS = [
  {
    href: 'https://www.facebook.com/profile.php?id=61575235276133&locale=ro_RO',
    icon: <FaFacebookF size={15} />,
    label: 'Facebook',
    hover: 'hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:shadow-[0_0_14px_rgba(24,119,242,0.22)]',
  },
  {
    href: 'https://www.instagram.com/InfinitFlow.ai/',
    icon: <FaInstagram size={15} />,
    label: 'Instagram',
    hover: 'hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:shadow-[0_0_14px_rgba(228,64,95,0.22)]',
  },
  {
    href: 'https://www.tiktok.com/@infinitflowai',
    icon: <FaTiktok size={15} />,
    label: 'TikTok',
    hover: 'hover:text-[#00F2EA] hover:border-[#00F2EA]/40 hover:shadow-[0_0_14px_rgba(0,242,234,0.22)]',
  },
  {
    href: 'https://wa.me/40750448872',
    icon: <FaWhatsapp size={15} />,
    label: 'WhatsApp',
    hover: 'hover:text-[#25D366] hover:border-[#25D366]/40 hover:shadow-[0_0_14px_rgba(37,211,102,0.22)]',
  },
]

const colHeadClass = 'text-white font-bold text-xs tracking-wider uppercase mb-2'
const navLinkClass = 'text-slate-400 hover:text-[#00f2fe] transition-colors text-sm'

export function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-navy/20 pt-3 pb-2 md:pt-4 md:pb-3">
      <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-3 md:mb-4 items-start">

          {/* ── Brand ──────────────────────────────────────── */}
          <div>
            <Link href="/" className="block w-fit" aria-label="InfinitFlowAI — pagina principală">
              <AnimatedLogo idPrefix="footer" compact />
            </Link>

            <p className="text-sm leading-snug text-slate-400 max-w-sm mt-3">
              Construim sisteme AI care preiau cereri, răspund clienților și economisesc timp pentru afacerea ta.
            </p>

            <div className="flex items-center gap-2 mt-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center bg-slate-950/40 border border-slate-800/80 rounded-xl text-slate-400 transition-all duration-200 hover:scale-105 ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Services ───────────────────────────────────── */}
          <div>
            <h4 className={colHeadClass}>SERVICII</h4>
            <ul className="space-y-1.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={navLinkClass}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ────────────────────────────────────── */}
          <div>
            <h4 className={colHeadClass}>COMPANIE</h4>
            <ul className="space-y-1.5">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={navLinkClass}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ────────────────────────────────────── */}
          <div>
            <h4 className={colHeadClass}>CONTACT</h4>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail size={14} className="text-[#00f2fe] mt-0.5 shrink-0" />
                <a
                  href="mailto:infinitflowai@gmail.com"
                  className="hover:text-[#00f2fe] transition-colors"
                >
                  infinitflowai@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Phone size={14} className="text-[#00f2fe] mt-0.5 shrink-0" />
                <a href="tel:+40750448872" className="hover:text-[#00f2fe] transition-colors">
                  0750 448 872
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={14} className="text-[#00f2fe] mt-0.5 shrink-0" />
                <span>România, Iași</span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex w-full sm:w-fit justify-center bg-linear-to-r from-blue-600 to-[#00f2fe] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] text-white text-xs font-bold rounded-xl px-5 py-3 mt-4 transition-all duration-300 tracking-wide uppercase"
            >
              Discută cu un consultant
            </Link>
          </div>

        </div>

        {/* ── Bottom bar ─────────────────────────────────────── */}
        <div className="pt-2 border-t border-brand-navy/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} InfinitFlowAI. Toate drepturile rezervate.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="flex items-center gap-2 text-slate-500 text-xs opacity-80">
              <ShieldCheck size={13} className="text-[#00f2fe]/70 shrink-0" />
              Proiectat și dezvoltat în România · Securitate digitală
            </span>
            <span className="hidden sm:block text-slate-700 text-xs">·</span>
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
