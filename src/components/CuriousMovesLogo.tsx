import React from 'react';

interface CuriousMovesLogoProps {
  variant?: 'full' | 'horizontal' | 'icon-only';
  className?: string;
  showSubtitle?: boolean;
}

export const CuriousMovesLogo: React.FC<CuriousMovesLogoProps> = ({
  variant = 'horizontal',
  className = '',
  showSubtitle = true,
}) => {
  // SVG Icon component crafted to match the exact brand illustration
  const BrandMarkSvg: React.FC<{ sizeClass?: string }> = ({ sizeClass = 'w-28 h-28' }) => (
    <svg
      viewBox="0 0 160 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClass} drop-shadow-2xs`}
    >
      {/* 3 Golden-Yellow Sunburst Sparks over right hand */}
      <path d="M106 20 L102 12" stroke="#EBB338" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M115 22 L116 11" stroke="#EBB338" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M123 27 L128 17" stroke="#EBB338" strokeWidth="3.5" strokeLinecap="round" />

      {/* Teal Spiral / Swirl Question Shape on Left */}
      <path
        d="M 68 85 C 24 85, 14 36, 48 36 C 76 36, 74 68, 50 68 C 38 68, 39 52, 50 52"
        stroke="#48878B"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 2 Golden-Yellow Dots below spiral */}
      <circle cx="38" cy="98" r="3.5" fill="#EBB338" />
      <circle cx="50" cy="103" r="4" fill="#EBB338" />

      {/* Terracotta/Coral Joyful Jumping Stick Figure */}
      {/* Head */}
      <circle cx="92" cy="38" r="11.5" fill="#DE6B48" />

      {/* Torso */}
      <path
        d="M 92 50 Q 94 70, 92 88"
        stroke="#DE6B48"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Left Arm (stretched up) */}
      <path
        d="M 92 60 Q 74 48, 72 26"
        stroke="#DE6B48"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Right Arm (raised high toward sparks) */}
      <path
        d="M 92 60 Q 106 46, 114 26"
        stroke="#DE6B48"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Left Leg (jumping / trailing down-left) */}
      <path
        d="M 92 88 Q 84 102, 70 108"
        stroke="#DE6B48"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Right Leg (joyful kick bend up-right) */}
      <path
        d="M 92 88 Q 106 96, 118 78"
        stroke="#DE6B48"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return <BrandMarkSvg sizeClass={className || 'w-10 h-10'} />;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Visual Brand Mark */}
        <BrandMarkSvg sizeClass="w-32 h-32 sm:w-36 sm:h-36" />

        {/* Brand Typography */}
        <div className="flex flex-col items-center mt-[-4px]">
          <div className="font-brand text-4xl sm:text-5xl font-bold tracking-normal leading-none flex items-baseline gap-2">
            <span className="text-[#2D3748]">Curious</span>
            <span className="text-[#DE6B48]">Moves</span>
          </div>

          {/* Golden Brush Underline */}
          <svg viewBox="0 0 160 14" fill="none" className="w-40 sm:w-44 h-3 my-1">
            <path
              d="M 6 8 Q 80 13, 154 5"
              stroke="#EBB338"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* Subtitle */}
          {showSubtitle && (
            <span className="text-[11px] sm:text-xs font-extrabold text-[#48878B] tracking-[0.22em] uppercase mt-0.5">
              YOGA · CREATIVE DRAMA · PLAY
            </span>
          )}
        </div>
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar & Footer)
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <BrandMarkSvg sizeClass="w-11 h-11 shrink-0" />

      <div className="flex flex-col justify-center leading-none">
        <div className="font-brand text-2xl sm:text-3xl font-bold tracking-tight flex items-baseline gap-1.5">
          <span className="text-[#2D3748]">Curious</span>
          <span className="text-[#DE6B48]">Moves</span>
        </div>

        {/* Small Golden Underline */}
        <svg viewBox="0 0 100 8" fill="none" className="w-24 h-1.5 my-0.5">
          <path
            d="M 2 4 Q 50 7, 98 3"
            stroke="#EBB338"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {showSubtitle && (
          <span className="text-[8.5px] sm:text-[9.5px] font-extrabold text-[#48878B] tracking-[0.16em] uppercase">
            YOGA · CREATIVE DRAMA · PLAY
          </span>
        )}
      </div>
    </div>
  );
};
