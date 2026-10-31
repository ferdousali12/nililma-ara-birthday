import React, { useState } from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const [loveCount, setLoveCount] = useState<number>(108);
  const [justLiked, setJustLiked] = useState<boolean>(false);

  const handleSendLove = () => {
    soundFx.playBell(987.77, 1.2, 0.12); // B5 note
    setLoveCount((prev) => prev + 1);
    setJustLiked(true);
    setTimeout(() => setJustLiked(false), 800);
  };

  const scrollToTop = () => {
    soundFx.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1615] text-[#FAF7F2] pt-20 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Decorative subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E87A5D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Calligraphic Closing Note */}
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#E87A5D] mb-4 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>A Timeless Tribute</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white mb-4">
          Happy Birthday, <br />
          <span className="italic font-normal text-[#F4A261]">{birthdayData.name}</span>
        </h2>

        <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto font-light leading-relaxed mb-8">
          May the year ahead bring you unmeasurable happiness, boundless health, peace, and unforgettable adventures.
          Never change the wonderful, radiant soul you are.
        </p>

        {/* Interactive "Send Love to Nilima" counter */}
        <div className="mb-12">
          <button
            onClick={handleSendLove}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
              justLiked
                ? 'bg-[#E87A5D] text-[#1A1615] scale-105'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <Heart
              className={`w-4 h-4 text-[#E87A5D] ${justLiked ? 'fill-[#1A1615] text-[#1A1615]' : 'fill-[#E87A5D]'}`}
            />
            <span>Send Love to Nilima</span>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-[11px] tabular-nums font-mono text-white">
              {loveCount}
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 max-w-md mx-auto mb-8" />

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>Made with endless love by your best friend</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-[#F4A261]">Dhaka, Bangladesh</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="mt-8 text-[11px] text-white/35 font-mono">
          October 31, 2026 · A Digital Birthday Keepsake
        </p>
      </div>
    </footer>
  );
};
