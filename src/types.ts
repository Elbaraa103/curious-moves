export type Language = 'tr' | 'en' | 'de';

export type TargetGroup = 'children' | 'teens' | 'all';
export type DeliveryMode = 'berlin' | 'online' | 'both';

export interface YogaGalleryMoment {
  id: string;
  title: {
    tr: string;
    en: string;
    de: string;
  };
  badge: {
    tr: string;
    en: string;
    de: string;
  };
  description: {
    tr: string;
    en: string;
    de: string;
  };
  setting: {
    tr: string;
    en: string;
    de: string;
  };
  posesOrHighlights?: string[];
  gradientTheme: string;
  iconName: 'Sun' | 'TreePine' | 'Layers' | 'Sparkles' | 'Laptop' | 'HeartHandshake';
}

export interface Program {
  id: string;
  title: {
    tr: string;
    en: string;
    de: string;
  };
  subtitle?: {
    tr: string;
    en: string;
    de: string;
  };
  category: 'pedagogy' | 'yoga' | 'drama' | 'therapy' | 'p4c' | 'language' | 'teen-yoga' | 'stress' | 'workshop' | 'seasonal-workshop';
  targetGroup: TargetGroup;
  ageRange: string;
  deliveryMode: DeliveryMode;
  location: string;
  languages: string[];
  summary: {
    tr: string;
    en: string;
    de: string;
  };
  fullDescription: {
    tr: string;
    en: string;
    de: string;
  };
  outcomes: {
    tr: string[];
    en: string[];
    de: string[];
  };
  formatOptions: {
    tr: string;
    en: string;
    de: string;
  };
  formatBadge: {
    tr: string;
    en: string;
    de: string;
  };
  sessionType: 'individual' | 'group' | 'both';
  isIndividual?: boolean;
  isGroup?: boolean;
  isSeasonalWorkshop?: boolean;
  illustrationType?: 'yeni-baslangiclar' | 'deneyerek-guclen' | 'eglenceli-turkce';
  imageSrc?: string;
  iconName: string;
  colorTheme: string; // Tailwind color class key e.g. 'orange', 'teal', 'amber', 'emerald', 'indigo', 'rose', 'sky', 'purple'
}

export interface InquiryFormData {
  parentName: string;
  childAge: string;
  programId: string;
  phone: string;
  preferredLanguage: Language;
  modePreference: 'berlin' | 'online';
  notes: string;
}
