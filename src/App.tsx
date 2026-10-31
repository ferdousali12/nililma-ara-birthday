import React, { useState } from 'react';
import { OpeningScreen } from './components/OpeningScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BirthdayLetter } from './components/BirthdayLetter';
import { MemoryGallery } from './components/MemoryGallery';
import { SurpriseSection } from './components/SurpriseSection';
import { CulturalTouch } from './components/CulturalTouch';
import { WishesInteractive } from './components/WishesInteractive';
import { Footer } from './components/Footer';
import { soundFx } from './utils/audio';

export default function App() {
  const [isIntroOpen, setIsIntroOpen] = useState<boolean>(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const handleToggleAudio = () => {
    const nextState = soundFx.toggleAmbient(setIsAudioPlaying);
    setIsAudioPlaying(nextState);
  };

  const handleOpenSurprise = () => {
    setIsIntroOpen(false);
    // If audio is not playing yet, start the gentle music box melody upon user's first interaction
    if (!isAudioPlaying) {
      soundFx.startAmbient();
      setIsAudioPlaying(true);
    }
  };

  const handleReopenIntro = () => {
    soundFx.playPop();
    setIsIntroOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#242120] font-sans selection:bg-[#E87A5D]/20 selection:text-[#9A3412]">
      {/* Full-Screen Animated Opening Entrance */}
      <OpeningScreen
        isOpen={isIntroOpen}
        onOpenSurprise={handleOpenSurprise}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Website Experience */}
      <Navbar
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
        onReopenIntro={handleReopenIntro}
      />

      <main>
        {/* Section B: Personalized Hero Section */}
        <Hero />

        {/* Section C: Birthday Letter */}
        <BirthdayLetter />

        {/* Section D: Memories Gallery */}
        <MemoryGallery />

        {/* Section E: Interactive Birthday Cake & Special Surprise Vouchers */}
        <SurpriseSection />

        {/* Section F: Bangladesh-Inspired Details & Blessings */}
        <CulturalTouch />

        {/* Interactive Birthday Wishes & Floating Sky Lanterns */}
        <WishesInteractive />
      </main>

      {/* Section G: Final Birthday Section & Signature */}
      <Footer />
    </div>
  );
}
