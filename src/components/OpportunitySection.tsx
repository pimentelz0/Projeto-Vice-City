import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import { ChevronRight } from 'lucide-react';

export const OpportunitySection: React.FC = () => {
  const { opportunityTitle, opportunityStats, opportunityConclusion } = LANDING_CONTENT;

  return (
    <section className="py-8 px-4">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Main Headline */}
        <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wide mb-6 leading-[1.05] uppercase">
          ISSO NÃO É “HYPE”. É A MAIOR OPORTUNIDADE DE CONTEÚDO DA DÉCADA – <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">COM DATA MARCADA.</span>
        </h2>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#100720] border border-purple-500/25 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="font-bebas text-4xl sm:text-5xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-none mb-2">
              475M
            </span>
            <span className="text-slate-300 text-xs sm:text-sm font-medium leading-snug">
              views em 24h no trailer 2 <br className="hidden sm:inline" />
              <span className="text-slate-400 text-[11px]">(recorde da internet)</span>
            </span>
          </div>

          <div className="bg-[#100720] border border-purple-500/25 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="font-bebas text-4xl sm:text-5xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-none mb-2">
              +10
            </span>
            <span className="text-slate-300 text-xs sm:text-sm font-medium leading-snug">
              anos de GTA no topo <br className="hidden sm:inline" />
              do YouTube
            </span>
          </div>

          <div className="bg-[#100720] border border-purple-500/25 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="font-bebas text-4xl sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-none mb-2">
              US$10bi
            </span>
            <span className="text-slate-300 text-xs sm:text-sm font-medium leading-snug">
              só o GTA 5 já faturou
            </span>
          </div>

          <div className="bg-[#100720] border border-purple-500/25 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="font-bebas text-4xl sm:text-5xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-none mb-2">
              19/11
            </span>
            <span className="text-slate-300 text-xs sm:text-sm font-medium leading-snug">
              data de lançamento <br className="hidden sm:inline" />
              de GTA VI
            </span>
          </div>
        </div>

        {/* Bullet Insights Block */}
        <div className="bg-[#0b0518] border border-pink-500/20 rounded-2xl p-4 sm:p-6 text-left space-y-4 mb-6 shadow-xl">
          <div className="flex items-start gap-3 border-b border-slate-800/80 pb-3">
            <ChevronRight className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Um criador que esteve com a Rockstar foi direto: <strong className="text-white font-bold bg-pink-500/20 px-1.5 py-0.5 rounded border border-pink-500/30">“esse jogo vai produzir milionários.”</strong>
            </p>
          </div>

          <div className="flex items-start gap-3 border-b border-slate-800/80 pb-3">
            <ChevronRight className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              A Rockstar <strong className="text-white font-bold">comprou os times do FiveM/RedM</strong> e abriu um <strong className="text-white font-bold">marketplace oficial</strong> — estão construindo as ferramentas pra criador faturar.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Conteúdo de GTA é uma das categorias mais lucrativas do YouTube há mais de 10 anos.
            </p>
          </div>
        </div>

        {/* Closing Paragraph */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-left font-normal bg-[#0a0414]/90 p-4 rounded-xl border border-purple-500/20">
          Em poucos meses, <strong className="text-white font-bold">centenas de milhões de pessoas</strong> vão estar procurando, assistindo e comentando GTA VI ao mesmo tempo. Atenção desse tamanho é dinheiro na mesa. A única pergunta é quem vai estar posicionado pra pegar.
        </p>

      </div>
    </section>
  );
};

