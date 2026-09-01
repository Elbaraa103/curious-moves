import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { WHATSAPP_RAW, PHONE_NUMBER_DISPLAY, EMAIL_ADDRESS, LOCATION_ADDRESS } from '../data/programsData';
import {
  MessageCircle,
  ArrowLeft,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface ContactViewProps {
  currentLang: Language;
  onBackToHome: () => void;
  onNavigateTab: (tab: 'home' | 'programs' | 'about' | 'principles' | 'contact') => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  currentLang,
  onBackToHome,
}) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <div className="py-8 sm:py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/90 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-amber-600" />
          <span>{t.backToHome}</span>
        </button>

        <div className="text-xs text-slate-400 font-medium">
          Curious Moves Berlin / <span className="text-amber-800 font-bold">{t.contactNav}</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-800 border border-rose-500/20 text-xs font-bold backdrop-blur-md">
          <MessageCircle className="w-3.5 h-3.5 text-rose-600" />
          <span>{t.consultationBadge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          {t.contactTitle}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          {t.contactSub}
        </p>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Card 1: Phone & WhatsApp */}
        <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-emerald-200/80 shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-all">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500">{t.directPhone}</div>
              <div className="font-extrabold text-slate-900 text-sm sm:text-base font-mono mt-0.5">{PHONE_NUMBER_DISPLAY}</div>
              <div className="text-[11px] text-slate-500 mt-1">
                {currentLang === 'tr' ? 'WhatsApp & Doğrudan Arama' : currentLang === 'en' ? 'WhatsApp & Direct Call' : 'WhatsApp & Direktanruf'}
              </div>
            </div>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent('Merhaba Dilan Hanım, seanslar ve ön görüşme hakkında bilgi almak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp ile Mesaj Gönder</span>
          </a>
        </div>

        {/* Card 2: Email */}
        <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-amber-200/80 shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-all">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-amber-700" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-500">E-Mail</div>
              <div className="font-extrabold text-slate-900 text-xs sm:text-sm truncate mt-0.5">{EMAIL_ADDRESS}</div>
              <div className="text-[11px] text-slate-500 mt-1">
                {currentLang === 'tr' ? 'Doğrudan E-Posta İletişimi' : currentLang === 'en' ? 'Direct Email Inquiry' : 'Direkte E-Mail-Anfrage'}
              </div>
            </div>
          </div>
          <a
            href={`mailto:${EMAIL_ADDRESS}?subject=Curious Moves Ön Görüşme Bilgi Talebi`}
            className="w-full py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <Mail className="w-4 h-4" />
            <span>E-Mail Gönder</span>
          </a>
        </div>

      </div>

      {/* Reassurance / Process Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-white/90 to-amber-50/50 border border-amber-200/70 shadow-xs space-y-3 text-slate-700">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-950">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>{currentLang === 'tr' ? '15 Dakikalık Ücretsiz Tanışma Görüşmesi' : currentLang === 'en' ? '15-Minute Free Introductory Call' : 'Kostenloses 15-minütiges Kennenlerngespräch'}</span>
        </div>
        <p className="text-xs leading-relaxed text-slate-600">
          {currentLang === 'tr'
            ? 'Çocuğunuzun ihtiyaçlarını, yaş grubunu ve gelişimsel hedeflerini değerlendirmek üzere WhatsApp veya E-Posta üzerinden doğrudan iletişime geçebilirsiniz. En kısa sürede geri dönüş sağlanacaktır.'
            : currentLang === 'en'
            ? 'You can reach out directly via WhatsApp or Email to discuss your child’s unique needs, age group, and developmental goals.'
            : 'Sie können mich direkt über WhatsApp oder E-Mail kontaktieren, um die individuellen Bedürfnisse und Entwicklungsziele Ihres Kindes zu besprechen.'}
        </p>

        <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500 border-t border-amber-200/50">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            {currentLang === 'tr'
              ? 'Tüm görüşmeler gizlilik ve DSGVO (Almanya Veri Koruma) standartlarına tam uygun yürütülür.'
              : currentLang === 'en'
              ? 'All consultations are strictly confidential in compliance with GDPR standards.'
              : 'Alle Gespräche unterliegen strengster Vertraulichkeit gemäß DSGVO.'}
          </span>
        </div>
      </div>

    </div>
  );
};
