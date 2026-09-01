import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sun,
  Heart,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Check,
} from 'lucide-react';
import {
  CustomYogaPhotosMap,
  loadCustomYogaPhotos,
  saveCustomYogaPhotos,
  fetchServerYogaPhotosList,
  YOGA_PHOTOS_UPDATED_EVENT,
} from '../utils/yogaPhotosStorage';

interface YogaSectionGalleryProps {
  currentLang: Language;
  isCompact?: boolean;
}

export interface YogaPhotoItem {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  location: Record<Language, string>;
  description: Record<Language, string>;
  pedagogicalBenefit: Record<Language, string>;
  posesIncluded: string[];
  themeColor: string;
  photoUrl?: string;
  renderVisual: (isModal?: boolean) => React.ReactNode;
}

export const YOGA_PHOTOS: YogaPhotoItem[] = [
  {
    id: 'outdoor-circle-yoga',
    title: {
      tr: 'Açık Havada Çember Yogası & Diyafram Nefesi',
      en: 'Outdoor Circle Yoga & Diaphragmatic Breath',
      de: 'Outdoor-Kreisyoga & Zwerchfellatmung',
    },
    category: {
      tr: 'Park & Doğa Seansı',
      en: 'Park & Nature Session',
      de: 'Park- & Natureinheit',
    },
    location: {
      tr: 'Parkta Ağaç Gölgesinde / Çim Alan',
      en: 'Under Tree Shade in Park / Lawn',
      de: 'Im Park im Baumschatten / Rasen',
    },
    description: {
      tr: 'Ağaç gölgeliğinde, pembe matlar üzerinde çember oluşturarak derin diyafram nefesi, ses titreşimi ve doğa farkındalığıyla başlayan çocuk grubu seansı.',
      en: 'Children circle session starting with deep diaphragmatic breath, nature sounds and grounding on pink mats under tree shade.',
      de: 'Kinder-Kreiseinheit im Baumschatten auf rosa Matten mit tiefer Zwerchfellatmung und Naturwahrnehmung.',
    },
    pedagogicalBenefit: {
      tr: 'Grup içi ait olma hissi, parasempatik sinir sistemini yatıştırma, açık havada duyusal regülasyon ve sosyal bağ kurma.',
      en: 'Sense of belonging, calming parasympathetic nervous system, open-air sensory regulation, and empathetic social bonding.',
      de: 'Zugehörigkeitsgefühl, Beruhigung des vegetativen Nervensystems und sensorische Natur-Regulation.',
    },
    posesIncluded: [
      'Giriş Çemberi',
      'Diyafram Nefesi',
      'Güneşe Selam',
      'Kelebek Kanadı',
    ],
    themeColor: 'from-emerald-500 to-teal-700',
    renderVisual: (isModal = false) => (
      <div
        className={`w-full ${
          isModal ? 'h-80 sm:h-96' : 'h-48 sm:h-52'
        } bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-900 relative overflow-hidden rounded-2xl flex flex-col justify-between p-4 text-white shadow-inner select-none`}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full bg-emerald-950/70 text-emerald-200 text-[10px] font-extrabold border border-emerald-400/30 flex items-center gap-1">
            <Sun className="w-3 h-3 text-amber-300" /> Açık Hava & Doğa
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
            1. An
          </span>
        </div>

        {/* Center Visual Diagram */}
        <div className="relative flex items-center justify-center my-auto py-2">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-emerald-300/60 flex items-center justify-center animate-[spin_60s_linear_infinite]">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/30 backdrop-blur-xs flex items-center justify-center border border-emerald-200/40">
              <Sparkles className="w-8 h-8 text-emerald-200" />
            </div>
          </div>
          <div className="absolute flex gap-1.5 bottom-0">
            <span className="px-2 py-0.5 rounded-md bg-pink-500/90 text-white text-[9px] font-black shadow-xs">
              Pembe Mat Çemberi
            </span>
          </div>
        </div>

        {/* Bottom Card Title */}
        <div className="flex items-center justify-between bg-emerald-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-400/30 text-white">
          <span className="text-xs font-black truncate">
            Çember Yogası & Diyafram Nefesi
          </span>
          <span className="text-[10px] font-bold text-emerald-300 bg-emerald-900/60 px-2 py-0.5 rounded-md">
            Doğa Seansı
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'pedagogical-felt-board',
    title: {
      tr: 'Görsel Yoga Duruş Kartları Panosu',
      en: 'Pedagogical Yoga Pose Cards Board',
      de: 'Pädagogische Yoga-Haltungskartentafel',
    },
    category: {
      tr: 'Pedagojik Materyal',
      en: 'Pedagogical Material',
      de: 'Pädagogisches Material',
    },
    location: {
      tr: 'Çocuk Odaklı Görsel Öğrenme Masası',
      en: 'Child-Centered Visual Learning Table',
      de: 'Kindgerechter visueller Lerntisch',
    },
    description: {
      tr: 'Turuncu keçe zemin üzerine çocukların kendi seans akışlarını seçip tasarlayabildikleri; Yarım Kelebek, Aşağı Bakan Köpek, Ağaç, Maymun ve Kobra gibi resimli duruş kartları.',
      en: 'Orange felt board with illustrated posture cards (Half Butterfly, Downward Dog, Tree, Monkey, Cobra) enabling child self-direction.',
      de: 'Orangefarbene Filztafel mit illustrierten Haltungskarten zur Förderung kindlicher Eigeninitiative.',
    },
    pedagogicalBenefit: {
      tr: 'Öz-yönetim (self-agency), görsel somutlaştırma, karar verme becerisi ve seans akışına aktif katılım.',
      en: 'Fosters self-agency, visual concretization, decision-making, and active joyful participation in bodily movement choices.',
      de: 'Fördert Selbstbestimmung, visuelle Konkretisierung und aktive Mitgestaltung des Bewegungsablaufs.',
    },
    posesIncluded: [
      'Yarım Kelebek (+10)',
      'Aşağı Bakan Köpek',
      'Güneşi Avuçla',
      'Maymun Duruşu',
      'Üçgen (+30)',
      'Ağaç Duruşu',
      'Uyuyan Bebek',
      'Kobra Duruşu (+20)',
      'Köprü Duruşu (+30)',
    ],
    themeColor: 'from-amber-500 to-orange-600',
    renderVisual: (isModal = false) => (
      <div
        className={`w-full ${
          isModal ? 'h-80 sm:h-96' : 'h-48 sm:h-52'
        } bg-gradient-to-br from-amber-600 via-orange-600 to-amber-900 relative overflow-hidden rounded-2xl flex flex-col justify-between p-4 text-white shadow-inner select-none`}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full bg-amber-950/70 text-amber-200 text-[10px] font-extrabold border border-amber-400/30 flex items-center gap-1">
            <Compass className="w-3 h-3 text-amber-300" /> Keçe Pano & Kartlar
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
            2. An
          </span>
        </div>

        {/* Center Visual Diagram */}
        <div className="relative grid grid-cols-3 gap-1.5 my-auto py-1 max-w-[200px] mx-auto">
          {['Kelebek', 'Köpek', 'Güneş', 'Maymun', 'Ağaç', 'Kobra'].map((card, i) => (
            <div
              key={i}
              className="bg-white/95 text-amber-950 rounded-lg p-1.5 text-center shadow-md border border-amber-200 flex flex-col items-center justify-center"
            >
              <span className="text-[10px]">🧘</span>
              <span className="text-[8px] font-black truncate w-full">{card}</span>
            </div>
          ))}
        </div>

        {/* Bottom Card Title */}
        <div className="flex items-center justify-between bg-amber-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-400/30 text-white">
          <span className="text-xs font-black truncate">
            Resimli Duruş Kartları Panosu
          </span>
          <span className="text-[10px] font-bold text-amber-300 bg-amber-900/60 px-2 py-0.5 rounded-md">
            Öz-Yönetim
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'tatami-studio-asanas',
    title: {
      tr: 'Tatami Minderlerinde Asana & Omurga Pratiği',
      en: 'Tatami Studio Asana & Spine Practice',
      de: 'Tatami-Studio Asana & Wirbelsäulenpraxis',
    },
    category: {
      tr: 'Stüdyo & Beden Duruşu',
      en: 'Studio & Body Posture',
      de: 'Studio & Körperhaltung',
    },
    location: {
      tr: 'Renkli Tatami Zeminli Çocuk Hareket Odası',
      en: 'Kids Movement Room with Modular Tatami Mats',
      de: 'Kinderbewegungsraum mit Tatami-Matten',
    },
    description: {
      tr: 'Mavi ve pembe kare tatami zemininde çocuklarla birlikte Aşağı Bakan Köpek, Kobra ve Kedi-İnek duruşlarıyla omurga esnekliği ve beden dengesi çalışması.',
      en: 'Synchronized Downward Dog, Cobra and spinal alignment work on blue-pink tatami modular flooring.',
      de: 'Gemeinsames Üben von Herabschauendem Hund und Kobra auf weichen Tatami-Matten zur Förderung der Wirbelsäulenmobilität.',
    },
    pedagogicalBenefit: {
      tr: 'Omurga sağlığı, kaba motor becerileri, propriyoseptif (derin duyu) geri bildirim ve bilateral koordinasyon.',
      en: 'Spine mobility, gross motor strength, proprioceptive deep-pressure feedback, and bilateral coordination.',
      de: 'Wirbelsäulengesundheit, Grobmotorik und propriozeptive Rückmeldung.',
    },
    posesIncluded: [
      'Aşağı Bakan Köpek (Adho Mukha)',
      'Kobra Duruşu (Bhujangasana)',
      'Çocuk Duruşu (Balasana)',
      'Kedi-İnek Omurga Esnetme',
    ],
    themeColor: 'from-blue-600 to-indigo-800',
    renderVisual: (isModal = false) => (
      <div
        className={`w-full ${
          isModal ? 'h-80 sm:h-96' : 'h-48 sm:h-52'
        } bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-950 relative overflow-hidden rounded-2xl flex flex-col justify-between p-4 text-white shadow-inner select-none`}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full bg-blue-950/70 text-blue-200 text-[10px] font-extrabold border border-blue-400/30 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-cyan-300" /> Güvenli Tatami Alanı
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
            3. An
          </span>
        </div>

        {/* Center Visual Diagram */}
        <div className="relative flex flex-col items-center justify-center my-auto py-2">
          <div className="grid grid-cols-4 gap-1 p-1 bg-white/10 rounded-xl">
            {['bg-pink-500/80', 'bg-blue-500/80', 'bg-pink-500/80', 'bg-blue-500/80',
              'bg-blue-500/80', 'bg-pink-500/80', 'bg-blue-500/80', 'bg-pink-500/80'].map((bg, idx) => (
              <div key={idx} className={`w-8 h-8 rounded-md ${bg} flex items-center justify-center text-[10px] font-black shadow-xs`}>
                🐾
              </div>
            ))}
          </div>
          <span className="mt-1 text-[9px] font-black text-cyan-200">
            Aşağı Bakan Köpek & Kobra
          </span>
        </div>

        {/* Bottom Card Title */}
        <div className="flex items-center justify-between bg-blue-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-blue-400/30 text-white">
          <span className="text-xs font-black truncate">
            Asana & Omurga Esnetme
          </span>
          <span className="text-[10px] font-bold text-cyan-300 bg-blue-900/60 px-2 py-0.5 rounded-md">
            Stüdyo Seansı
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'mindful-tree-posture',
    title: {
      tr: 'Ağaç Altında Denge & Göğe Uzanan Kollar',
      en: 'Tree Posture & Skyward Reach in the Park',
      de: 'Baumhaltung & Himmelstrecken im Park',
    },
    category: {
      tr: 'Denge & Odaklanma',
      en: 'Balance & Focus',
      de: 'Balance & Fokus',
    },
    location: {
      tr: 'Açık Hava Çim Alanı & Gökyüzü',
      en: 'Open Air Lawn & Natural Sunlight',
      de: 'Freiluft-Rasen & natürliches Sonnenlicht',
    },
    description: {
      tr: 'Parkta canlı bir çınar ağacının yanında tek ayak üzerinde köklenme, gökyüzüne uzanan kollar ile denge, odak ve beden postürü çalışması.',
      en: 'Children anchoring like trees near real park trees, balancing on one foot and stretching arms skyward for posture and focus.',
      de: 'Balancieren auf einem Bein neben echten Bäumen im Park, Arme gen Himmel gestreckt für Stabilität und Konzentration.',
    },
    pedagogicalBenefit: {
      tr: 'Vestibüler denge, konsantrasyon, ayak bileği ve core stabilizasyonu, doğadan ilham alan benlik algısı.',
      en: 'Vestibular balance, sustained attention, ankle/core stabilization, and positive self-image rooted in nature.',
      de: 'Gleichgewichtssinn, Konzentration, Rumpfstabilisation und Naturverbundenheit.',
    },
    posesIncluded: [
      'Ağaç Duruşu (Vrksasana)',
      'Savaşçı Duruşu (Virabhadrasana)',
      'Dağ Duruşu (Tadasana)',
      'Kuş Kanatları Kol Esnetme',
    ],
    themeColor: 'from-teal-600 to-emerald-800',
    renderVisual: (isModal = false) => (
      <div
        className={`w-full ${
          isModal ? 'h-80 sm:h-96' : 'h-48 sm:h-52'
        } bg-gradient-to-br from-teal-600 via-emerald-700 to-teal-950 relative overflow-hidden rounded-2xl flex flex-col justify-between p-4 text-white shadow-inner select-none`}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full bg-teal-950/70 text-teal-200 text-[10px] font-extrabold border border-teal-400/30 flex items-center gap-1">
            <Sun className="w-3 h-3 text-amber-300" /> Denge & Odaklanma
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
            4. An
          </span>
        </div>

        {/* Center Visual Diagram */}
        <div className="relative flex flex-col items-center justify-center my-auto py-2">
          <div className="w-16 h-20 bg-emerald-500/30 rounded-2xl border-2 border-emerald-300/60 flex flex-col items-center justify-center p-2 backdrop-blur-xs">
            <span className="text-2xl animate-bounce">🌳</span>
            <span className="text-[8px] font-black text-emerald-100 mt-1">Vrksasana</span>
          </div>
          <span className="text-[9px] font-bold text-teal-200 mt-1">
            Köklenme & Göğe Uzama
          </span>
        </div>

        {/* Bottom Card Title */}
        <div className="flex items-center justify-between bg-teal-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-teal-400/30 text-white">
          <span className="text-xs font-black truncate">
            Ağaç Duruşu & Göğe Uzanan Kollar
          </span>
          <span className="text-[10px] font-bold text-emerald-300 bg-teal-900/60 px-2 py-0.5 rounded-md">
            Park Denge
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'online-somatic-session',
    title: {
      tr: 'Online Canlı Seans & Çizim Duygu Kartları',
      en: 'Online Interactive Session & Emotion Sketch Cards',
      de: 'Online-Interaktive Einheit & Emotionskarten',
    },
    category: {
      tr: 'Online & Duygu Regülasyonu',
      en: 'Online & Emotional Regulation',
      de: 'Online & Emotionsregulation',
    },
    location: {
      tr: 'Tablet Ekranı & Çalışma Masası',
      en: 'Tablet Screen & Child Study Desk',
      de: 'Tablet-Bildschirm & Kinderschreibtisch',
    },
    description: {
      tr: 'Tablet üzerinden interaktif canlı yoga buluşması; masada çocukların çizdiği "Korkmuş", "Sevinçli", "Sakin" duygu kartlarıyla somatik duygu farkındalığı ve nefes oyunu.',
      en: 'Interactive live session with emotion reflection cards ("Scared", "Joyful", "Calm") drawn by kids for somatic emotional awareness.',
      de: 'Interaktive Online-Sitzung mit selbstgemalten Emotionskarten zur kindgerechten somatischen Emotionswahrnehmung.',
    },
    pedagogicalBenefit: {
      tr: 'Duyguları bedende hissetme ve adlandırma (somatik duygu regülasyonu), uzaktan etkileşimde odaklanma ve yaratıcı dışavurum.',
      en: 'Somatic emotional labeling, mindfulness across digital spaces, calming anxiety, and expressive art integration.',
      de: 'Somatische Emotionsregulation, Benennung von Gefühlen und kreativer Ausdruck.',
    },
    posesIncluded: [
      'Duygu Yüzü Nefesi',
      'Aslan Duruşu (Simhasana)',
      'Kalp Dokunuşu & Sevgi Meditasyonu',
      'Nefes Balonu Şişirme',
    ],
    themeColor: 'from-violet-600 to-purple-800',
    renderVisual: (isModal = false) => (
      <div
        className={`w-full ${
          isModal ? 'h-80 sm:h-96' : 'h-48 sm:h-52'
        } bg-gradient-to-br from-violet-600 via-purple-700 to-violet-950 relative overflow-hidden rounded-2xl flex flex-col justify-between p-4 text-white shadow-inner select-none`}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full bg-purple-950/70 text-purple-200 text-[10px] font-extrabold border border-purple-400/30 flex items-center gap-1">
            <Heart className="w-3 h-3 text-pink-300" /> Duygu & Somatik Kartlar
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
            5. An
          </span>
        </div>

        {/* Center Visual Diagram */}
        <div className="relative flex items-center justify-around my-auto py-1">
          <div className="w-16 h-12 bg-slate-900 rounded-lg border-2 border-purple-400 flex items-center justify-center shadow-lg">
            <span className="text-[9px] font-black text-purple-200">💻 Live Zoom</span>
          </div>
          <div className="flex flex-col gap-1 text-[8px] font-black">
            <div className="px-2 py-0.5 rounded-md bg-pink-400/90 text-slate-900 shadow">
              😊 Sevinçli
            </div>
            <div className="px-2 py-0.5 rounded-md bg-purple-300 text-slate-900 shadow">
              <span>Sakin & Huzurlu</span>
            </div>
          </div>
        </div>

        {/* Bottom Card Title */}
        <div className="flex items-center justify-between bg-purple-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-400/30 text-white">
          <span className="text-xs font-black truncate">
            Online Bağlantı & Duygu Kartları
          </span>
          <span className="text-[10px] font-bold text-purple-300 bg-purple-900/60 px-2 py-0.5 rounded-md">
            Somatik Farkındalık
          </span>
        </div>
      </div>
    ),
  },
];

export const YogaSectionGallery: React.FC<YogaSectionGalleryProps> = ({
  currentLang,
  isCompact = false,
}) => {
  const [selectedItem, setSelectedItem] = useState<YogaPhotoItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Custom photos state from localStorage and server
  const [customPhotos, setCustomPhotos] = useState<CustomYogaPhotosMap>(() => loadCustomYogaPhotos());

  // Sync with server on initial mount
  useEffect(() => {
    async function syncServerPhotos() {
      try {
        const serverPhotos = await fetchServerYogaPhotosList();
        if (serverPhotos && serverPhotos.length > 0) {
          const current = loadCustomYogaPhotos();
          const updated: CustomYogaPhotosMap = { ...current };
          serverPhotos.forEach((photoId) => {
            updated[photoId] = {
              ...(updated[photoId] || {}),
              imageDataUrl: `/api/yoga-gallery/${photoId}?v=${Date.now()}`,
              objectFit: 'cover',
            };
          });
          saveCustomYogaPhotos(updated);
          setCustomPhotos(updated);
        }
      } catch (err) {
        console.warn('Could not sync yoga photos with server:', err);
      }
    }
    syncServerPhotos();
  }, []);

  // Listen to photo update events
  useEffect(() => {
    const handleUpdate = () => {
      setCustomPhotos(loadCustomYogaPhotos());
    };
    window.addEventListener(YOGA_PHOTOS_UPDATED_EVENT, handleUpdate);
    return () => window.removeEventListener(YOGA_PHOTOS_UPDATED_EVENT, handleUpdate);
  }, []);

  const handleOpenModal = (item: YogaPhotoItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % YOGA_PHOTOS.length;
    setCurrentIndex(nextIdx);
    setSelectedItem(YOGA_PHOTOS[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + YOGA_PHOTOS.length) % YOGA_PHOTOS.length;
    setCurrentIndex(prevIdx);
    setSelectedItem(YOGA_PHOTOS[prevIdx]);
  };

  // Helper to render either uploaded real photo or pedagogical visual
  const renderVisualOrPhoto = (item: YogaPhotoItem, isModal: boolean = false) => {
    const custom = customPhotos[item.id];
    const imageSrc = custom?.imageDataUrl;

    if (imageSrc) {
      return (
        <div
          className={`w-full ${
            isModal ? 'h-80 sm:h-96' : 'h-48 sm:h-52'
          } relative overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center shadow-inner select-none group`}
        >
          <img
            src={imageSrc}
            alt={item.title[currentLang]}
            referrerPolicy="no-referrer"
            style={{
              transform: `scale(${custom?.zoom || 1})`,
              objectFit: custom?.objectFit || 'cover',
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Top Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold border border-white/20 shadow-md">
              {item.category[currentLang]}
            </span>
          </div>

          {/* Bottom Caption Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-6 flex items-center justify-between text-white text-xs">
            <span className="font-bold drop-shadow-sm truncate pr-2">
              {item.title[currentLang]}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white font-black text-[9px] uppercase tracking-wider shadow">
              {currentLang === 'tr' ? 'Seans Fotoğrafı' : currentLang === 'en' ? 'Session Photo' : 'Foto'}
            </span>
          </div>
        </div>
      );
    }
    return item.renderVisual(isModal);
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-100/80">
        <div className="space-y-0.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>
              {currentLang === 'tr' && 'Uygulamalı Yoga Seansları & Duruş Kartları'}
              {currentLang === 'en' && 'Hands-on Yoga Sessions & Posture Cards'}
              {currentLang === 'de' && 'Praxisnahe Yoga-Einheiten & Haltungskarten'}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
            {currentLang === 'tr' && 'Çocuk Yogası Seans Akışı ve Materyalleri'}
            {currentLang === 'en' && 'Kids Yoga Session Flow and Pedagogical Materials'}
            {currentLang === 'de' && 'Kinderyoga-Ablauf und pädagogische Materialien'}
          </h3>
        </div>
      </div>

      {/* Grid of 5 Photo Cards */}
      <div className={`grid ${isCompact ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'} gap-3.5`}>
        {YOGA_PHOTOS.map((item, idx) => {
          const custom = customPhotos[item.id];
          const hasPhoto = !!custom?.imageDataUrl;

          return (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item, idx)}
              className="group relative rounded-2xl bg-white border-2 border-slate-200/90 hover:border-emerald-500 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Visual representation */}
              <div className="relative">
                {renderVisualOrPhoto(item, false)}

                {/* Overlay action on hover */}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div
                    className="w-10 h-10 rounded-full bg-white/95 shadow-lg text-slate-900 opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 flex items-center justify-center"
                    title="Detaylı İncele"
                  >
                    <Maximize2 className="w-5 h-5 text-emerald-800" />
                  </div>
                </div>
              </div>

              {/* Content text */}
              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                    {item.category[currentLang]}
                  </span>
                  {hasPhoto && (
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                      <Check className="w-2.5 h-2.5" /> Fotoğraf
                    </span>
                  )}
                </div>

                <h4 className="text-xs font-black text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                  {item.title[currentLang]}
                </h4>

                <p className="text-[11px] text-slate-600 leading-snug line-clamp-2">
                  {item.description[currentLang]}
                </p>

                <div className="pt-1 border-t border-slate-100 flex flex-wrap gap-1">
                  {item.posesIncluded.slice(0, 2).map((pose, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[9px] font-bold"
                    >
                      🧘 {pose}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Modal when clicking a card */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="space-y-0.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900">
                  {selectedItem.category[currentLang]} • {selectedItem.location[currentLang]}
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {selectedItem.title[currentLang]}
                </h3>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {/* Visual preview (photo or illustration) */}
              <div className="w-full">
                {renderVisualOrPhoto(selectedItem, true)}
              </div>

              {/* Description & Benefits */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {currentLang === 'tr' ? 'Seans Açıklaması' : currentLang === 'en' ? 'Session Description' : 'Einheitsbeschreibung'}
                  </h4>
                  <p className="text-sm text-slate-800 leading-relaxed mt-1">
                    {selectedItem.description[currentLang]}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-black text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>
                      {currentLang === 'tr' ? 'Pedagojik & Bedensel Kazanım' : currentLang === 'en' ? 'Pedagogical & Somatic Benefit' : 'Pädagogischer & somatischer Nutzen'}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-900/90 leading-relaxed">
                    {selectedItem.pedagogicalBenefit[currentLang]}
                  </p>
                </div>

                {/* Postures list */}
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {currentLang === 'tr' ? 'İçerilen Duruşlar & Pratikler' : currentLang === 'en' ? 'Included Postures & Practices' : 'Enthaltene Haltungen'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.posesIncluded.map((p, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200"
                      >
                        🧘 {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Navigation Footer */}
            <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{currentLang === 'tr' ? 'Önceki' : currentLang === 'en' ? 'Previous' : 'Zurück'}</span>
              </button>

              <span className="text-xs font-extrabold text-slate-500">
                {currentIndex + 1} / {YOGA_PHOTOS.length}
              </span>

              <button
                onClick={handleNext}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>{currentLang === 'tr' ? 'Sonraki' : currentLang === 'en' ? 'Next' : 'Weiter'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
