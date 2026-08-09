import React, { useState } from 'react';
import { Copy, Check, Code2, Smartphone, Monitor, Link as LinkIcon, Settings } from 'lucide-react';

interface ExportToolBarProps {
  checkoutUrl: string;
  setCheckoutUrl: (url: string) => void;
  onOpenCodeModal: () => void;
  onCopyCode: () => void;
  copied: boolean;
  isMobileView: boolean;
  setIsMobileView: (val: boolean) => void;
}

export const ExportToolBar: React.FC<ExportToolBarProps> = ({
  checkoutUrl,
  setCheckoutUrl,
  onOpenCodeModal,
  onCopyCode,
  copied,
  isMobileView,
  setIsMobileView
}) => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="bg-[#100922] border-b border-pink-500/20 text-xs py-2 px-3 relative z-50">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Left Status & Brand */}
        <div className="flex items-center gap-2 text-slate-200 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-white">Projeto Vice City</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">Landing Page HTML + CSS Pronta</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center flex-wrap gap-2">
          
          {/* Checkout URL Customizer */}
          <div className="relative">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-800 text-slate-300 font-semibold transition-colors border border-slate-700/60"
              title="Configurar link do checkout"
            >
              <LinkIcon className="w-3.5 h-3.5 text-pink-400" />
              <span className="hidden sm:inline">Link Checkout:</span>
              <span className="text-pink-300 max-w-[80px] truncate">{checkoutUrl}</span>
              <Settings className="w-3 h-3 text-slate-400" />
            </button>

            {showSettings && (
              <div className="absolute top-full right-0 mt-1.5 w-72 p-3 bg-[#180e30] border border-pink-500/30 rounded-xl shadow-2xl z-50 text-left">
                <label className="block text-slate-300 text-[11px] font-bold mb-1">
                  URL do seu Checkout (Hotmart / Kiwify / etc):
                </label>
                <input
                  type="text"
                  value={checkoutUrl}
                  onChange={(e) => setCheckoutUrl(e.target.value)}
                  placeholder="https://pay.kiwify.com.br/..."
                  className="w-full px-2.5 py-1.5 rounded bg-[#090412] border border-slate-700 text-white text-xs focus:outline-none focus:border-pink-500 mb-2"
                />
                <p className="text-[10px] text-slate-400 leading-tight">
                  Este link será inserido em todos os botões CTA no código HTML gerado.
                </p>
              </div>
            )}
          </div>

          {/* Device view toggle */}
          <div className="flex items-center rounded-md bg-slate-900 border border-slate-800 p-0.5">
            <button
              onClick={() => setIsMobileView(true)}
              className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${
                isMobileView ? 'bg-pink-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Visualização Mobile"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Mobile</span>
            </button>
            <button
              onClick={() => setIsMobileView(false)}
              className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${
                !isMobileView ? 'bg-pink-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Visualização Desktop Full"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Full</span>
            </button>
          </div>

          {/* 1-Click Copy Code Button */}
          <button
            onClick={onCopyCode}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold shadow-sm transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiado!' : 'Copiar HTML Completo'}</span>
          </button>

          {/* View Raw Code Modal Button */}
          <button
            onClick={onOpenCodeModal}
            className="p-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors"
            title="Ver código fonte em tela cheia"
          >
            <Code2 className="w-4 h-4 text-purple-300" />
          </button>

        </div>

      </div>
    </div>
  );
};
