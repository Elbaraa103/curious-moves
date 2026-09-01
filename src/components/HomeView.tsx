import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  BookOpen,
  Users,
  Mail,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Globe,
  Heart,
  Award,
  Phone,
} from 'lucide-react';
import { CuriousMovesLogo } from './CuriousMovesLogo';
import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../data/programsData';
import { NavTab } from './Navbar';

interface HomeViewProps {
  currentLang: Language;
  onNavigateTab: (tab: NavTab) => void;
  onOpenLegal?: (tab: 'impressum' | 'datenschutz' | 'kinderschutz') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ currentLang, onNavigateTab }) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
      
      {/* 1. Welcoming Hero Banner */}
      <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white/95 via-white/85 to-amber-50/40 backdrop-blur-2xl border-2 border-amber-200/80 shadow-md space-y-6 text-center max-w-4xl mx-auto overflow-hidden">
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" />
        
        {/* Brand Logo & Badges */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <CuriousMovesLogo variant="full" showSubtitle={true} className="py-1" />
          
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-bold text-amber-900 shadow-2xs">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-700" /> Berlin & Online
            </span>
            <span className="text-amber-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <Globe className="w-3.5 h-3.5 text-indigo-600" /> TR / EN / DE
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            {t.heroTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.heroSub}
          </p>
        </div>

        {/* Action Prompt */}
        <p className="text-xs font-bold text-amber-900/80 pt-1">
          {t.exploreBubblesPrompt}
        </p>
      </div>

      {/* 2. The 3 Main Interactive Cards: Programlar, Hakkımda, İletişim */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: PROGRAMLAR (Mint Green Theme) */}
          <div
            onClick={() => onNavigateTab('programs')}
            className="group relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-50/90 to-teal-50/60 hover:to-emerald-100/90 border-2 border-emerald-200/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between min-h-[240px]"
          >
            {/* Speech Bubble Tail */}
            <div className="absolute -bottom-2 left-10 w-4 h-4 bg-emerald-100 border-r-2 border-b-2 border-emerald-200/90 rotate-45 pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-emerald-500/15 text-emerald-800 flex items-center justify-center font-bold shadow-2xs group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-emerald-700" />
                </div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-emerald-200/60 text-emerald-900 border border-emerald-300/60">
                  7 {currentLang === 'tr' ? 'Program & Atölye' : currentLang === 'en' ? 'Programs & Workshops' : 'Programme & Workshops'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-800 transition-colors">
                  {t.bubbleProgramsTitle}
                </h3>
                <p className="text-xs text-emerald-900/80 leading-relaxed mt-1.5">
                  {t.bubbleProgramsSub}
                </p>
              </div>
            </div>

            <div className="pt-5 flex items-center justify-between text-xs font-extrabold text-emerald-800">
              <span className="underline underline-offset-4">{t.detailsBtn}</span>
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* CARD 2: HAKKIMDA & ÇALIŞMA İLKELERİM (Warm Butter Yellow Theme) */}
          <div
            onClick={() => onNavigateTab('about')}
            className="group relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-50/90 to-orange-50/60 hover:to-amber-100/90 border-2 border-amber-200/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between min-h-[240px]"
          >
            {/* Speech Bubble Tail */}
            <div className="absolute -bottom-2 left-10 w-4 h-4 bg-amber-100 border-r-2 border-b-2 border-amber-200/90 rotate-45 pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-amber-500/15 text-amber-800 flex items-center justify-center font-bold shadow-2xs group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-amber-700" />
                </div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-amber-200/60 text-amber-900 border border-amber-300/60">
                  {currentLang === 'tr' ? 'Biyografi & İlkeler' : currentLang === 'en' ? 'Bio & Principles' : 'Biografie & Grundsätze'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-amber-950 group-hover:text-amber-800 transition-colors">
                  {t.bubbleAboutTitle}
                </h3>
                <p className="text-xs text-amber-900/80 leading-relaxed mt-1.5">
                  {currentLang === 'tr'
                    ? 'Dilan Akbayir pedagojik deneyimi, seans akışı, çalışma ilkeleri ve çocuk koruma standartları.'
                    : currentLang === 'en'
                    ? 'Dilan Akbayir pedagogical background, session flow, working principles and safeguarding.'
                    : 'Pädagogischer Hintergrund von Dilan Akbayir, Ablauf der Einheiten und Arbeitsweise.'}
                </p>
              </div>
            </div>

            <div className="pt-5 flex items-center justify-between text-xs font-extrabold text-amber-800">
              <span className="underline underline-offset-4">{t.detailsBtn}</span>
              <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* CARD 3: İLETİŞİM (Soft Rose Pink Theme) */}
          <div
            onClick={() => onNavigateTab('contact')}
            className="group relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-rose-50/90 to-pink-50/60 hover:to-rose-100/90 border-2 border-rose-200/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between min-h-[240px]"
          >
            {/* Speech Bubble Tail */}
            <div className="absolute -bottom-2 left-10 w-4 h-4 bg-rose-100 border-r-2 border-b-2 border-rose-200/90 rotate-45 pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-rose-500/15 text-rose-800 flex items-center justify-center font-bold shadow-2xs group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-rose-700" />
                </div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-rose-200/60 text-rose-900 border border-rose-300/60">
                  {currentLang === 'tr' ? 'Randevu & Soru' : currentLang === 'en' ? 'Booking & Inquiries' : 'Termin & Kontakt'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-rose-950 group-hover:text-rose-800 transition-colors">
                  {t.bubbleContactTitle}
                </h3>
                <p className="text-xs text-rose-900/80 leading-relaxed mt-1.5">
                  {t.bubbleContactSub}
                </p>
              </div>
            </div>

            <div className="pt-5 flex items-center justify-between text-xs font-extrabold text-rose-800">
              <span className="underline underline-offset-4">{t.detailsBtn}</span>
              <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Three Essential Pillars Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
            <Heart className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h4 className="text-xs font-black text-slate-900">
              {currentLang === 'tr' ? 'Bireye Özgü Yaklaşım' : currentLang === 'en' ? 'Individualized Focus' : 'Individuelle Förderung'}
            </h4>
            <p className="text-[11px] text-slate-600 mt-0.5">
              {currentLang === 'tr' ? 'Çocuğun kendi hızında ve ritminde gelişim' : currentLang === 'en' ? 'Respecting each child’s tempo' : 'Im individuellen Tempo jedes Kindes'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0 font-bold">
            <Award className="w-5 h-5 text-indigo-700" />
          </div>
          <div>
            <h4 className="text-xs font-black text-slate-900">
              {currentLang === 'tr' ? '8 Yıllık Uzmanlık' : currentLang === 'en' ? '8+ Years Expertise' : '8+ Jahre Fachpraxis'}
            </h4>
            <p className="text-[11px] text-slate-600 mt-0.5">
              {currentLang === 'tr' ? 'Sosyal hizmet & pedagojik donanım' : currentLang === 'en' ? 'Social work & certified pedagogy' : 'Sozialpädagogische Fachqualifikation'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <h4 className="text-xs font-black text-slate-900">
              {currentLang === 'tr' ? 'Güvenli & Kapsayıcı' : currentLang === 'en' ? 'Safe & Inclusive' : 'Sicher & Inklusiv'}
            </h4>
            <p className="text-[11px] text-slate-600 mt-0.5">
              {currentLang === 'tr' ? 'Nöroçeşitlilik dostu pedagojik ortam' : currentLang === 'en' ? 'Neurodivergence-friendly space' : 'Neurodiversitätsfreundlicher Raum'}
            </p>
          </div>
        </div>
      </div>

      {/* 4. Contact & Location Quick Bar */}
      <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {currentLang === 'tr' ? 'Doğrudan İletişim & WhatsApp' : currentLang === 'en' ? 'Direct Line & WhatsApp' : 'Direktkontakt & WhatsApp'}
              </span>
            </div>
            <p className="text-lg sm:text-xl font-black text-white tracking-wide">
              {PHONE_NUMBER_DISPLAY}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href={`https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Merhaba Dilan Hanım, seanslar ve programlar hakkında bilgi almak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => onNavigateTab('contact')}
            className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors border border-white/20 flex items-center justify-center cursor-pointer"
          >
            <span>{t.contactNav}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
