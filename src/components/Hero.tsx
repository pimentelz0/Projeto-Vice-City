import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import heroMockup from '../assets/images/hero_product_mockup_1786249061372.jpg';

interface HeroProps {
  checkoutUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ checkoutUrl }) => {
  const { hero } = LANDING_CONTENT;

  return (
    <section className="relative pt-6 pb-8 px-4 text-center">
      <div className="max-w-xl mx-auto relative z-10">
        
        {/* Top Badge Pill */}
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-pink-200 bg-pink-50/90 backdrop-blur shadow-sm">
          <span className="text-[11px] sm:text-xs font-bold text-pink-900 uppercase tracking-wider">
            {hero.badge}
          </span>
        </div>

        {/* Main Headline Modeled after Reference Image */}
        <h1 className="font-bebas text-3xl sm:text-5xl tracking-wide leading-[1.08] mb-4 text-slate-900 uppercase">
          {hero.headlineLine1}
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{hero.headlineGta}</span>
          {hero.headlineLine2}
          <span className="text-pink-600 font-extrabold">{hero.headlinePronto}</span>
          {hero.headlineLine3}
          <span className="text-emerald-600 font-extrabold">{hero.headlineLucre}</span>
          {hero.headlineLine4 ? (
            <>
              {" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                MAIOR ONDA DE ATENÇÃO DA HISTÓRIA
              </span>
            </>
          ) : null}
        </h1>

        {/* Subheadline - Uppercase Bold Promise */}
        <p className="font-bebas text-lg sm:text-xl tracking-wide text-slate-700 uppercase leading-snug mb-6 max-w-lg mx-auto">
          {hero.subheadlineBold}
        </p>

        {/* Product Mockup */}
        <div className="mb-4 relative rounded-2xl overflow-hidden border border-pink-200 bg-white p-1.5 shadow-2xl group">
          <img
            src={heroMockup}
            alt="Projeto Vice City Bundle Mockup"
            referrerPolicy="no-referrer"
            className="w-full h-auto rounded-xl object-cover transform group-hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

        {/* Caption Under Image */}
        <p className="text-slate-800 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg mx-auto text-left bg-white p-4 rounded-xl border border-slate-200 shadow-md">
          Faltam poucos meses. <strong className="text-slate-900 font-bold">Quem entender o que está acontecendo agora</strong> pode entrar pra próxima geração de criadores lucrativos da internet. <span className="underline decoration-pink-500 underline-offset-4 font-medium">Quem só assistir, vai ver os outros faturarem.</span>
        </p>

        {/* Large Vice City CTA Button */}
        <div className="flex flex-col items-center gap-2">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Fallback for iframe click handlers if default anchor is intercepted
              window.open(checkoutUrl, '_blank');
            }}
            className="w-full max-w-md py-4 sm:py-5 px-6 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-extrabold text-base sm:text-lg uppercase tracking-wide text-center block shadow-xl hover:shadow-2xl active:scale-[0.99] transition-all cursor-pointer"
          >
            {hero.ctaText}
          </a>

          <p className="text-slate-600 text-xs mt-1.5 flex items-center justify-center gap-1.5 font-medium">
            <span>⚡ Acesso imediato em uma área de membros</span>
          </p>
        </div>

      </div>
    </section>
  );
};


