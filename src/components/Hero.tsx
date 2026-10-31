import React from 'react';
import { motion } from 'motion/react';
import { Heart, ArrowDown, Sparkles, Cake } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { soundFx } from '../utils/audio';

export const Hero: React.FC = () => {
  const handleScrollToLetter = () => {
    soundFx.playPop();
    document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCake = () => {
    soundFx.playPop();
    document.getElementById('cake')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E87A5D]/10 via-[#F4A261]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A25A41] uppercase mb-3">
              <span>{birthdayData.heroTagline}</span>
              <span aria-hidden="true">·</span>
              <span>{birthdayData.location}</span>
            </div>

            {/* Bengali calligraphy title */}
            <div className="text-sm sm:text-base font-serif text-[#C25E3E] italic mb-1 font-medium tracking-wide">
              {birthdayData.bengaliGreeting}
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#242120] tracking-tight leading-[1.1] mb-6">
              Happy Birthday, <br />
              <span className="italic font-normal text-[#9A3412] relative inline-block">
                Nilima Ara
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2 text-[#E87A5D]/60"
                  viewBox="0 0 250 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C50 1.5 150 1.5 249 5.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Heartfelt Subtitle */}
            <p className="text-base sm:text-lg text-[#5C5248] font-light leading-relaxed max-w-xl mb-8">
              {birthdayData.heroSubtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleScrollToLetter}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9A3412] hover:bg-[#832B0F] text-white font-medium text-sm transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Heart className="w-4 h-4 text-[#F4A261] fill-[#F4A261]" />
                <span>Read Best Friend's Letter</span>
              </button>

              <button
                onClick={handleScrollToCake}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F7F2EC] text-[#3E342B] border border-[#E3D6C9] font-medium text-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Cake className="w-4 h-4 text-[#9A3412]" />
                <span>Make a Wish & Cut Cake</span>
              </button>
            </div>

            {/* Subtle quote footer note */}
            <p className="mt-8 text-xs text-[#8A7E72] flex items-center gap-1.5 italic">
              <Sparkles className="w-3.5 h-3.5 text-[#E87A5D]" />
              <span>"True friends are like stars in the Dhaka sky — steady, luminous, and always there."</span>
            </p>
          </motion.div>

          {/* Right Column: Personalized Portrait Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative vintage frame matting */}
              <div className="relative bg-white p-3.5 sm:p-4 rounded-2xl shadow-[0_15px_35px_rgba(36,33,32,0.08)] border border-[#EADFD4] transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Real photo of Nilima Ara */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#F0E8DE]">
                  <img
                    src={birthdayData.heroPortrait}
                    alt="Nilima Ara smiling warmly"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle photo frame overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Photo caption badge */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-serif italic text-white/95">
                      "Radiant as always · October 2026"
                    </p>
                    <p className="text-[10px] text-white/75 font-sans">
                      Nilima Ara · Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Handcrafted frame caption note */}
                <div className="mt-3.5 pt-3 border-t border-[#F0E6DC] flex items-center justify-between text-xs text-[#7A6E63]">
                  <span className="font-serif italic text-[#3E342B]">Nilima Ara</span>
                  <span className="text-[11px] text-[#A25A41] font-medium">Best Friend Edition</span>
                </div>
              </div>

              {/* Decorative floating stamps / stickers */}
              <div className="absolute -top-3 -right-3 bg-[#E87A5D] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md transform rotate-12 flex items-center gap-1">
                <span>♥</span>
                <span>Birthday Star</span>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-[#FAF7F2] text-[#3E342B] border border-[#E3D6C9] text-[11px] font-medium px-3 py-1 rounded-full shadow-sm transform -rotate-6">
                ✨ Special Day
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width Milestone strip placed below hero split */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#EAE0D6] grid grid-cols-2 md:grid-cols-4 gap-6">
          {birthdayData.milestones.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#9A3412] tabular-nums">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm text-[#7A6E63] mt-1 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
