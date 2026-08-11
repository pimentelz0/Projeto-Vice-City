import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import { FolderDown, Video, Rocket } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const { howItWorksTitle, howItWorksSteps } = LANDING_CONTENT;

  return (
    <section className="py-8 px-4">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="font-bebas text-3xl sm:text-4xl text-slate-900 tracking-wide mb-6 uppercase">
          {howItWorksTitle.split("3")[0]}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent px-1 font-black">
            3 PASSOS:
          </span>
        </h2>

        {/* 3 Step Cards */}
        <div className="space-y-3 mb-6">
          {howItWorksSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl flex items-center gap-4 text-left shadow-md"
            >
              <div className="font-bebas text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent shrink-0 w-10 text-center">
                {item.step}
              </div>
              <div>
                <p className="text-slate-800 text-sm sm:text-base leading-snug">
                  <strong className="font-bold text-slate-900">{item.title}</strong> {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Graphic Icons Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex justify-around items-center shadow-lg">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3.5 rounded-2xl bg-pink-50 border border-pink-200 text-pink-600 shadow-sm">
              <FolderDown className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">1. Baixar</span>
          </div>

          <div className="text-slate-400 font-bold text-lg">➔</div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3.5 rounded-2xl bg-pink-50 border border-pink-200 text-pink-600 shadow-sm">
              <Video className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">2. Montar</span>
          </div>

          <div className="text-slate-400 font-bold text-lg">➔</div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3.5 rounded-2xl bg-pink-50 border border-pink-200 text-pink-600 shadow-sm">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">3. Postar</span>
          </div>
        </div>

      </div>
    </section>
  );
};
