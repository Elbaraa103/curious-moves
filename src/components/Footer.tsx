import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER, EMAIL_ADDRESS, LOCATION_ADDRESS } from '../data/programsData';
import { Mail, Phone, FileText, Lock, ShieldCheck } from 'lucide-react';
import { CuriousMovesLogo } from './CuriousMovesLogo';
import { NavTab } from './Navbar';

interface FooterProps {
  currentLang: Language;
  onNavigateTab: (tab: NavTab) => void;
  onOpenLegal?: (tab: 'impressum' | 'datenschutz' | 'kinderschutz') => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigateTab, onOpenLegal }) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <footer className="bg-white/80 backdrop-blur-xl text-slate-600 border-t border-slate-200 text-xs relative mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <CuriousMovesLogo variant="horizontal" showSubtitle={true} />
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-sm">
              {LOCATION_ADDRESS} • Berlin
            </p>
          </div>

          {/* Quick Navigation Tabs */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-800 uppercase text-xs tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-slate-600 font-medium text-xs">
              <li>
                <button
                  onClick={() => onNavigateTab('programs')}
                  className="hover:text-amber-700 transition-colors cursor-pointer"
                >
                  {t.allPrograms}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('about')}
                  className="hover:text-amber-700 transition-colors cursor-pointer"
                >
                  {t.aboutNav} & {t.principlesNav}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('contact')}
                  className="hover:text-amber-700 transition-colors cursor-pointer"
                >
                  {t.contactNav}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Direct Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-slate-800 uppercase text-xs tracking-wider">
              {currentLang === 'tr' ? 'Yasal & İletişim' : currentLang === 'en' ? 'Legal & Contact' : 'Rechtliches & Kontakt'}
            </h4>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-amber-700 transition-colors">
                  {EMAIL_ADDRESS}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-amber-700 font-mono transition-colors">
                  {PHONE_NUMBER_DISPLAY}
                </a>
              </div>
            </div>

            {onOpenLegal && (
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <button
                  onClick={() => onOpenLegal('impressum')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors cursor-pointer"
                >
                  <FileText className="w-3 h-3 text-amber-600" />
                  <span>{t.impressumBtn}</span>
                </button>
                <button
                  onClick={() => onOpenLegal('datenschutz')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors cursor-pointer"
                >
                  <Lock className="w-3 h-3 text-amber-600" />
                  <span>{t.privacyBtn}</span>
                </button>
                <button
                  onClick={() => onOpenLegal('kinderschutz')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors cursor-pointer"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>{t.safeguardBtn}</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p className="max-w-xl text-center md:text-left">
            {t.legalDisclaimer}
          </p>
          <div className="text-center md:text-right font-medium">
            {t.footerRights}
          </div>
        </div>

      </div>
    </footer>
  );
};
