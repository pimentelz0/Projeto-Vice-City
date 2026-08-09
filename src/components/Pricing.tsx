import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';

interface PricingProps {
  checkoutUrl: string;
}

export const Pricing: React.FC<PricingProps> = ({ checkoutUrl }) => {
  const { pricing } = LANDING_CONTENT;

  return (
    <section className="py-8 px-4">
      <div className="max-w-xl mx-auto">
        
        <div className="bg-[#120a24] border-2 border-pink-500/60 rounded-2xl p-6 sm:p-8 text-center relative shadow-xl">
          
          <span className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 font-extrabold text-xs uppercase tracking-wider mb-3">
            🔥 OFERTA DE LANÇAMENTO
          </span>

          <p className="text-slate-400 text-sm line-through">
            De {pricing.originalPrice}
          </p>

          <p className="text-slate-300 text-xs font-bold uppercase tracking-wider mt-1">
            Por apenas
          </p>

          <div className="font-bebas text-6xl sm:text-7xl text-white tracking-tight my-1 leading-none">
            <span className="text-pink-500 text-3xl font-bold align-top mr-1">R$</span>
            27,90
          </div>

          <p className="text-emerald-400 text-xs font-bold my-3">
            ACESSO IMEDIATO NA ÁREA DE MEMBROS
          </p>

          {/* Large, high-converting CTA Button */}
          <a
            href={checkoutUrl}
            className="w-full py-4 sm:py-5 px-6 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-extrabold text-base sm:text-lg uppercase tracking-wide text-center block my-4 shadow-lg active:scale-[0.99] transition-transform"
          >
            {pricing.ctaText}
          </a>

          <p className="text-slate-400 text-xs mt-2">
            🔒 Pagamento 100% seguro • Acesso imediato em uma área de membros
          </p>

        </div>

      </div>
    </section>
  );
};

