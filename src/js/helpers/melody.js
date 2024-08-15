/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** @typedef {'c' | 'd' | 'e' | 'f' | 'g' | 'a' | 'h' | 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'H' | 'B'} Note */

// Have a singleton AudioContext
const audioContext = new AudioContext();
// Nested Array to allow for multiple instruments
// Use a derivative of ABC notation
// prettier-ignore
export const melody = [
    [
  'C1', 'C0.5', 'C0.5', 'C1', 'C0.5', 'C0.5',
  'C1', 'f1', 'a1', 'c1',
  'h1', 'h0.5', 'h0.5', 'h1', 'h0.5', 'h0.5',
  'h1', 'e1', 'g1', 'h1',
  'C1', 'C0.5', 'C0.5', 'C1', 'C0.5', 'C0.5',
  'C1', 'D1', 'E1', 'F1',
  'E1', 'C1', 'h1', 'g1',
  'f2', 'f2'
]]

/**
 * Musical notes
 * Frequencies taken from {@link https://muted.io/note-frequencies/} (col 3)
 * Keys are the musical notes, values are their value in Hz
 *
 * @type {Record<Note, number>}
 */
const NOTES = {
  c: 130.81,
  d: 146.83,
  e: 164.81,
  f: 174.61,
  g: 196.0,
  a: 220.0,
  h: 246.91,
  C: 261.63,
  D: 293.66,
  E: 329.63,
  F: 349.23,
  G: 392.0,
  A: 440.0,
  H: 493.88,
  B: 523.25, // C transposed by an octave.
};

let __isPlayingMusic = false;
let __volume = 0.5;

/**
 * Inspired by Maxim (but can't used `with` blocks in strict mode)
 * Taken from {@link https://xem.github.io/miniMusic/simple.html}
 *
 * Assume, each note is an eigth note (quaver). Apply multiplicator
 * @see {@link http://www.sengpielaudio.com/calculator-bpmtempotime.htm|BPM calculus}
 */
export function playMusic() {
  // See also https://www.artofcomposing.com/how-to-compose-music-101
  if (melody.length > 0 && !__isPlayingMusic) {
    let previousTime = 0.1;

    const bpm = 120 * 2; /* since quaver instead of crotchet */
    const minInS = 1 * 60;
    const bpmForQuaver = minInS / bpm;

    const notes = melody[0].map((note) => {
      const value = /** @type {Note} */ (note.slice(0, 1));
      const hz = NOTES[value];

      const lengthOfNote = parseFloat(note.slice(1));
      const time = bpmForQuaver * lengthOfNote;

      return {
        hz,
        time,
      };
    });

    playOscillator(notes);
  }
}

/**
 * Helper function to figure out Web Audio API.
 *
 * @param {Array<{ hz: number, time: number }>} notes
 */
function playOscillator(notes = []) {
  let previousTime = 0.1;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.connect(gain);
  // Volume can change over time
  adjustVolume(gain);

  // Can be sine [default], square, sawtooth, triangle and custom
  oscillator.type = "square";
  notes.forEach((note) => {
    const { hz, time } = note;
    oscillator.frequency.setValueAtTime(hz, previousTime);
    previousTime += time;
  });
  playNote(oscillator);
  oscillator.stop(previousTime + 0.1);
  adjustVolume(gain, 0, previousTime + 0.1);
}

/**
 * Helper function to smooth over Web Audio API
 *
 * @param {GainNode} gainNode
 * @param {number} [volume=0]
 * @param {number} [time=0]
 */
function adjustVolume(gainNode, volume = 0, time = 0) {
  gainNode.gain.setValueAtTime(volume, time);
}

function playBuffer(time = 0) {
  const channels = 2; // Stereo
  const durationInSeconds = 3;
  const frameCount = audioContext.sampleRate * durationInSeconds;

  const audioBuffer = audioContext.createBuffer(
    channels,
    frameCount,
    audioContext.sampleRate,
  );

  // Fill the buffer with white noise;
  // just random values between -1.0 and 1.0
  for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
    // This gives us the actual ArrayBuffer that contains the data
    const nowBuffering = audioBuffer.getChannelData(channel);
    for (let i = 0; i < audioBuffer.length; i++) {
      // Math.random() is in [0; 1.0]
      // audio needs to be in [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  const source = audioContext.createBufferSource(); // Sound source
  source.buffer = audioBuffer;
  playNote(source, time);
}

/**
 * Play a single note.
 *
 * @param {AudioScheduledSourceNode} source
 * @param {number} [time=0]
 */
function playNote(source, time = 0) {
  source.connect(audioContext.destination); // Connect source with destination (speaker)
  source.start(time); // Play the source, used to be noteOn() or noteGrainOn()
}
