import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import { Check } from 'lucide-react';
import memberAreaMockup from '../assets/images/modules_package_bundle_1786368777236.jpg';

export const ModulesGrid: React.FC = () => {
  const { modulesTitle, modulesSubtitle, modules } = LANDING_CONTENT;

  return (
    <section className="py-8 px-4">
      <div className="max-w-xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="font-bebas text-3xl sm:text-4xl text-slate-900 tracking-wide mb-1">
            {modulesTitle}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            {modulesSubtitle}
          </p>
        </div>

        {/* Member Area Platform Visual Mockup */}
        <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 bg-white p-1.5 shadow-xl">
          <img
            src={memberAreaMockup}
            alt="Área de Membros do Projeto Vice City"
            referrerPolicy="no-referrer"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Clean, high-converting bullet check list */}
        <div className="space-y-2.5">
          {modules.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 p-3.5 rounded-xl flex items-start gap-3 text-left shadow-sm hover:border-pink-300 transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-slate-900 mr-1.5">{item.title}:</span>
                <span className="text-slate-700 font-medium">{item.description}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


