import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Music,
  Plus,
  MessageSquareHeart,
  Share2,
  Check,
} from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { MemoryItem } from '../types';
import { soundFx } from '../utils/audio';

export const MemoryGallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<MemoryItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [customMemories, setCustomMemories] = useState<Array<{ id: string; title: string; note: string; author: string }>>([
    {
      id: 'cm-1',
      title: 'Midnight Laughter over Cha',
      note: 'Remember when we sat laughing about the most random things until we completely forgot what time it was? That will always be one of my favorite memories.',
      author: 'Best Friend',
    },
    {
      id: 'cm-2',
      title: 'Our Shared Playlist Sessions',
      note: 'Sharing songs back and forth and listening to the same track on repeat while talking about everything under the sun.',
      author: 'Best Friend',
    },
  ]);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteText, setNewNoteText] = useState('');

  const filteredMemories =
    filter === 'all'
      ? birthdayData.memories
      : birthdayData.memories.filter((m) => m.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activePhoto) return;
      if (e.key === 'Escape') setActivePhoto(null);
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto]);

  const handleNextPhoto = () => {
    if (!activePhoto) return;
    soundFx.playPop();
    const currentIndex = birthdayData.memories.findIndex((m) => m.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % birthdayData.memories.length;
    setActivePhoto(birthdayData.memories[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!activePhoto) return;
    soundFx.playPop();
    const currentIndex = birthdayData.memories.findIndex((m) => m.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + birthdayData.memories.length) % birthdayData.memories.length;
    setActivePhoto(birthdayData.memories[prevIndex]);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim() || !newNoteText.trim()) return;
    soundFx.playBell(659.25, 1, 0.12);
    setCustomMemories((prev) => [
      {
        id: Date.now().toString(),
        title: newNoteTitle.trim(),
        note: newNoteText.trim(),
        author: 'Nilima & Friend',
      },
      ...prev,
    ]);
    setNewNoteTitle('');
    setNewNoteText('');
    setIsAddingNote(false);
  };

  const handleShare = () => {
    soundFx.playPop();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="memories" className="py-16 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A3412] mb-2">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Visual Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#242120] tracking-tight">
              Memories & Moments
            </h2>
            <p className="text-sm text-[#706458] mt-1">
              Photographs that capture the poise, warmth, and timeless charm of Nilima Ara.
            </p>
          </div>

          {/* Functional Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFE7DE] rounded-xl overflow-x-auto self-start sm:self-auto">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'portraits', label: 'Portraits' },
              { id: 'traditional', label: 'Traditional' },
              { id: 'aesthetic', label: 'Aesthetic' },
              { id: 'moments', label: 'Moments' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playPop();
                  setFilter(tab.id);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white text-[#242120] shadow-sm'
                    : 'text-[#6A5E53] hover:text-[#242120]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMemories.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => {
                soundFx.playPop();
                setActivePhoto(item);
              }}
              className="group relative bg-white rounded-2xl p-3 border border-[#EADFD4] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#EFE9E2]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Song Inspiration Badge if present */}
                {item.songInspiration && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] text-white/90 border border-white/10 font-sans">
                    <Music className="w-3 h-3 text-[#F4A261]" />
                    <span className="truncate max-w-[180px]">{item.songInspiration}</span>
                  </div>
                )}

                {/* Hover Click Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 text-xs font-medium text-[#242120] shadow-md backdrop-blur-sm">
                    View Fullscreen
                  </span>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif font-bold text-base leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 font-sans mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-2.5 px-1 flex items-center justify-between text-xs text-[#7A6E63]">
                <span className="capitalize">{item.category}</span>
                <span className="font-mono text-[11px] text-[#A25A41]">{item.year || 'Moments'}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Memory Notes Board */}
        <div className="mt-16 pt-12 border-t border-[#EAE0D6]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9A3412]">
                <MessageSquareHeart className="w-3.5 h-3.5" />
                <span>Friendship Memory Notes</span>
              </div>
              <p className="text-xs text-[#7A6E63] mt-0.5">
                Little anecdotes, moments, and inside stories shared between best friends.
              </p>
            </div>

            <button
              onClick={() => {
                soundFx.playPop();
                setIsAddingNote(!isAddingNote);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFE7DE] hover:bg-[#E4D7CA] text-xs font-medium text-[#4A4036] transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Plus className="w-3.5 h-3.5 text-[#9A3412]" />
              <span>{isAddingNote ? 'Close Editor' : 'Pin a Memory Note'}</span>
            </button>
          </div>

          {/* Add Note Form */}
          <AnimatePresence>
            {isAddingNote && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleAddNote}
                className="bg-white p-5 rounded-2xl border border-[#E5D7CA] shadow-sm mb-6 overflow-hidden"
              >
                <h4 className="text-sm font-semibold text-[#242120] mb-3">
                  Pin a Heartfelt Memory to Nilima's Board
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  <input
                    type="text"
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    placeholder="Memory title (e.g. That evening rain in Dhaka...)"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E3D6C9] rounded-lg focus:outline-none focus:border-[#9A3412]"
                    required
                  />
                  <textarea
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    placeholder="Write a sweet memory or inside story..."
                    rows={3}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E3D6C9] rounded-lg focus:outline-none focus:border-[#9A3412] resize-none"
                    required
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingNote(false)}
                      className="px-3 py-1.5 text-xs text-[#7A6E63] hover:text-[#242120]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 text-xs font-medium bg-[#9A3412] text-white rounded-lg hover:bg-[#832B0F]"
                    >
                      Pin Note
                    </button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Pinned Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {customMemories.map((note) => (
              <div
                key={note.id}
                className="bg-[#FFFDF9] p-5 rounded-xl border border-[#E8DDCE] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#9A3412] mb-1 font-semibold">
                    <span>📌 {note.title}</span>
                    <span className="text-[11px] text-[#A25A41] font-normal font-mono">Archive</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4036] leading-relaxed mt-2 italic font-serif">
                    "{note.note}"
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#F0E6DA] flex justify-between text-[11px] text-[#8C7A68]">
                  <span>From: {note.author}</span>
                  <span>♥ Best Friend Note</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                soundFx.playPop();
                setActivePhoto(null);
              }}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev / Next Controls */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
              title="Previous Photo (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextPhoto}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
              title="Next Photo (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-2xl max-h-[90vh] flex flex-col items-center bg-[#1A1615] rounded-2xl overflow-hidden border border-white/10 text-white"
            >
              <div className="relative max-h-[65vh] w-full flex items-center justify-center bg-black/40 overflow-hidden">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-5 sm:p-6 w-full bg-[#1A1615] flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                    {activePhoto.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-xs text-white/90 transition-colors cursor-pointer"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                    </button>
                    <span className="text-xs font-mono text-[#F4A261] px-2 py-0.5 rounded bg-white/5 uppercase">
                      {activePhoto.category}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {activePhoto.caption}
                </p>

                {activePhoto.songInspiration && (
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-[#F4A261]">
                    <Music className="w-3.5 h-3.5 shrink-0" />
                    <span>Photo Inspiration: {activePhoto.songInspiration}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
