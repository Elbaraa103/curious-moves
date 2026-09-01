import { WHATSAPP_RAW } from '../data/programsData';
import { Language } from '../types';

// Map of any legacy or alternative IDs to current 5 flagship programs
const LEGACY_ID_MAP: Record<string, string> = {
  // Category 1: Individual
  'autism': 'autism-support',
  'autism-support': 'autism-support',
  'autism-play': 'autism-support',
  'otizm': 'autism-support',
  'pedagoji': 'autism-support',
  'pedagogy': 'autism-support',
  'pedagogical-support': 'autism-support',

  'turkish': 'bilingual-turkish-club',
  'turkce': 'bilingual-turkish-club',
  'eglenceli-turkce': 'bilingual-turkish-club',
  'playful-turkish': 'bilingual-turkish-club',
  'bilingual-turkish': 'bilingual-turkish-club',
  'turkish-club': 'bilingual-turkish-club',
  'bilingual-turkish-club': 'bilingual-turkish-club',

  // Category 2: Group
  'yoga': 'holistic-yoga-breath',
  'kids-yoga': 'holistic-yoga-breath',
  'teen-yoga': 'holistic-yoga-breath',
  'yoga-kids': 'holistic-yoga-breath',
  'nefes': 'holistic-yoga-breath',
  'cocuk-yogasi': 'holistic-yoga-breath',
  'holistic-yoga-breath': 'holistic-yoga-breath',

  'emotion-play-drama': 'emotion-play-drama',
  'duygu-oyun-drama': 'emotion-play-drama',
  'emotional-awareness-play': 'emotion-play-drama',
  'creative-drama': 'emotion-play-drama',
  'drama': 'emotion-play-drama',
  'emotional': 'emotion-play-drama',
  'duygu': 'emotion-play-drama',

  'p4c-philosophy': 'p4c-philosophy',
  'p4c': 'p4c-philosophy',
  'philosophy': 'p4c-philosophy',
  'felsefe': 'p4c-philosophy',
  'p4c-kids': 'p4c-philosophy',
  'creative-drama-p4c': 'p4c-philosophy',
};

/**
 * Resolves an ID (even if legacy or shortened) to a current program ID.
 */
export function resolveProgramId(rawId: string): string {
  const cleanId = rawId.toLowerCase().trim();
  return LEGACY_ID_MAP[cleanId] || cleanId;
}

/**
 * Generates a clean, canonical web URL for a specific program.
 */
export function getProgramPageUrl(programId: string): string {
  if (typeof window === 'undefined') {
    return `https://curiousmoves.de/?program=${encodeURIComponent(programId)}`;
  }
  const origin = window.location.origin;
  const pathname = window.location.pathname;
  return `${origin}${pathname}?program=${encodeURIComponent(programId)}`;
}

/**
 * Generates a direct, active WhatsApp link with pre-filled message.
 */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates community join WhatsApp URLs.
 */
export function getCommunityWhatsAppUrl(language: Language = 'tr'): string {
  const text =
    language === 'tr'
      ? 'Merhaba! Berlin Çok Dilli Ebeveyn WhatsApp Topluluğuna katılmak ve grup davet linki almak istiyorum.'
      : language === 'en'
      ? 'Hello! I would like to join the Berlin Multilingual Parents WhatsApp Community.'
      : 'Hallo! Ich möchte der Berliner Eltern-WhatsApp-Gruppe für Mehrsprachigkeit beitreten.';
  return getWhatsAppUrl(text);
}
