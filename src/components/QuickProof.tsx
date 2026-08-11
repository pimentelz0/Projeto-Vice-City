import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import analyticsMockup from '../assets/images/modo_gta6_analytics_proof_1786369034309.jpg';

export const QuickProof: React.FC = () => {
  const { quickProof } = LANDING_CONTENT;

  return (
    <section className="py-4 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 text-center shadow-lg">
          
          <p className="text-xs sm:text-sm font-bold text-slate-800 mb-3.5">
            {quickProof.title}
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {quickProof.stats.map((stat, idx) => (
              <div key={idx} className="bg-pink-50/60 border border-pink-200 rounded-lg p-2.5 flex flex-col items-center justify-center">
                <span className="font-bebas text-2xl sm:text-3xl text-pink-600 leading-none mb-0.5">
                  {stat.number}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-600 font-medium leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Clean Proof Analytics Visual */}
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-1 shadow-md">
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

