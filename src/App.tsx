import React, { useState } from 'react';
import { CountdownHeader } from './components/CountdownHeader';
import { BrandLogo } from './components/BrandLogo';
import { Hero } from './components/Hero';
import { QuickProof } from './components/QuickProof';
import { OpportunitySection } from './components/OpportunitySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ModulesGrid } from './components/ModulesGrid';
import { BonusSection } from './components/BonusSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FaqAccordion } from './components/FaqAccordion';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FinalCta } from './components/FinalCta';
import { CitySkylineBg } from './components/CitySkylineBg';

export default function App() {
  const [checkoutUrl] = useState<string>('https://pay.kiwify.com.br/QNyzh80');

  return (
    <div className="min-h-screen bg-[#07050e] text-slate-100 flex flex-col font-sans selection:bg-pink-500 selection:text-white relative overflow-x-hidden">
      
      {/* 1. BARRA FIXA no topo: Contador do GTA VI */}
      <CountdownHeader />

      {/* Main Landing Container (Mobile-first, clean max width) */}
      <div className="flex-1 relative pt-12 pb-12">
        
        {/* Subtle Vice City Silhouette / Neon Glow Background */}
        <CitySkylineBg />

        <main className="w-full max-w-2xl mx-auto relative z-10 px-0">
          
          {/* BRAND LOGO & TITLE AT THE TOP */}
          <div className="pt-6 pb-2 text-center flex justify-center items-center">
            <BrandLogo size="md" />
          </div>

          {/* 2. HERO */}
          <Hero checkoutUrl={checkoutUrl} />

          {/* 3. PROVA RÁPIDA (COM GRÁFICO +500K) */}
          <QuickProof />

          {/* 4. OPORTUNIDADE DO SÉCULO (STATS 475M, +10, US$10bi, 19/11 & INSIGHTS) */}
          <OpportunitySection />

          {/* 5. COMO FUNCIONA (EM 3 PASSOS) */}
          <HowItWorksSection />

          {/* 6. O QUE VOCÊ RECEBE (ÁREA DE MEMBROS + MÓDULOS) */}
          <ModulesGrid />

          {/* 7. BÔNUS INCLUSOS (PACOTE DE BÔNUS) */}
          <BonusSection />

          {/* 8. PARA QUEM É / NÃO É (QUALIFICAÇÃO) */}
          <TargetAudienceSection />

          {/* 9. DEPOIMENTOS */}
          <Testimonials />

          {/* 10. PREÇO */}
          <Pricing checkoutUrl={checkoutUrl} />

          {/* 11. OBJEÇÕES (ACCORDION) */}
          <FaqAccordion />

          {/* 12. GARANTIA */}
          <GuaranteeSection />

          {/* 13. CTA FINAL */}
          <FinalCta checkoutUrl={checkoutUrl} />

          {/* Footer */}
          <footer className="py-10 px-4 text-center border-t border-slate-900/80 text-xs text-slate-500">
            <div className="max-w-md mx-auto space-y-2">
              <p className="font-medium text-slate-400">Projeto Vice City &copy; Todos os direitos reservados.</p>
              <p className="text-[11px] opacity-60">
                Este site não possui afiliação ou vínculo oficial com a Rockstar Games ou Take-Two Interactive.
              </p>
            </div>
          </footer>

        </main>

      </div>

    </div>
  );
}


