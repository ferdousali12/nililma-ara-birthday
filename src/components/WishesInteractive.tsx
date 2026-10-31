import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, MessageCircleHeart } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { WishNote } from '../types';
import { soundFx } from '../utils/audio';

export const WishesInteractive: React.FC = () => {
  const [wishes, setWishes] = useState<WishNote[]>(birthdayData.wishes);
  const [authorName, setAuthorName] = useState('');
  const [wishText, setWishText] = useState('');
  const [lanterns, setLanterns] = useState<Array<{ id: number; text: string }>>([]);

  const handleSendWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishText.trim()) return;

    soundFx.playBell(1046.5, 1.5, 0.15); // High bell chime

    const newWish: WishNote = {
      id: Date.now().toString(),
      author: authorName.trim() || 'A Dear Friend',
      text: wishText.trim(),
      timestamp: 'Just now',
      color: 'bg-[#FFFDF9] border-[#EADFD4]',
      isCustom: true,
    };

    setWishes([newWish, ...wishes]);

    // Release animated glowing lantern
    const newLantern = {
      id: Date.now(),
      text: wishText.trim(),
    };
    setLanterns((prev) => [...prev, newLantern]);

    setTimeout(() => {
      setLanterns((prev) => prev.filter((l) => l.id !== newLantern.id));
    }, 6000);

    setWishText('');
    setAuthorName('');
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Floating Sky Lanterns in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <AnimatePresence>
          {lanterns.map((lantern) => (
            <motion.div
              key={lantern.id}
              initial={{ y: '80vh', x: '50vw', opacity: 0, scale: 0.8 }}
              animate={{
                y: '-20vh',
                x: ['50vw', '45vw', '55vw', '48vw'],
                opacity: [0, 1, 1, 0],
                scale: 1.1,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 5.5, ease: 'easeOut' }}
              className="absolute flex flex-col items-center"
            >
              <div className="w-10 h-14 bg-gradient-to-t from-[#E87A5D] via-[#F4A261] to-[#FFE6A7] rounded-t-full rounded-b-md shadow-[0_0_25px_#F4A261] opacity-90 flex items-center justify-center text-[10px] text-[#403831] font-bold">
                🏮
              </div>
              <span className="text-[10px] font-serif italic text-[#C25E3E] mt-1 bg-white/80 px-2 py-0.5 rounded shadow-xs max-w-[150px] truncate">
                {lantern.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A3412] mb-2">
            <MessageCircleHeart className="w-3.5 h-3.5" />
            <span>Sky of Wishes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#242120] tracking-tight">
            Send a Birthday Wish To The Stars
          </h2>
          <p className="text-sm text-[#706458] mt-2">
            Leave a message for Nilima Ara or release a glowing sky lantern with your deepest prayer.
          </p>
        </div>

        {/* Wish Input Form */}
        <form
          onSubmit={handleSendWish}
          className="max-w-xl mx-auto bg-white p-5 sm:p-6 rounded-2xl border border-[#EADFD4] shadow-sm mb-12"
        >
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Your Name (e.g. Best Friend, Family, Well-wisher)"
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E5D7CA] rounded-xl focus:outline-none focus:border-[#9A3412]"
            />
            <div className="relative">
              <textarea
                value={wishText}
                onChange={(e) => setWishText(e.target.value)}
                placeholder="Write your birthday wish for Nilima Ara..."
                rows={3}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E5D7CA] rounded-xl focus:outline-none focus:border-[#9A3412] resize-none"
                required
              />
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-[#8C7A68] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#E87A5D]" />
                <span>Sends a lantern into the sky!</span>
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#9A3412] hover:bg-[#832B0F] text-white text-xs sm:text-sm font-medium transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Release Wish</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </form>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className={`p-5 rounded-2xl border ${wish.color} shadow-xs flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#8C7A68] mb-2 font-medium">
                  <span className="font-semibold text-[#242120]">{wish.author}</span>
                  <span className="text-[10px]">{wish.timestamp}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4036] leading-relaxed font-serif italic">
                  "{wish.text}"
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#F0E6DA] flex items-center justify-between text-[11px] text-[#A25A41]">
                <span>Happy Birthday Nilima</span>
                <span>♥</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
