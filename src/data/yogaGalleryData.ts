import { YogaGalleryMoment } from '../types';

export const YOGA_GALLERY_MOMENTS: YogaGalleryMoment[] = [
  {
    id: 'park-group-yoga',
    title: {
      tr: 'Açık Havada Grup Çocuk Yogası',
      en: 'Outdoor Group Kids Yoga',
      de: 'Outdoor Gruppen-Kinderyoga',
    },
    badge: {
      tr: 'Açık Hava & Grup',
      en: 'Outdoor & Group',
      de: 'Freiluft & Gruppe',
    },
    description: {
      tr: 'Güneşli havada parkta çimler ve renkli yoga matları üzerinde akranlarla birlikte yapılan neşeli ısınma, gökyüzüne uzanma ve nefes çalışmaları.',
      en: 'Joyful warm-ups, sky stretches, and playful breath games with peers on colorful mats under the open sky.',
      de: 'Freudige Aufwärmübungen, Dehnungen zum Himmel und spielerische Atemübungen mit Gleichaltrigen auf bunten Matten im Park.',
    },
    setting: {
      tr: 'Berlin Parkları & Açık Alan Etkinlikleri',
      en: 'Berlin Parks & Outdoor Workshops',
      de: 'Berliner Parks & Freiluft-Workshops',
    },
    posesOrHighlights: [
      'Güneşe Selam & Gökyüzüne Uzanma',
      'Akranlarla Eş Zamanlı Nefes & Hareket',
      'Çimlerde Çıplak Ayak Duyusal Temas',
      'Eğlenceli Grup Dinamikleri',
    ],
    gradientTheme: 'from-amber-400/20 via-orange-300/20 to-rose-400/20',
    iconName: 'Sun',
  },
  {
    id: 'tree-balance-poses',
    title: {
      tr: 'Ağaç Altında Denge ve Postür Seansı',
      en: 'Tree Posture & Balance Under the Canopy',
      de: 'Baum-Balance & Haltung unter freiem Himmel',
    },
    badge: {
      tr: 'Denge & Odak',
      en: 'Balance & Focus',
      de: 'Gleichgewicht & Fokus',
    },
    description: {
      tr: 'Ağaç gölgesinde tek ayak üzerinde ağaç duruşu, omurga hizalaması ve rüzgarın ritmiyle nefes alıp verme farkındalığı.',
      en: 'Practicing tree balance postures and spinal alignment in nature, tuning attention to grounded self-trust.',
      de: 'Baum-Haltungen, Koordination und Aufrichtung der Wirbelsäule in beruhigender natürlicher Umgebung.',
    },
    setting: {
      tr: 'Açık Hava Doğal Seans Alanı',
      en: 'Outdoor Nature Setting',
      de: 'Freiluft Naturraum',
    },
    posesOrHighlights: [
      'Ağaç Duruşu (Vrksasana)',
      'Savaşçı & Güç Duruşları',
      'Omurga Hizalanması & Beden Dengesi',
      'Doğanın Sesleriyle Sakinleşme',
    ],
    gradientTheme: 'from-emerald-400/20 via-teal-300/20 to-lime-400/20',
    iconName: 'TreePine',
  },
  {
    id: 'visual-pose-cards-board',
    title: {
      tr: 'Pedagojik Yoga Duruş Kartları Panosu',
      en: 'Visual Yoga Pose Board & Cards',
      de: 'Pädagogische Yoga-Haltungskarten',
    },
    badge: {
      tr: 'Görsel Materyaller',
      en: 'Visual Materials',
      de: 'Visuelle Bildkarten',
    },
    description: {
      tr: 'Çocukların seans akışını somutlaştırmalarını sağlayan, hayvan figürleri ve renkli çizimlerle desteklenmiş yapılandırılmış duruş kartları panosu.',
      en: 'Illustrated animal posture cards giving children clear, structured, and playful visual cues during the yoga journey.',
      de: 'Strukturierte Yoga-Bildkarten mit Tier- und Naturmotiven, die Kindern visuelle Orientierung und Erfolgserlebnisse schenken.',
    },
    setting: {
      tr: 'Seans Materyalleri & Görsel Program Akışı',
      en: 'Session Materials & Visual Routine',
      de: 'Praxismaterialien & Visueller Ablauf',
    },
    posesOrHighlights: [
      'Yarım Kelebek & Aşağı Bakan Köpek',
      'Güneşi Avuçla & Maymun Duruşu',
      'Üçgen & Ağaç Duruşu',
      'Deve, Kobra, Uyuyan Bebek & Köprü',
    ],
    gradientTheme: 'from-amber-400/20 via-yellow-300/20 to-amber-500/20',
    iconName: 'Layers',
  },
  {
    id: 'indoor-soft-mat-practice',
    title: {
      tr: 'Salon & Yumuşak Zemin Esneme Seansı',
      en: 'Indoor Soft Mat Sensory & Flow Practice',
      de: 'Mattenpraxis & Körpererfahrung im Raum',
    },
    badge: {
      tr: 'Beden Farkındalığı',
      en: 'Body Awareness',
      de: 'Körpergefühl & Dehnung',
    },
    description: {
      tr: 'Mavi ve kırmızı koruyucu yumuşak zemin matlarında, güvenli bir ortamda grup halinde "Aşağı Bakan Köpek" ve esneme duruşları pratiği.',
      en: 'Down-dog postures, core engagement, and full-body stretches in a safe, soft-floored indoor environment.',
      de: 'Herabschauender Hund, Kräftigung und wohltuende Dehnungen auf weichen Schutzmatten im Innenraum.',
    },
    setting: {
      tr: 'İç Mekan & Yumuşak Zemin Seans Alanı',
      en: 'Indoor Studio / Sensory Floor',
      de: 'Innenraum & Bewegungsmatte',
    },
    posesOrHighlights: [
      'Aşağı Bakan Köpek (Adho Mukha Svanasana)',
      'Kobra & Çocuk / Uyuyan Bebek Duruşu',
      'Eklem ve Kas Esnekliği',
      'Sinir Sistemi Regülasyonu',
    ],
    gradientTheme: 'from-indigo-400/20 via-sky-300/20 to-blue-400/20',
    iconName: 'Sparkles',
  },
  {
    id: 'circle-educator-guidance',
    title: {
      tr: 'Çember Düzeni & Eğitmen Rehberliği',
      en: 'Circle Format & Attuned Educator Guidance',
      de: 'Kreisrunde Begleitung & Achtsamkeit',
    },
    badge: {
      tr: 'Bütünsel Akış',
      en: 'Holistic Guidance',
      de: 'Ganzheitliche Begleitung',
    },
    description: {
      tr: 'Dilan Akbayir rehberliğinde matların çember oluşturduğu, çocukların birbirini görerek güvenle katıldığı hikayeli yoga ve mindfulness akışı.',
      en: 'Inclusive circle arrangement allowing all children to see each other and feel grounded with Dilan Akbayir’s warm presence.',
      de: 'Achtsame Kreisaufstellung, bei der Kinder einander wahrnehmen und sich in einer vertrauensvollen Atmosphäre entfalten.',
    },
    setting: {
      tr: 'Berlin Açık Alan & Atölye Çalışmaları',
      en: 'Berlin Outdoor & Workshop Sessions',
      de: 'Berliner Freiluft- & Gruppenworkshops',
    },
    posesOrHighlights: [
      'Hikayeleştirilmiş Yoga Akışları',
      'Göz Teması & Çember Birliği',
      'Duygu Paylaşımı & Masal Nefesleri',
      'Bireysel Hız ve Sınırlara Saygı',
    ],
    gradientTheme: 'from-rose-400/20 via-pink-300/20 to-amber-400/20',
    iconName: 'HeartHandshake',
  },
  {
    id: 'online-interactive-emotion-yoga',
    title: {
      tr: 'Online İnteraktif Seans & Duygu Kartları',
      en: 'Online Interactive Yoga & Emotion Cards',
      de: 'Online Interaktiv & Gefühlskarten',
    },
    badge: {
      tr: 'Online & Duygular',
      en: 'Online & Emotions',
      de: 'Online & Emotionen',
    },
    description: {
      tr: 'Ekran başında birebir veya küçük grupla yapılan, çizimler ve duygu kartlarıyla (korku, sevinç, heyecan) zenginleştirilmiş canlı interaktif seanslar.',
      en: 'Live interactive screen sessions featuring emotion sketch cards (happy, fearful, surprised) to connect bodily sensations with emotional literacy.',
      de: 'Live-Online-Einheiten mit handgezeichneten Gefühlskarten, die Körperwahrnehmung und emotionalen Ausdruck spielerisch verbinden.',
    },
    setting: {
      tr: 'Canlı Çevrimiçi Seans (Tablet / Bilgisayar)',
      en: 'Live Online Video Session (Tablet / Laptop)',
      de: 'Live Online-Sitzung (Tablet / PC)',
    },
    posesOrHighlights: [
      'Korku & Sevinç Duygu Çizim Kartları',
      'Ev Ortamında Yoga & Nefes Egzersizleri',
      'Duygu İsimlendirme & Somatik Farkındalık',
      'Almanya ve Türkiye Arası Canlı Bağlantı',
    ],
    gradientTheme: 'from-purple-400/20 via-violet-300/20 to-sky-400/20',
    iconName: 'Laptop',
  },
];
