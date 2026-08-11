import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';

export const GuaranteeSection: React.FC = () => {
  const { guarantee } = LANDING_CONTENT;

  return (
    <section className="py-6 px-4">
      <div className="max-w-xl mx-auto">
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center flex flex-col items-center gap-2 shadow-lg">
          <div className="text-3xl mb-1">
            🛡️
          </div>

          <h3 className="font-bebas text-2xl sm:text-3xl text-slate-900 tracking-wide">
            {guarantee.title}
          </h3>

          <p className="text-slate-700 text-xs sm:text-sm max-w-md leading-relaxed font-medium">
            {guarantee.description}
          </p>
        </div>

      </div>
    </section>
  );
};

