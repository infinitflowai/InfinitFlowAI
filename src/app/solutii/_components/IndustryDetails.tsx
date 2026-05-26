'use client'

import { motion } from 'framer-motion'
import {
  Cross, Scissors, Cake, Flower2, UtensilsCrossed,
  Car, ShoppingBag, Store, PawPrint, Dumbbell, Building2, Briefcase,
} from 'lucide-react'
import Link from 'next/link'

const INDUSTRIES = [
  {
    id: 'clinici',
    icon: Cross,
    color: '#2D8FFF',
    title: 'Clinici dentare și medicale',
    pain: 'Programările se pierd, pacienții uită de consultații, iar recepția răspunde constant la aceleași întrebări.',
    solution: 'Construim o prezență online clară pentru clinică, cu servicii prezentate profesionist, formular de programare și automatizări pentru confirmări, reamintiri și comunicare cu pacienții.',
    results: ['Mai puține programări ratate', 'Recepție mai liberă de apeluri repetitive', 'Imagine online mai profesionistă'],
  },
  {
    id: 'saloane',
    icon: Scissors,
    color: '#00C8FF',
    title: 'Saloane de înfrumusețare',
    pain: 'Mesajele vin din WhatsApp, Instagram sau telefon, iar programările se pot încurca ușor în zilele aglomerate.',
    solution: 'Construim o pagină de prezentare pentru servicii, prețuri și portofoliu, conectată cu WhatsApp sau Instagram pentru programări, confirmări și reamintiri automate.',
    results: ['Mai multe cereri din online', 'Clienți confirmați automat', 'Reveniri și reprogramări mai simple'],
  },
  {
    id: 'cofetarii',
    icon: Cake,
    color: '#1A4FD6',
    title: 'Cofetării & Patiserii',
    pain: 'Comenzile personalizate vin din mai multe canale, iar detaliile despre torturi, produse sau ridicare pot fi ușor uitate.',
    solution: 'Construim un catalog online pentru produse, torturi și comenzi personalizate, conectat cu formular sau WhatsApp pentru confirmări, detalii comandă și mesaje automate.',
    results: ['Produse prezentate mai profesionist', 'Comenzi organizate mai clar', 'Mai puține detalii pierdute'],
  },
  {
    id: 'florarii',
    icon: Flower2,
    color: '#2D8FFF',
    title: 'Florării & Cadouri',
    pain: 'În perioadele aglomerate, comenzile, adresele de livrare și mesajele pentru cadouri pot deveni greu de gestionat manual.',
    solution: 'Construim un catalog online pentru buchete, cadouri și livrări, conectat cu WhatsApp sau formular, astfel încât comenzile, adresele și mesajele pentru cadouri să fie preluate clar.',
    results: ['Catalog online ușor de accesat', 'Comenzi centralizate', 'Clienți informați despre statusul comenzii'],
  },
  {
    id: 'restaurante',
    icon: UtensilsCrossed,
    color: '#00C8FF',
    title: 'Restaurante & Cafenele',
    pain: 'Clienții întreabă despre program, meniu, rezervări sau oferte, iar răspunsurile repetitive consumă timp.',
    solution: 'Construim o prezență online cu meniu digital, program, rezervări și oferte, plus răspunsuri automate pe WhatsApp sau site pentru întrebările frecvente ale clienților.',
    results: ['Meniu și program vizibile online', 'Rezervări mai ușor de gestionat', 'Mai puține apeluri repetitive'],
  },
  {
    id: 'service-auto',
    icon: Car,
    color: '#1A4FD6',
    title: 'Service-uri auto',
    pain: 'Clienții sună pentru prețuri, disponibilitate, programări sau statusul mașinii, iar echipa pierde timp la telefon.',
    solution: 'Construim o pagină clară pentru servicii, prețuri orientative și cereri de programare, conectată cu notificări automate pentru statusul mașinii și comunicarea cu clientul.',
    results: ['Servicii prezentate mai clar', 'Programări organizate', 'Mai puțin timp pierdut la telefon'],
  },
  {
    id: 'magazine-online',
    icon: ShoppingBag,
    color: '#2D8FFF',
    title: 'Magazine online',
    pain: 'Clienții abandonează coșul, nu finalizează comanda sau cer informații repetitive despre livrare, plată și produse.',
    solution: 'Construim o prezență online pentru magazin cu pagini clare de produs, mesaje automate pentru coș abandonat, confirmări de comandă, urmărire livrare și mesaje după achiziție.',
    results: ['Experiență online mai clară', 'Recuperare coșuri abandonate', 'Clienți informați după comandă'],
  },
  {
    id: 'magazine-locale',
    icon: Store,
    color: '#00C8FF',
    title: 'Magazine locale',
    pain: 'Clienții întreabă despre program, stoc, produse, prețuri sau locație, iar răspunsurile repetitive consumă timp.',
    solution: 'Construim o pagină online pentru program, produse, promoții și locație, plus un asistent care răspunde la întrebări frecvente și direcționează clientul către magazin.',
    results: ['Magazin mai vizibil online', 'Răspunsuri rapide la întrebări frecvente', 'Clienți informați înainte să ajungă în magazin'],
  },
  {
    id: 'veterinare',
    icon: PawPrint,
    color: '#1A4FD6',
    title: 'Cabinete veterinare',
    pain: 'Programările, notificările pentru consultații și întrebările despre servicii pot aglomera telefonul și recepția.',
    solution: 'Construim o prezență online clară pentru servicii, programări și informații utile, conectată cu notificări automate și colectarea detaliilor despre animal înainte de consultație.',
    results: ['Servicii prezentate mai profesionist', 'Programări mai clare', 'Notificări automate pentru clienți'],
  },
  {
    id: 'fitness',
    icon: Dumbbell,
    color: '#2D8FFF',
    title: 'Fitness & săli de sport',
    pain: 'Oamenii întreabă despre abonamente, program, clase sau antrenori, iar lead-urile se pot pierde fără follow-up rapid.',
    solution: 'Construim o pagină online pentru abonamente, program, clase și antrenori, conectată cu formulare, WhatsApp și mesaje automate pentru lead-uri și membri existenți.',
    results: ['Abonamente prezentate mai clar', 'Mai multe lead-uri urmărite', 'Comunicare mai bună cu membrii'],
  },
  {
    id: 'imobiliare',
    icon: Building2,
    color: '#00C8FF',
    title: 'Imobiliare',
    pain: 'Lead-urile vin din anunțuri, site, WhatsApp sau email și se pierd ușor dacă nu sunt urmărite rapid.',
    solution: 'Construim o prezență online pentru proprietăți, cereri și vizionări, conectată cu formulare, WhatsApp și email, astfel încât fiecare lead să fie organizat și urmărit rapid.',
    results: ['Proprietăți prezentate mai profesionist', 'Lead-uri organizate centralizat', 'Follow-up mai rapid'],
  },
  {
    id: 'alte-afaceri',
    icon: Briefcase,
    color: '#1A4FD6',
    title: 'Alte afaceri locale',
    pain: 'Fiecare afacere are cereri repetitive: întrebări, programări, comenzi, mesaje sau solicitări care consumă timp în fiecare zi.',
    solution: 'Construim o prezență online adaptată afacerii tale, cu site, formular, WhatsApp, email, chatbot sau CRM simplu, în funcție de serviciile și procesele tale.',
    results: ['Imagine online mai profesionistă', 'Soluție personalizată pentru afacerea ta', 'Mai puțină muncă manuală'],
  },
]

export function IndustryDetails() {
  return (
    <section className="pt-4 pb-16 lg:pt-5 lg:pb-24">
      <div className="max-w-360 mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 space-y-6">
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={ind.id}
            id={ind.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="bg-slate-950/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00f2fe]/40 hover:shadow-[0_0_20px_rgba(0,242,254,0.08)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

              {/* Left: title */}
              <div className="flex flex-col gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}25` }}
                >
                  <ind.icon size={22} style={{ color: ind.color }} />
                </div>
                <h2 className="text-white font-bold text-xl">{ind.title}</h2>
                <Link
                  href="#solutii-contact"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-lg btn-primary self-start"
                >
                  Vreau această soluție
                </Link>
              </div>

              {/* Middle: problem → solution */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-wider font-semibold mb-2">
                    Problema
                  </p>
                  <p className="text-brand-silver text-sm leading-relaxed">{ind.pain}</p>
                </div>
                <div>
                  <p className="text-brand-cyan text-xs uppercase tracking-wider font-semibold mb-2">
                    Soluția noastră
                  </p>
                  <p className="text-brand-silver text-sm leading-relaxed mb-4">{ind.solution}</p>
                  <div className="flex flex-col gap-2">
                    {ind.results.map((r) => (
                      <div key={r} className="flex items-center gap-2 text-xs text-brand-silver">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: ind.color }}
                        />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
