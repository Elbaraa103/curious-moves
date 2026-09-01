import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { ArrowRight, Heart, Globe, MapPin, Award, Users } from 'lucide-react';
import { CuriousMovesLogo } from './CuriousMovesLogo';

interface HeroProps {
  currentLang: Language;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onExploreClick, onContactClick }) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <section id="hero" className="relative text-slate-800 overflow-hidden py-14 sm:py-20 border-b border-slate-200/60">
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-10 left-20 w-80 h-80 bg-amber-300/20 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-200/15 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Multilingual Pill Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
              <span className="flex items-center gap-1.5 font-bold text-amber-700">
                <MapPin className="w-3.5 h-3.5 text-amber-600" /> Berlin & Online
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <Globe className="w-3.5 h-3.5 text-indigo-500" /> Türkçe / English / Deutsch
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] text-slate-900">
              {t.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t.heroSub}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-lg shadow-amber-600/25 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>{t.explorePrograms}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>{t.contactNav}</span>
              </button>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/90 flex items-center gap-3 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">{t.heroBadge1}</div>
                  <div className="text-[11px] text-slate-500">{t.heroBadge1Sub}</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/90 flex items-center gap-3 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-700 flex items-center justify-center shrink-0 font-bold">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">{t.heroBadge2}</div>
                  <div className="text-[11px] text-slate-500">{t.heroBadge2Sub}</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/90 flex items-center gap-3 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-700 flex items-center justify-center shrink-0 font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">{t.heroBadge3}</div>
                  <div className="text-[11px] text-slate-500">{t.heroBadge3Sub}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Presentation Card with 5 Programs */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-5 sm:p-6 bg-white/70 backdrop-blur-2xl border border-slate-200 shadow-xl space-y-3.5">
              
              {/* Curious Moves Logo Brand Header */}
              <div className="py-2 px-3 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs flex flex-col items-center justify-center">
                <CuriousMovesLogo variant="full" showSubtitle={true} className="py-1" />
              </div>

              {/* 5 Distinctly Color-Coded Hero Program Highlights */}
              <div className="space-y-2">
                
                {/* 1. Amber: Autism */}
                <div className="p-2.5 rounded-2xl bg-amber-50/90 border border-amber-200/80 flex items-start gap-2.5 shadow-2xs">
                  <div className="text-lg p-1.5 rounded-xl bg-amber-100 text-amber-800 shrink-0">🧩</div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-amber-900 text-xs">
                        {t.heroVisual1Title}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 shrink-0">
                        {currentLang === 'tr' ? 'Pedagoji' : currentLang === 'en' ? 'Pedagogy' : 'Pädagogik'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      {t.heroVisual1Desc}
                    </p>
                  </div>
                </div>

                {/* 2. Emerald: Kids Yoga */}
                <div className="p-2.5 rounded-2xl bg-emerald-50/90 border border-emerald-200/80 flex items-start gap-2.5 shadow-2xs">
                  <div className="text-lg p-1.5 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">🧘</div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-emerald-900 text-xs">
                        {t.heroVisual2Title}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 shrink-0">
                        Yoga
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      {t.heroVisual2Desc}
                    </p>
                  </div>
                </div>

                {/* 3. Purple: Drama & P4C */}
                <div className="p-2.5 rounded-2xl bg-purple-50/90 border border-purple-200/80 flex items-start gap-2.5 shadow-2xs">
                  <div className="text-lg p-1.5 rounded-xl bg-purple-100 text-purple-800 shrink-0">🎭</div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-purple-900 text-xs">
                        {t.heroVisual3Title}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 shrink-0">
                        Drama & P4C
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      {t.heroVisual3Desc}
                    </p>
                  </div>
                </div>

                {/* 4. Rose: Emotional Awareness */}
                <div className="p-2.5 rounded-2xl bg-rose-50/90 border border-rose-200/80 flex items-start gap-2.5 shadow-2xs">
                  <div className="text-lg p-1.5 rounded-xl bg-rose-100 text-rose-800 shrink-0">💖</div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-rose-900 text-xs">
                        {t.heroVisual4Title}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 shrink-0">
                        {currentLang === 'tr' ? 'Oyun & Duygu' : currentLang === 'en' ? 'Play & Emotion' : 'Spiel & Gefühl'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      {t.heroVisual4Desc}
                    </p>
                  </div>
                </div>

                {/* 5. Sky: Bilingual Turkish */}
                <div className="p-2.5 rounded-2xl bg-sky-50/90 border border-sky-200/80 flex items-start gap-2.5 shadow-2xs">
                  <div className="text-lg p-1.5 rounded-xl bg-sky-100 text-sky-800 shrink-0">📖</div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-sky-900 text-xs">
                        {t.heroVisual5Title}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 shrink-0">
                        {currentLang === 'tr' ? 'Dil & Kültür' : currentLang === 'en' ? 'Language' : 'Sprache'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      {t.heroVisual5Desc}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
