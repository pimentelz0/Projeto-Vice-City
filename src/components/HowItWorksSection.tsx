import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import { FolderDown, Video, Rocket } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const { howItWorksTitle, howItWorksSteps } = LANDING_CONTENT;

  return (
    <section className="py-8 px-4">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide mb-6 uppercase">
          {howItWorksTitle.split("3")[0]}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent px-1">
            3 PASSOS:
          </span>
        </h2>

        {/* 3 Step Cards */}
        <div className="space-y-3 mb-6">
          {howItWorksSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0f071f] border border-purple-500/20 p-4 sm:p-5 rounded-2xl flex items-center gap-4 text-left shadow-lg"
            >
              <div className="font-bebas text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent shrink-0 w-10 text-center">
                {item.step}
              </div>
              <div>
                <p className="text-white text-sm sm:text-base leading-snug">
                  <strong className="font-bold">{item.title}</strong> {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Graphic Icons Card */}
        <div className="bg-[#090312] border border-pink-500/25 rounded-2xl p-6 flex justify-around items-center shadow-xl">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-pink-500/40 text-pink-400 shadow-lg shadow-pink-500/10">
              <FolderDown className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">1. Baixar</span>
          </div>

          <div className="text-slate-600 font-bold text-lg">➔</div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-pink-500/40 text-pink-400 shadow-lg shadow-pink-500/10">
              <Video className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">2. Montar</span>
          </div>

          <div className="text-slate-600 font-bold text-lg">➔</div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-pink-500/40 text-pink-400 shadow-lg shadow-pink-500/10">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">3. Postar</span>
          </div>
        </div>

      </div>
    </section>
  );
};
