import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import bonusMockup from '../assets/images/bonus_package_mockup_1786309025662.jpg';

export const BonusSection: React.FC = () => {
  const { bonusesTitle, bonusesSubtitle, bonuses } = LANDING_CONTENT;

  return (
    <section className="py-6 px-4">
      <div className="max-w-xl mx-auto">
        
        <div className="bg-[#120a24] border border-purple-500/30 rounded-xl p-5 text-center">
          
          <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wider mb-1">
            {bonusesTitle}
          </h2>
          
          <p className="text-slate-400 text-xs mb-4">
            {bonusesSubtitle}
          </p>

          {/* Bonus Visual Mockup */}
          <div className="mb-5 rounded-xl overflow-hidden border border-purple-500/30 bg-[#090412] p-1 shadow-lg">
            <img
              src={bonusMockup}
              alt="Bônus Exclusivos Projeto Vice City"
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <div className="space-y-3">
            {bonuses.map((bonus) => (
              <div
                key={bonus.id}
                className={`p-3.5 rounded-xl text-left border flex items-start gap-3 transition-all ${
                  bonus.isFastAction
                    ? 'bg-[#150a10] border-amber-500/40 shadow-lg shadow-amber-500/5'
                    : 'bg-[#090412] border-purple-500/20'
                }`}
              >
                <span className="text-lg shrink-0 mt-0.5">
                  {bonus.icon || "🎁"}
                </span>
                <div className="text-xs sm:text-sm leading-relaxed text-slate-200">
                  <strong className="font-bold text-white mr-1.5">
                    {bonus.title}
                  </strong>
                  <span className="text-slate-300 font-normal">
                    {bonus.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

