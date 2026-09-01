import React, { useState } from 'react';
import { Language } from '../types';
import { X, ShieldCheck, FileText, Lock, CheckCircle2, AlertTriangle, Mail, Phone, MapPin } from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER, EMAIL_ADDRESS, LOCATION_ADDRESS } from '../data/programsData';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'impressum' | 'datenschutz' | 'kinderschutz';
  currentLang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'impressum',
  currentLang,
}) => {
  const [activeTab, setActiveTab] = useState<'impressum' | 'datenschutz' | 'kinderschutz'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-800">
                {currentLang === 'tr'
                  ? 'Yasal Bilgiler & Güvenlik Standartları'
                  : currentLang === 'en'
                  ? 'Legal Notice & Safeguarding'
                  : 'Rechtliche Hinweise & Datenschutz'}
              </h3>
              <p className="text-xs text-slate-500">
                Curious Moves Berlin • Dilan Akbayir • § 5 DDG & DSGVO
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 px-6 bg-white gap-2 pt-2">
          <button
            onClick={() => setActiveTab('impressum')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'impressum'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Impressum (§ 5 DDG)</span>
          </button>
          <button
            onClick={() => setActiveTab('datenschutz')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'datenschutz'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Datenschutz (DSGVO)</span>
          </button>
          <button
            onClick={() => setActiveTab('kinderschutz')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'kinderschutz'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{currentLang === 'tr' ? 'Çocuk Koruma & Güvenlik' : currentLang === 'en' ? 'Child Protection' : 'Kinderschutzkonzept'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          {/* TAB 1: IMPRESSUM */}
          {activeTab === 'impressum' && (
            <div className="space-y-6">
              {/* Pedagogical disclaimer box */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed space-y-1">
                  <p className="font-bold">Wichtiger pädagogischer Hinweis / Önemli Pedagojik Bilgilendirme:</p>
                  <p>
                    Die angebotenen Workshops, Einzelförderungen und Kurse stellen <strong>keine heilkundliche Psychotherapie, medizinische Behandlung oder Diagnostik</strong> dar. Es handelt sich um präventive, entwicklungsbegleitende und spielpädagogische Fachangebote zur Förderung von Körperbewusstsein, Resilienz und Selbstausdruck.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h4>
                <div className="space-y-1 text-slate-800">
                  <p className="font-bold text-sm">Dilan Akbayir</p>
                  <p>Curious Moves Berlin</p>
                  <p className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{LOCATION_ADDRESS}</span>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Kontakt / İletişim</h4>
                <div className="space-y-1 text-slate-700">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span><strong>Telefon / Mobil:</strong> {PHONE_NUMBER_DISPLAY} ({PHONE_NUMBER})</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-600" />
                    <span><strong>E-Mail:</strong> {EMAIL_ADDRESS}</span>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h4>
                <p className="font-semibold">Dilan Akbayir</p>
                <p>{LOCATION_ADDRESS}</p>
                <p>E-Mail: {EMAIL_ADDRESS}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Berufsbezeichnung & Qualifikation</h4>
                <p>
                  Sozialarbeiterin / Sozialpädagogische Fachkraft (8 Jahre Praxiserfahrung in TR, PL, DE), zertifizierte Kinderyoga-Lehrerin & P4C-Dozentin.
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  (Keine geschützten heilkundlichen Titel nach dem Psychotherapeutengesetz; pädagogische Facharbeit).
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Haftung für Inhalte</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: DATENSCHUTZ */}
          {activeTab === 'datenschutz' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Datenschutzerklärung nach der DSGVO</h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Der Schutz Ihrer persönlichen Daten und der Daten Ihrer Kinder ist mir ein wichtiges Anliegen. Personenbezogene Daten werden vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung behandelt.
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="font-bold text-slate-800">1. Verantwortliche Stelle</h5>
                <p className="text-xs text-slate-600">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                  <strong>Dilan Akbayir</strong><br />
                  {LOCATION_ADDRESS}<br />
                  E-Mail: {EMAIL_ADDRESS}<br />
                  Telefon: {PHONE_NUMBER_DISPLAY}
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="font-bold text-slate-800">2. Datenerfassung bei Kontaktaufnahme (Formular, E-Mail, Telefon)</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wenn Sie mir per Kontaktformular, E-Mail oder Telefon Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Diese Daten gebe ich keinesfalls ohne Ihre ausdrückliche Einwilligung weiter (Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO).
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="font-bold text-slate-800">3. Ihre Rechte als betroffene Person (Art. 15–21 DSGVO)</h5>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                  <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten.</li>
                  <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger Daten verlangen.</li>
                  <li><strong>Löschung (Art. 17 DSGVO):</strong> Sie können die unverzügliche Löschung Ihrer Daten verlangen.</li>
                  <li><strong>Widerruf:</strong> Sie können eine erteilte Einwilligung zur Datenverarbeitung jederzeit mit Wirkung für die Zukunft widerrufen.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h5 className="font-bold text-slate-800">4. SSL- bzw. TLS-Verschlüsselung</h5>
                <p className="text-xs text-slate-600">
                  Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Anfragen eine SSL-/TLS-Verschlüsselung.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: KINDERSCHUTZ & SICHERHEIT */}
          {activeTab === 'kinderschutz' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm">
                  <p className="font-bold">Kinderschutz & Verlässlichkeit in Berlin (Schutzkonzept)</p>
                  <p className="text-emerald-900">
                    Die körperliche, emotionale und persönliche Integrität jedes Kindes steht im Mittelpunkt all meiner pädagogischen Angebote.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Erweitertes Führungszeugnis</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Für meine pädagogische Arbeit mit Kindern liegt ein aktuelles <strong>Erweitertes Führungszeugnis (nach § 30a BZRG)</strong> vor und kann von Eltern auf Wunsch jederzeit eingesehen werden.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Transparenz & Offene Türen</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Eltern sind bei Erstgesprächen und Eingewöhnungsphasen herzlich willkommen. Räume sind einsehbar und reizarm gestaltet.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Kleine Gruppengrößen</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Maximal 4–6 Kinder in Gruppenkursen, bzw. 1:1 Einzelförderung bei Autismus, um individuelle Aufmerksamkeit und Sicherheit zu gewährleisten.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Stornierungs- & Vertrauensregelung</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Bei Krankheit oder unvorhergesehenen Ereignissen bitte ich um Absage bis 24 Stunden vor dem Termin für eine kostenfreie Umbuchung.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Curious Moves Berlin • Dilan Akbayir</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold transition-all cursor-pointer shadow-sm"
          >
            {currentLang === 'tr' ? 'Kapat' : currentLang === 'en' ? 'Close' : 'Schließen'}
          </button>
        </div>
      </div>
    </div>
  );
};
