import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Termeni și Condiții — InfinitFlowAI',
  description: 'Termenii și condițiile de utilizare a serviciilor InfinitFlowAI.',
}

export default function TermsPage() {
  return (
    <LegalPageLayout title="Termeni și Condiții" lastUpdated="21 Mai 2026">
      <div className="space-y-8 text-brand-muted text-sm leading-relaxed">

        <div>
          <h2 className="text-white font-bold text-lg mb-3">1. Acceptarea termenilor</h2>
          <p>
            Prin accesarea și utilizarea site-ului <span className="text-brand-cyan">infinitflowai.ro</span>,
            ești de acord cu prezentele Termeni și Condiții. Dacă nu ești de acord, te rugăm să
            nu utilizezi site-ul.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">2. Serviciile oferite</h2>
          <p>
            InfinitFlowAI oferă servicii de construire website-uri, chatbot-uri AI, automatizări
            WhatsApp și email, CRM pentru lead-uri, automatizări social media și soluții AI custom.
          </p>
          <p className="mt-3">
            Detaliile fiecărui serviciu, prețurile și termenele de livrare sunt stabilite individual
            prin propuneri comerciale acceptate de ambele părți.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">3. Proprietatea intelectuală</h2>
          <p>
            Tot conținutul de pe site (texte, imagini, logo-uri, design) este proprietatea
            InfinitFlowAI și este protejat de legile privind drepturile de autor.
          </p>
          <p className="mt-3">
            Proiectele livrate clienților devin proprietatea acestora după achitarea integrală a
            facturii, conform contractului individual.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">4. Confidențialitate</h2>
          <p>
            Informațiile despre afacerea ta transmise prin formularul de contact sau în cadrul
            colaborării sunt tratate cu confidențialitate și nu vor fi împărtășite terților fără
            acordul tău explicit.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">5. Limitarea responsabilității</h2>
          <p>
            InfinitFlowAI nu poate fi tras la răspundere pentru pierderi indirecte, pierderi de
            profit sau daune rezultate din utilizarea sau imposibilitatea utilizării serviciilor
            noastre.
          </p>
          <p className="mt-3">
            Ne asumăm responsabilitatea pentru livrarea serviciilor conform specificațiilor agreate
            în propunerea comercială acceptată.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">6. Plăți și facturare</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Prețurile sunt negociate individual și confirmate în oferta comercială</li>
            <li>Plata se face conform graficului agreat (avans + final sau în rate)</li>
            <li>Facturile sunt emise în lei (RON)</li>
            <li>Termenul de plată standard este 14 zile de la emiterea facturii</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">7. Anulare și rambursare</h2>
          <p>
            Anularea unui proiect înainte de start: rambursare integrală a avansului. Anularea
            după începerea lucrărilor: avansul se reține proporțional cu munca prestată. Detaliile
            sunt stabilite în contractul individual.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">8. Modificarea termenilor</h2>
          <p>
            Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment.
            Modificările intră în vigoare la publicarea pe site. Continuarea utilizării site-ului
            după modificare constituie acceptul noilor termeni.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">9. Legea aplicabilă</h2>
          <p>
            Prezentele Termeni și Condiții sunt guvernate de legislația română. Orice litigiu
            va fi soluționat pe cale amiabilă sau, în caz de eșec, de instanțele competente
            din România.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">10. Contact</h2>
          <p>
            Pentru orice întrebare legată de acești termeni:{' '}
            <a href="mailto:infinitflowai@gmail.com" className="text-brand-cyan hover:underline">
              infinitflowai@gmail.com
            </a>
          </p>
        </div>
      </div>
    </LegalPageLayout>
  )
}
