import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';

interface FinalCtaProps {
  checkoutUrl: string;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ checkoutUrl }) => {
  const { finalCta } = LANDING_CONTENT;

  return (
    <section className="py-10 px-4 text-center">
      <div className="max-w-xl mx-auto bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-2xl">
        
        <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-3">
          🔥 ÚLTIMA CHANCE NO PREÇO PROMOCIONAL
        </span>

        <h2 className="font-bebas text-3xl sm:text-5xl text-slate-900 tracking-tight mb-2">
          {finalCta.title}
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm mb-6 max-w-md mx-auto leading-relaxed">
          {finalCta.description}
        </p>

        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            window.open(checkoutUrl, '_blank');
          }}
          className="w-full py-4 sm:py-5 px-6 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-extrabold text-base sm:text-lg uppercase tracking-wide text-center block max-w-md mx-auto shadow-xl hover:shadow-2xl active:scale-[0.99] transition-all cursor-pointer"
        >
          {finalCta.buttonText}
        </a>

        <p className="text-slate-500 text-xs mt-3 font-medium">
          ⚡ Oferta por tempo limitado • Acesso imediato em uma área de membros
        </p>

      </div>
    </section>
  );
};

