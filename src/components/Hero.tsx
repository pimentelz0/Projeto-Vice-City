import React, { useState, useEffect } from 'react';
import { LANDING_CONTENT } from '../data/landingData';
import { getSavedVideoFromStorage } from '../utils/videoStorage';
import { CustomVideoPlayer } from './CustomVideoPlayer';

interface HeroProps {
  checkoutUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ checkoutUrl }) => {
  const { hero } = LANDING_CONTENT;
  const [videoSrc, setVideoSrc] = useState<string>(
    'https://youtube.com/shorts/kAGKngZx5dE?feature=share'
  );

  useEffect(() => {
    // If Supabase or custom storage has a saved video URL, use it
    getSavedVideoFromStorage().then((savedUrl) => {
      if (savedUrl && !savedUrl.startsWith('blob:')) {
        setVideoSrc(savedUrl);
      }
    });
  }, []);

  // Helper to extract embed iframe URL for YouTube or Google Drive
  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    
    // YouTube Shorts or standard YouTube video
    const ytShortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
    if (ytShortsMatch && ytShortsMatch[1]) {
      return { type: 'youtube', url: `https://www.youtube.com/embed/${ytShortsMatch[1]}?autoplay=1&rel=0` };
    }

    const ytWatchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    if (ytWatchMatch && ytWatchMatch[1]) {
      return { type: 'youtube', url: `https://www.youtube.com/embed/${ytWatchMatch[1]}?autoplay=1&rel=0` };
    }

    // Google Drive
    const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return { type: 'drive', url: `https://drive.google.com/file/d/${driveMatch[1]}/preview` };
    }

    return null;
  };

  const embedData = getEmbedUrl(videoSrc);

  return (
    <section className="relative pt-6 pb-8 px-4 text-center">
      <div className="max-w-xl mx-auto relative z-10">
        
        {/* Top Badge Pill */}
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-pink-200 bg-pink-50/90 backdrop-blur shadow-sm">
          <span className="text-[11px] sm:text-xs font-bold text-pink-900 uppercase tracking-wider">
            {hero.badge}
          </span>
        </div>

        {/* Main Headline Modeled after Reference Image */}
        <h1 className="font-bebas text-3xl sm:text-5xl tracking-wide leading-[1.08] mb-4 text-slate-900 uppercase">
          {hero.headlineLine1}
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{hero.headlineGta}</span>
          {hero.headlineLine2}
          <span className="text-pink-600 font-extrabold">{hero.headlinePronto}</span>
          {hero.headlineLine3}
          <span className="text-emerald-600 font-extrabold">{hero.headlineLucre}</span>
          {hero.headlineLine4 ? (
            <>
              {" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                MAIOR ONDA DE ATENÇÃO DA HISTÓRIA
              </span>
            </>
          ) : null}
        </h1>

        {/* Subheadline - Uppercase Bold Promise */}
        <p className="font-bebas text-lg sm:text-xl tracking-wide text-slate-700 uppercase leading-snug mb-6 max-w-lg mx-auto">
          {hero.subheadlineBold}
        </p>

        {/* Hero Video Container - Balanced aspect ratio & wider width */}
        <div className="mb-5 relative rounded-2xl overflow-hidden border-2 border-pink-500 shadow-xl bg-slate-900 p-1.5 max-w-[340px] sm:max-w-[420px] mx-auto">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black flex items-center justify-center">
            {embedData ? (
              <>
                <iframe
                  src={`${embedData.url}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
                  title="Vídeo do Projeto Vice City"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  className="w-full h-full border-0 rounded-xl"
                />
                {/* Subtle top mask overlay to hide publisher channel name/avatar if shown */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none z-10" />
              </>
            ) : (
              <CustomVideoPlayer videoSrc={videoSrc} />
            )}
          </div>
        </div>

        {/* Caption Under Video */}
        <p className="text-slate-800 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg mx-auto text-left bg-white p-4 rounded-xl border border-slate-200 shadow-md">
          Faltam poucos meses. <strong className="text-slate-900 font-bold">Quem entender o que está acontecendo agora</strong> pode entrar pra próxima geração de criadores lucrativos da internet. <span className="underline decoration-pink-500 underline-offset-4 font-medium">Quem só assistir, vai ver os outros faturarem.</span>
        </p>

        {/* Large Vice City CTA Button */}
        <div className="flex flex-col items-center gap-2">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.open(checkoutUrl, '_blank');
            }}
            className="w-full max-w-md py-4 sm:py-5 px-6 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-extrabold text-base sm:text-lg uppercase tracking-wide text-center block shadow-xl hover:shadow-2xl active:scale-[0.99] transition-all cursor-pointer"
          >
            {hero.ctaText}
          </a>

          <p className="text-slate-600 text-xs mt-1.5 flex items-center justify-center gap-1.5 font-medium">
            <span>⚡ Acesso imediato em uma área de membros</span>
          </p>
        </div>

      </div>
    </section>
  );
};
