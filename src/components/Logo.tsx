import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = true
}) => {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Visual Icon Mark (RE stylized paintbrush & building monogram) - SHARP RECTANGLE */}
      <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center bg-navy-dark border border-gold-primary p-1.5 shadow-md group-hover:border-gold-bright transition-colors rounded-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M20 15 H45 C60 15, 65 25, 60 40 C55 52, 42 55, 30 55 H20 V15 Z"
            fill="#06233D"
            stroke="#D99A16"
            strokeWidth="3"
          />
          <path
            d="M20 50 H32 L52 85 H36 L20 58 V50 Z"
            fill="#06233D"
            stroke="#D99A16"
            strokeWidth="3"
          />
          <path
            d="M52 15 H85 C88 15, 90 18, 90 22 V30 H65 V45 H82 V58 H65 V72 H88 V85 H52 V15 Z"
            fill="#D99A16"
          />
          <rect x="72" y="19" width="6" height="6" fill="#F0B323" />
          <path d="M18 10 H28 V15 H18 V10 Z" fill="#F0B323" />
        </svg>
      </div>

      {/* Typography Brand Title */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className={`font-black tracking-wider text-xl sm:text-2xl leading-none uppercase ${
            isLight ? 'text-white' : 'text-navy-primary'
          }`}>
            ROSHAN
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[2px] w-2 bg-gold-primary"></span>
          <span className={`font-bold tracking-widest text-[10px] sm:text-[11px] uppercase ${
            isLight ? 'text-gold-bright' : 'text-gold-primary'
          }`}>
            ENTERPRISES
          </span>
          <span className="h-[2px] w-2 bg-gold-primary"></span>
        </div>
        {showTagline && (
          <span className={`text-[8px] sm:text-[9px] font-semibold tracking-tight uppercase mt-0.5 ${
            isLight ? 'text-slate-300' : 'text-navy-dark/75'
          }`}>
            Painting | Flooring | Civil Works
          </span>
        )}
      </div>
    </Link>
  );
};
