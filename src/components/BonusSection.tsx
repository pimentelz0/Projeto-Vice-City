import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import bonusMockup from '../assets/images/bonus_package_mockup_1786309025662.jpg';

export const BonusSection: React.FC = () => {
  const { bonusesTitle, bonusesSubtitle, bonuses } = LANDING_CONTENT;

  return (
    <section className="py-6 px-4">
      <div className="max-w-xl mx-auto">
        
        <div className="bg-white border border-purple-200 rounded-xl p-5 text-center shadow-lg">
          
          <h2 className="font-bebas text-2xl sm:text-3xl text-slate-900 tracking-wider mb-1">
            {bonusesTitle}
          </h2>
          
          <p className="text-slate-600 text-xs mb-4">
            {bonusesSubtitle}
          </p>

          {/* Bonus Visual Mockup */}
          <div className="mb-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-1 shadow-md">
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
                    ? 'bg-amber-50/90 border-amber-300 shadow-md'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-lg shrink-0 mt-0.5">
                  {bonus.icon || "🎁"}
                </span>
                <div className="text-xs sm:text-sm leading-relaxed text-slate-800">
                  <strong className="font-bold text-slate-900 mr-1.5">
                    {bonus.title}
                  </strong>
                  <span className="text-slate-700 font-normal">
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

