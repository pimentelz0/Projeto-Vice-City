import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import analyticsMockup from '../assets/images/analytics_proof_mockup_1786309037712.jpg';

export const QuickProof: React.FC = () => {
  const { quickProof } = LANDING_CONTENT;

  return (
    <section className="py-4 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-[#110a20] border border-[#23153d] rounded-xl p-4 sm:p-5 text-center">
          
          <p className="text-xs sm:text-sm font-bold text-slate-200 mb-3.5">
            {quickProof.title}
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {quickProof.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#0a0514] border border-pink-500/20 rounded-lg p-2.5 flex flex-col items-center justify-center">
                <span className="font-bebas text-2xl sm:text-3xl text-pink-400 leading-none mb-0.5">
                  {stat.number}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Clean Proof Analytics Visual */}
          <div className="rounded-xl overflow-hidden border border-pink-500/20 bg-[#0a0514] p-1 shadow-lg">
            <img
              src={analyticsMockup}
              alt="Métricas de +500k visualizações em 1 semana"
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

