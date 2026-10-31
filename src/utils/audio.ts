// Standalone Web Audio Synthesizer for ambient music box & celebration chimes
// No external mp3 files needed; guarantees 100% reliable sound playback

class AudioManager {
  private ctx: AudioContext | null = null;
  private isPlayingAmbient = false;
  private ambientTimer: number | null = null;
  private currentStep = 0;

  // Melody inspired by gentle music box "Happy Birthday" / warm acoustic arpeggio
  // Notes in Hz: C4, D4, E4, F4, G4, A4, B4, C5, D5, E5
  private melodyNotes = [
    261.63, 261.63, 293.66, 261.63, 349.23, 329.63, // Happy birthday to you
    261.63, 261.63, 293.66, 261.63, 392.00, 349.23, // Happy birthday to you
    261.63, 261.63, 523.25, 440.00, 349.23, 329.63, 293.66, // Happy birthday dear Nilima
    466.16, 466.16, 440.00, 349.23, 392.00, 349.23  // Happy birthday to you
  ];

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a delicate, crystalline music-box bell tone
  playBell(freq: number, duration = 1.2, gainValue = 0.12) {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Sine wave with slight shimmer
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Bell envelope (quick attack, natural logarithmic decay)
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(gainValue, this.ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context might be restricted before gesture
    }
  }

  // Play joyous celebration chime chord (e.g. for blowing candles, opening gift)
  playChimeChord() {
    const chord = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    chord.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBell(freq, 2.0, 0.15);
      }, idx * 90);
    });
  }

  // Play subtle bubble / pop sound for UI interactions
  playPop() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch {
      // Ignore
    }
  }

  toggleAmbient(onStateChange?: (playing: boolean) => void): boolean {
    if (this.isPlayingAmbient) {
      this.stopAmbient();
      onStateChange?.(false);
      return false;
    } else {
      this.startAmbient();
      onStateChange?.(true);
      return true;
    }
  }

  startAmbient() {
    this.initCtx();
    this.isPlayingAmbient = true;
    this.currentStep = 0;

    const playNext = () => {
      if (!this.isPlayingAmbient) return;
      const note = this.melodyNotes[this.currentStep % this.melodyNotes.length];
      this.playBell(note, 1.4, 0.09);
      
      // Also occasionally play a warm bass harmony
      if (this.currentStep % 4 === 0) {
        this.playBell(note / 2, 2.0, 0.04);
      }

      this.currentStep++;
      // Natural music box cadence
      const delay = (this.currentStep % 6 === 5 || this.currentStep % 6 === 0) ? 650 : 450;
      this.ambientTimer = window.setTimeout(playNext, delay);
    };

    playNext();
  }

  stopAmbient() {
    this.isPlayingAmbient = false;
    if (this.ambientTimer !== null) {
      clearTimeout(this.ambientTimer);
      this.ambientTimer = null;
    }
  }

  getIsPlaying(): boolean {
    return this.isPlayingAmbient;
  }
}

export const soundFx = new AudioManager();
