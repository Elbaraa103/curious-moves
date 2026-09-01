import React, { useState } from 'react';
import { Program, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { WHATSAPP_RAW } from '../data/programsData';
import { getProgramPageUrl, getWhatsAppUrl } from '../utils/linkHelper';
import { YogaSectionGallery } from './YogaSectionGallery';
import {
  YeniBaslangiclarIllustration,
  DeneyerekGuclenIllustration,
  EglenceliTurkceIllustration,
} from './WorkshopIllustrations';
import {
  X,
  MessageCircle,
  MapPin,
  Globe,
  Clock,
  CheckCircle2,
  Send,
  Copy,
  Check,
  Share2,
} from 'lucide-react';

interface ProgramModalProps {
  program: Program | null;
  currentLang: Language;
  onClose: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  currentLang,
  onClose,
}) => {
  if (!program) return null;

  const t = UI_TRANSLATIONS[currentLang];
  const [customNotes, setCustomNotes] = useState('');
  const [copiedWebLink, setCopiedWebLink] = useState(false);
  const [copiedWaLink, setCopiedWaLink] = useState(false);

  // Generate direct, clean web link to this program
  const programPageUrl = getProgramPageUrl(program.id);

  // Generate WhatsApp text
  const defaultMsg =
    currentLang === 'tr'
      ? `Merhaba! "${program.title.tr}" programı hakkında bilgi ve ön görüşme randevusu almak istiyorum.\nProgram Detayı: ${programPageUrl}`
      : currentLang === 'en'
      ? `Hello! I would like to get details and schedule a consultation for "${program.title.en}".\nProgram Link: ${programPageUrl}`
      : `Hallo! Ich möchte mich über "${program.title.de}" informieren und ein Erstgespräch vereinbaren.\nProgramm-Link: ${programPageUrl}`;

  const finalMsg = customNotes
    ? `${defaultMsg}\nNot: ${customNotes}`
    : defaultMsg;

  const waUrl = getWhatsAppUrl(finalMsg);

  const handleCopyWebLink = () => {
    navigator.clipboard.writeText(programPageUrl);
    setCopiedWebLink(true);
    setTimeout(() => setCopiedWebLink(false), 2000);
  };

  const handleCopyWaLink = () => {
    navigator.clipboard.writeText(waUrl);
    setCopiedWaLink(true);
    setTimeout(() => setCopiedWaLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-2xl p-6 sm:p-8 my-8 text-slate-800 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 shadow-sm transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Illustration for Seasonal Workshops */}
        {program.illustrationType === 'yeni-baslangiclar' && (
          <div className="mb-5 overflow-hidden rounded-2xl shadow-sm">
            <YeniBaslangiclarIllustration className="w-full h-48 sm:h-56" />
          </div>
        )}
        {program.illustrationType === 'deneyerek-guclen' && (
          <div className="mb-5 overflow-hidden rounded-2xl shadow-sm">
            <DeneyerekGuclenIllustration className="w-full h-48 sm:h-56" />
          </div>
        )}
        {program.illustrationType === 'eglenceli-turkce' && (
          <div className="mb-5 overflow-hidden rounded-2xl shadow-sm">
            <EglenceliTurkceIllustration className="w-full h-48 sm:h-56" />
          </div>
        )}

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3 pr-8">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            {program.targetGroup === 'children'
              ? currentLang === 'tr' ? 'Çocuklar İçin' : currentLang === 'en' ? 'For Children' : 'Für Kinder'
              : program.targetGroup === 'teens'
              ? currentLang === 'tr' ? 'Gençler İçin' : currentLang === 'en' ? 'For Teens' : 'Für Jugendliche'
              : currentLang === 'tr' ? 'Çocuk & Genç' : currentLang === 'en' ? 'Kids & Teens' : 'Kinder & Jugend'}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200 shadow-sm">
            {program.ageRange}
          </span>
          {program.isSeasonalWorkshop && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white shadow-2xs">
              {currentLang === 'tr' ? 'Eylül Kayıtları Açık' : currentLang === 'en' ? 'Enrollment Open' : 'Anmeldung Geöffnet'}
            </span>
          )}
        </div>

        {/* Program Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-1.5 leading-snug">
          {program.title[currentLang]}
        </h2>

        {program.subtitle && (
          <p className="text-sm font-semibold text-amber-700 mb-4">
            {program.subtitle[currentLang]}
          </p>
        )}

        {/* Info Grid Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50/80 backdrop-blur-md rounded-2xl border border-slate-200/80 mb-6 text-xs text-slate-700 shadow-sm">
          <div>
            <span className="block text-slate-400 font-semibold mb-0.5">{t.locationLabel}</span>
            <span className="font-medium flex items-center gap-1 text-slate-800">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              {program.location}
            </span>
          </div>

          <div>
            <span className="block text-slate-400 font-semibold mb-0.5">{t.languageLabel}</span>
            <span className="font-medium flex items-center gap-1 text-slate-800">
              <Globe className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              {program.languages.join(', ')}
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <span className="block text-slate-400 font-semibold mb-0.5">{t.formatTitle}</span>
            <span className="font-medium text-slate-800 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              {program.formatOptions[currentLang]}
            </span>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-2 mb-6">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t.programDescTitle}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
            {program.fullDescription[currentLang]}
          </p>
        </div>

        {/* Outcomes List */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t.outcomesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {program.outcomes[currentLang].map((outcome, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Yoga Section Photos & Visual Posture Gallery */}
        {(program.category === 'yoga' || program.id === 'holistic-yoga-breath') && (
          <div className="mb-6 p-4.5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
            <YogaSectionGallery currentLang={currentLang} isCompact={true} />
          </div>
        )}

        {/* Interactive WhatsApp Contact Box */}
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-900 text-sm font-bold">
            <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <span>{t.modalDirectWhatsApp}</span>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-medium text-slate-700">
              {t.addNoteOptional}
            </label>
            <input
              type="text"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder={
                currentLang === 'tr'
                  ? 'Örn: Berlin seans saatleri ve ücret bilgisi hakkında...'
                  : 'E.g., Inquiring about Berlin session schedules and availability...'
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-emerald-500 shadow-sm"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-transform hover:scale-[1.01]"
            >
              <Send className="w-4 h-4" />
              <span>{t.sendViaWhatsApp}</span>
            </a>

            <button
              onClick={handleCopyWebLink}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200 shadow-sm cursor-pointer"
              title={t.copyProgramLink}
            >
              {copiedWebLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">{t.programLinkCopied}</span>
                </>
              ) : (
                <>
                  <Globe className="w-4 h-4 text-amber-600" />
                  <span>{t.copyProgramLink}</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyWaLink}
              className="inline-flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200 shadow-sm cursor-pointer"
              title={t.copyWaLink}
            >
              {copiedWaLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">{t.waLinkCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>WhatsApp Linki</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
