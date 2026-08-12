import React from 'react';

export const CitySkylineBg: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Background radial glowing Orbs without heavy CSS blur filters */}
      <div 
        className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] opacity-40" 
        style={{
          background: 'radial-gradient(circle, rgba(255, 182, 218, 0.35) 0%, rgba(216, 180, 254, 0.15) 50%, transparent 70%)'
        }}
      />
      <div 
        className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] opacity-30" 
        style={{
          background: 'radial-gradient(circle, rgba(253, 230, 138, 0.35) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] opacity-30" 
        style={{
          background: 'radial-gradient(circle, rgba(251, 207, 232, 0.35) 0%, transparent 70%)'
        }}
      />

      {/* Subtle Skyline and Palms Silhouette Vector at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-15 flex items-end justify-between px-4">
        <svg className="w-full h-full text-slate-400" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          {/* Skyline silhouette shapes */}
          <rect x="20" y="40" width="35" height="80" />
          <rect x="60" y="20" width="45" height="100" />
          <polygon points="110,120 125,50 140,120" />
          <rect x="150" y="60" width="30" height="60" />
          <rect x="200" y="30" width="50" height="90" />
          
          <rect x="350" y="50" width="40" height="70" />
          <rect x="400" y="10" width="60" height="110" />
          <rect x="470" y="45" width="35" height="75" />
          
          <rect x="620" y="30" width="55" height="90" />
          <rect x="680" y="60" width="40" height="60" />
          <polygon points="730,120 750,20 770,120" />

          <rect x="850" y="40" width="50" height="80" />
          <rect x="910" y="15" width="45" height="105" />
          <rect x="965" y="55" width="30" height="65" />
          <rect x="1010" y="35" width="60" height="85" />
        </svg>
      </div>

      {/* Grid overlay lines */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(#ff2a85 1px, transparent 1px), linear-gradient(90deg, #ff2a85 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

