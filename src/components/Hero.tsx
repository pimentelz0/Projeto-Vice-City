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
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-[#120727]/80 backdrop-blur shadow-sm">
          <span className="text-[11px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider">
            {hero.badge}
          </span>
        </div>

        {/* Main Headline Modeled after Reference Image */}
        <h1 className="font-bebas text-3xl sm:text-5xl tracking-wide leading-[1.08] mb-4 text-white uppercase">
          {hero.headlineLine1}
          <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">{hero.headlineGta}</span>
          {hero.headlineLine2}
          <span className="text-pink-500 font-extrabold">{hero.headlinePronto}</span>
          {hero.headlineLine3}
          <span className="text-emerald-400 font-extrabold">{hero.headlineLucre}</span>
          {hero.headlineLine4 ? (
            <>
              {" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                MAIOR ONDA DE ATENÇÃO DA HISTÓRIA
              </span>
            </>
          ) : null}
        </h1>

        {/* Subheadline - Uppercase Bold Promise */}
        <p className="font-bebas text-lg sm:text-xl tracking-wide text-slate-300 uppercase leading-snug mb-6 max-w-lg mx-auto">
          {hero.subheadlineBold}
        </p>

        {/* Product Mockup */}
        <div className="mb-4 relative rounded-2xl overflow-hidden border border-pink-500/30 bg-[#0d0618] p-1 shadow-2xl group">
          <img
            src={heroMockup}
            alt="Projeto Vice City Bundle Mockup"
            referrerPolicy="no-referrer"
            className="w-full h-auto rounded-xl object-cover transform group-hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

        {/* Caption Under Image */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg mx-auto text-left bg-[#0a0414]/90 p-4 rounded-xl border border-purple-500/20">
          Faltam poucos meses. <strong className="text-white font-bold">Quem entender o que está acontecendo agora</strong> pode entrar pra próxima geração de criadores lucrativos da internet. <span className="underline decoration-pink-500 underline-offset-4">Quem só assistir, vai ver os outros faturarem.</span>
        </p>

        {/* Large Vice City CTA Button */}
        <div className="flex flex-col items-center gap-2">
          <a
            href={checkoutUrl}
            className="w-full max-w-md py-4 sm:py-5 px-6 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-extrabold text-base sm:text-lg uppercase tracking-wide text-center block shadow-lg active:scale-[0.99] transition-transform"
          >
            {hero.ctaText}
          </a>

          <p className="text-slate-400 text-xs mt-1.5 flex items-center justify-center gap-1.5 font-medium">
            <span>⚡ Acesso imediato em uma área de membros</span>
          </p>
        </div>

      </div>
    </section>
  );
};


