import React from 'react';

interface IllustrationProps {
  className?: string;
  title?: string;
}

export const YeniBaslangiclarIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-48 sm:h-52',
}) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#E8795A] to-[#D96B4C] flex flex-col items-center justify-between select-none ${className}`}>
      {/* Top Title Bar */}
      <div className="w-full pt-3 pb-1 text-center z-10">
        <span className="text-[13px] sm:text-sm font-black tracking-wider text-white/95 uppercase drop-shadow-xs font-sans">
          YENİ BAŞLANGIÇLAR
        </span>
      </div>

      {/* SVG Doorway & Welcoming Group Scene */}
      <svg
        viewBox="0 0 400 260"
        className="w-full h-full object-contain -mt-1"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9583B" />
            <stop offset="15%" stopColor="#D96B4C" />
            <stop offset="85%" stopColor="#D96B4C" />
            <stop offset="100%" stopColor="#C9583B" />
          </linearGradient>

          <linearGradient id="roomLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2DE" />
            <stop offset="60%" stopColor="#FFE5C4" />
            <stop offset="100%" stopColor="#FCD8A8" />
          </linearGradient>

          <linearGradient id="curtainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA685" />
            <stop offset="100%" stopColor="#F08365" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Door Frame / Wall */}
        <rect x="0" y="0" width="400" height="260" fill="url(#wallGradient)" />

        {/* Door Opening with Warm Sunlight */}
        <rect x="65" y="0" width="270" height="260" rx="4" fill="url(#roomLight)" />

        {/* Top Arch Curtains */}
        <path
          d="M 65 0 Q 200 45 335 0 L 335 30 Q 200 65 65 30 Z"
          fill="#F58B6E"
        />

        {/* Left Drapery Curtain */}
        <path
          d="M 65 0 C 110 50 115 110 75 220 L 65 220 Z"
          fill="url(#curtainGrad)"
          opacity="0.95"
        />
        {/* Right Drapery Curtain */}
        <path
          d="M 335 0 C 290 50 285 110 325 220 L 335 220 Z"
          fill="url(#curtainGrad)"
          opacity="0.95"
        />

        {/* Cute Bunny Peeking in the background */}
        <g transform="translate(186, 65)">
          {/* Ears */}
          <ellipse cx="6" cy="4" rx="4" ry="15" fill="#E2D9D2" transform="rotate(-10 6 4)" />
          <ellipse cx="6" cy="4" rx="2" ry="11" fill="#FCA5A5" transform="rotate(-10 6 4)" />
          <ellipse cx="22" cy="4" rx="4" ry="15" fill="#E2D9D2" transform="rotate(10 22 4)" />
          <ellipse cx="22" cy="4" rx="2" ry="11" fill="#FCA5A5" transform="rotate(10 22 4)" />
          {/* Head */}
          <circle cx="14" cy="20" r="12" fill="#E2D9D2" />
          {/* Eyes & Nose */}
          <circle cx="10" cy="19" r="1.5" fill="#374151" />
          <circle cx="18" cy="19" r="1.5" fill="#374151" />
          <polygon points="14,22 12.5,20.5 15.5,20.5" fill="#F43F5E" />
          <path d="M 12 24 Q 14 26 16 24" stroke="#4B5563" strokeWidth="1" fill="none" />
        </g>

        {/* Group of Smiling Welcoming Children Inside Room */}
        {/* Child 1 (Left Girl with orange headband) */}
        <g transform="translate(100, 115)">
          {/* Body/Shirt */}
          <path d="M 12 35 C 10 25 35 25 33 35 L 37 68 L 8 68 Z" fill="#FBBF24" />
          {/* Arms */}
          <path d="M 10 32 Q 0 45 6 55" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
          <circle cx="6" cy="55" r="3.5" fill="#FCD34D" />
          {/* Head & Hair */}
          <circle cx="22" cy="16" r="14" fill="#E5A073" />
          <path d="M 8 16 C 8 4 36 4 36 16 C 36 10 32 6 22 6 C 12 6 8 10 8 16 Z" fill="#92400E" />
          {/* Headband */}
          <path d="M 8 13 Q 22 6 36 13" stroke="#F97316" strokeWidth="3" fill="none" />
          {/* Face */}
          <circle cx="18" cy="17" r="1.5" fill="#451A03" />
          <circle cx="27" cy="17" r="1.5" fill="#451A03" />
          <path d="M 19 22 Q 22.5 26 26 22" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" fill="#F43F5E" />
          <circle cx="15" cy="20" r="2" fill="#F87171" opacity="0.6" />
          <circle cx="30" cy="20" r="2" fill="#F87171" opacity="0.6" />
        </g>

        {/* Child 2 (Left-Center Boy) */}
        <g transform="translate(132, 102)">
          {/* Body */}
          <path d="M 10 30 C 8 20 30 20 28 30 L 30 65 L 8 65 Z" fill="#E11D48" />
          {/* Head */}
          <circle cx="19" cy="14" r="12" fill="#BA7A55" />
          {/* Curly dark hair */}
          <circle cx="12" cy="6" r="6" fill="#1F2937" />
          <circle cx="19" cy="4" r="6" fill="#1F2937" />
          <circle cx="26" cy="6" r="6" fill="#1F2937" />
          <circle cx="9" cy="12" r="5" fill="#1F2937" />
          {/* Face */}
          <circle cx="16" cy="15" r="1.5" fill="#111827" />
          <circle cx="23" cy="15" r="1.5" fill="#111827" />
          <path d="M 17 19 Q 19.5 22 22 19" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Child 3 (Right Boy with brown hair smiling) */}
        <g transform="translate(245, 105)">
          {/* Body */}
          <path d="M 10 32 C 8 22 34 22 32 32 L 34 68 L 8 68 Z" fill="#3B82F6" />
          {/* Head */}
          <circle cx="21" cy="15" r="13" fill="#FBCFE8" />
          {/* Hair */}
          <path d="M 9 14 C 9 4 33 4 33 14 C 33 8 28 6 21 6 C 14 6 9 8 9 14 Z" fill="#78350F" />
          {/* Face */}
          <circle cx="17" cy="15" r="1.5" fill="#451A03" />
          <circle cx="25" cy="15" r="1.5" fill="#451A03" />
          <path d="M 18 20 Q 21 24 24 20" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" fill="#EF4444" />
          <circle cx="14" cy="18" r="2" fill="#F87171" opacity="0.6" />
          <circle cx="28" cy="18" r="2" fill="#F87171" opacity="0.6" />
        </g>

        {/* Child 4 (Right-Center Girl waving) */}
        <g transform="translate(225, 120)">
          {/* Body */}
          <path d="M 10 30 C 8 20 30 20 28 30 L 30 65 L 8 65 Z" fill="#EA580C" />
          {/* Head */}
          <circle cx="19" cy="14" r="12" fill="#FDE047" />
          {/* Long Hair */}
          <path d="M 8 12 C 8 2 30 2 30 12 L 32 35 C 30 38 28 35 28 25 L 10 25 C 10 35 8 38 6 35 Z" fill="#9A3412" />
          {/* Face */}
          <circle cx="16" cy="15" r="1.5" fill="#451A03" />
          <circle cx="23" cy="15" r="1.5" fill="#451A03" />
          <path d="M 17 19 Q 19.5 23 22 19" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Room Elements: Colorful Blocks & Ball on floor */}
        <g transform="translate(265, 185)">
          <rect x="0" y="8" width="14" height="14" rx="2" fill="#EF4444" />
          <rect x="16" y="8" width="14" height="14" rx="2" fill="#3B82F6" />
          <rect x="8" y="-4" width="14" height="14" rx="2" fill="#10B981" />
        </g>
        <circle cx="285" cy="215" r="10" fill="#FBBF24" />
        <circle cx="282" cy="212" r="3" fill="#FDE047" />

        {/* Central Foreground Hero: Child stepping into the room (Back View with curly hair & hoodie) */}
        <g transform="translate(155, 110)">
          {/* Legs & Pants */}
          <path d="M 28 95 L 26 142 L 38 142 L 40 95 Z" fill="#374151" />
          <path d="M 50 95 L 48 142 L 60 142 L 62 95 Z" fill="#374151" />
          {/* Shoes */}
          <ellipse cx="32" cy="144" rx="8" ry="4" fill="#1F2937" />
          <ellipse cx="54" cy="144" rx="8" ry="4" fill="#1F2937" />

          {/* Hoodie / Jacket (Soft Cream/White) */}
          <path
            d="M 18 35 C 15 25 75 25 72 35 L 76 96 C 76 98 14 98 14 96 Z"
            fill="#F3F4F6"
          />
          {/* Hoodie Lines & Pocket */}
          <path
            d="M 30 36 Q 45 52 60 36"
            stroke="#D1D5DB"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 28 65 L 62 65 L 56 86 L 34 86 Z"
            fill="#E5E7EB"
          />

          {/* Left Arm at side */}
          <path
            d="M 18 36 Q 10 55 14 75"
            stroke="#F3F4F6"
            strokeWidth="11"
            strokeLinecap="round"
          />
          {/* Right Arm Reaching Forward in Welcoming / High-Five Gesture */}
          <path
            d="M 70 38 Q 92 48 98 34"
            stroke="#F3F4F6"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <circle cx="100" cy="33" r="5.5" fill="#BA7A55" />

          {/* Curly Voluminous Afro/Curly Hair */}
          <circle cx="45" cy="16" r="23" fill="#261C14" />
          <circle cx="32" cy="8" r="14" fill="#261C14" />
          <circle cx="58" cy="8" r="14" fill="#261C14" />
          <circle cx="26" cy="22" r="12" fill="#261C14" />
          <circle cx="64" cy="22" r="12" fill="#261C14" />
          <circle cx="45" cy="2" r="12" fill="#3D2B1F" />
        </g>
      </svg>
    </div>
  );
};

export const DeneyerekGuclenIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-48 sm:h-52',
}) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#8EBFA6] to-[#72A88E] flex flex-col items-center justify-between select-none ${className}`}>
      {/* Top Title Bar */}
      <div className="w-full pt-3 pb-1 text-center z-10">
        <span className="text-[13px] sm:text-sm font-black tracking-wide text-[#FEF9C3] uppercase drop-shadow-xs font-sans">
          Deneyerek Güçlen
        </span>
      </div>

      {/* SVG Group High-Five Scene */}
      <svg
        viewBox="0 0 400 260"
        className="w-full h-full object-contain -mt-1"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#E6F5ED" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#8EBFA6" stopOpacity="0" />
          </radialGradient>

          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#1E3A2F" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Radiant Soft Center Aura/Cloud */}
        <ellipse cx="200" cy="140" rx="160" ry="95" fill="url(#centerGlow)" />
        <ellipse cx="200" cy="130" rx="110" ry="75" fill="#FFFFFF" opacity="0.6" />

        {/* 🌟 Sparkling Energy Stars at High-Five Point */}
        <g transform="translate(196, 68)" fill="#FBBF24">
          <polygon points="4,0 5.5,3 9,4 6,5.5 6.5,9 4,6.5 1.5,9 2,5.5 -1,4 2.5,3" />
        </g>
        <g transform="translate(182, 85)" fill="#F59E0B">
          <polygon points="3,0 4,2 6,3 4,4 4.5,6 3,4.5 1.5,6 2,4 0,3 2,2" />
        </g>
        <g transform="translate(216, 82)" fill="#F59E0B">
          <polygon points="3,0 4,2 6,3 4,4 4.5,6 3,4.5 1.5,6 2,4 0,3 2,2" />
        </g>

        {/* 🖐️ Raised Hands touching at the Apex (High Five Together) */}
        {/* Child Left 1 Hand */}
        <path
          d="M 125 185 Q 160 130 195 85"
          stroke="#E07A5F"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <circle cx="196" cy="83" r="8" fill="#F8B097" />

        {/* Child Right 1 Hand */}
        <path
          d="M 275 185 Q 240 130 205 85"
          stroke="#F2CC8F"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <circle cx="204" cy="83" r="8" fill="#F4D06F" />

        {/* Center Girl Hand reaching straight up */}
        <path
          d="M 200 180 L 200 85"
          stroke="#FFFFFF"
          strokeWidth="13"
          strokeLinecap="round"
        />
        <circle cx="200" cy="80" r="7.5" fill="#E5A073" />

        {/* Child Left 2 Hand */}
        <path
          d="M 145 160 Q 170 115 198 83"
          stroke="#81B29A"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Child Right 2 Hand */}
        <path
          d="M 255 160 Q 230 115 202 83"
          stroke="#E29578"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* 👧👦 CHILDREN CHARACTERS AROUND THE CIRCLE */}

        {/* Left Girl (Teal Hair / Coral Shirt) */}
        <g transform="translate(70, 115)" filter="url(#softShadow)">
          {/* Torso */}
          <path d="M 15 42 C 10 32 45 32 40 42 L 45 95 L 10 95 Z" fill="#E07A5F" />
          {/* Head */}
          <circle cx="28" cy="22" r="17" fill="#F8B097" />
          {/* Long Teal Hair */}
          <path
            d="M 10 24 C 6 6 48 6 46 24 C 48 48 40 58 35 56 C 30 42 26 42 22 56 C 16 58 10 48 10 24 Z"
            fill="#2D5A64"
          />
          {/* Happy Face */}
          <circle cx="24" cy="21" r="2" fill="#1C3138" />
          <circle cx="34" cy="21" r="2" fill="#1C3138" />
          <path d="M 24 27 Q 29 33 34 27" stroke="#1C3138" strokeWidth="2" strokeLinecap="round" fill="#FFFFFF" />
          <circle cx="20" cy="25" r="2.5" fill="#F43F5E" opacity="0.6" />
          <circle cx="38" cy="25" r="2.5" fill="#F43F5E" opacity="0.6" />
        </g>

        {/* Upper Left Boy (Brown Hair / Cream Shirt) */}
        <g transform="translate(125, 90)" filter="url(#softShadow)">
          {/* Torso */}
          <path d="M 12 36 C 8 28 38 28 34 36 L 38 85 L 8 85 Z" fill="#F4F1DE" />
          {/* Head */}
          <circle cx="23" cy="18" r="16" fill="#FBCFE8" />
          {/* Hair */}
          <path d="M 8 16 C 8 4 38 4 38 16 C 38 9 32 6 23 6 C 14 6 8 9 8 16 Z" fill="#8B4513" />
          {/* Face */}
          <circle cx="20" cy="17" r="2" fill="#451A03" />
          <circle cx="29" cy="17" r="2" fill="#451A03" />
          <path d="M 21 23 Q 25 29 29 23" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="#FFFFFF" />
          <circle cx="17" cy="21" r="2" fill="#F87171" opacity="0.5" />
          <circle cx="32" cy="21" r="2" fill="#F87171" opacity="0.5" />
        </g>

        {/* Upper Right Boy (Blonde / Light Brown Hair) */}
        <g transform="translate(235, 90)" filter="url(#softShadow)">
          {/* Torso */}
          <path d="M 12 36 C 8 28 38 28 34 36 L 38 85 L 8 85 Z" fill="#F2CC8F" />
          {/* Head */}
          <circle cx="23" cy="18" r="16" fill="#FDE047" />
          {/* Hair */}
          <path d="M 8 16 C 8 4 38 4 38 16 C 38 9 32 6 23 6 C 14 6 8 9 8 16 Z" fill="#D97706" />
          {/* Face */}
          <circle cx="18" cy="17" r="2" fill="#451A03" />
          <circle cx="27" cy="17" r="2" fill="#451A03" />
          <path d="M 19 23 Q 23 29 27 23" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="#FFFFFF" />
          <circle cx="15" cy="21" r="2" fill="#F87171" opacity="0.5" />
          <circle cx="30" cy="21" r="2" fill="#F87171" opacity="0.5" />
        </g>

        {/* Lower Right Boy (Brown Hair / Mint Shirt) */}
        <g transform="translate(285, 115)" filter="url(#softShadow)">
          {/* Torso */}
          <path d="M 15 42 C 10 32 45 32 40 42 L 45 95 L 10 95 Z" fill="#81B29A" />
          {/* Head */}
          <circle cx="28" cy="22" r="17" fill="#FBCFE8" />
          {/* Hair */}
          <path d="M 12 20 C 12 6 44 6 44 20 C 44 11 38 8 28 8 C 18 8 12 11 12 20 Z" fill="#6B3E26" />
          {/* Face */}
          <circle cx="23" cy="21" r="2" fill="#451A03" />
          <circle cx="33" cy="21" r="2" fill="#451A03" />
          <path d="M 24 27 Q 28 33 33 27" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="#FFFFFF" />
          <circle cx="19" cy="25" r="2.5" fill="#F87171" opacity="0.5" />
          <circle cx="37" cy="25" r="2.5" fill="#F87171" opacity="0.5" />
        </g>

        {/* Central Foreground Girl (Dark Pigtails / White Collared Shirt) */}
        <g transform="translate(172, 135)" filter="url(#softShadow)">
          {/* White Collared Shirt */}
          <path d="M 16 38 C 10 28 46 28 40 38 L 46 95 L 10 95 Z" fill="#FFFFFF" />
          {/* Collar detail */}
          <polygon points="28,34 20,44 28,48" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />
          <polygon points="28,34 36,44 28,48" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />

          {/* Head */}
          <circle cx="28" cy="20" r="16" fill="#E5A073" />
          {/* Hair with side pigtails */}
          <circle cx="9" cy="18" r="9" fill="#1F2937" />
          <circle cx="47" cy="18" r="9" fill="#1F2937" />
          <path d="M 12 18 C 12 4 44 4 44 18 C 44 10 38 6 28 6 C 18 6 12 10 12 18 Z" fill="#1F2937" />
          {/* Big Radiant Smile Face */}
          <circle cx="23" cy="19" r="2" fill="#111827" />
          <circle cx="33" cy="19" r="2" fill="#111827" />
          <path d="M 22 25 Q 28 32 34 25" stroke="#111827" strokeWidth="2" strokeLinecap="round" fill="#FFFFFF" />
          <circle cx="18" cy="23" r="2.5" fill="#F43F5E" opacity="0.6" />
          <circle cx="38" cy="23" r="2.5" fill="#F43F5E" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export const EglenceliTurkceIllustration: React.FC<{ className?: string }> = ({
  className = 'w-full h-full object-cover',
}) => {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-amber-50 via-sky-50 to-indigo-50 flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 225"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="turkceBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="50%" stopColor="#F0F9FF" />
            <stop offset="100%" stopColor="#EEF2FF" />
          </linearGradient>

          <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          <linearGradient id="cushionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <filter id="softGlowTurkce" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Ambient Backdrop Pattern */}
        <rect width="400" height="225" fill="url(#turkceBg)" />

        {/* Floating Stars and Magical Sparkles */}
        <g opacity="0.65">
          <path d="M 60 40 L 63 48 L 71 51 L 63 54 L 60 62 L 57 54 L 49 51 L 57 48 Z" fill="#FBBF24" />
          <path d="M 340 50 L 342 56 L 348 58 L 342 60 L 340 66 L 338 60 L 332 58 L 338 56 Z" fill="#38BDF8" />
          <path d="M 330 160 L 333 166 L 339 168 L 333 170 L 330 176 L 327 170 L 321 168 L 327 166 Z" fill="#F43F5E" />
          <circle cx="80" cy="110" r="3" fill="#A855F7" opacity="0.5" />
          <circle cx="310" cy="110" r="3.5" fill="#10B981" opacity="0.5" />
          <circle cx="120" cy="35" r="2.5" fill="#F59E0B" opacity="0.5" />
        </g>

        {/* Speech Bubble Left: "Merhaba! ✨" */}
        <g transform="translate(40, 50)" filter="url(#softGlowTurkce)">
          <rect x="0" y="0" width="110" height="38" rx="14" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="2" />
          <polygon points="68,38 78,48 81,38" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="2" strokeLinejoin="round" />
          <rect x="66" y="36" width="17" height="4" fill="#FFFFFF" />
          <text x="55" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#B45309" fontFamily="sans-serif">
            Merhaba! ✨
          </text>
        </g>

        {/* Speech Bubble Right: "Hallo! 🌟" */}
        <g transform="translate(252, 58)" filter="url(#softGlowTurkce)">
          <rect x="0" y="0" width="98" height="38" rx="14" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="2" />
          <polygon points="35,38 25,48 22,38" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="2" strokeLinejoin="round" />
          <rect x="20" y="36" width="17" height="4" fill="#FFFFFF" />
          <text x="49" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0369A1" fontFamily="sans-serif">
            Hallo! 🌟
          </text>
        </g>

        {/* Floor Cushion / Mat */}
        <ellipse cx="200" cy="195" rx="85" ry="18" fill="url(#cushionGrad)" opacity="0.9" />
        <ellipse cx="200" cy="193" rx="78" ry="14" fill="#7DD3FC" opacity="0.4" />

        {/* Main Character: Cheerful Girl Sitting Cross-Legged with Storybook */}
        <g transform="translate(145, 80)" filter="url(#softGlowTurkce)">
          {/* Body / Sweater */}
          <path d="M 32 60 C 20 60 15 88 15 105 L 95 105 C 95 88 90 60 78 60 Z" fill="#FBBF24" />
          {/* Collar */}
          <path d="M 40 60 Q 55 70 70 60 Z" fill="#F59E0B" />

          {/* Cross-legged pants */}
          <ellipse cx="55" cy="108" rx="42" ry="12" fill="#0284C7" />
          <circle cx="20" cy="108" r="8" fill="#E2E8F0" />
          <circle cx="90" cy="108" r="8" fill="#E2E8F0" />

          {/* Head & Neck */}
          <rect x="49" y="46" width="12" height="15" fill="#FED7AA" rx="4" />
          <circle cx="55" cy="32" r="22" fill="#FED7AA" />

          {/* Hair (Auburn/Brown with High Ponytail & Bow) */}
          <ellipse cx="55" cy="22" rx="23" ry="15" fill="#78350F" />
          <path d="M 33 28 C 33 16 55 12 77 28 C 70 20 40 20 33 28 Z" fill="#78350F" />
          <path d="M 75 22 C 90 15 95 32 85 45 C 80 35 75 30 75 22 Z" fill="#78350F" />
          <circle cx="75" cy="22" r="5" fill="#F43F5E" />

          {/* Cheerful Face */}
          <circle cx="46" cy="32" r="2.5" fill="#1E293B" />
          <circle cx="64" cy="32" r="2.5" fill="#1E293B" />
          <circle cx="41" cy="38" r="3.5" fill="#FB7185" opacity="0.65" />
          <circle cx="69" cy="38" r="3.5" fill="#FB7185" opacity="0.65" />
          <path d="M 48 38 Q 55 46 62 38" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Open Storybook in Hands */}
          <g transform="translate(18, 65)">
            <path d="M 12 25 L 37 32 L 37 10 L 12 3 Z" fill="url(#bookGrad)" />
            <path d="M 62 25 L 37 32 L 37 10 L 62 3 Z" fill="url(#bookGrad)" />
            <path d="M 14 23 L 37 29 L 37 8 L 14 2 Z" fill="#FFFFFF" />
            <path d="M 60 23 L 37 29 L 37 8 L 60 2 Z" fill="#FFFBEB" />
            <line x1="18" y1="9" x2="33" y2="13" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="14" x2="33" y2="18" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="19" x2="28" y2="22" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="41" y1="13" x2="56" y2="9" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="41" y1="18" x2="56" y2="14" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="41" y1="22" x2="51" y2="19" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

            <circle cx="13" cy="22" r="5" fill="#FED7AA" />
            <circle cx="61" cy="22" r="5" fill="#FED7AA" />
          </g>
        </g>

        {/* Small floating story badges */}
        <g transform="translate(95, 165)" opacity="0.9">
          <circle cx="0" cy="0" r="14" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1.5" />
          <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D97706" fontFamily="sans-serif">
            A B C
          </text>
        </g>
        <g transform="translate(305, 165)" opacity="0.9">
          <circle cx="0" cy="0" r="14" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1.5" />
          <text x="0" y="5" textAnchor="middle" fontSize="12" fill="#0284C7">
            📖
          </text>
        </g>
      </svg>
    </div>
  );
};
