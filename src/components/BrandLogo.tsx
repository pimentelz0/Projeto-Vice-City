import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md' }) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-2xl sm:text-3xl';

  return (
    <div className="inline-flex items-center gap-3 group select-none">
      {/* Unique Custom SVG Vice City Sunset & Palm Emblem */}
      <div className={`relative ${iconSize} shrink-0`}>
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 blur-[4px] opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative w-full h-full rounded-xl bg-[#0d0618] border border-pink-500/60 p-1 flex items-center justify-center shadow-md overflow-hidden">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="pvcSunset" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff2a85" />
                <stop offset="55%" stopColor="#ff7b00" />
                <stop offset="100%" stopColor="#6b21a8" />
              </linearGradient>
              <linearGradient id="pvcNeon" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#ff2a85" />
              </linearGradient>
            </defs>
            {/* Background glowing sunset circle */}
            <circle cx="20" cy="18" r="14" fill="url(#pvcSunset)" />
            {/* Retro synthwave horizon grid lines */}
            <line x1="6" y1="21" x2="34" y2="21" stroke="#0d0618" strokeWidth="1.2" />
            <line x1="8" y1="24" x2="32" y2="24" stroke="#0d0618" strokeWidth="1.5" />
            <line x1="10" y1="27" x2="30" y2="27" stroke="#0d0618" strokeWidth="1.8" />
            {/* Twin Palm Trees silhouettes */}
            <path d="M14 34 Q16 26 18 20" stroke="#0d0618" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M18 20 Q13 18 10 20 M18 20 Q15 15 12 15 M18 20 Q20 14 22 16 M18 20 Q22 18 24 21" stroke="#0d0618" strokeWidth="1.8" strokeLinecap="round" />
            
            <path d="M26 34 Q24 27 23 22" stroke="#0d0618" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M23 22 Q19 20 17 22 M23 22 Q21 18 19 18 M23 22 Q25 17 27 19 M23 22 Q27 20 29 23" stroke="#0d0618" strokeWidth="1.6" strokeLinecap="round" />
            
            {/* Stylized Badge Frame */}
            <rect x="2" y="2" width="36" height="36" rx="8" stroke="url(#pvcNeon)" strokeWidth="1.5" fill="none" opacity="0.7" />
          </svg>
        </div>
      </div>

      {/* Brand Title */}
      <div className="flex flex-col text-left">
        <span className={`font-bebas ${textSize} tracking-wider leading-none text-slate-900 drop-shadow-sm`}>
          PROJETO <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 font-extrabold">VICE CITY</span>
        </span>
      </div>
    </div>
  );
};
