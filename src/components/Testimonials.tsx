import React from 'react';
import { LANDING_CONTENT } from '../data/landingData';

export const Testimonials: React.FC = () => {
  const { testimonialsTitle, testimonialsSubtitle, testimonials } = LANDING_CONTENT;

  return (
    <section className="py-8 px-4">
      <div className="max-w-xl mx-auto">
        
        <div className="text-center mb-4">
          <h2 className="font-bebas text-3xl sm:text-4xl text-slate-900 tracking-wide mb-1">
            {testimonialsTitle}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            {testimonialsSubtitle}
          </p>
          <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-[11px] font-medium tracking-wider">
            <span>Arraste &rarr;</span>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-[280px] sm:w-[310px] shrink-0 snap-start bg-white border border-slate-200 p-4 rounded-xl text-left flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-[11px] font-semibold text-slate-700">
                    {item.avatarPlaceholder}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {item.name}
                    </h3>
                    <div className="text-amber-500 text-xs mt-0.5 tracking-widest">
                      ★★★★★
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 text-xs leading-relaxed font-sans bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


