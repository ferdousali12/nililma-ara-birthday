import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const CulturalTouch: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-b border-[#EAE0D6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Subtle decorative floral divider */}
        <div className="flex items-center justify-center gap-3 text-[#C25E3E] mb-4">
          <span className="w-12 h-px bg-[#E2D2C2]" />
          <span className="text-sm">🌸</span>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9A3412]">
            Heritage & Blessings · বাংলাদেশ
          </span>
          <span className="text-sm">🌸</span>
          <span className="w-12 h-px bg-[#E2D2C2]" />
        </div>

        {/* Bengali Poetry Blessing */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#242120] italic font-medium leading-relaxed max-w-2xl mx-auto mb-4">
          "তোমার হাসিতে যেন সবসময় শরতের শুভ্র কাশফুল আর সুরভিত শিউলির স্নিগ্ধতা জড়িয়ে থাকে।"
        </h3>

        {/* English Translation & Cultural Context */}
        <p className="text-xs sm:text-sm text-[#706458] max-w-xl mx-auto leading-relaxed font-light">
          May your smile always carry the quiet grace of night-blooming shiuli flowers and the warmth of an autumn evening in Dhaka. Wishing you a year as pure and radiant as your soul, Nilima.
        </p>

        {/* Subtle Friendship Cultural Badge */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF9] border border-[#E3D6C9] text-xs text-[#5C5248]">
          <Heart className="w-3.5 h-3.5 text-[#E87A5D] fill-[#E87A5D]" />
          <span>A bond nurtured with laughter, cups of hot cha, and endless faith</span>
        </div>
      </div>
    </section>
  );
};
