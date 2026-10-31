import React from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';

interface NavbarProps {
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  onReopenIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isAudioPlaying,
  onToggleAudio,
  onReopenIntro,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EADFD4] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-serif font-bold tracking-tight text-[#242120] hover:text-[#9A3412] transition-colors whitespace-nowrap shrink-0"
        >
          <span className="text-[#E87A5D]">♥</span>
          <span>{birthdayData.name}</span>
          <span className="text-xs font-sans font-normal text-[#8A7E72] hidden sm:inline">
            · Birthday 2026
          </span>
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-[#655A51]">
          <a
            href="#letter"
            className="hover:text-[#242120] transition-colors whitespace-nowrap shrink-0"
          >
            Best Friend's Letter
          </a>
          <a
            href="#memories"
            className="hover:text-[#242120] transition-colors whitespace-nowrap shrink-0"
          >
            Memories Gallery
          </a>
          <a
            href="#cake"
            className="hover:text-[#242120] transition-colors whitespace-nowrap shrink-0"
          >
            Birthday Cake & Wish
          </a>
          <a
            href="#vouchers"
            className="hover:text-[#242120] transition-colors whitespace-nowrap shrink-0"
          >
            Special Surprise
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onReopenIntro}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#7A6E63] hover:text-[#242120] hover:bg-[#EFE7DE] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="Replay opening screen"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E87A5D]" />
            <span>Intro</span>
          </button>

          <button
            onClick={onToggleAudio}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              isAudioPlaying
                ? 'bg-[#E87A5D] text-white shadow-sm shadow-[#E87A5D]/40'
                : 'bg-[#EFE7DE] text-[#4A4036] hover:bg-[#E4D7CA]'
            }`}
            title={isAudioPlaying ? 'Mute background melody' : 'Play soft music box melody'}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5" />
                <span>Melody: On</span>
                {/* Visualizer bars */}
                <span className="flex items-end gap-0.5 h-3 ml-0.5">
                  <span className="w-0.5 h-full bg-white animate-pulse" />
                  <span className="w-0.5 h-2 bg-white animate-pulse delay-75" />
                  <span className="w-0.5 h-2.5 bg-white animate-pulse delay-150" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#8A7E72]" />
                <span>Play Melody</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
