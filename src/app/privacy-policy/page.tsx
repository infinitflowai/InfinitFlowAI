import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy — InfinitFlowAI',
  description: 'Politica de confidențialitate InfinitFlowAI — cum colectăm și procesăm datele tale.',
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Politica de Confidențialitate" lastUpdated="21 Mai 2026">
      <div className="space-y-8 text-brand-muted text-sm leading-relaxed">

        <div>
          <h2 className="text-white font-bold text-lg mb-3">1. Cine suntem</h2>
          <p>
            InfinitFlowAI este o agenție de automatizări AI și website-uri cu sediul în România.
            Suntem responsabili pentru datele cu caracter personal pe care le colectăm prin
            intermediul site-ului <span className="text-brand-cyan">infinitflowai.ro</span>.
          </p>
          <p className="mt-3">
            Contact: <a href="mailto:infinitflowai@gmail.com" className="text-brand-cyan hover:underline">infinitflowai@gmail.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">2. Ce date colectăm</h2>
          <p>Prin intermediul formularului de contact, colectăm:</p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside">
            <li>Numele și prenumele</li>
            <li>Adresa de email</li>
            <li>Numărul de telefon (opțional)</li>
            <li>Numele afacerii tale</li>
            <li>Serviciul de interes</li>
            <li>Mesajul transmis</li>
          </ul>
          <p className="mt-3">
            De asemenea, prin cookie-uri și instrumente de analiză, putem colecta date tehnice
            (adresă IP, tip browser, pagini vizitate).
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">3. De ce colectăm aceste date</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Pentru a răspunde la solicitările tale de ofertă sau informații</li>
            <li>Pentru a îți trimite propuneri personalizate</li>
            <li>Pentru a îmbunătăți experiența pe site</li>
            <li>Pentru respectarea obligațiilor legale</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">4. Temeiul legal al prelucrării</h2>
          <p>
            Prelucrăm datele tale pe baza consimțământului explicit dat la trimiterea formularului
            de contact (Art. 6(1)(a) GDPR) și a interesului legitim de a răspunde solicitărilor
            primite (Art. 6(1)(f) GDPR).
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">5. Cât timp păstrăm datele</h2>
          <p>
            Datele transmise prin formular sunt păstrate maxim 2 ani de la ultima interacțiune sau
            până la retragerea consimțământului. Datele tehnice (loguri, cookie-uri) sunt păstrate
            conform politicii fiecărui instrument folosit (Google Analytics — 14 luni).
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">6. Cu cine partajăm datele</h2>
          <p>Nu vindem și nu cedăm datele tale terților. Putem partaja date cu:</p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside">
            <li>Furnizori de email (ex: Gmail/Google Workspace) — pentru comunicare</li>
            <li>Google Analytics — pentru analiza traficului (date anonimizate)</li>
            <li>Autorități publice — dacă suntem obligați legal</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">7. Drepturile tale</h2>
          <p>Conform GDPR, ai dreptul la:</p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside">
            <li><strong className="text-brand-silver">Acces</strong> — să știi ce date deținem despre tine</li>
            <li><strong className="text-brand-silver">Rectificare</strong> — să corectezi datele incorecte</li>
            <li><strong className="text-brand-silver">Ștergere</strong> — să ștergi datele (dreptul de a fi uitat)</li>
            <li><strong className="text-brand-silver">Restricționare</strong> — să limitezi prelucrarea</li>
            <li><strong className="text-brand-silver">Portabilitate</strong> — să primești datele în format electronic</li>
            <li><strong className="text-brand-silver">Opoziție</strong> — să te opui prelucrării</li>
          </ul>
          <p className="mt-3">
            Pentru exercitarea drepturilor, contactează-ne la:{' '}
            <a href="mailto:infinitflowai@gmail.com" className="text-brand-cyan hover:underline">
              infinitflowai@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">8. Securitatea datelor</h2>
          <p>
            Luăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor tale
            (conexiuni HTTPS, acces restricționat, backup-uri regulate).
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">9. Modificări ale politicii</h2>
          <p>
            Putem actualiza această politică periodic. Orice modificare semnificativă va fi
            anunțată pe site. Data ultimei actualizări este afișată la începutul documentului.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-3">10. Plângeri</h2>
          <p>
            Dacă consideri că datele tale nu au fost prelucrate corespunzător, poți depune o
            plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter
            Personal (ANSPDCP) — <span className="text-brand-cyan">www.dataprotection.ro</span>
          </p>
        </div>
      </div>
    </LegalPageLayout>
  )
}
