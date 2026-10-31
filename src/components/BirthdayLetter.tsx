import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Mail, CheckCircle2, Send } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { soundFx } from '../utils/audio';

export const BirthdayLetter: React.FC = () => {
  const [hugCount, setHugCount] = useState<number>(1);
  const [hasSentHug, setHasSentHug] = useState<boolean>(false);
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; x: number }>>([]);

  const handleSendHug = () => {
    soundFx.playBell(587.33, 1.2, 0.12); // D5 chime
    setHugCount((prev) => prev + 1);
    setHasSentHug(true);

    const newHeart = {
      id: Date.now() + Math.random(),
      x: (Math.random() - 0.5) * 60,
    };
    setFloatingHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1500);
  };

  return (
    <section id="letter" className="py-16 sm:py-24 bg-[#F5EFE6]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A3412] mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>A Personal Letter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#242120] tracking-tight">
            Words Straight From The Heart
          </h2>
          <p className="text-sm text-[#706458] mt-2">
            To my dearest best friend — a reminder of how much you are appreciated.
          </p>
        </div>

        {/* Parchment Digital Letter Container */}
        <div className="relative bg-[#FFFDF9] rounded-2xl shadow-[0_10px_35px_rgba(36,33,32,0.06)] border border-[#E8DDCE] p-6 sm:p-12 md:p-14 overflow-hidden">
          {/* Subtle paper grain corner decor */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#EFE5D8]/50 to-transparent pointer-events-none rounded-tr-2xl" />
          
          {/* Decorative Stamp in Corner */}
          <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center justify-center w-16 h-20 border-2 border-dashed border-[#D5C2AF] rounded bg-[#FAF5EE] text-[#8C7A68] p-1 text-center select-none transform rotate-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#9A3412]">POST</span>
            <span className="text-xs">♥</span>
            <span className="text-[8px] tracking-tight mt-0.5">DHAKA BD</span>
            <span className="text-[9px] font-mono text-[#A89887]">2026</span>
          </div>

          {/* Letter Salutation */}
          <div className="mb-6">
            <span className="text-xs font-mono uppercase text-[#A89887] tracking-wider block mb-1">
              {birthdayData.letter.date}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#242120]">
              {birthdayData.letter.salutation}
            </h3>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-[#403831] leading-relaxed font-light">
            {birthdayData.letter.paragraphs.map((p, idx) => (
              <p key={idx} className="relative">
                {idx === 0 && (
                  <span className="float-left text-4xl sm:text-5xl font-serif font-bold text-[#9A3412] leading-none pr-3 pt-1">
                    H
                  </span>
                )}
                {idx === 0 ? p.slice(1) : p}
              </p>
            ))}
          </div>

          {/* Letter Closing & Handwritten Signature */}
          <div className="mt-10 pt-6 border-t border-[#EFE7DE] flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div>
              <p className="text-sm text-[#706458] mb-1 font-sans">
                {birthdayData.letter.closing}
              </p>
              {/* Handwritten signature using Caveat font */}
              <p className="text-3xl sm:text-4xl text-[#9A3412] font-handwriting rotate-[-2deg] select-none tracking-wide">
                {birthdayData.letter.signature}
              </p>
              <p className="text-xs text-[#8A7E72] mt-1 italic">
                {birthdayData.letter.postscript}
              </p>
            </div>

            {/* Interactive "Send a Hug Back" Button */}
            <div className="relative">
              <button
                onClick={handleSendHug}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF3EC] hover:bg-[#F3E7DC] text-[#7A3622] border border-[#E5D7CA] text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <Heart className={`w-4 h-4 text-[#C25E3E] ${hasSentHug ? 'fill-[#C25E3E]' : ''}`} />
                <span>Send a Hug Back</span>
                <span className="px-1.5 py-0.5 rounded-full bg-white text-[11px] font-bold text-[#9A3412] tabular-nums">
                  {hugCount}
                </span>
              </button>

              {/* Floating Hearts Animation */}
              <AnimatePresence>
                {floatingHearts.map((h) => (
                  <motion.div
                    key={h.id}
                    initial={{ opacity: 1, y: 0, x: h.x, scale: 0.8 }}
                    animate={{ opacity: 0, y: -70, scale: 1.4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="absolute -top-4 left-1/2 pointer-events-none text-[#C25E3E]"
                  >
                    ❤️
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Subtle Bengali Touch at bottom */}
          <div className="mt-8 pt-4 border-t border-[#F3EBE1] flex items-center justify-between text-xs text-[#8C7A68]">
            <span className="flex items-center gap-1.5 italic font-serif">
              <Sparkles className="w-3.5 h-3.5 text-[#E87A5D]" />
              <span>"শুভ জন্মদিন নীলিমা — বন্ধুত্ব চিরদিনের।"</span>
            </span>
            <span className="text-[11px]">Best Friend Handwritten Archive</span>
          </div>
        </div>
      </div>
    </section>
  );
};
