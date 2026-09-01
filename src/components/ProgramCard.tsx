import React, { useState } from 'react';
import { Program, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { getProgramPageUrl } from '../utils/linkHelper';
import {
  YeniBaslangiclarIllustration,
  DeneyerekGuclenIllustration,
  EglenceliTurkceIllustration,
} from './WorkshopIllustrations';
import {
  Puzzle,
  Sparkles,
  Theater,
  HeartHandshake,
  BookOpen,
  ArrowRight,
  Share2,
  Check,
  Clock,
  Compass,
  Smile,
  Eye,
  Users,
  DoorOpen,
} from 'lucide-react';

interface ProgramCardProps {
  program: Program;
  currentLang: Language;
  onSelect: (program: Program) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  currentLang,
  onSelect,
}) => {
  const t = UI_TRANSLATIONS[currentLang];
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = getProgramPageUrl(program.id);
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Icon mapping helper
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Puzzle':
        return <Puzzle {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Theater':
        return <Theater {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'BookOpen':
        return <BookOpen {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'DoorOpen':
        return <DoorOpen {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  // Category & Color theme mapping with vibrant, warm, inviting tones
  const colorMap: Record<
    string,
    {
      bg: string;
      text: string;
      border: string;
      hoverBorder: string;
      badge: string;
      formatBadge: string;
      hoverBtn: string;
      visualGradient: string;
      tagLabel: string;
      visualText: string;
    }
  > = {
    orange: {
      bg: 'bg-orange-100 text-orange-900',
      text: 'text-orange-800',
      border: 'border-orange-200/90',
      hoverBorder: 'hover:border-orange-400',
      badge: 'bg-orange-100 text-orange-950 border-orange-300',
      formatBadge: 'bg-orange-50 text-orange-900 border-orange-200',
      hoverBtn: 'hover:bg-orange-600 hover:text-white',
      visualGradient: 'from-orange-100/90 via-amber-50/80 to-orange-50/90',
      tagLabel: currentLang === 'tr' ? '👥 Grup Çalışması' : currentLang === 'en' ? '👥 Group Workshop' : '👥 Gruppenangebot',
      visualText: currentLang === 'tr' ? 'Ayrılık Kaygısı & Güvenli Uyum' : currentLang === 'en' ? 'Transition & Confidence' : 'Eingewöhnung & Vertrauen',
    },
    teal: {
      bg: 'bg-teal-100 text-teal-900',
      text: 'text-teal-800',
      border: 'border-teal-200/90',
      hoverBorder: 'hover:border-teal-400',
      badge: 'bg-teal-100 text-teal-950 border-teal-300',
      formatBadge: 'bg-teal-50 text-teal-900 border-teal-200',
      hoverBtn: 'hover:bg-teal-600 hover:text-white',
      visualGradient: 'from-teal-100/90 via-emerald-50/80 to-teal-50/90',
      tagLabel: currentLang === 'tr' ? '👥 Grup Çalışması' : currentLang === 'en' ? '👥 Group Workshop' : '👥 Gruppenangebot',
      visualText: currentLang === 'tr' ? 'Cesaret, Özgüven & Dayanışma' : currentLang === 'en' ? 'Courage, Self-Trust & Teamwork' : 'Mut, Stärke & Teamgeist',
    },
    amber: {
      bg: 'bg-amber-100 text-amber-900',
      text: 'text-amber-800',
      border: 'border-amber-200/90',
      hoverBorder: 'hover:border-amber-400',
      badge: 'bg-amber-100 text-amber-950 border-amber-300',
      formatBadge: 'bg-amber-50 text-amber-900 border-amber-200',
      hoverBtn: 'hover:bg-amber-600 hover:text-white',
      visualGradient: 'from-amber-100/90 via-orange-50/80 to-amber-50/90',
      tagLabel: currentLang === 'tr' ? '👤 Bireysel Program' : currentLang === 'en' ? '👤 1-on-1 Program' : '👤 Einzelangebot',
      visualText: currentLang === 'tr' ? 'Yapılandırılmış Oyun & Duyusal Uyum' : currentLang === 'en' ? 'Structured Play & Sensory Calming' : 'Strukturiertes Spiel & Reizreduktion',
    },
    sky: {
      bg: 'bg-sky-100 text-sky-900',
      text: 'text-sky-800',
      border: 'border-sky-200/90',
      hoverBorder: 'hover:border-sky-400',
      badge: 'bg-sky-100 text-sky-950 border-sky-300',
      formatBadge: 'bg-sky-50 text-sky-900 border-sky-200',
      hoverBtn: 'hover:bg-sky-600 hover:text-white',
      visualGradient: 'from-sky-100/90 via-blue-50/80 to-sky-50/90',
      tagLabel: currentLang === 'tr' ? '👤 Bireysel Program' : currentLang === 'en' ? '👤 1-on-1 Program' : '👤 Einzelangebot',
      visualText: currentLang === 'tr' ? 'Masallar & Oyun Temelli İki Dillilik' : currentLang === 'en' ? 'Tales & Play-Based Bilingualism' : 'Märchen & spielerische Sprachförderung',
    },
    emerald: {
      bg: 'bg-emerald-100 text-emerald-900',
      text: 'text-emerald-800',
      border: 'border-emerald-200/90',
      hoverBorder: 'hover:border-emerald-400',
      badge: 'bg-emerald-100 text-emerald-950 border-emerald-300',
      formatBadge: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      hoverBtn: 'hover:bg-emerald-600 hover:text-white',
      visualGradient: 'from-emerald-100/90 via-teal-50/80 to-emerald-50/90',
      tagLabel: currentLang === 'tr' ? '👥 Grup Çalışması' : currentLang === 'en' ? '👥 Group Workshop' : '👥 Gruppenangebot',
      visualText: currentLang === 'tr' ? 'Beden Farkındalığı & Nefes' : currentLang === 'en' ? 'Body Awareness & Mindful Breath' : 'Körpergefühl & Atemkraft',
    },
    rose: {
      bg: 'bg-rose-100 text-rose-900',
      text: 'text-rose-800',
      border: 'border-rose-200/90',
      hoverBorder: 'hover:border-rose-400',
      badge: 'bg-rose-100 text-rose-950 border-rose-300',
      formatBadge: 'bg-rose-50 text-rose-900 border-rose-200',
      hoverBtn: 'hover:bg-rose-600 hover:text-white',
      visualGradient: 'from-rose-100/90 via-pink-50/80 to-rose-50/90',
      tagLabel: currentLang === 'tr' ? '👥 Grup Çalışması' : currentLang === 'en' ? '👥 Group Workshop' : '👥 Gruppenangebot',
      visualText: currentLang === 'tr' ? 'Duygu Tanıma & Doğaçlama Drama' : currentLang === 'en' ? 'Emotion Literacy & Drama Improv' : 'Gefühle erkennen & Theaterimpro',
    },
    purple: {
      bg: 'bg-purple-100 text-purple-900',
      text: 'text-purple-800',
      border: 'border-purple-200/90',
      hoverBorder: 'hover:border-purple-400',
      badge: 'bg-purple-100 text-purple-950 border-purple-300',
      formatBadge: 'bg-purple-50 text-purple-900 border-purple-200',
      hoverBtn: 'hover:bg-purple-600 hover:text-white',
      visualGradient: 'from-purple-100/90 via-indigo-50/80 to-purple-50/90',
      tagLabel: currentLang === 'tr' ? '👥 Grup Çalışması' : currentLang === 'en' ? '👥 Group Workshop' : '👥 Gruppenangebot',
      visualText: currentLang === 'tr' ? 'Felsefi Soruşturma & Muhakeme' : currentLang === 'en' ? 'P4C Inquiry & Reasoning' : 'Philosophischer Dialog & Urteilskraft',
    },
  };

  const theme = colorMap[program.colorTheme] || colorMap.amber;

  return (
    <div
      onClick={() => onSelect(program)}
      className={`group relative bg-white/90 hover:bg-white backdrop-blur-xl rounded-3xl border-2 ${theme.border} p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${theme.hoverBorder} cursor-pointer`}
    >
      <div className="space-y-4">
        {/* Top Illustration for Seasonal Workshops */}
        {program.illustrationType === 'yeni-baslangiclar' && (
          <div className="overflow-hidden rounded-2xl shadow-xs group-hover:shadow-md transition-shadow">
            <YeniBaslangiclarIllustration className="w-full h-44 sm:h-48" />
          </div>
        )}
        {program.illustrationType === 'deneyerek-guclen' && (
          <div className="overflow-hidden rounded-2xl shadow-xs group-hover:shadow-md transition-shadow">
            <DeneyerekGuclenIllustration className="w-full h-44 sm:h-48" />
          </div>
        )}
        {program.illustrationType === 'eglenceli-turkce' && (
          <div className="overflow-hidden rounded-2xl shadow-xs group-hover:shadow-md transition-shadow">
            <EglenceliTurkceIllustration className="w-full h-44 sm:h-48" />
          </div>
        )}

        {/* Top Header Row with Icon & Category Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className={`p-3.5 rounded-2xl ${theme.bg} shadow-xs group-hover:scale-105 transition-transform`}>
            {renderIcon(program.iconName)}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-black border ${theme.badge}`}>
            {theme.tagLabel}
          </span>
        </div>

        {/* Program Title */}
        <div>
          <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-800 transition-colors leading-tight">
            {program.title[currentLang]}
          </h3>
        </div>

        {/* Format & Location Pill */}
        <div className={`px-3.5 py-2 rounded-2xl border text-xs font-extrabold flex items-center gap-2 ${theme.formatBadge}`}>
          <Clock className="w-3.5 h-3.5 shrink-0 text-amber-700" />
          <span className="leading-snug">{program.formatBadge[currentLang]}</span>
        </div>

        {/* Visual Thematic Box */}
        <div className={`rounded-2xl p-3.5 bg-gradient-to-r ${theme.visualGradient} border border-slate-200/60 flex items-center justify-between gap-2 shadow-2xs`}>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="line-clamp-1">{theme.visualText}</span>
          </div>
          <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-white/90 text-slate-700 shadow-2xs shrink-0">
            {program.ageRange}
          </span>
        </div>

        {/* 1-Sentence Crisp Summary */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          {program.summary[currentLang]}
        </p>

        {/* Highlight Outcomes / Kazanımlar on Card */}
        {program.outcomes && program.outcomes[currentLang]?.length > 0 && (
          <div className="space-y-1.5 pt-1 bg-slate-50/70 rounded-2xl p-3 border border-slate-100">
            <span className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">
              {currentLang === 'tr' ? '✨ Öne Çıkan Kazanımlar' : currentLang === 'en' ? '✨ Key Highlights' : '✨ Wichtigste Inhalte'}
            </span>
            <ul className="space-y-1.5">
              {program.outcomes[currentLang].slice(0, 4).map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-700 font-medium leading-snug">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Highlight for Yoga Program */}
        {(program.category === 'yoga' || program.id === 'holistic-yoga-breath') && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] font-bold">
            <span className="text-emerald-600">📷</span>
            <span>
              {currentLang === 'tr' && 'Uygulamalı Seans Fotoğrafları & Duruş Kartları Dahil'}
              {currentLang === 'en' && 'Hands-on Session Photos & Posture Cards Included'}
              {currentLang === 'de' && 'Inklusive Praxis-Fotos & Haltungskarten'}
            </span>
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 mt-2 border-t border-slate-100 flex items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(program);
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white text-slate-800 font-extrabold text-xs sm:text-sm border border-slate-200 shadow-xs transition-all cursor-pointer ${theme.hoverBtn}`}
        >
          <Eye className="w-4 h-4 text-amber-600 group-hover:text-inherit" />
          <span>{t.detailsBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={handleShare}
          className="p-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-600 hover:text-amber-700 border border-slate-200 shadow-xs transition-all cursor-pointer shrink-0"
          title={t.copyProgramLink}
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-600" />
          ) : (
            <Share2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};


