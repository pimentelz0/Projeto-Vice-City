import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import { Check, X } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const { targetAudience } = LANDING_CONTENT;

  return (
    <section className="py-8 px-4">
      <div className="max-w-xl mx-auto space-y-4">
        
        {/* Card 1: É PRA VOCÊ SE */}
        <div className="bg-emerald-50/70 border border-emerald-300 rounded-2xl p-5 sm:p-6 text-left shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-emerald-200 text-emerald-800 shrink-0">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h3 className="font-bebas text-2xl sm:text-3xl text-emerald-950 tracking-wide uppercase">
              {targetAudience.forYouTitle}
            </h3>
          </div>

          <div className="space-y-3">
            {targetAudience.forYouItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: NÃO É PRA VOCÊ SE */}
        <div className="bg-rose-50/70 border border-rose-300 rounded-2xl p-5 sm:p-6 text-left shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-rose-200 text-rose-800 shrink-0">
              <X className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h3 className="font-bebas text-2xl sm:text-3xl text-rose-950 tracking-wide uppercase">
              {targetAudience.notForYouTitle}
            </h3>
          </div>

          <div className="space-y-3">
            {targetAudience.notForYouItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-1" />
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
