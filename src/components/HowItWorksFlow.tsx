import React, { useState } from 'react';
import { Language } from '../types';
import {
  PhoneCall,
  CalendarCheck,
  Sparkles,
  MessageSquare,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Home,
  CheckCircle2,
  Smile,
  Compass,
} from 'lucide-react';

interface HowItWorksFlowProps {
  currentLang: Language;
  onNavigateTab?: (tab: 'home' | 'programs' | 'about' | 'principles' | 'contact') => void;
}

export const HowItWorksFlow: React.FC<HowItWorksFlowProps> = ({
  currentLang,
  onNavigateTab,
}) => {
  const [activeFormatTab, setActiveFormatTab] = useState<'all' | 'special' | 'studios' | 'bilingual'>('all');

  const content = {
    tr: {
      badge: 'Basit & Şeffaf Süreç',
      title: 'Nasıl İşliyor?',
      subtitle: 'İlk tanışmadan düzenli seanslara kadar 4 adımda net, güvenli ve çocuğa özel bir yol haritası:',
      step1Title: '1. Ücretsiz Ön Görüşme',
      step1Time: '15 Dakika',
      step1Desc: 'Telefon veya online ortamda çocuğunuzun ihtiyaçlarını ve hedeflerinizi konuşuyoruz.',
      step2Title: '2. Bireysel Plan',
      step2Time: 'Çocuğa Özel',
      step2Desc: 'Yaş, ilgi alanı ve duyusal profile uygun format (ev, stüdyo veya online) belirlenir.',
      step3Title: '3. Güvenli Seanslar',
      step3Time: '50 - 60 Dk',
      step3Desc: 'Oyun, somatik hareket ve merak odaklı güvenli pedagojik seanslar başlar.',
      step4Title: '4. Veli Geribildirimi',
      step4Time: 'Düzenli',
      step4Desc: 'Her seans sonu gelişim gözlemleri ve evde uygulanabilir pratik öneriler paylaşılır.',
      formatSectionTitle: 'Program Formatları ve Mekanlar',
      formatSectionSub: 'İhtiyacınıza göre esnek, açık ve net seans seçenekleri:',
      tabAll: 'Tüm Formatlar',
      tabSpecial: 'Özel Gereksinim (Otizm)',
      tabStudios: 'Yoga, Drama, P4C, Duygu',
      tabBilingual: 'İki Dilli Türkçe',
      ctaBtn: 'Hemen 15 Dk Ön Görüşme Planla',
    },
    en: {
      badge: 'Simple & Transparent Process',
      title: 'How It Works',
      subtitle: 'A clear, caring, and tailored 4-step path from first contact to regular sessions:',
      step1Title: '1. Free Consultation',
      step1Time: '15 Minutes',
      step1Desc: 'We discuss your child’s strengths, needs, and goals via phone or video call.',
      step2Title: '2. Tailored Plan',
      step2Time: 'Personalized',
      step2Desc: 'We agree on the best setting (home visit, studio, or online) and rhythm.',
      step3Title: '3. Joyful Sessions',
      step3Time: '50 - 60 Min',
      step3Desc: 'Structured, play- and movement-based developmental sessions begin.',
      step4Title: '4. Parent Feedback',
      step4Time: 'Continuous',
      step4Desc: 'Debrief after each session with actionable play suggestions for home.',
      formatSectionTitle: 'Session Formats & Locations',
      formatSectionSub: 'Clear, transparent delivery options tailored to your family:',
      tabAll: 'All Formats',
      tabSpecial: 'Neurodiversity & Autism',
      tabStudios: 'Yoga, Drama, P4C, Emotions',
      tabBilingual: 'Bilingual Turkish',
      ctaBtn: 'Schedule Free 15-Min Consultation',
    },
    de: {
      badge: 'Transparenter Ablauf',
      title: 'Wie läuft die Begleitung ab?',
      subtitle: 'In 4 klaren Schritten vom Erstkontakt zur regelmäßigen Förderung:',
      step1Title: '1. Kostenloses Erstgespräch',
      step1Time: '15 Minuten',
      step1Desc: 'Telefonisch oder online besprechen wir die Bedürfnisse und Ziele Ihres Kindes.',
      step2Title: '2. Individueller Plan',
      step2Time: 'Passgenau',
      step2Desc: 'Festlegung des passenden Settings (Hausbesuch, Atelier oder Online).',
      step3Title: '3. Fördernde Einheiten',
      step3Time: '50 - 60 Min.',
      step3Desc: 'Spiel-, bewegungs- und beziehungsbasierte pädagogische Begleitung.',
      step4Title: '4. Elterngespräch',
      step4Time: 'Regelmäßig',
      step4Desc: 'Regelmäßiger Austausch mit praxisnahen Impulsen für den Familienalltag.',
      formatSectionTitle: 'Formate & Standorte',
      formatSectionSub: 'Verlässliche und transparente Rahmenbedingungen im Überblick:',
      tabAll: 'Alle Formate',
      tabSpecial: 'Besondere Bedürfnisse (Autismus)',
      tabStudios: 'Yoga, Drama, P4C, Gefühle',
      tabBilingual: 'Türkisch für Mehrsprachige',
      ctaBtn: 'Jetzt 15-Min. Erstgespräch vereinbaren',
    },
  }[currentLang];

  const steps = [
    {
      icon: PhoneCall,
      step: '01',
      title: content.step1Title,
      time: content.step1Time,
      desc: content.step1Desc,
      color: 'from-amber-500/15 to-orange-500/10 border-amber-300 text-amber-900',
      iconColor: 'bg-amber-600 text-white',
    },
    {
      icon: CalendarCheck,
      step: '02',
      title: content.step2Title,
      time: content.step2Time,
      desc: content.step2Desc,
      color: 'from-emerald-500/15 to-teal-500/10 border-emerald-300 text-emerald-900',
      iconColor: 'bg-emerald-600 text-white',
    },
    {
      icon: Sparkles,
      step: '03',
      title: content.step3Title,
      time: content.step3Time,
      desc: content.step3Desc,
      color: 'from-purple-500/15 to-indigo-500/10 border-purple-300 text-purple-900',
      iconColor: 'bg-purple-600 text-white',
    },
    {
      icon: MessageSquare,
      step: '04',
      title: content.step4Title,
      time: content.step4Time,
      desc: content.step4Desc,
      color: 'from-rose-500/15 to-pink-500/10 border-rose-300 text-rose-900',
      iconColor: 'bg-rose-600 text-white',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-900 border border-amber-400/30 text-xs font-bold shadow-2xs">
          <Compass className="w-3.5 h-3.5 text-amber-700" />
          <span>{content.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          {content.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {content.subtitle}
        </p>
      </div>

      {/* 4-Step Interactive Visual Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {steps.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div
              key={idx}
              className={`relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br ${st.color} border-2 backdrop-blur-md shadow-2xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              {/* Step number watermark badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-2xl ${st.iconColor} flex items-center justify-center font-bold shadow-xs`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-black tracking-wider px-2.5 py-1 rounded-full bg-white/80 border border-slate-200 text-slate-700 shadow-2xs">
                  {st.time}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {/* Connecting arrow indicator for desktop (steps 1, 2, 3) */}
              {idx < 3 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-2xs items-center justify-center text-slate-400">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Formats and Locations Summary Cards */}
      <div className="rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-slate-200/80 p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {content.formatSectionTitle}
            </h3>
            <p className="text-xs text-slate-500">
              {content.formatSectionSub}
            </p>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setActiveFormatTab('all')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFormatTab === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {content.tabAll}
            </button>
            <button
              onClick={() => setActiveFormatTab('special')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFormatTab === 'special'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-100/70 hover:bg-amber-100 text-amber-900'
              }`}
            >
              {content.tabSpecial}
            </button>
            <button
              onClick={() => setActiveFormatTab('studios')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFormatTab === 'studios'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-100/70 hover:bg-emerald-100 text-emerald-900'
              }`}
            >
              {content.tabStudios}
            </button>
            <button
              onClick={() => setActiveFormatTab('bilingual')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFormatTab === 'bilingual'
                  ? 'bg-sky-600 text-white'
                  : 'bg-sky-100/70 hover:bg-sky-100 text-sky-900'
              }`}
            >
              {content.tabBilingual}
            </button>
          </div>
        </div>

        {/* 3 Clear Transparent Format Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Format 1: Özel Gereksinim */}
          {(activeFormatTab === 'all' || activeFormatTab === 'special') && (
            <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-200/90 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900">
                    {currentLang === 'tr' ? 'Bireysel • 50 Dk' : currentLang === 'en' ? '1-on-1 • 50 Min' : 'Einzel • 50 Min.'}
                  </span>
                  <Home className="w-4 h-4 text-amber-700" />
                </div>
                <h4 className="text-sm font-black text-amber-950">
                  {currentLang === 'tr' ? 'Özel Gereksinimli Çocuklar (Otizm)' : currentLang === 'en' ? 'Neurodiverse Children (Autism)' : 'Besondere Bedürfnisse (Autismus)'}
                </h4>
                <p className="text-xs text-amber-900/80 leading-relaxed">
                  {currentLang === 'tr'
                    ? 'Birebir seanslar, öğrencinin evinde veya uzmanın evinde gerçekleşir. Az uyaranlı, güvenli ortam sağlanır.'
                    : currentLang === 'en'
                    ? 'One-on-one sessions held at the student’s home or specialist’s home. Calm, low-stimulus environment.'
                    : 'Einzelsitzungen beim Kind zu Hause oder bei der Fachkraft im reizarmen, geschützten Rahmen.'}
                </p>
              </div>
              <div className="pt-2 border-t border-amber-200/80 text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>{currentLang === 'tr' ? 'Ev Ziyareti / Uzmanın Evi' : currentLang === 'en' ? 'Home Visit / Specialist Home' : 'Hausbesuch / Fachkraft'}</span>
              </div>
            </div>
          )}

          {/* Format 2: Yoga, Drama, P4C, Duygu */}
          {(activeFormatTab === 'all' || activeFormatTab === 'studios') && (
            <div className="p-5 rounded-2xl bg-emerald-50/80 border-2 border-emerald-200/90 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-900">
                    {currentLang === 'tr' ? 'Bireysel / Grup • 45-60 Dk' : currentLang === 'en' ? '1-on-1 / Group • 45-60 Min' : 'Einzel / Gruppe • 45-60 Min.'}
                  </span>
                  <Users className="w-4 h-4 text-emerald-700" />
                </div>
                <h4 className="text-sm font-black text-emerald-950">
                  {currentLang === 'tr' ? 'Çocuk Yogası, Drama, P4C & Duygu' : currentLang === 'en' ? 'Kids Yoga, Drama, P4C & Emotions' : 'Kinderyoga, Drama, P4C & Gefühle'}
                </h4>
                <p className="text-xs text-emerald-900/80 leading-relaxed">
                  {currentLang === 'tr'
                    ? 'Yüz yüze, bireysel veya küçük grup olarak stüdyo ortamlarında sunulur. Maksimum 6-8 çocuk.'
                    : currentLang === 'en'
                    ? 'In-person, offered as individual or small group atelier sessions. Max 6-8 children.'
                    : 'Präsenz als Einzelstunde oder Kleingruppe in ausgewählten Ateliers (max. 6-8 Kinder).'}
                </p>
              </div>
              <div className="pt-2 border-t border-emerald-200/80 text-[11px] font-bold text-emerald-900 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>Prenzlauer Berg, Neukölln</span>
              </div>
            </div>
          )}

          {/* Format 3: İki Dilli Türkçe */}
          {(activeFormatTab === 'all' || activeFormatTab === 'bilingual') && (
            <div className="p-5 rounded-2xl bg-sky-50/80 border-2 border-sky-200/90 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-sky-200 text-sky-900">
                    {currentLang === 'tr' ? 'Online / Ev • Bireysel & Grup' : currentLang === 'en' ? 'Online / Home • 1-on-1 & Group' : 'Online / Haus • Einzel & Gruppe'}
                  </span>
                  <Clock className="w-4 h-4 text-sky-700" />
                </div>
                <h4 className="text-sm font-black text-sky-950">
                  {currentLang === 'tr' ? 'İki Dilli Çocuklar İçin Türkçe' : currentLang === 'en' ? 'Turkish for Bilingual Children' : 'Türkisch für Mehrsprachige'}
                </h4>
                <p className="text-xs text-sky-900/80 leading-relaxed">
                  {currentLang === 'tr'
                    ? 'Online (Zoom) veya öğrencinin/uzmanın evinde yüz yüze. Masal, gölge oyunu ve neşeli dil pratiği.'
                    : currentLang === 'en'
                    ? 'Online (Zoom) or in-person at home. Storytelling, shadow puppets, and natural language joy.'
                    : 'Online via Zoom oder vor Ort im Hausbesuch. Lebendige Sprachförderung mit Märchen und Spiel.'}
                </p>
              </div>
              <div className="pt-2 border-t border-sky-200/80 text-[11px] font-bold text-sky-900 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-700" />
                <span>{currentLang === 'tr' ? 'Online veya Öğrenci/Uzman Evi' : currentLang === 'en' ? 'Online or Student/Specialist Home' : 'Online oder Hausbesuch'}</span>
              </div>
            </div>
          )}

        </div>

        {/* Quick CTA */}
        {onNavigateTab && (
          <div className="pt-2 text-center">
            <button
              onClick={() => onNavigateTab('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
            >
              <Smile className="w-4 h-4" />
              <span>{content.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
