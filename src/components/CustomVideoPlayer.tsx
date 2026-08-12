import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface CustomVideoPlayerProps {
  videoSrc: string;
}

export const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt autoplay muted
    video.muted = true;
    setIsMuted(true);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Autoplay prevented:', err);
          setIsPlaying(false);
        });
    }

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play()?.catch(() => {});
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoSrc]);

  const handleContainerClick = () => {
    const video = videoRef.current;
    if (!video) return;

    // If currently muted, clicking unmutes the video first and plays
    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      video.play()?.catch(() => {});
      setIsPlaying(true);
      return;
    }

    // Otherwise toggle play/pause
    if (video.paused) {
      video.play()?.catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      onClick={handleContainerClick}
      className="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center cursor-pointer select-none group"
    >
      <video
        ref={videoRef}
        key={videoSrc}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover rounded-xl"
      />

      {/* Tap to Unmute Floating Banner (visible when muted) */}
      {isMuted && (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2 bg-pink-600/90 hover:bg-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-md animate-pulse border border-pink-400/50">
          <VolumeX className="w-4 h-4" />
          <span>TOQUE P/ OUVIR COM SOM</span>
        </div>
      )}

      {/* Volume Button (visible when unmuted) */}
      {!isMuted && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute top-3 right-3 z-20 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full border border-pink-500/40 shadow-md backdrop-blur-sm transition-transform active:scale-95"
          title="Alternar áudio"
        >
          <Volume2 className="w-4 h-4 text-pink-400" />
        </button>
      )}

      {/* Play/Pause Center Indicator when Paused */}
      {!isPlaying && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white shadow-2xl border-2 border-white/80 animate-bounce">
            <Play className="w-8 h-8 fill-current ml-1" />
          </div>
        </div>
      )}

      {/* Ultra-sleek Bottom Progress Bar (No Darkening) */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-950/40 z-20">
        <div
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
