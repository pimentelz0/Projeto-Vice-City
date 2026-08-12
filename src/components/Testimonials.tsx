import React, { useState, useRef } from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import { ZoomIn, X, CheckCircle2, ChevronLeft, ChevronRight, Video, Phone, MoreVertical, Signal, Wifi, Battery, Smile, Paperclip, Camera, Mic, CheckCheck } from 'lucide-react';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const { testimonialsTitle, testimonialsSubtitle, testimonials } = LANDING_CONTENT;
  const [selectedModalItem, setSelectedModalItem] = useState<TestimonialItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -310 : 310;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderWhatsappScreenshot = (item: TestimonialItem, isModal = false) => {
    const isAluna = item.role?.includes('Aluna');
    const displayRole = isAluna ? 'Aluna' : 'Aluno';
    const proof = item.dashboardProof;

    // Custom battery % and time per student screenshot
    const batteryLevel = item.name === 'Mirelly' ? '63%' : item.name === 'Luiz' ? '72%' : item.name === 'Lucas' ? '48%' : '80%';
    const currentTime = proof?.timestamp || '13:56';

    return (
      <div className="bg-[#0b141a] text-slate-100 font-sans relative border border-slate-800 select-none overflow-hidden rounded-xl shadow-inner text-left">
        {/* Phone Top Status Bar */}
        <div className="bg-[#111b21] px-3 py-1 flex items-center justify-between text-[10px] text-slate-400 font-medium border-b border-slate-800/80">
          <span className="font-semibold text-slate-300">{currentTime}</span>
          <div className="flex items-center gap-2 text-[10px]">
            <Signal className="w-3 h-3 text-slate-300" />
            <Wifi className="w-3 h-3 text-slate-300" />
            <div className="flex items-center gap-1">
              <span className="text-slate-300 font-bold">{batteryLevel}</span>
              <Battery className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Header */}
        <div className="bg-[#111b21] px-2.5 py-2 flex items-center justify-between border-b border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 min-w-0">
            <ChevronLeft className="w-4 h-4 text-[#8696a0]" />
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-700 text-white flex items-center justify-center text-xs font-bold shrink-0 border border-emerald-400/40">
              {item.avatarPlaceholder}
            </div>
            <div className="truncate">
              <div className="font-semibold text-slate-100 text-xs leading-tight truncate">
                {item.name} - {displayRole}
              </div>
              <div className="text-[10px] text-[#25d366] font-medium leading-none">online</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#8696a0]">
            <Video className="w-3.5 h-3.5" />
            <Phone className="w-3.5 h-3.5" />
            <MoreVertical className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* WhatsApp Chat Body Area */}
        <div className={`p-2.5 bg-[#0b141a] ${isModal ? 'min-h-[380px]' : 'min-h-[330px]'} flex flex-col justify-end space-y-2 text-left relative`}>
          {/* Date Tag */}
          <div className="self-center bg-[#1f2c34] text-[#8696a0] text-[9px] font-semibold px-2 py-0.5 rounded-md my-0.5 shadow-sm">
            Hoje
          </div>

          {/* WhatsApp Chat Message Bubble */}
          <div className="bg-[#202c33] p-2.5 rounded-xl rounded-tl-xs text-slate-100 text-xs shadow-md border border-slate-700/50 max-w-[98%] mx-auto w-full">
            
            {/* TikTok Creative Program Panel Card Attachment (100% PT-BR) */}
            {proof && (
              <div className="bg-white text-slate-900 rounded-xl p-2.5 mb-2 border border-slate-200 shadow-sm font-sans text-left">
                {/* TikTok Top bar */}
                <div className="flex items-center justify-between text-[9px] text-slate-500 pb-1 mb-1 border-b border-slate-100 font-medium">
                  <span className="font-bold text-slate-800">&lt; Painel do Programa Criativo</span>
                  <span>Última atualização: {proof.lastUpdate}</span>
                </div>
                
                {/* Total Estimated Rewards */}
                <div className="text-center my-1.5 bg-slate-50 py-2 rounded-lg border border-slate-100">
                  <div className="text-[8px] text-slate-500 uppercase tracking-wide font-bold">
                    Total estimado de recompensas obtidas até a data
                  </div>
                  <div className="text-xl font-black text-slate-900 tracking-tight my-0.5">
                    {proof.totalAmount}
                  </div>
                  <span className="inline-block bg-[#fe2c55] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-md shadow-xs">
                    Ver saldo
                  </span>
                </div>

                {/* TikTok Metrics Grid */}
                <div className="grid grid-cols-3 gap-1 text-center text-[9px] pt-1 border-t border-slate-100">
                  <div>
                    <div className="text-slate-400 text-[8px]">Recompensas</div>
                    <div className="font-extrabold text-slate-800">{proof.estimatedRewards}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[8px]">Views Qualificadas</div>
                    <div className="font-extrabold text-slate-800">{proof.views}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[8px]">RPM</div>
                    <div className="font-extrabold text-slate-800">{proof.rpm}</div>
                  </div>
                </div>

                {/* Reward Trend Graph */}
                <div className="mt-2 h-9 w-full bg-pink-50/70 rounded flex items-end px-1 pb-0.5 overflow-hidden border border-pink-100">
                  <svg className="w-full h-full text-pink-500" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0 25 Q15 28 25 10 T50 20 T75 5 T100 22 L100 30 L0 30 Z" fill="currentColor" fillOpacity="0.25" />
                    <path d="M0 25 Q15 28 25 10 T50 20 T75 5 T100 22" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
            )}

            {/* Portuguese Message Text */}
            <p className="whitespace-pre-line text-[11px] leading-relaxed text-slate-100 font-sans">
              {item.content}
            </p>

            {/* Timestamp & Blue Double Check mark */}
            <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400">
              <span>{currentTime}</span>
              <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
            </div>
          </div>
        </div>

        {/* Bottom WhatsApp Input Bar */}
        <div className="bg-[#111b21] px-2 py-1.5 flex items-center gap-1.5 border-t border-slate-800 text-[#8696a0]">
          <Smile className="w-4 h-4 shrink-0" />
          <div className="flex-1 bg-[#2a3942] text-slate-300 text-[10px] px-2.5 py-1 rounded-full border border-slate-700 flex items-center justify-between">
            <span>Mensagem</span>
            <div className="flex items-center gap-1.5 text-[#8696a0]">
              <Paperclip className="w-3 h-3" />
              <span className="text-[9px] font-bold">R$</span>
              <Camera className="w-3 h-3" />
            </div>
          </div>
          <div className="w-6 h-6 rounded-full bg-[#00a884] text-white flex items-center justify-center shrink-0">
            <Mic className="w-3 h-3" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 px-4 bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Prints Reais de Alunos</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-4xl text-slate-900 tracking-wide mb-1">
            {testimonialsTitle}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            {testimonialsSubtitle}
          </p>
          <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold tracking-wide">
            <span>Deslize para o lado &rarr;</span>
          </div>
        </div>

        {/* Horizontal Scroll Carousel Wrapper with Left/Right Control Buttons */}
        <div className="relative group">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-slate-900/90 hover:bg-slate-900 text-white p-2 sm:p-2.5 rounded-full shadow-xl border border-slate-700 transition-all cursor-pointer opacity-90 group-hover:opacity-100"
            title="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-slate-900/90 hover:bg-slate-900 text-white p-2 sm:p-2.5 rounded-full shadow-xl border border-slate-700 transition-all cursor-pointer opacity-90 group-hover:opacity-100"
            title="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 4 Testimonials Side-Scrolling Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 px-2 sm:px-4 touch-pan-x touch-pan-y overscroll-x-contain scrollbar-thin scrollbar-thumb-slate-300"
            style={{ touchAction: 'pan-x pan-y', WebkitOverflowScrolling: 'touch' }}
          >
            {testimonials.map((item) => {
              const isAluna = item.role?.includes('Aluna');
              const displayRole = isAluna ? 'Aluna' : 'Aluno';

              return (
                <div
                  key={item.id}
                  className="w-[285px] sm:w-[320px] shrink-0 snap-center bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  style={{ touchAction: 'pan-x pan-y' }}
                >
                  {/* Card Header Info */}
                  <div className="p-3 bg-white border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 text-xs font-extrabold shadow-xs">
                        {item.avatarPlaceholder}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-xs leading-tight flex items-center gap-1">
                          {item.name}
                          <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1 py-0.2 rounded font-semibold">
                            {displayRole}
                          </span>
                        </h3>
                        <div className="text-amber-400 text-[9px] tracking-wider font-bold">
                          ★★★★★ <span className="text-slate-400 font-normal text-[9px]">Verificado</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-extrabold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
                      {item.dashboardProof?.totalAmount}
                    </span>
                  </div>

                  {/* Render Screenshot Content */}
                  <div 
                    onClick={() => setSelectedModalItem(item)}
                    className="p-1.5 bg-slate-950 cursor-pointer group/card relative"
                  >
                    {renderWhatsappScreenshot(item)}

                    <div className="absolute inset-0 bg-slate-950/20 group-hover/card:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover/card:opacity-100 pointer-events-none rounded-xl">
                      <span className="bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-2xl border border-slate-700 backdrop-blur-md">
                        <ZoomIn className="w-3.5 h-3.5 text-pink-400" /> Ampliar
                      </span>
                    </div>
                  </div>

                  {/* Footer Badge & Action */}
                  <div className="p-2.5 bg-slate-50 text-center border-t border-slate-100 flex items-center justify-between px-3">
                    <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {item.resultBadge}
                    </span>
                    <button
                      onClick={() => setSelectedModalItem(item)}
                      className="text-[11px] font-bold text-pink-600 hover:text-pink-700 underline cursor-pointer"
                    >
                      Ampliar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fullscreen Modal showing 100% Crisp Portuguese Screenshot */}
        {selectedModalItem && (
          <div 
            onClick={() => setSelectedModalItem(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in cursor-pointer overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedModalItem(null)}
              className="fixed top-4 right-4 bg-slate-800/80 hover:bg-slate-700 text-white p-2.5 rounded-full transition-colors z-50 border border-slate-600 shadow-xl cursor-pointer"
              title="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-sm sm:max-w-md w-full my-auto rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl p-2"
            >
              {renderWhatsappScreenshot(selectedModalItem, true)}

              <div className="p-3 bg-slate-900 border-t border-slate-800 text-center mt-2 rounded-xl">
                <p className="text-xs text-slate-200 font-bold">
                  {selectedModalItem.resultBadge}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Print de conversa autêntica no WhatsApp em Português (BR)
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};






