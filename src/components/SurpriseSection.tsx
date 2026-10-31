import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Gift,
  Flame,
  Wind,
  Check,
  Copy,
  PartyPopper,
  Shield,
  Coffee,
  PhoneCall,
  Film,
  HeartHandshake,
  Utensils,
} from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { soundFx } from '../utils/audio';
import confetti from 'canvas-confetti';

export const SurpriseSection: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState<boolean>(true);
  const [isCakeCut, setIsCakeCut] = useState<boolean>(false);
  const [isGiftOpened, setIsGiftOpened] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [claimedCodes, setClaimedCodes] = useState<Record<string, boolean>>({});

  // Blow out candles handler
  const handleBlowCandles = () => {
    soundFx.playBell(783.99, 1.5, 0.15); // G5 bell
    soundFx.playChimeChord();
    setCandlesLit(false);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E87A5D', '#F4A261', '#2A9D8F', '#E76F51', '#E9C46A'],
      });
    } catch {
      // Confetti fallback
    }
  };

  // Relight candles
  const handleRelight = () => {
    soundFx.playPop();
    setCandlesLit(true);
    setIsCakeCut(false);
  };

  // Cut cake handler
  const handleCutCake = () => {
    soundFx.playBell(880, 1.2, 0.12);
    setIsCakeCut(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F4A261', '#E87A5D', '#D4A373'],
      });
    } catch {
      // Confetti fallback
    }
  };

  // Open surprise gifts
  const handleOpenGiftBox = () => {
    soundFx.playChimeChord();
    setIsGiftOpened(true);
    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#E87A5D', '#F4A261', '#2A9D8F', '#E76F51', '#264653'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleCopyCode = (code: string) => {
    soundFx.playPop();
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleClaim = (id: string) => {
    soundFx.playBell(1046.50, 1.2, 0.15);
    setClaimedCodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper icon renderer
  const renderGiftIcon = (name: string) => {
    switch (name) {
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-[#9A3412]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#9A3412]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#9A3412]" />;
      case 'Film':
        return <Film className="w-5 h-5 text-[#9A3412]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#9A3412]" />;
      default:
        return <Gift className="w-5 h-5 text-[#9A3412]" />;
    }
  };

  return (
    <section id="cake" className="py-16 sm:py-24 bg-[#F5EFE6]/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A3412] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Birthday Celebration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#242120] tracking-tight">
            Make a Wish & Cut The Cake
          </h2>
          <p className="text-sm text-[#706458] mt-2">
            Tap the candles to blow them out, make your secret wish, and slice the birthday cake!
          </p>
        </div>

        {/* The Interactive Cake Stage */}
        <div className="max-w-xl mx-auto bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-[#E8DDCE] shadow-[0_15px_40px_rgba(36,33,32,0.06)] text-center relative">
          {/* Wish Banner Status */}
          <div className="mb-8">
            {candlesLit ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-xs font-medium text-[#9A3412] border border-[#ECD9C6]">
                <Flame className="w-3.5 h-3.5 text-[#E87A5D] animate-bounce" />
                <span>Candles are burning bright — Make a wish!</span>
              </span>
            ) : isCakeCut ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-xs font-medium text-emerald-800 border border-emerald-200">
                <PartyPopper className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cake has been served! Wish locked in forever. ✨</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-xs font-medium text-amber-800 border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Candles blown! Now click to slice the cake. 🍰</span>
              </span>
            )}
          </div>

          {/* SVG Illustrated Multi-Tier Birthday Cake */}
          <div className="relative w-64 sm:w-72 h-56 mx-auto flex items-end justify-center pb-2 select-none">
            {/* Cake Stand */}
            <div className="absolute bottom-0 w-52 sm:w-60 h-4 bg-[#E0D4C5] rounded-full shadow-md z-0" />
            <div className="absolute bottom-2 w-28 h-5 bg-[#D4C3B2] rounded-t-lg z-0" />

            {/* Bottom Tier (Vanilla & Caramel) */}
            <div className="relative w-44 sm:w-52 h-20 bg-gradient-to-r from-[#F4EBD9] via-[#FAF3E8] to-[#EFE2CE] rounded-2xl shadow-inner border border-[#E5D7C7] flex flex-col justify-end p-2 z-10">
              {/* Frosting drips */}
              <div className="absolute -top-2 left-0 right-0 h-4 flex justify-around">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-[#FAF3E8] rounded-full shadow-xs" />
                ))}
              </div>
              {/* Strawberry decorative pearls */}
              <div className="flex justify-around items-center px-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xs">🍓</span>
                ))}
              </div>
            </div>

            {/* Top Tier (Berry Frosting) */}
            <div className="absolute bottom-18 w-32 sm:w-36 h-16 bg-gradient-to-r from-[#FCEAE6] via-[#FFF1EE] to-[#F7DDD7] rounded-xl border border-[#F2CFC8] flex flex-col justify-end p-1.5 z-20">
              {/* Frosting swirls */}
              <div className="absolute -top-1.5 left-0 right-0 h-3 flex justify-around">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-[#FFF1EE] rounded-full" />
                ))}
              </div>
              <div className="text-[11px] font-serif font-bold text-[#9A3412] text-center tracking-wider pb-1">
                NILIMA
              </div>
            </div>

            {/* 3 Candles */}
            <div className="absolute bottom-34 z-30 flex items-end gap-6 sm:gap-7">
              {[0, 1, 2].map((candleIndex) => (
                <div key={candleIndex} className="relative flex flex-col items-center">
                  {/* Flame or smoke */}
                  <AnimatePresence>
                    {candlesLit ? (
                      <motion.div
                        key="flame"
                        initial={{ scale: 0.8 }}
                        animate={{
                          scale: [1, 1.15, 0.95, 1],
                          y: [0, -2, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.7 + candleIndex * 0.15,
                        }}
                        className="w-3 h-5 bg-gradient-to-t from-[#F4A261] via-[#FFD166] to-[#FFE6A7] rounded-full shadow-[0_0_12px_#F4A261] cursor-pointer"
                        onClick={handleBlowCandles}
                        title="Click to blow out"
                      />
                    ) : (
                      <motion.div
                        key="smoke"
                        initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                        animate={{ opacity: 0, y: -24, scale: 1.5 }}
                        transition={{ duration: 1.2 }}
                        className="text-xs text-[#8A7E72]"
                      >
                        💨
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Candle Wick */}
                  <div className="w-0.5 h-1.5 bg-[#403831]" />
                  {/* Candle Stick */}
                  <div className="w-2.5 h-8 bg-gradient-to-b from-[#E87A5D] via-[#F4A261] to-[#E76F51] rounded-t-sm shadow-xs border border-white/20" />
                </div>
              ))}
            </div>

            {/* Slice Cut Effect if Cake is cut */}
            {isCakeCut && (
              <motion.div
                initial={{ scale: 0, x: 20 }}
                animate={{ scale: 1, x: 0 }}
                className="absolute top-2 -right-8 sm:-right-12 z-40 bg-white p-2 rounded-xl shadow-lg border border-[#E8DDCE] text-xs font-serif"
              >
                🍰 Slice for Nilima!
              </motion.div>
            )}
          </div>

          {/* Interactive Cake Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {candlesLit ? (
              <button
                onClick={handleBlowCandles}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9A3412] hover:bg-[#832B0F] text-white font-medium text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <Wind className="w-4 h-4 text-white" />
                <span>Blow Out The Candles</span>
              </button>
            ) : !isCakeCut ? (
              <button
                onClick={handleCutCake}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E87A5D] hover:bg-[#D46C51] text-white font-medium text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-white" />
                <span>Cut The Birthday Cake</span>
              </button>
            ) : (
              <button
                onClick={handleRelight}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF3EC] text-xs font-medium text-[#7A3622] hover:bg-[#F3E7DC] border border-[#E5D7CA] transition-colors cursor-pointer"
              >
                <span>Relight & Wish Again</span>
              </button>
            )}
          </div>

          {/* Special Post-Candle Surprise Box Prompt */}
          {!candlesLit && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 pt-6 border-t border-[#EFE7DE]"
            >
              <h4 className="text-base font-serif font-bold text-[#242120] mb-2">
                A Special Surprise is Waiting For You! 🎁
              </h4>
              <p className="text-xs text-[#706458] max-w-md mx-auto mb-4">
                Your best friend prepared a secret set of birthday friendship vouchers and a hidden letter.
              </p>
              <button
                onClick={handleOpenGiftBox}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9A3412] to-[#C25E3E] text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <Gift className="w-4 h-4 text-[#F4A261]" />
                <span>{isGiftOpened ? 'Vouchers Revealed Below' : 'Unbox Birthday Vouchers'}</span>
              </button>
            </motion.div>
          )}
        </div>

        {/* Revealed Friendship Vouchers Section */}
        <div id="vouchers" className="mt-16 sm:mt-24">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A3412] mb-1">
              <Gift className="w-3.5 h-3.5" />
              <span>Special Best Friend Vouchers</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#242120]">
              Nilima's Birthday Privilege Passes
            </h3>
            <p className="text-xs sm:text-sm text-[#706458] mt-1">
              Redeemable with your best friend at any time, anywhere in Bangladesh or beyond!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {birthdayData.gifts.map((gift) => {
              const isClaimed = claimedCodes[gift.id];
              return (
                <div
                  key={gift.id}
                  className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                    isClaimed
                      ? 'border-emerald-300 bg-emerald-50/30'
                      : 'border-[#EADFD4] shadow-sm hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF3EC] flex items-center justify-center border border-[#EFE5DB]">
                        {renderGiftIcon(gift.iconName)}
                      </div>
                      <span className="text-[11px] font-semibold text-[#9A3412] px-2.5 py-1 rounded-full bg-[#FAF3EC]">
                        {gift.badge}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-[#242120] mb-1.5">
                      {gift.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#655A51] leading-relaxed">
                      {gift.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0E6DC]">
                    <div className="flex items-center justify-between text-xs font-mono text-[#8C7A68] mb-3 bg-[#FAF7F2] p-2 rounded-lg border border-[#EAE0D6]">
                      <span className="truncate">{gift.code}</span>
                      <button
                        onClick={() => handleCopyCode(gift.code)}
                        className="text-[#9A3412] hover:text-[#832B0F] ml-2 flex items-center gap-1 cursor-pointer"
                        title="Copy voucher code"
                      >
                        {copiedCode === gift.code ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span className="text-[10px]">{copiedCode === gift.code ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <button
                      onClick={() => handleClaim(gift.id)}
                      className={`w-full py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                        isClaimed
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#FAF3EC] hover:bg-[#F2E5D8] text-[#7A3622]'
                      }`}
                    >
                      {isClaimed ? '✓ Claimed by Nilima' : 'Redeem with Best Friend'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
