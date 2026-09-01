import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  Sparkles,
  GraduationCap,
  MapPin,
  Quote,
  Heart,
  Globe,
  ShieldCheck,
  BookOpen,
  ArrowLeft,
  Calendar,
  Compass,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  HelpCircle,
  AlertCircle,
  FileCheck2,
  Users,
} from 'lucide-react';
import { DilanAvatar } from './DilanAvatar';

interface AboutViewProps {
  currentLang: Language;
  onBackToHome: () => void;
  onNavigateTab: (tab: 'home' | 'programs' | 'about' | 'contact') => void;
  onOpenLegal?: (tab: 'impressum' | 'datenschutz' | 'kinderschutz') => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  currentLang,
  onBackToHome,
  onNavigateTab,
  onOpenLegal,
}) => {
  const t = UI_TRANSLATIONS[currentLang];
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const togglePrinciple = (index: number) => {
    setExpandedPrinciple(expandedPrinciple === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const principles = [
    {
      id: 1,
      title: t.principle1Title,
      summary: t.principle1Summary,
      details: t.principle1Details,
      icon: Heart,
      iconClass: 'bg-amber-500/15 text-amber-700',
      borderHover: 'hover:border-amber-300',
    },
    {
      id: 2,
      title: t.principle2Title,
      summary: t.principle2Summary,
      details: t.principle2Details,
      icon: Globe,
      iconClass: 'bg-sky-500/15 text-sky-700',
      borderHover: 'hover:border-sky-300',
    },
    {
      id: 3,
      title: t.principle3Title,
      summary: t.principle3Summary,
      details: t.principle3Details,
      icon: Sparkles,
      iconClass: 'bg-emerald-500/15 text-emerald-700',
      borderHover: 'hover:border-emerald-300',
    },
  ];

  const credentials = [
    {
      title: t.credItem1Title,
      desc: t.credItem1Desc,
      icon: Sparkles,
      color: 'text-emerald-700 bg-emerald-100',
    },
    {
      title: t.credItem2Title,
      desc: t.credItem2Desc,
      icon: BookOpen,
      color: 'text-purple-700 bg-purple-100',
    },
    {
      title: t.credItem3Title,
      desc: t.credItem3Desc,
      icon: Users,
      color: 'text-amber-700 bg-amber-100',
    },
    {
      title: t.credItem4Title,
      desc: t.credItem4Desc,
      icon: ShieldCheck,
      color: 'text-indigo-700 bg-indigo-100',
    },
  ];

  const flowSteps = [
    {
      num: '01',
      title: t.flowStep1Title,
      desc: t.flowStep1Desc,
      icon: Clock,
      color: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
      num: '02',
      title: t.flowStep2Title,
      desc: t.flowStep2Desc,
      icon: Sparkles,
      color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      num: '03',
      title: t.flowStep3Title,
      desc: t.flowStep3Desc,
      icon: Heart,
      color: 'bg-purple-100 text-purple-800 border-purple-200',
    },
    {
      num: '04',
      title: t.flowStep4Title,
      desc: t.flowStep4Desc,
      icon: FileCheck2,
      color: 'bg-sky-100 text-sky-800 border-sky-200',
    },
  ];

  const faqs = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faqQ3, a: t.faqA3 },
    { q: t.faqQ4, a: t.faqA4 },
    { q: t.faqQ5, a: t.faqA5 },
  ];

  return (
    <div className="py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fadeIn">
      
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
          Curious Moves Berlin / <span className="text-amber-800 font-bold">{t.aboutNav} & {t.principlesNav}</span>
        </div>
      </div>

      {/* 1. Main Bio Card with Circular Portrait */}
      <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white/95 via-white/90 to-amber-50/40 backdrop-blur-2xl border-2 border-amber-200/80 shadow-md space-y-8 relative overflow-hidden">
        {/* Top Amber Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" />

        {/* Header with Circular Profile Photo, Title & Badges */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 text-center sm:text-left">
            
            {/* Circular Profile Photo Frame */}
            <div className="shrink-0">
              <DilanAvatar size="xl" />
            </div>

            {/* Title, Badge and Role Details */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-900 border border-amber-500/30 text-xs font-extrabold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>{t.bioSectionBadge}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                Dilan Akbayir • {t.bioTitle}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 text-amber-900 font-bold bg-amber-100/70 px-3 py-1 rounded-xl border border-amber-200">
                  <GraduationCap className="w-4 h-4 text-amber-700" />
                  {t.bioRoleBadge}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600">
                  {currentLang === 'tr' ? 'Türkiye 🇹🇷 • Polonya 🇵🇱 • Almanya 🇩🇪' : 'Turkey 🇹🇷 • Poland 🇵🇱 • Germany 🇩🇪'}
                </span>
              </p>
            </div>

          </div>

          {/* Active Field Experience Badge */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-slate-800 space-y-1.5 max-w-sm shrink-0">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{currentLang === 'tr' ? 'Berlin Saha Deneyimi' : currentLang === 'en' ? 'Berlin Field Practice' : 'Berliner Praxiserfahrung'}</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              {currentLang === 'tr'
                ? 'Şu anda Berlin’de bir kurumda otizmli çocuklarla aktif pedagojik ve duyusal seanslar yürütüyorum.'
                : currentLang === 'en'
                ? 'Currently actively conducting pedagogical sessions with autistic children at an institution in Berlin.'
                : 'Derzeit aktive pädagogische Förderung für Kinder im Autismus-Spektrum in einer Berliner Einrichtung.'}
            </p>
          </div>
        </div>

        {/* Full Bio Paragraphs */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white/95 border border-amber-100/90 shadow-2xs relative">
            <Quote className="w-8 h-8 text-amber-500/20 absolute top-5 right-5 pointer-events-none" />
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {t.bioFullText}
            </p>
          </div>

          {/* Mission Quote Highlight */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-500/25 flex items-center gap-3.5">
            <Heart className="w-6 h-6 text-rose-600 shrink-0 fill-rose-600/20" />
            <p className="text-xs sm:text-sm font-bold text-amber-950 italic">
              {t.bioMissionQuote}
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/90 border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Globe className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">{t.bioHighlight1Title}</h4>
              <p className="text-[11px] text-slate-600 leading-snug">{t.bioHighlight1Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">{t.bioHighlight2Title}</h4>
              <p className="text-[11px] text-slate-600 leading-snug">{t.bioHighlight2Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">{t.bioHighlight3Title}</h4>
              <p className="text-[11px] text-slate-600 leading-snug">{t.bioHighlight3Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">{t.bioHighlight4Title}</h4>
              <p className="text-[11px] text-slate-600 leading-snug">{t.bioHighlight4Desc}</p>
            </div>
          </div>
        </div>

      </div>

      {/* 2. Embedded Working Principles ("Çalışma İlkelerim") */}
      <div className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/20 text-xs font-bold">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.principlesNav}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.principlesNav} & {currentLang === 'tr' ? 'Pedagojik Yaklaşımım' : currentLang === 'en' ? 'Pedagogical Approach' : 'Pädagogischer Ansatz'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {t.aboutP1}
          </p>
        </div>

        {/* Interactive Expandable Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {principles.map((p, idx) => {
            const isExpanded = expandedPrinciple === idx;
            const IconComp = p.icon;
            return (
              <div
                key={p.id}
                onClick={() => togglePrinciple(idx)}
                className={`p-6 rounded-3xl bg-white/90 backdrop-blur-lg border border-slate-200 space-y-3.5 cursor-pointer transition-all shadow-xs ${p.borderHover} ${
                  isExpanded ? 'ring-2 ring-amber-500/40 bg-white shadow-md' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${p.iconClass} flex items-center justify-center font-bold`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                    <span>{isExpanded ? (currentLang === 'tr' ? 'Kapat' : currentLang === 'en' ? 'Close' : 'Schließen') : (currentLang === 'tr' ? 'Detaylar' : currentLang === 'en' ? 'Details' : 'Details')}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.summary}
                </p>

                {/* Expandable Detailed Content */}
                {isExpanded && (
                  <div className="pt-3 border-t border-slate-200/60 text-xs text-slate-700 leading-relaxed bg-amber-50/60 p-3.5 rounded-2xl animate-fadeIn">
                    <div className="font-semibold text-amber-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>{currentLang === 'tr' ? 'Pedagojik Uygulama Yöntemim' : currentLang === 'en' ? 'My Pedagogical Method' : 'Meine Pädagogische Methode'}</span>
                    </div>
                    {p.details}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Session Flow ("Bir Seans Nasıl Geçer?") */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white/80 to-amber-100/30 backdrop-blur-xl border border-amber-200/80 shadow-sm space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/20 text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.sessionFlowBadge}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {t.sessionFlowTitle}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {t.sessionFlowSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {flowSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-amber-600 tracking-wider font-mono">
                    {step.num}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${step.color}`}>
                    <StepIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-bold text-slate-800 text-xs leading-snug">{step.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Clinical Notice */}
        <div className="p-3.5 rounded-2xl bg-white border border-amber-200 text-amber-950 flex items-start gap-2.5 text-xs leading-relaxed">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>{currentLang === 'tr' ? 'Pedagojik Hatırlatma: ' : currentLang === 'en' ? 'Pedagogical Notice: ' : 'Pädagogischer Hinweis: '}</strong>
            {t.legalDisclaimer}
          </p>
        </div>
      </div>

      {/* 4. Credentials & Safeguarding */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.credentialsBadge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {t.credentialsTitle}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {t.credentialsDesc}
            </p>
          </div>

          {onOpenLegal && (
            <button
              onClick={() => onOpenLegal('kinderschutz')}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t.safeguardBtn}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {credentials.map((cred, i) => {
            const CredIcon = cred.icon;
            return (
              <div key={i} className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 space-y-2 shadow-2xs">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold ${cred.color}`}>
                  <CredIcon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-800 text-xs leading-snug">{cred.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{cred.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Parent FAQ Accordion */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 border border-amber-500/20 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.faqBadge}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {t.faqTitle}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm">
            {t.faqSub}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-2.5">
          {faqs.map((faq, idx) => {
            const isFaqOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                className={`p-4 sm:p-4.5 rounded-2xl bg-white/90 border border-slate-200 transition-all cursor-pointer shadow-2xs hover:border-amber-300 ${
                  isFaqOpen ? 'ring-1 ring-amber-400 bg-white' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                    {faq.q}
                  </h4>
                  <div className="shrink-0 text-slate-400">
                    {isFaqOpen ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
                {isFaqOpen && (
                  <div className="mt-2.5 pt-2.5 border-t border-slate-100 text-xs text-slate-600 leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Parent Testimonials */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 border border-amber-500/20 text-xs font-bold">
            <Quote className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.testimonialsBadge}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {t.testimonialsTitle}
          </h3>
          {t.testimonialsNote && (
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {t.testimonialsNote}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="p-5 rounded-3xl bg-white/90 backdrop-blur-lg border border-slate-200 space-y-3 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2">
              <Quote className="w-5 h-5 text-amber-500/50" />
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                {t.testimonial1Text}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-amber-800">
              {t.testimonial1Author}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white/90 backdrop-blur-lg border border-slate-200 space-y-3 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2">
              <Quote className="w-5 h-5 text-emerald-500/50" />
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                {t.testimonial2Text}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-emerald-800">
              {t.testimonial2Author}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white/90 backdrop-blur-lg border border-slate-200 space-y-3 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2">
              <Quote className="w-5 h-5 text-purple-500/50" />
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                {t.testimonial3Text}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-purple-800">
              {t.testimonial3Author}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white/90 backdrop-blur-lg border border-slate-200 space-y-3 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2">
              <Quote className="w-5 h-5 text-sky-500/50" />
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                {t.testimonial4Text}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-sky-800">
              {t.testimonial4Author}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Navigation */}
      <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onNavigateTab('programs')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-emerald-600" />
          <span>{t.allPrograms} →</span>
        </button>

        <button
          onClick={() => onNavigateTab('contact')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>{t.contactNav}</span>
        </button>
      </div>

    </div>
  );
};
