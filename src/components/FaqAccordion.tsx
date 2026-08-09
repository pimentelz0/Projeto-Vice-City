import React, { useState } from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import { ChevronDown } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const { objectionsTitle, objectionsSubtitle, objections } = LANDING_CONTENT;
  const [openId, setOpenId] = useState<string | null>("o1"); // Open first by default for immediate clarity

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-xl mx-auto">
        
        <div className="text-center mb-6">
          <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide mb-1">
            {objectionsTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            {objectionsSubtitle}
          </p>
        </div>

        <div className="space-y-2.5">
          {objections.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#100a1f] border border-[#22133d] rounded-xl overflow-hidden text-left"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-white text-sm sm:text-base gap-3 hover:text-pink-300 transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-pink-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 font-medium">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

