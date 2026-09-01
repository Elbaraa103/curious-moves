import { Program } from '../types';

export const PHONE_NUMBER = '+49 176 613 48 348';
export const PHONE_NUMBER_DISPLAY = '0176 613 48348';
export const WHATSAPP_RAW = '4917661348348';
export const EMAIL_ADDRESS = 'dilanakbayir5@gmail.com';
export const FULL_ADDRESS = 'Kattegatstr 7, 13359 Berlin';
export const LOCATION_ADDRESS = 'Kattegatstr 7, 13359 Berlin';
export const EDUCATOR_NAME = 'Dilan Akbayir';

export const PROGRAMS: Program[] = [
  // ==========================================
  // KATEGORİ 0: BU DÖNEM AÇIK OLAN ATÖLYELER (SEASONAL WORKSHOPS)
  // ==========================================
  {
    id: 'yeni-baslangiclar',
    title: {
      tr: 'Yeni Başlangıçlar',
      en: 'New Beginnings',
      de: 'Neue Anfänge',
    },
    subtitle: {
      tr: "Kita'ya Uyum (3-4 Yaş) & Okula Geçiş (5-6 Yaş) Pedagojik Atölyesi",
      en: 'Daycare Adaptation (3-4 yrs) & School Transition (5-6 yrs)',
      de: 'Kita-Eingewöhnung (3-4 J.) & Schulübergang (5-6 J.)',
    },
    category: 'seasonal-workshop',
    targetGroup: 'children',
    ageRange: '3 - 6 Yaş',
    deliveryMode: 'berlin',
    location: '📍 Berlin (Mekan Yakında Duyurulacak)',
    languages: ['Türkçe', 'English', 'Deutsch'],
    summary: {
      tr: "Kita'ya veya okula yeni başlayan çocuklar için, ayrılık kaygısını hafifleten ve güven inşa eden pedagojik destek atölyesi.",
      en: 'A pedagogical support workshop for children starting daycare or school, easing separation anxiety and building deep trust.',
      de: 'Pädagogischer Förderworkshop für Kinder beim Kita- oder Schulstart zur Linderung von Trennungsängsten und zum Aufbau von Sicherheit.',
    },
    fullDescription: {
      tr: `Kita'ya veya okula yeni başlayan ya da bu geçiş sürecinde zorlanan çocuğunuz mu var? Eylül ayında iki farklı yaş grubuna özel atölyeler düzenliyorum — ayrılık kaygısını hafifleten, güven inşa eden ve yeni bir döneme yumuşak bir geçiş sağlayan pedagojik destek programları sunuyorum.

• Kita'ya Uyum — 3-4 yaş grubu
• Okula Geçiş — 5-6 yaş grubu

Her hafta, alanında önemli bir kitap eşliğinde haftanın temasına uygun grup çalışması yürütüyorum. Drama ve doğaçlamadan faydalanarak, gevşetici beden hareketleri, duygu farkındalığı çalışmaları ve çocukların kendilerini grup içinde özgürce ifade edebilecekleri bir alan sunuyorum; hareket, paylaşım ve duygu bir arada.

⏱️ 50 dakika, haftada 1 seans
📝 Her hafta velilere özel geri bildirim
📅 Aylık kayıt`,
      en: `Is your child starting daycare or school, or finding this transition challenging? In September, I am holding specialized workshops for two distinct age groups — providing pedagogical support to ease separation anxiety, build confidence, and ensure a gentle transition.

• Kita Adaptation — 3-4 age group
• School Transition — 5-6 age group

Every week, guided by an inspiring children’s book, we explore the weekly theme through drama and improvisation, relaxing body movement, emotional literacy, and a nurturing space where children express themselves freely — movement, sharing, and emotion together.

⏱️ 50 minutes, 1 session per week
📝 Weekly individualized parent feedback
📅 Monthly registration`,
      de: `Steht Ihr Kind vor dem Kita- oder Schuleintritt oder fällt ihm dieser Übergang schwer? Im September leite ich gezielte Workshops für zwei Altersgruppen — zur sanften Bewältigung von Trennungsängsten und zum Aufbau von Sicherheit und Selbstvertrauen.

• Kita-Eingewöhnung — 3-4 Jahre
• Schulübergang — 5-6 Jahre

Jede Woche widmen wir uns anhand eines wertvollen Kinderbuchs dem Wochenthema mit kreativem Theater, entspannenden Körperübungen, Gefühlswahrnehmung und einem geschützten Gruppenraum für freien Ausdruck — Bewegung, Austausch und Emotion vereint.

⏱️ 50 Minuten, 1 Einheit pro Woche
📝 Wöchentliches persönliches Elterngespräch
📅 Monatliche Anmeldung`,
    },
    outcomes: {
      tr: [
        'Ayrılık kaygısını hafifletme ve yeni ortamlara güvenle uyum sağlama',
        'Her hafta nitelikli bir kitap eşliğinde tema odaklı drama ve doğaçlama',
        'Gevşetici beden hareketleri, nefes ve duygu farkındalığı çalışmaları',
        'Kendini akran grubu içinde özgürce, neşeyle ve güvenle ifade etme',
      ],
      en: [
        'Easing separation anxiety and building grounded trust in new environments',
        'Weekly thematic creative drama and improv based on selected literature',
        'Calming somatic movements, gentle breath, and emotional literacy',
        'Free, joyful, and confident self-expression within a peer group',
      ],
      de: [
        'Linderung von Trennungsängsten und sicheres Ankommen in neuen Räumen',
        'Wöchentlich themenbezogenes Theater und Improvisation mit Kinderbüchern',
        'Entspannende Körperübungen, Atemwahrnehmung und Gefühlsbildung',
        'Freier, freudiger und selbstbewusster Ausdruck in der Kindergruppe',
      ],
    },
    formatOptions: {
      tr: 'Grup Atölyesi (50 Dk, haftada 1 seans) • Her hafta veli geribildirimi • Aylık Kayıt (Mekan yakında duyurulacak)',
      en: 'Group Workshop (50 Min, 1x weekly) • Weekly parent debrief • Monthly Registration (Location announced soon)',
      de: 'Gruppen-Workshop (50 Min., 1x wöchentlich) • Wöchentliches Elterngespräch • Monatliche Anmeldung (Ort wird bekannt gegeben)',
    },
    formatBadge: {
      tr: 'Grup Atölyesi (50 Dk) • Aylık Kayıt',
      en: 'Group Workshop (50 Min) • Monthly Reg.',
      de: 'Gruppen-Workshop (50 Min.) • Monatlich',
    },
    sessionType: 'group',
    isGroup: true,
    isSeasonalWorkshop: true,
    illustrationType: 'yeni-baslangiclar',
    iconName: 'DoorOpen',
    colorTheme: 'orange',
  },
  {
    id: 'deneyerek-guclen',
    title: {
      tr: 'Deneyerek Güçlen',
      en: 'Empowered by Trying',
      de: 'Mutig Ausprobieren',
    },
    subtitle: {
      tr: 'Özgüven, Cesaret & Birlikte Başarmanın Gücü (8-10 Yaş)',
      en: 'Self-Confidence, Courage & Collaborative Strength (8-10 yrs)',
      de: 'Selbstvertrauen, Mut & Gemeinschaftsstärke (8-10 J.)',
    },
    category: 'seasonal-workshop',
    targetGroup: 'children',
    ageRange: '8 - 10 Yaş',
    deliveryMode: 'berlin',
    location: '📍 Berlin (Mekan Yakında Duyurulacak)',
    languages: ['Türkçe', 'English', 'Deutsch'],
    summary: {
      tr: 'Çocukların yeni beceriler denemeye cesaret ettiği, kendi güçlü yönlerini keşfettiği bir atölye.',
      en: 'A workshop where children dare to try new skills without fear of mistakes and discover their unique inner strengths.',
      de: 'Ein Workshop, in dem Kinder den Mut finden, Neues auszuprobieren, eigene Stärken zu entdecken und im Team zu wachsen.',
    },
    fullDescription: {
      tr: `Bu yaşta çocuklar yeni beceriler denemeye, akranlarıyla kendilerini kıyaslamaya ve "ben bunu yapabilir miyim?" sorusuyla daha sık karşılaşmaya başlar. Bu atölyede çocukların hata yapma korkusu olmadan denemeye cesaret etmelerini, kendi güçlü yönlerini fark etmelerini ve grup içinde birlikte başarmanın tadını çıkarmalarını destekliyorum.

Her hafta bir kitap eşliğinde, drama ve grup çalışmalarıyla farklı bir temaya odaklanıyoruz:

⏱️ 50 dakika, haftada 1 seans
📝 Her hafta velilere özel geri bildirim
📅 Aylık kayıt`,
      en: `At this age, children begin trying new skills, comparing themselves with peers, and frequently asking "Can I really do this?". In this workshop, I support children to dare trying without fear of mistakes, recognize their personal strengths, and enjoy succeeding together in a team.

Every week, guided by a meaningful book, we explore a new theme through drama and cooperative group activities:

⏱️ 50 minutes, 1 session per week
📝 Weekly individualized parent feedback
📅 Monthly registration`,
      de: `In diesem Alter beginnen Kinder, neue Fähigkeiten zu erproben, sich mit Gleichaltrigen zu vergleichen und sich zu fragen: „Schaffe ich das?“. In diesem Workshop ermutige ich Kinder, ohne Angst vor Fehlern Neues zu wagen, eigene Stärken zu spüren und den Zusammenhalt in der Gruppe zu erleben.

Jede Woche widmen wir uns anhand eines Buches einem neuen Thema mit Theater und Gruppenübungen:

⏱️ 50 Minuten, 1 Einheit pro Woche
📝 Wöchentliches persönliches Elterngespräch
📅 Monatliche Anmeldung`,
    },
    outcomes: {
      tr: [
        'Hata yapma kaygısını aşma ve yeni şeyler deneme cesareti',
        'Kendi güçlü yönlerini, becerilerini ve öz-değerini fark etme',
        'Her hafta bir kitap eşliğinde yaratıcı drama ve grup dinamikleri',
        'Akranlarla iş birliği, dayanışma ve birlikte başarmanın keyfi',
      ],
      en: [
        'Overcoming fear of mistakes and building courage to try new challenges',
        'Recognizing personal strengths, unique abilities, and self-worth',
        'Weekly book-guided creative drama and cooperative group dynamics',
        'Peer collaboration, solidarity, and the joy of collective achievement',
      ],
      de: [
        'Überwindung von Fehlerangst und Mut zu neuen Herausforderungen',
        'Erkennen der eigenen Stärken, Fähigkeiten und des Selbstwerts',
        'Wöchentlich buchbegleitetes Theater und kooperative Gruppendynamik',
        'Zusammenhalt, Empathie und Freude am gemeinsamen Gelingen',
      ],
    },
    formatOptions: {
      tr: 'Grup Atölyesi (50 Dk, haftada 1 seans) • Her hafta veli geribildirimi • Aylık Kayıt (Mekan yakında duyurulacak)',
      en: 'Group Workshop (50 Min, 1x weekly) • Weekly parent debrief • Monthly Registration (Location announced soon)',
      de: 'Gruppen-Workshop (50 Min., 1x wöchentlich) • Wöchentliches Elterngespräch • Monatliche Anmeldung (Ort wird bekannt gegeben)',
    },
    formatBadge: {
      tr: 'Grup Atölyesi (50 Dk) • Aylık Kayıt',
      en: 'Group Workshop (50 Min) • Monthly Reg.',
      de: 'Gruppen-Workshop (50 Min.) • Monatlich',
    },
    sessionType: 'group',
    isGroup: true,
    isSeasonalWorkshop: true,
    illustrationType: 'deneyerek-guclen',
    iconName: 'Users',
    colorTheme: 'teal',
  },

  // ==========================================
  // KATEGORİ 1: BİREYSEL PROGRAMLAR
  // ==========================================
  {
    id: 'autism-support',
    title: {
      tr: 'Özel Gereksinimi Olan Çocuklar İçin Pedagojik Destek',
      en: 'Pedagogical Support for Children with Special Needs',
      de: 'Pädagogische Unterstützung für Kinder mit Förderbedarf',
    },
    subtitle: {
      tr: 'Yapılandırılmış Oyun, Duyusal Uyum & Bireysel Destek',
      en: 'Structured Play, Sensory Calming & Individual Support',
      de: 'Strukturiertes Spiel, sensorische Entlastung & Einzelförderung',
    },
    category: 'pedagogy',
    targetGroup: 'children',
    ageRange: '3 - 8 Yaş',
    deliveryMode: 'berlin',
    location: '📍 Öğrencinin veya Uzmanın Evinde (Berlin)',
    languages: ['Türkçe', 'English', 'Deutsch'],
    summary: {
      tr: 'Özel gereksinimi olan çocuklara birebir yapılandırılmış oyun, duyusal uyum ve şefkatli bireysel pedagojik destek sunuyorum.',
      en: 'One-on-one structured play, sensory regulation, and warm individualized pedagogical support for children with special needs.',
      de: 'Spielbasierte pädagogische Einzelförderung, sensorische Entlastung und individuelle Begleitung für Kinder mit Förderbedarf.',
    },
    fullDescription: {
      tr: 'Her çocuğun nörotipine, duyusal profilini ve özel ilgi alanlarını merkeze alan bireyselleştirilmiş bir pedagojik akış kurguluyorum. Reizarm (az uyaranlı), güvenli ve tahmin edilebilir bir ortamda; yapılandırılmış oyunlar ve duyusal uyum stratejileriyle çocuğun hazırbulunuşluğuna göre iletişim köprüleri kuruyorum. Seanslar Berlin’de öğrencinin veya uzmanın evinde, düzenli veli geribildirimleriyle yürütülür. (Not: Tıbbi teşhis/tedavi içermez, pedagojik gelişimsel destektir).',
      en: 'Every session respects the child’s individual neurotype and sensory profile. In a calm, low-stimulus environment, I co-create playful communication loops and sensory grounding tailored to each child’s pace. Accompanied by continuous parent feedback.',
      de: 'Jede Einheit orientiert sich am sensorischen Profil und den Stärken des Kindes. In einem geschützten, reizarmen Rahmen stärke ich Interaktion, Orientierung und Selbstwirksamkeit im eigenen Tempo des Kindes.',
    },
    outcomes: {
      tr: [
        'Yapılandırılmış oyunla iletişim, jestler ve karşılıklı etkileşimde doğal artış',
        'Duyusal aşırı yüklenmelerde sakinleştirici ve uyum sağlayıcı stratejiler',
        'Günlük rutinlere, yönergelere ve ortam geçişlerine daha rahat uyum',
        'Ebeveynler için evde uygulanabilir duyusal ve pedagojik oyun rehberliği',
      ],
      en: [
        'Natural expansion of eye contact, gestures, and reciprocal interaction',
        'Co-regulation and calming strategies for sensory overstimulation',
        'Smoother transitions between daily tasks and environments',
        'Actionable play routines and ongoing developmental guidance for parents',
      ],
      de: [
        'Förderung von Blickkontakt, Abwechseln und wechselseitiger Kommunikation',
        'Co-Regulations- und Beruhigungsstrategien bei Reizüberflutung',
        'Mehr Sicherheit und Gelassenheit bei täglichen Übergängen',
        'Konkrete spielpädagogische Impulse für den Familienalltag',
      ],
    },
    formatOptions: {
      tr: 'Bireysel Seans (50 dakika), öğrencinin evinde veya uzmanın evinde gerçekleşir. Seans sonu 10 dk veli geribildirimi içerir.',
      en: 'Individual 1-on-1 session (50 minutes), at student’s or specialist’s home. Includes 10-min parent debrief.',
      de: 'Einzelsitzung (50 Minuten), beim Kind zu Hause oder bei der Fachkraft. Inklusive 10 Min. Elterngespräch.',
    },
    formatBadge: {
      tr: 'Bireysel (50 Dk) • Öğrencinin / Uzmanın Evinde',
      en: '1-on-1 (50 Min) • Student / Specialist Home',
      de: 'Einzel (50 Min.) • Hausbesuch / Fachkraft',
    },
    sessionType: 'individual',
    iconName: 'Puzzle',
    colorTheme: 'amber',
  },
  {
    id: 'bilingual-turkish-club',
    title: {
      tr: 'Eğlenceli Türkçe',
      en: 'Playful Turkish',
      de: 'Spielerisches Türkisch',
    },
    subtitle: {
      tr: 'Masallar & Oyun Temelli İki Dillilik Desteği',
      en: 'Tales & Play-Based Bilingualism Support',
      de: 'Märchen & spielbasierte Mehrsprachigkeitsförderung',
    },
    category: 'language',
    targetGroup: 'children',
    ageRange: '5 - 10 Yaş',
    deliveryMode: 'berlin',
    location: '📍 Online veya Öğrencinin / Uzmanın Evinde (Berlin)',
    languages: ['Türkçe'],
    summary: {
      tr: 'Masallar, dil oyunları ve canlandırmalarla iki dilli çocukların Türkçeyle neşeli, doğal ve akıcı bir bağ kurmalarını sağlıyorum.',
      en: 'Fostering joyful fluency, storytelling pride, and cultural belonging for bilingual children through tales, language games, and playful storytelling.',
      de: 'Spielerische Förderung des freien türkischen Sprachgebrauchs durch Märchen, Sprachspiele und kreative Dialoge für mehrsprachige Kinder in Berlin.',
    },
    fullDescription: {
      tr: 'Ezbere dayalı gramer yerine masallar, tekerlemeler, dil oyunları, yaratıcı hikaye anlatımı ve canlandırmalar kullanıyorum. Deneyimli bir eğitmen ve uzman olarak çocukların Türkçeyi bir okul ödevi olarak değil; neşeyle ürettikleri yaşayan bir kültür ve zengin düşünce aracı olarak deneyimlemelerini sağlıyorum.',
      en: 'Moving beyond rote grammar, I use fairy tales, rhymes, interactive language games, and imaginative storytelling. Children experience Turkish not as homework, but as an exciting medium of creative identity.',
      de: 'Ohne Leistungsdruck: Mit Märchenwelten, Reimen, interaktiven Sprachspielen und kreativem Ausdruck erleben Kinder Türkisch als lebendige, bereichernde Sprache.',
    },
    outcomes: {
      tr: [
        'Masallar ve oyunlarla doğal, akıcı konuşma ve zengin kelime hazinesi',
        'Yaşa uygun kavramsal düşünme ve Türkçe anlama/anlatım becerisi',
        'İki dillilik ve çok kültürlü kimlikle barışık güçlü bir özgüven',
        'Berlin’de Türkçeyi yaşayan, eğlenceli bir dil olarak deneyimleme',
      ],
      en: [
        'Natural conversational fluency, enriched vocabulary, and clear diction',
        'Age-appropriate literacy and bilingual cognitive agility',
        'Self-confident pride in multicultural identity and language heritage',
        'Experiencing Turkish as a joyful, living language in Berlin',
      ],
      de: [
        'Flüssiges freies Sprechen, großer Wortschatz und sichere Aussprache',
        'Altersgemäße Lese- und Sprachfreude ohne Leistungsdruck',
        'Selbstbewusste Identifikation mit der eigenen Mehrsprachigkeit',
        'Türkisch als lebendige und bereichernde Sprache im Berliner Alltag',
      ],
    },
    formatOptions: {
      tr: 'Bireysel seans (50 dk), online veya öğrencinin/uzmanın evinde gerçekleşir. Düzenli veli geribildirimi içerir.',
      en: 'Individual 1-on-1 session (50 min), online or at student’s/specialist’s home. Includes regular parent feedback.',
      de: 'Einzelsitzung (50 Min.), online oder beim Kind zu Hause / bei Fachkraft. Inklusive regelmäßigem Elterngespräch.',
    },
    formatBadge: {
      tr: 'Bireysel (50 Dk) • Online / Ev Ziyareti',
      en: '1-on-1 (50 Min) • Online / Home Visit',
      de: 'Einzel (50 Min.) • Online / Hausbesuch',
    },
    sessionType: 'individual',
    illustrationType: 'eglenceli-turkce',
    iconName: 'BookOpen',
    colorTheme: 'sky',
  },

  // ==========================================
  // KATEGORİ 2: GRUP ÇALIŞMALARI
  // ==========================================
  {
    id: 'holistic-yoga-breath',
    title: {
      tr: 'Çocuk Yogası',
      en: 'Kids Yoga',
      de: 'Kinderyoga',
    },
    subtitle: {
      tr: 'Beden Farkındalığı, Nefes & Sakinlik',
      en: 'Body Awareness, Breath & Calmness',
      de: 'Körpergefühl, Atem & innere Ruhe',
    },
    category: 'yoga',
    targetGroup: 'children',
    ageRange: '4 - 8 Yaş',
    deliveryMode: 'berlin',
    location: '📍 Prenzlauer Berg, Neukölln',
    languages: ['Türkçe', 'English', 'Deutsch'],
    summary: {
      tr: 'Eğlenceli yoga duruşları, somatik hareketler ve diyafram nefesiyle çocukların beden farkındalığını, dengesini ve içsel sakinliğini geliştiriyorum.',
      en: 'Nurturing body awareness, balance, diaphragmatic breathing, and inner calm through playful yoga postures and movement.',
      de: 'Förderung von Körperbewusstsein, Haltungsgesundheit, Atemkraft und innerer Ruhe durch spielerisches Kinderyoga.',
    },
    fullDescription: {
      tr: 'Günlük koşturmaca ve okul temposunun getirdiği bedensel gerginliklere karşı güvenli ve neşeli bir hareket alanı açıyorum. Çocuklar diyafram nefesiyle otonom sinir sistemlerini dengelemeyi, beden sinyallerini dinlemeyi ve gevşeme teknikleriyle sakinleşmeyi öğrenirler.',
      en: 'Counteracting prolonged sitting, screen fatigue, and school pressure through dynamic flow, diaphragmatic breathing, and guided body scans. Fosters grounded self-trust and somatic awareness.',
      de: 'Ein gesunder Ausgleich zu langem Sitzen, digitaler Reizüberflutung und schulischem Druck. Kinder erlernen bewährte Atem- und Körperübungen zur inneren Zentrierung.',
    },
    outcomes: {
      tr: [
        'Sağlıklı postür, omurga esnekliği, denge ve bedensel koordinasyon',
        'Gerginlik ve stres anlarında uygulanabilir diyafram nefes teknikleri',
        'Odaklanma, dikkat toparlama ve derin dinlenme kapasitesi',
        'Beden farkındalığı, öz-şefkat ve içsel sakinlik',
      ],
      en: [
        'Postural health, spinal mobility, balance, and fine motor coordination',
        'Actionable breath tools for tension and stress relief',
        'Enhanced attentional focus and capacity for restorative rest',
        'Positive body relationship, self-compassion, and inner grounding',
      ],
      de: [
        'Gesunde Körperhaltung, Beweglichkeit und koordinative Fähigkeiten',
        'Wirksame Atemtechniken bei Unruhe und Anspannung',
        'Gesteigerte Konzentrationsfähigkeit und regenerative Entspannung',
        'Positives Körpergefühl und innere Ausgeglichenheit',
      ],
    },
    formatOptions: {
      tr: 'Küçük grup atölyesi (45-60 dk, maks. 6 çocuk). Prenzlauer Berg ve Neukölln stüdyolarında gerçekleşir.',
      en: 'Small group workshop (45-60 min, max 6 children). Hosted in Prenzlauer Berg and Neukölln studios.',
      de: 'Kleingruppen-Workshop (45-60 Min., max. 6 Kinder). In Studios in Prenzlauer Berg und Neukölln.',
    },
    formatBadge: {
      tr: 'Grup Atölyesi (45-60 Dk) • Prenzlauer Berg, Neukölln',
      en: 'Group Workshop (45-60 Min) • Prenzlauer Berg, Neukölln',
      de: 'Gruppen-Workshop (45-60 Min.) • Prenzlauer Berg, Neukölln',
    },
    sessionType: 'group',
    iconName: 'Sparkles',
    colorTheme: 'emerald',
  },
  {
    id: 'emotion-play-drama',
    title: {
      tr: 'Duygu, Oyun ve Drama Atölyesi',
      en: 'Emotion, Play and Drama Workshop',
      de: 'Gefühls-, Spiel- und Theaterwerkstatt',
    },
    subtitle: {
      tr: 'Duygu Tanıma, Doğaçlama & Kendini İfade Etme',
      en: 'Emotion Recognition, Improvisation & Self-Expression',
      de: 'Gefühle erkennen, Improvisation & freier Ausdruck',
    },
    category: 'drama',
    targetGroup: 'children',
    ageRange: '4 - 8 Yaş',
    deliveryMode: 'berlin',
    location: '📍 Prenzlauer Berg, Neukölln',
    languages: ['Türkçe', 'English', 'Deutsch'],
    summary: {
      tr: 'Duygu kartları, yaratıcı tiyatro oyunları ve doğaçlama canlandırmalarla çocukların duygularını tanımasını ve kendilerini özgüvenle ifade etmesini sağlıyorum.',
      en: 'Empowering children to recognize emotions, improvise playfully, and express themselves with confidence through drama and symbolic games.',
      de: 'Gefühle spielerisch erkennen, Rollenspiele und Theaterimprovisation für lebendigen, selbstbewussten Ausdruck und soziales Miteinander.',
    },
    fullDescription: {
      tr: 'Çocuklar duygu kartları, sembolik oyunlar, rol canlandırmaları ve tiyatro doğaçlamalarıyla hem kendi hislerini tanır hem de akranlarının bakış açılarını anlar. Şefkatli bir ortamda sahne çekingenliğini aşar, büyük duyguları adlandırır, eş-düzenleme (co-regulation) yaşar ve kendini özgürce ifade eder.',
      en: 'Using emotion cards, symbolic play, role-play scenarios, and theatrical improv, children explore their own feelings while understanding peer perspectives. They overcome shyness and learn safe ways to articulate emotions.',
      de: 'Mit Gefühlskarten, Symbolspiel, Rollenspielen und Theaterimprovisation erforschen Kinder ihre eigenen Gefühle und die Perspektiven anderer. Sie überwinden Schüchternheit und lernen, Emotionen frei und sicher auszudrücken.',
    },
    outcomes: {
      tr: [
        'Duyguları tanıma, adlandırma ve bedensel hislerle eşleştirme',
        'Doğaçlama tiyatro oyunlarıyla topluluk önünde kendini rahatça ifade etme',
        'Akranlar arasında empati, aktif dinleme ve sağlıklı sınırlar koyabilme',
        'Yaratıcı canlandırmalarla özgüven ve sosyal uyum kazanımı',
      ],
      en: [
        'Recognizing, naming, and somatic grounding of diverse emotions',
        'Overcoming performance anxiety and freely speaking in front of peers',
        'Peer empathy, active listening, and healthy personal boundaries',
        'Self-confidence and social adaptability through creative dramatization',
      ],
      de: [
        'Gefühle bewusst erkennen, benennen und körperlich wahrnehmen',
        'Hemmungen abbauen und vor der Gruppe frei und mutig sprechen',
        'Empathie für Gleichaltrige, aktives Zuhören und gesunde Grenzen',
        'Stärkung von Selbstwertgefühl und sozialer Kompetenz im Spiel',
      ],
    },
    formatOptions: {
      tr: 'Küçük grup atölyesi (60 dk, maks. 6-8 çocuk). Prenzlauer Berg ve Neukölln stüdyolarında gerçekleşir.',
      en: 'Small group workshop (60 min, max 6-8 children). Hosted in Prenzlauer Berg and Neukölln studios.',
      de: 'Kleingruppen-Workshop (60 Min., max. 6-8 Kinder). In Studios in Prenzlauer Berg und Neukölln.',
    },
    formatBadge: {
      tr: 'Grup Atölyesi (60 Dk) • Prenzlauer Berg, Neukölln',
      en: 'Group Workshop (60 Min) • Prenzlauer Berg, Neukölln',
      de: 'Gruppen-Workshop (60 Min.) • Prenzlauer Berg, Neukölln',
    },
    sessionType: 'group',
    iconName: 'HeartHandshake',
    colorTheme: 'rose',
  },
  {
    id: 'p4c-philosophy',
    title: {
      tr: 'Çocuklar İçin Felsefe (P4C)',
      en: 'Philosophy for Children (P4C)',
      de: 'Philosophieren mit Kindern (P4C)',
    },
    subtitle: {
      tr: 'Soruşturma, Tartışma & Muhakeme Becerisi',
      en: 'Inquiry, Discussion & Reasoning Skills',
      de: 'Gemeinsames Fragen, Diskussion & Urteilskraft',
    },
    category: 'p4c',
    targetGroup: 'children',
    ageRange: '8 - 10 Yaş',
    deliveryMode: 'berlin',
    location: '📍 Prenzlauer Berg, Neukölln',
    languages: ['Türkçe', 'English', 'Deutsch'],
    summary: {
      tr: 'Hikayeler ve felsefi sorular etrafında soruşturma çemberleri kurarak çocukların eleştirel düşünme, tartışma ve muhakeme becerilerini geliştiriyorum.',
      en: 'Cultivating critical thinking, reasoned discussion, and collaborative inquiry through engaging P4C philosophical circles.',
      de: 'Förderung von Urteilskraft, kritischem Denken und wertschätzender Diskussionskultur durch philosophische Gesprächskreise mit Kindern.',
    },
    fullDescription: {
      tr: 'Felsefe (P4C) çemberinde çocuklar "Adalet nedir?", "Cesaret ne zaman gerekir?", "Doğruluk ve gerçeklik aynı şey midir?" gibi büyük sorular etrafında bir araya gelir. Birbirlerinin sözünü kesmeden dinlemeyi, argüman kurmayı, karşıt fikirlere saygı duymayı ve kendi muhakemelerine güvenmeyi deneyimlerler.',
      en: 'In P4C circles, children gather around questions like "What is fairness?", "When does courage matter?", and "How do perspectives differ?". They practice active listening, constructing sound arguments, honoring diversity, and trusting their own reasoned thinking.',
      de: 'Im P4C-Gesprächskreis widmen sich Kinder Fragen wie „Was ist Gerechtigkeit?“, „Wann braucht man Mut?“ oder „Was bedeutet Wahrheit?“. Sie lernen aktives Zuhören, Argumentieren und respektvolles Reflektieren im Dialog.',
    },
    outcomes: {
      tr: [
        'Felsefi soruşturma ile eleştirel, yaratıcı ve özenli (caring) düşünme',
        'Argüman kurma, gerekçelendirme ve mantıklı muhakeme yeteneği',
        'Farklı görüşlere saygı, aktif dinleme ve demokratik tartışma kültürü',
        'Fikirlerini topluluk içinde cesaretle ve açıklıkla ifade etme',
      ],
      en: [
        'Developing critical, creative, and caring thinking frameworks',
        'Formulating arguments, reasoning, and logical articulation',
        'Honoring diverse viewpoints, active listening, and democratic culture',
        'Expressing personal insights courageously and clearly in a group',
      ],
      de: [
        'Kritisches, kreatives und wertschätzendes Denken im Austausch',
        'Begründen von Thesen, logische Urteilskraft und Argumentationsfreude',
        'Respekt für Gegenpositionen, aktives Zuhören und demokratische Haltung',
        'Freies, mutiges Artikulieren eigener Gedanken in der Gruppe',
      ],
    },
    formatOptions: {
      tr: 'Küçük grup felsefe çemberi (60 dk, maks. 6-8 çocuk). Prenzlauer Berg ve Neukölln stüdyolarında gerçekleşir.',
      en: 'Small group P4C inquiry circle (60 min, max 6-8 children). Hosted in Prenzlauer Berg and Neukölln studios.',
      de: 'Philosophischer Gesprächskreis in Kleingruppe (60 Min., max. 6-8 Kinder). In Prenzlauer Berg und Neukölln.',
    },
    formatBadge: {
      tr: 'Grup Çemberi (60 Dk) • Prenzlauer Berg, Neukölln',
      en: 'Group Circle (60 Min) • Prenzlauer Berg, Neukölln',
      de: 'Gruppendialog (60 Min.) • Prenzlauer Berg, Neukölln',
    },
    sessionType: 'group',
    iconName: 'Theater',
    colorTheme: 'purple',
  },
];
