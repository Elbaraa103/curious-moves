import React, { useState, useMemo } from 'react';
import { Program, Language } from '../types';
import { PROGRAMS } from '../data/programsData';
import { UI_TRANSLATIONS } from '../data/translations';
import { ProgramCard } from './ProgramCard';
import { HowItWorksFlow } from './HowItWorksFlow';
import { YogaSectionGallery } from './YogaSectionGallery';
import {
  Search,
  Sparkles,
  ArrowLeft,
  X,
  MapPin,
  Globe,
  User,
  Users,
} from 'lucide-react';

interface ProgramsViewProps {
  currentLang: Language;
  onSelectProgram: (program: Program) => void;
  onBackToHome: () => void;
  onNavigateTab: (tab: 'home' | 'programs' | 'about' | 'principles' | 'contact') => void;
}

export const ProgramsView: React.FC<ProgramsViewProps> = ({
  currentLang,
  onSelectProgram,
  onBackToHome,
  onNavigateTab,
}) => {
  const t = UI_TRANSLATIONS[currentLang];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'workshops' | 'individual' | 'group'>('all');

  const bannerText = {
    tr: "Tüm programlar Berlin'de (Prenzlauer Berg, Neukölln, Ev Ziyareti veya Online) Türkçe / Almanca / İngilizce seçenekleriyle sunulmaktadır.",
    en: "All programs are offered in Berlin (Prenzlauer Berg, Neukölln, Home Visits, or Online) in Turkish, English, and German.",
    de: "Alle Angebote finden in Berlin (Prenzlauer Berg, Neukölln, Hausbesuche oder Online) auf Deutsch, Englisch und Türkisch statt.",
  }[currentLang];

  const categories = [
    {
      id: 'all' as const,
      label: currentLang === 'tr' ? 'Tüm Programlar (7)' : currentLang === 'en' ? 'All Programs (7)' : 'Alle Programme (7)',
      icon: Sparkles,
    },
    {
      id: 'workshops' as const,
      label: currentLang === 'tr' ? '🌟 Açık Atölyeler (2)' : currentLang === 'en' ? '🌟 Open Workshops (2)' : '🌟 Offene Workshops (2)',
      icon: Sparkles,
    },
    {
      id: 'individual' as const,
      label: currentLang === 'tr' ? '👤 Bireysel Programlar (2)' : currentLang === 'en' ? '👤 Individual Programs (2)' : '👤 Einzelangebote (2)',
      icon: User,
    },
    {
      id: 'group' as const,
      label: currentLang === 'tr' ? '👥 Grup Çalışmaları (3)' : currentLang === 'en' ? '👥 Group Workshops (3)' : '👥 Gruppenangebote (3)',
      icon: Users,
    },
  ];

  // Filter programs based on category & search term
  const { openWorkshops, individualPrograms, groupPrograms, totalFilteredCount } = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    const matchesSearch = (p: Program) => {
      if (!term) return true;
      const title = (p.title[currentLang] || '').toLowerCase();
      const sub = (p.subtitle?.[currentLang] || '').toLowerCase();
      const summary = (p.summary[currentLang] || '').toLowerCase();
      const desc = (p.fullDescription[currentLang] || '').toLowerCase();
      return title.includes(term) || sub.includes(term) || summary.includes(term) || desc.includes(term);
    };

    const workshops = PROGRAMS.filter(
      (p) =>
        p.isSeasonalWorkshop &&
        matchesSearch(p) &&
        (selectedCategory === 'all' || selectedCategory === 'workshops')
    );

    const individual = PROGRAMS.filter(
      (p) =>
        !p.isSeasonalWorkshop &&
        (p.sessionType === 'individual' || p.category === 'pedagogy' || p.category === 'language') &&
        matchesSearch(p) &&
        (selectedCategory === 'all' || selectedCategory === 'individual')
    );

    const group = PROGRAMS.filter(
      (p) =>
        !p.isSeasonalWorkshop &&
        (p.sessionType === 'group' || p.category === 'yoga' || p.category === 'drama' || p.category === 'p4c') &&
        p.sessionType !== 'individual' &&
        matchesSearch(p) &&
        (selectedCategory === 'all' || selectedCategory === 'group')
    );

    return {
      openWorkshops: workshops,
      individualPrograms: individual,
      groupPrograms: group,
      totalFilteredCount: workshops.length + individual.length + group.length,
    };
  }, [currentLang, selectedCategory, searchTerm]);

  return (
    <div className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 animate-fadeIn">
      
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
          Curious Moves Berlin / <span className="text-amber-800 font-bold">{t.allPrograms}</span>
        </div>
      </div>

      {/* Global Location & Languages Master Banner */}
      <div className="rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-amber-50/90 via-orange-50/80 to-emerald-50/90 border-2 border-amber-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
          <MapPin className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-extrabold text-amber-900">
            <span className="flex items-center gap-1">📍 Berlin (Prenzlauer Berg, Neukölln & Ev Ziyareti)</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-indigo-700"><Globe className="w-3.5 h-3.5" /> Türkçe / Deutsch / English</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {bannerText}
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-900 border border-emerald-500/20 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>{t.catalogBadge}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
          {t.catalogTitle}
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          {t.catalogSub}
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-4 max-w-3xl mx-auto">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 shadow-2xs transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white/90 hover:bg-white text-slate-700 border border-slate-200/80 shadow-2xs'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

      </div>

      {/* Categorized Program Sections */}
      {totalFilteredCount > 0 ? (
        <div className="space-y-12 pt-2">

          {/* 🌟 1. BU DÖNEM AÇIK OLAN ATÖLYELER (OPEN WORKSHOPS THIS TERM) */}
          {openWorkshops.length > 0 && (
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-orange-300/80 gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-900 flex items-center justify-center font-bold text-sm shadow-2xs">
                    🌟
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-base sm:text-xl font-black text-slate-900">
                        {t.categoryOpenWorkshops || 'Bu Dönem Açık Olan Atölyeler'}
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-500 text-white shadow-2xs">
                        {currentLang === 'tr' ? 'Eylül Kayıtları Açık' : currentLang === 'en' ? 'Registration Open' : 'Anmeldung Geöffnet'}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      {t.categoryOpenWorkshopsSub || 'Eylül dönemi aylık kayıtlı pedagojik grup atölyeleri (50 Dk)'}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-black text-orange-900 bg-orange-100 px-3 py-1 rounded-full border border-orange-300 w-fit shrink-0">
                  {openWorkshops.length} {currentLang === 'tr' ? 'Yeni Atölye' : currentLang === 'en' ? 'Workshops' : 'Workshops'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {openWorkshops.map((program) => (
                  <ProgramCard
                    key={program.id}
                    program={program}
                    currentLang={currentLang}
                    onSelect={onSelectProgram}
                  />
                ))}
              </div>
            </section>
          )}
          
          {/* 👤 2. Bireysel Programlar (Individual Programs) Section */}
          {individualPrograms.length > 0 && (
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-amber-200/60 gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs">
                    👤
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                      {t.categoryIndividual || 'Bireysel Programlar'}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      {t.categoryIndividualSub || 'Öğrencinin veya uzmanın evinde / Online birebir seanslar (50 Dk)'}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 w-fit">
                  {individualPrograms.length} {currentLang === 'tr' ? 'Program' : currentLang === 'en' ? 'Programs' : 'Angebote'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {individualPrograms.map((program) => (
                  <ProgramCard
                    key={program.id}
                    program={program}
                    currentLang={currentLang}
                    onSelect={onSelectProgram}
                  />
                ))}
              </div>
            </section>
          )}

          {/* 👥 3. Grup Çalışmaları (Group Workshops) Section */}
          {groupPrograms.length > 0 && (
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-emerald-200/60 gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs">
                    👥
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                      {t.categoryGroup || 'Grup Çalışmaları'}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      {t.categoryGroupSub || 'Prenzlauer Berg & Neukölln stüdyolarında küçük grup atölyeleri (45-60 Dk)'}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 w-fit">
                  {groupPrograms.length} {currentLang === 'tr' ? 'Atölye' : currentLang === 'en' ? 'Workshops' : 'Workshops'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupPrograms.map((program) => (
                  <ProgramCard
                    key={program.id}
                    program={program}
                    currentLang={currentLang}
                    onSelect={onSelectProgram}
                  />
                ))}
              </div>

              {/* Yoga Bölümü Fotoğrafları ve Duruş Kartları Vitrini */}
              <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-amber-50/50 border-2 border-emerald-200/90 shadow-sm space-y-4">
                <YogaSectionGallery currentLang={currentLang} />
              </div>
            </section>
          )}

        </div>
      ) : (
        <div className="text-center py-12 px-4 rounded-3xl bg-white/80 border border-slate-200 space-y-4 max-w-lg mx-auto">
          <p className="text-sm text-slate-600">{t.noProgramsFound}</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
          >
            {t.resetFilters}
          </button>
        </div>
      )}

      {/* "Nasıl İşliyor" (How It Works) Process Flow */}
      <div className="pt-6">
        <HowItWorksFlow currentLang={currentLang} onNavigateTab={onNavigateTab} />
      </div>

      {/* Bottom Quick Help Card */}
      <div className="p-6 rounded-3xl bg-white/80 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-xs sm:text-sm font-bold text-slate-800">
            {currentLang === 'tr' ? 'Hangi programın çocuğunuza uygun olduğuna birlikte karar verelim' : currentLang === 'en' ? 'Let’s decide together which program best suits your child' : 'Lassen Sie uns gemeinsam entscheiden, welches Angebot am besten passt'}
          </h4>
          <p className="text-[11px] text-slate-500">
            {currentLang === 'tr' ? 'Ücretsiz 15 dakikalık tanışma görüşmesi planlayabilirsiniz.' : currentLang === 'en' ? 'You can schedule a free 15-minute introductory call.' : 'Sie können ein kostenloses 15-minütiges Kennenlerngespräch vereinbaren.'}
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('contact')}
          className="shrink-0 px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
        >
          {t.contactNav} →
        </button>
      </div>

    </div>
  );
};
