import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';

export const GuaranteeSection: React.FC = () => {
  const { guarantee } = LANDING_CONTENT;

  return (
    <section className="py-6 px-4">
      <div className="max-w-xl mx-auto">
        
        <div className="bg-[#100a1f] border border-[#22133d] rounded-xl p-5 text-center flex flex-col items-center gap-2">
          <div className="text-3xl mb-1">
            🛡️
          </div>

          <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">
            {guarantee.title}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed font-medium">
            {guarantee.description}
          </p>
        </div>

      </div>
    </section>
  );
};

