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
        
        <div className="bg-white border-2 border-pink-500 rounded-2xl p-6 sm:p-8 text-center relative shadow-2xl">
          
          <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-extrabold text-xs uppercase tracking-wider mb-3">
            🔥 OFERTA DE LANÇAMENTO
          </span>

          <p className="text-slate-400 text-sm line-through font-medium">
            De {pricing.originalPrice}
          </p>

          <p className="text-slate-700 text-xs font-bold uppercase tracking-wider mt-1">
            Por apenas
          </p>

          <div className="font-bebas text-6xl sm:text-7xl text-slate-900 tracking-tight my-1 leading-none">
            <span className="text-pink-600 text-3xl font-bold align-top mr-1">R$</span>
            27,90
          </div>

          <p className="text-emerald-600 text-xs font-bold my-3">
            ACESSO IMEDIATO NA ÁREA DE MEMBROS
          </p>

          {/* Large, high-converting CTA Button */}
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              window.open(checkoutUrl, '_blank');
            }}
            className="w-full py-4 sm:py-5 px-6 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-extrabold text-base sm:text-lg uppercase tracking-wide text-center block my-4 shadow-xl hover:shadow-2xl active:scale-[0.99] transition-all cursor-pointer"
          >
            {pricing.ctaText}
          </a>

          <p className="text-slate-500 text-xs mt-2">
            🔒 Pagamento 100% seguro • Acesso imediato em uma área de membros
          </p>

        </div>

      </div>
    </section>
  );
};

