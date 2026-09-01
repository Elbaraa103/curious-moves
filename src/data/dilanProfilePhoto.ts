import dilanPortraitPhoto from '../assets/images/regenerated_image_1787750223506.jpg';

// Vector Representation of Dilan Akbayır's Official Portrait (Based on WhatsApp Image 2026-08-24 at 1.16.45 PM.jpeg)
// Features: Artistic monochrome portrait, bangs, warm smile, hoop earrings, delicate necklace, shoulder sun tattoo, crossed arms

export const DILAN_PORTRAIT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <defs>
    <!-- Soft Studio Background Gradient with Vignette -->
    <radialGradient id="studioVignette" cx="50%" cy="38%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </radialGradient>
    
    <!-- Skin Tone Grayscale / Monochrome Lighting -->
    <linearGradient id="skinToneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="45%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>

    <!-- Top Tank / Ribbed Fabric Texture -->
    <linearGradient id="topFabricGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>

    <!-- Hair Depth Gradient -->
    <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>

    <!-- Drop Shadow for Arms & Neck -->
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.18"/>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="600" height="750" fill="url(#studioVignette)"/>

  <!-- ==================== BODY & ARMS CROSSED ==================== -->
  
  <!-- Right Shoulder & Arm (with Sun/Crescent Tattoo) -->
  <g id="right-shoulder-arm">
    <!-- Shoulder curve -->
    <path d="M 60 520 Q 110 440 210 440 L 220 580 L 80 650 Z" fill="url(#skinToneGrad)"/>
    
    <!-- Shoulder Sun/Mandala Tattoo (Detailed Crescent Sun with radiating rays) -->
    <g transform="translate(135, 490) rotate(-12) scale(0.65)" stroke="#1e293b" stroke-width="2.2" fill="none" opacity="0.88">
      <!-- Outer Sun Rays / Flames -->
      <path d="M 0,-40 L 4,-26 L 16,-34 L 12,-20 L 26,-24 L 18,-12 L 32,-12 L 20,-2 L 32,6 L 18,10 L 28,22 L 14,18 L 18,32 L 6,24 L 6,38 L -4,26 L -10,38 L -14,24 L -24,34 L -20,20 L -32,24 L -22,12 L -34,8 L -22,-2 L -32,-10 L -18,-12 L -26,-22 L -12,-18 L -14,-32 L -2,-24 Z" fill="#0f172a" fill-opacity="0.1"/>
      <!-- Inner Crescent Moon & Sun Core -->
      <circle cx="0" cy="0" r="22" stroke-width="2"/>
      <path d="M -6,-18 A 18 18 0 0 0 -6,18 A 14 14 0 0 1 -6,-18 Z" fill="#1e293b"/>
      <!-- Center dot -->
      <circle cx="2" cy="0" r="3" fill="#1e293b"/>
    </g>

    <!-- Right Forearm reaching across waist -->
    <path d="M 90 600 Q 180 640 320 660 L 330 720 L 70 720 Z" fill="url(#skinToneGrad)"/>
    
    <!-- Small dainty stars/marks tattoo on forearm -->
    <g transform="translate(95, 660)" fill="#1e293b" opacity="0.75">
      <circle cx="5" cy="5" r="2"/>
      <circle cx="15" cy="12" r="1.5"/>
      <circle cx="22" cy="4" r="1.8"/>
      <circle cx="28" cy="16" r="1.2"/>
    </g>
    
    <!-- Beaded Bracelet on wrist -->
    <g transform="translate(180, 685)" stroke="#475569" stroke-width="1" fill="#e2e8f0">
      <circle cx="0" cy="0" r="4"/>
      <circle cx="8" cy="2" r="4.5"/>
      <circle cx="17" cy="4" r="4"/>
      <circle cx="26" cy="6" r="4.5"/>
      <circle cx="35" cy="7" r="4"/>
    </g>
  </g>

  <!-- Left Shoulder & Crossed Forearm -->
  <g id="left-shoulder-arm">
    <path d="M 390 440 Q 490 440 540 520 L 530 660 L 380 580 Z" fill="url(#skinToneGrad)"/>
    <!-- Left Forearm folded with fingers visible on right tricep -->
    <path d="M 520 560 Q 420 640 340 670 L 320 620 Q 400 580 480 520 Z" fill="url(#skinToneGrad)" filter="url(#softShadow)"/>
    
    <!-- Left Hand Fingers resting under arm -->
    <g transform="translate(470, 620)" fill="url(#skinToneGrad)" stroke="#94a3b8" stroke-width="1.5">
      <path d="M 0 0 C 15 10, 25 30, 20 45 C 16 48, 10 46, 8 38 Z"/>
      <path d="M 12 10 C 27 20, 37 40, 32 55 C 28 58, 22 56, 20 48 Z"/>
      <path d="M 24 20 C 39 30, 47 50, 42 63 C 38 66, 32 64, 30 56 Z"/>
    </g>
  </g>

  <!-- Ribbed Sleeveless Tank Top (Cream / Heather Gray) -->
  <g id="sleeveless-top">
    <!-- Main Top Body -->
    <path d="M 210 440 Q 300 460 390 440 L 410 750 L 190 750 Z" fill="url(#topFabricGrad)" filter="url(#softShadow)"/>
    
    <!-- Ribbed neckline trim -->
    <path d="M 220 440 Q 300 485 380 440 Q 385 455 380 465 Q 300 505 220 465 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
    
    <!-- Subtle vertical ribbing lines on fabric -->
    <g stroke="#94a3b8" stroke-width="1" opacity="0.45">
      <line x1="240" y1="475" x2="230" y2="750"/>
      <line x1="260" y1="485" x2="250" y2="750"/>
      <line x1="280" y1="490" x2="275" y2="750"/>
      <line x1="300" y1="492" x2="300" y2="750"/>
      <line x1="320" y1="490" x2="325" y2="750"/>
      <line x1="340" y1="485" x2="350" y2="750"/>
      <line x1="360" y1="475" x2="370" y2="750"/>
    </g>
  </g>

  <!-- Delicate Long Silver Chain Necklace -->
  <path d="M 245 455 Q 300 630 355 455" stroke="#475569" stroke-width="1.8" fill="none" opacity="0.85" stroke-dasharray="4 2"/>

  <!-- ==================== NECK & CLAVICLE ==================== -->
  <g id="neck">
    <path d="M 255 350 L 250 455 Q 300 475 350 455 L 345 350 Z" fill="url(#skinToneGrad)"/>
    <!-- Clavicle / Collarbone Shadows -->
    <path d="M 235 440 Q 280 455 300 452" stroke="#94a3b8" stroke-width="2.5" fill="none" opacity="0.6"/>
    <path d="M 365 440 Q 320 455 300 452" stroke="#94a3b8" stroke-width="2.5" fill="none" opacity="0.6"/>
    <path d="M 290 390 Q 300 410 310 390" stroke="#94a3b8" stroke-width="2" fill="none" opacity="0.4"/>
  </g>

  <!-- ==================== HEAD, HAIR & FACIAL FEATURES ==================== -->

  <!-- Base Head / Face Shape -->
  <g id="face-base">
    <ellipse cx="300" cy="275" rx="98" ry="115" fill="url(#skinToneGrad)"/>
    <path d="M 205 250 Q 200 340 250 375 Q 300 405 350 375 Q 400 340 395 250 Z" fill="url(#skinToneGrad)"/>
  </g>

  <!-- Hoop Earrings (Silver/Metallic) -->
  <g id="earrings">
    <!-- Right Earring (Viewer's Left) -->
    <ellipse cx="202" cy="295" rx="14" ry="24" stroke="#334155" stroke-width="3" fill="none" transform="rotate(-6, 202, 295)"/>
    <ellipse cx="203" cy="295" rx="12" ry="22" stroke="#cbd5e1" stroke-width="1.5" fill="none" transform="rotate(-6, 202, 295)"/>

    <!-- Left Earring (Viewer's Right) -->
    <ellipse cx="398" cy="295" rx="14" ry="24" stroke="#334155" stroke-width="3" fill="none" transform="rotate(6, 398, 295)"/>
    <ellipse cx="397" cy="295" rx="12" ry="22" stroke="#cbd5e1" stroke-width="1.5" fill="none" transform="rotate(6, 398, 295)"/>
  </g>

  <!-- Hair Base & Back Layers -->
  <g id="hair-back" fill="url(#hairGrad)">
    <!-- Back Hair volume -->
    <path d="M 185 240 Q 155 350 205 400 Q 240 370 230 310 Z"/>
    <path d="M 415 240 Q 445 350 395 400 Q 360 370 370 310 Z"/>
    <!-- Top Crown Volume -->
    <ellipse cx="300" cy="180" rx="125" ry="85"/>
  </g>

  <!-- Facial Features (Expressive, Warm Dilan Portrait) -->
  <g id="facial-features">
    <!-- Eyebrows (Natural, soft arched) -->
    <path d="M 235 228 Q 260 216 280 226" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    <path d="M 320 226 Q 340 216 365 228" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round" fill="none"/>

    <!-- Left Eye (Viewer's Left) -->
    <g id="eye-left">
      <!-- Upper eyelid & Eyelashes -->
      <path d="M 235 244 Q 258 232 280 245" stroke="#020617" stroke-width="3.5" fill="none"/>
      <!-- Lower eyelid -->
      <path d="M 238 246 Q 258 256 278 246" stroke="#475569" stroke-width="1.8" fill="none"/>
      <!-- Eye White & Iris -->
      <ellipse cx="258" cy="244" rx="14" ry="8" fill="#ffffff"/>
      <circle cx="258" cy="244" r="7" fill="#1e293b"/>
      <circle cx="258" cy="244" r="4.5" fill="#020617"/>
      <!-- Light Reflection Sparkle -->
      <circle cx="256" cy="242" r="2" fill="#ffffff"/>
    </g>

    <!-- Right Eye (Viewer's Right) -->
    <g id="eye-right">
      <!-- Upper eyelid & Eyelashes -->
      <path d="M 320 245 Q 342 232 365 244" stroke="#020617" stroke-width="3.5" fill="none"/>
      <!-- Lower eyelid -->
      <path d="M 322 246 Q 342 256 362 246" stroke="#475569" stroke-width="1.8" fill="none"/>
      <!-- Eye White & Iris -->
      <ellipse cx="342" cy="244" rx="14" ry="8" fill="#ffffff"/>
      <circle cx="342" cy="244" r="7" fill="#1e293b"/>
      <circle cx="342" cy="244" r="4.5" fill="#020617"/>
      <!-- Light Reflection Sparkle -->
      <circle cx="340" cy="242" r="2" fill="#ffffff"/>
    </g>

    <!-- Nose Structure -->
    <path d="M 300 236 L 296 280 Q 288 296 295 300 Q 300 304 305 300 Q 312 296 304 280" stroke="#94a3b8" stroke-width="2" fill="none"/>
    <!-- Nostril curves -->
    <path d="M 288 296 Q 295 302 300 300" stroke="#475569" stroke-width="2.5" fill="none"/>
    <path d="M 312 296 Q 305 302 300 300" stroke="#475569" stroke-width="2.5" fill="none"/>

    <!-- Radiant Smile (Warm, Authentic Smile showing white teeth) -->
    <g id="smile" transform="translate(0, 10)">
      <!-- Smile Shadow / Laugh lines -->
      <path d="M 235 305 Q 242 320 248 335" stroke="#94a3b8" stroke-width="2" fill="none" opacity="0.6"/>
      <path d="M 365 305 Q 358 320 352 335" stroke="#94a3b8" stroke-width="2" fill="none" opacity="0.6"/>

      <!-- Mouth Contour -->
      <path d="M 252 324 Q 300 328 348 324 Q 356 348 342 360 Q 300 376 258 360 Q 244 348 252 324 Z" fill="#020617"/>
      
      <!-- Upper Lip -->
      <path d="M 252 324 Q 278 318 300 323 Q 322 318 348 324 Q 300 330 252 324 Z" fill="#64748b"/>
      
      <!-- Sparkling White Teeth (Slightly curved natural upper row) -->
      <path d="M 256 327 Q 300 331 344 327 Q 340 344 330 348 Q 300 354 270 348 Q 260 344 256 327 Z" fill="#ffffff"/>
      <!-- Distinct subtle tooth gap / charm lines -->
      <line x1="299" y1="328" x2="299" y2="348" stroke="#cbd5e1" stroke-width="1.2"/>
      <line x1="286" y1="328" x2="286" y2="346" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="313" y1="328" x2="313" y2="346" stroke="#e2e8f0" stroke-width="1"/>
      
      <!-- Lower Lip -->
      <path d="M 258 358 Q 300 374 342 358 Q 300 366 258 358 Z" fill="#94a3b8"/>
      <!-- Chin Dimple -->
      <path d="M 292 390 Q 300 394 308 390" stroke="#94a3b8" stroke-width="2.5" fill="none" opacity="0.7"/>
    </g>
  </g>

  <!-- Front Hair & Characteristic Fringe / Wispy Bangs -->
  <g id="hair-front" fill="url(#hairGrad)">
    <!-- Top Crown Strands -->
    <path d="M 180 200 Q 230 130 300 130 Q 370 130 420 200 Q 400 150 300 145 Q 200 150 180 200 Z"/>
    
    <!-- Side Wisps framing face & ears -->
    <path d="M 185 200 Q 205 270 215 320 Q 205 280 200 240 Z"/>
    <path d="M 415 200 Q 395 270 385 320 Q 395 280 400 240 Z"/>

    <!-- Wispy Bangs / Fringe covering forehead above brows -->
    <path d="M 215 190 Q 255 220 270 218 Q 285 195 295 222 Q 315 198 335 224 Q 355 200 385 210 Q 350 170 300 168 Q 240 170 215 190 Z"/>
    <path d="M 240 195 L 250 226 L 258 198 Z"/>
    <path d="M 270 195 L 282 228 L 290 198 Z"/>
    <path d="M 310 195 L 325 226 L 334 198 Z"/>
    <path d="M 345 195 L 360 224 L 368 198 Z"/>

    <!-- Little flyaway hair strands adding natural charm -->
    <path d="M 410 180 Q 435 170 425 210" stroke="#0f172a" stroke-width="2.5" fill="none"/>
    <path d="M 190 180 Q 165 170 175 210" stroke="#0f172a" stroke-width="2.5" fill="none"/>
  </g>
</svg>
`;

export const DILAN_PORTRAIT_SVG_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(DILAN_PORTRAIT_SVG)}`;
export const DILAN_PORTRAIT_DATA_URI = dilanPortraitPhoto;
