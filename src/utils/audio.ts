let audioCtx: AudioContext | null = null;
let gainNode: GainNode | null = null;
let intervalId: any = null;
let noiseBuffer: AudioBuffer | null = null;

// Sequencer state
let nextNoteTime = 0.0;
let currentStep = 0;
const bpm = 132;
const stepDuration = 60.0 / bpm / 4; // 16th note duration
const scheduleAheadTime = 0.12; // How far ahead to schedule audio (sec)

// 16-Step Patterns
// Authentic DJ Kaiophas Yara Yara Phonk theme cowbell melody (high-pitched metallic bounce)
const COWBELL_PATTERN = [
  987.77,  0,       987.77,  0,       // B5, -, B5, -
  987.77,  0,       880.00,  0,       // B5, -, A5, -
  987.77,  0,       1174.66, 0,       // B5, -, D6, -
  987.77,  0,       880.00,  0,       // B5, -, A5, -
  987.77,  0,       987.77,  0,       // B5, -, B5, -
  987.77,  0,       880.00,  0,       // B5, -, A5, -
  739.99,  0,       659.25,  0,       // F#5, -, E5, -
  739.99,  0,       783.99,  0        // F#5, -, G5, -
];

const BASS_PATTERN = [
  61.74,   0,       0,       0,       // Step 0: B1
  49.00,   0,       0,       0,       // Step 4: G1
  41.20,   0,       0,       0,       // Step 8: E1
  46.25,   0,       0,       0,       // Step 12: F#1
  61.74,   0,       0,       0,
  49.00,   0,       0,       0,
  41.20,   0,       0,       0,
  46.25,   0,       0,       0
];

const KICK_PATTERN = [
  1, 0, 0, 0,
  1, 0, 0, 1,
  1, 0, 0, 0,
  1, 0, 1, 0
];

const CLAP_PATTERN = [
  0, 0, 0, 0,
  1, 0, 0, 0,
  0, 0, 0, 0,
  1, 0, 0, 0
];

const HAT_PATTERN = [
  1, 0, 1, 0,
  1, 0, 1, 0,
  1, 0, 1, 0,
  1, 0, 1, 1
];

function createNoiseBuffer(ctx: AudioContext): AudioBuffer {
  const bufferSize = ctx.sampleRate * 1.5; // 1.5 seconds of noise
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

function playCowbell(time: number, freq: number) {
  if (!audioCtx || !gainNode || freq === 0) return;

  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const bandpass = audioCtx.createBiquadFilter();
  const amp = audioCtx.createGain();

  // detuned high pitch square/saw combo for phonk's metallic Cowbell timbre
  osc1.type = "square";
  osc1.frequency.setValueAtTime(freq, time);

  osc2.type = "sawtooth";
  osc2.frequency.setValueAtTime(freq * 1.483, time); // detuned interval

  bandpass.type = "bandpass";
  bandpass.frequency.setValueAtTime(1450, time);
  bandpass.Q.setValueAtTime(5.5, time);

  amp.gain.setValueAtTime(0, time);
  amp.gain.linearRampToValueAtTime(0.18, time + 0.003);
  amp.gain.exponentialRampToValueAtTime(0.001, time + 0.16);

  osc1.connect(bandpass);
  osc2.connect(bandpass);
  bandpass.connect(amp);
  amp.connect(gainNode);

  osc1.start(time);
  osc1.stop(time + 0.2);
  osc2.start(time);
  osc2.stop(time + 0.2);
}

function playBass(time: number, freq: number) {
  if (!audioCtx || !gainNode || freq === 0) return;

  const osc = audioCtx.createOscillator();
  const amp = audioCtx.createGain();
  const lowpass = audioCtx.createBiquadFilter();

  osc.type = "triangle"; // clean sub bass
  osc.frequency.setValueAtTime(freq, time);
  osc.frequency.exponentialRampToValueAtTime(freq * 0.82, time + 0.3); // slide

  lowpass.type = "lowpass";
  lowpass.frequency.setValueAtTime(180, time);

  amp.gain.setValueAtTime(0, time);
  amp.gain.linearRampToValueAtTime(0.35, time + 0.015);
  amp.gain.exponentialRampToValueAtTime(0.001, time + 0.38);

  osc.connect(lowpass);
  lowpass.connect(amp);
  amp.connect(gainNode);

  osc.start(time);
  osc.stop(time + 0.42);
}

function playKick(time: number) {
  if (!audioCtx || !gainNode) return;

  const osc = audioCtx.createOscillator();
  const amp = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(160, time);
  osc.frequency.exponentialRampToValueAtTime(42, time + 0.09); // punchy pitch sweep

  amp.gain.setValueAtTime(0, time);
  amp.gain.linearRampToValueAtTime(0.85, time + 0.003);
  amp.gain.exponentialRampToValueAtTime(0.001, time + 0.14);

  osc.connect(amp);
  amp.connect(gainNode);

  osc.start(time);
  osc.stop(time + 0.16);
}

function playClap(time: number) {
  if (!audioCtx || !gainNode || !noiseBuffer) return;

  const noiseSource = audioCtx.createBufferSource();
  noiseSource.buffer = noiseBuffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(1100, time);
  filter.Q.setValueAtTime(1.8, time);

  const amp = audioCtx.createGain();
  amp.gain.setValueAtTime(0, time);

  // Classic 808 layered spike pattern (3 rapid micro-triggers)
  amp.gain.setValueAtTime(0.12, time);
  amp.gain.setValueAtTime(0.0, time + 0.008);
  amp.gain.setValueAtTime(0.10, time + 0.015);
  amp.gain.setValueAtTime(0.0, time + 0.024);
  amp.gain.setValueAtTime(0.22, time + 0.032);
  amp.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

  noiseSource.connect(filter);
  filter.connect(amp);
  amp.connect(gainNode);

  noiseSource.start(time);
  noiseSource.stop(time + 0.25);
}

function playHat(time: number) {
  if (!audioCtx || !gainNode || !noiseBuffer) return;

  const noiseSource = audioCtx.createBufferSource();
  noiseSource.buffer = noiseBuffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.setValueAtTime(7500, time);

  const amp = audioCtx.createGain();
  amp.gain.setValueAtTime(0, time);
  amp.gain.linearRampToValueAtTime(0.04, time + 0.002);
  amp.gain.exponentialRampToValueAtTime(0.001, time + 0.045);

  noiseSource.connect(filter);
  filter.connect(amp);
  amp.connect(gainNode);

  noiseSource.start(time);
  noiseSource.stop(time + 0.05);
}

function scheduleStep(step: number, time: number) {
  // 1. Play Cowbell Melody (32 steps)
  const cowbellFreq = COWBELL_PATTERN[step];
  if (cowbellFreq > 0) {
    playCowbell(time, cowbellFreq);
  }

  // 2. Play Deep Sub Bass (32 steps)
  const bassFreq = BASS_PATTERN[step];
  if (bassFreq > 0) {
    playBass(time, bassFreq);
  }

  // 3. Play Kick (16 steps wrapping)
  if (KICK_PATTERN[step % 16] === 1) {
    playKick(time);
  }

  // 4. Play Clap (16 steps wrapping)
  if (CLAP_PATTERN[step % 16] === 1) {
    playClap(time);
  }

  // 5. Play Closed Hat (16 steps wrapping)
  if (HAT_PATTERN[step % 16] === 1) {
    playHat(time);
  }
}

function runScheduler() {
  if (!audioCtx) return;
  while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
    scheduleStep(currentStep, nextNoteTime);
    nextNoteTime += stepDuration;
    currentStep = (currentStep + 1) % 32;
  }
}

let musicVolume = 0.5;
try {
  const savedVol = localStorage.getItem("origin_music_volume");
  if (savedVol !== null) {
    musicVolume = parseFloat(savedVol);
  }
} catch (e) {
  console.error("Failed to read volume from localStorage", e);
}

export function setAmbientMusicVolume(volume: number) {
  musicVolume = volume;
  try {
    localStorage.setItem("origin_music_volume", String(volume));
  } catch (e) {
    console.error("Failed to write volume to localStorage", e);
  }
  if (audioCtx && gainNode) {
    gainNode.gain.setValueAtTime(volume * 0.12, audioCtx.currentTime);
  }
}

export function startAmbientMusic() {
  if (audioCtx) return;

  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    audioCtx = new AudioContextClass();
    gainNode = audioCtx.createGain();
    
    // Overall Phonk player volume limit
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(musicVolume * 0.12, audioCtx.currentTime + 1.5);
    gainNode.connect(audioCtx.destination);

    // Cache the noise buffer for claps & cymbals
    noiseBuffer = createNoiseBuffer(audioCtx);

    // Reset loop state
    nextNoteTime = audioCtx.currentTime + 0.05;
    currentStep = 0;

    // Fast scheduling loop (tick every 40ms)
    intervalId = setInterval(runScheduler, 40);
  } catch (err) {
    console.error("Failed to start Web Audio Yara Yara Phonk synthesizer:", err);
  }
}

export function stopAmbientMusic() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  if (gainNode && audioCtx) {
    try {
      const t = audioCtx.currentTime;
      gainNode.gain.cancelScheduledValues(t);
      gainNode.gain.linearRampToValueAtTime(0, t + 0.5); // Quick fade-out
      const currentCtx = audioCtx;
      setTimeout(() => {
        try {
          if (currentCtx.state !== "closed") {
            currentCtx.close();
          }
        } catch (e) {
          console.error(e);
        }
      }, 600);
      audioCtx = null;
      gainNode = null;
      noiseBuffer = null;
    } catch {
      audioCtx = null;
      gainNode = null;
      noiseBuffer = null;
    }
  }
}

export function playGlobalClick(customUrl?: string, volume: number = 0.5) {
  if (customUrl && customUrl.trim() !== "") {
    try {
      const audio = new Audio(customUrl);
      audio.volume = volume;
      audio.play().catch((err) => {
        console.log("Audio play blocked or failed:", err);
      });
    } catch (e) {
      console.error("Failed to play global click sound:", e);
    }
  }
}
