import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Politica Cookie — InfinitFlowAI',
  description: 'Politica de utilizare a cookie-urilor pe site-ul InfinitFlowAI.',
}

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Politica Cookie" lastUpdated="21 Mai 2026">
      <div className="space-y-8 text-brand-muted text-sm leading-relaxed">

        <div>
          <h2 className="text-white font-bold text-lg mb-3">Ce sunt cookie-urile?</h2>
          <p>
            Cookie-urile sunt fișiere mici de text stocate pe dispozitivul tău atunci când
            vizitezi un site web. Ele permit site-ului să își amintească preferințele tale și
            să îmbunătățească experiența de navigare.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">Ce cookie-uri folosim</h2>

          <div className="space-y-5">
            <div
              className="rounded-xl p-5"
              style={{ background: 'rgba(6,26,36,0.6)', border: '1px solid rgba(0,200,255,0.1)' }}
            >
              <h3 className="text-brand-silver font-semibold mb-2">Cookie-uri esențiale</h3>
              <p>
                Necesare pentru funcționarea de bază a site-ului. Nu pot fi dezactivate. Nu
                colectează date personale și nu urmăresc activitatea de navigare.
              </p>
              <p className="mt-2 text-xs text-brand-muted">Durată: sesiune sau până la 1 an</p>
            </div>

            <div
              className="rounded-xl p-5"
              style={{ background: 'rgba(6,26,36,0.6)', border: '1px solid rgba(0,200,255,0.1)' }}
            >
              <h3 className="text-brand-silver font-semibold mb-2">Cookie-uri de analiză (Google Analytics)</h3>
              <p>
                Ne ajută să înțelegem cum interacționează vizitatorii cu site-ul: ce pagini sunt
                vizitate, cât timp petrec, de unde vin. Datele sunt anonimizate.
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-xs">
                <li>_ga — identifică utilizatorul (2 ani)</li>
                <li>_gid — sesiunea curentă (24 ore)</li>
                <li>_gat — limitează rata de cereri (1 minut)</li>
              </ul>
            </div>

            <div
              className="rounded-xl p-5"
              style={{ background: 'rgba(6,26,36,0.6)', border: '1px solid rgba(0,200,255,0.1)' }}
            >
              <h3 className="text-brand-silver font-semibold mb-2">Cookie-uri de preferințe</h3>
              <p>
                Rețin preferințele tale (ex: limbă, setări de afișare) pentru o experiență
                personalizată la vizitele ulterioare.
              </p>
              <p className="mt-2 text-xs text-brand-muted">Durată: până la 1 an</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">Cum gestionezi cookie-urile</h2>
          <p>
            Poți controla și/sau șterge cookie-urile din setările browserului tău. Majoritatea
            browserelor permit:
          </p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside">
            <li>Vizualizarea cookie-urilor stocate</li>
            <li>Blocarea cookie-urilor (toate sau pe categorii)</li>
            <li>Ștergerea cookie-urilor stocate</li>
          </ul>
          <p className="mt-3">
            Atenție: dezactivarea cookie-urilor poate afecta funcționalitatea site-ului.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">Link-uri utile pentru gestionare</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cyan hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cyan hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/en-us/105082"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cyan hover:underline"
              >
                Safari
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">Modificări ale politicii</h2>
          <p>
            Putem actualiza această politică în funcție de modificările legislative sau ale
            serviciilor utilizate. Data ultimei actualizări este afișată în antetul documentului.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">Contact</h2>
          <p>
            Întrebări despre cookie-uri:{' '}
            <a href="mailto:infinitflowai@gmail.com" className="text-brand-cyan hover:underline">
              infinitflowai@gmail.com
            </a>
          </p>
        </div>
      </div>
    </LegalPageLayout>
  )
}
