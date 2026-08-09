import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';

interface FinalCtaProps {
  checkoutUrl: string;
}

export const FinalCta: React.FC = ({ checkoutUrl }) => {
  const { finalCta } = LANDING_CONTENT;

  return (
    <section className="py-10 px-4 text-center">
      <div className="max-w-xl mx-auto bg-[#100a1f] border border-[#22133d] rounded-2xl p-6 sm:p-8">
        
        <span className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider mb-3">
          🔥 ÚLTIMA CHANCE NO PREÇO PROMOCIONAL
        </span>

        <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-tight mb-2">
          {finalCta.title}
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm mb-6 max-w-md mx-auto leading-relaxed">
          {finalCta.description}
        </p>

        <a
          href={checkoutUrl}
          className="w-full py-4 sm:py-5 px-6 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-extrabold text-base sm:text-lg uppercase tracking-wide text-center block max-w-md mx-auto shadow-lg active:scale-[0.99] transition-transform"
        >
          {finalCta.buttonText}
        </a>

        <p className="text-slate-400 text-xs mt-3">
          ⚡ Oferta por tempo limitado • Acesso imediato em uma área de membros
        </p>

      </div>
    </section>
  );
};

