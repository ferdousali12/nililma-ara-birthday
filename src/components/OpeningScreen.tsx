import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Gift, Volume2, VolumeX } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { soundFx } from '../utils/audio';
import confetti from 'canvas-confetti';

interface OpeningScreenProps {
  isOpen: boolean;
  onOpenSurprise: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({
  isOpen,
  onOpenSurprise,
  isAudioPlaying,
  onToggleAudio,
}) => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    // Generate subtle floating petals for Bangladesh floral ambience
    const generatedPetals = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 6,
      size: 10 + Math.random() * 14,
    }));
    setPetals(generatedPetals);
  }, []);

  const handleOpenClick = () => {
    soundFx.playChimeChord();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E87A5D', '#F4A261', '#2A9D8F', '#E76F51', '#D4A373'],
      });
    } catch {
      // Confetti fallback
    }
    onOpenSurprise();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#1A1615] text-[#FAF7F2] p-6 text-center select-none"
      >
        {/* Soft glowing ambient backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,122,93,0.18)_0%,rgba(26,22,21,0.95)_75%)] pointer-events-none" />

        {/* Floating petals animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {petals.map((petal) => (
            <motion.div
              key={petal.id}
              initial={{ y: -50, x: `${petal.left}vw`, opacity: 0, rotate: 0 }}
              animate={{
                y: '110vh',
                x: `${petal.left + (petal.id % 2 === 0 ? 8 : -8)}vw`,
                opacity: [0, 0.7, 0.7, 0],
                rotate: 360,
              }}
              transition={{
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute text-[#E87A5D]/40"
              style={{ fontSize: `${petal.size}px` }}
            >
              🌸
            </motion.div>
          ))}
        </div>

        {/* Top Sound Control */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={onToggleAudio}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-medium text-white/90 transition-all border border-white/10 cursor-pointer"
            title={isAudioPlaying ? 'Mute ambient melody' : 'Play ambient music box'}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#E87A5D] animate-pulse" />
                <span>Melody Playing</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-white/60" />
                <span>Play Music</span>
              </>
            )}
          </button>
        </div>

        {/* Center Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-xl mx-auto flex flex-col items-center"
        >
          {/* Subtle Bengali Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E87A5D] mb-4 font-medium"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>শুভ জন্মদিন · Dhaka, Bangladesh</span>
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-white mb-4 leading-tight"
          >
            Happy Birthday, <br />
            <span className="italic text-[#F4A261]">{birthdayData.name}</span>
          </motion.h1>

          {/* Heartfelt Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm sm:text-base text-white/70 max-w-md mx-auto mb-8 font-light leading-relaxed"
          >
            A personalized digital celebration crafted with love and memories by your best friend.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button
              onClick={handleOpenClick}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E87A5D] to-[#F4A261] text-[#1A1615] font-semibold text-sm sm:text-base shadow-[0_10px_30px_rgba(232,122,93,0.4)] hover:shadow-[0_15px_35px_rgba(232,122,93,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Gift className="w-5 h-5 text-[#1A1615] transition-transform group-hover:rotate-12" />
              <span>Open Your Birthday Surprise</span>
              <Heart className="w-4 h-4 text-[#8C2C1D] fill-[#8C2C1D] transition-transform group-hover:scale-125" />
            </button>
          </motion.div>

          <p className="mt-6 text-xs text-white/40 tracking-wider">
            Click above to unveil your birthday website
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
