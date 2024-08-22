/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import audioBufferToWav from "audiobuffer-to-wav";

/** @typedef {'c' | 'd' | 'e' | 'f' | 'g' | 'a' | 'h' | 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'H' | 'B'} Note */

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

/**
 * Inspired by Maxim (but can't used `with` blocks in strict mode)
 * Taken from {@link https://xem.github.io/miniMusic/simple.html}
 *
 * Assume, each note is an eigth note (quaver). Apply multiplicator
 * @see {@link http://www.sengpielaudio.com/calculator-bpmtempotime.htm|BPM calculus}
 */
export async function playMusic() {
  // See also https://www.artofcomposing.com/how-to-compose-music-101
  if (melody.length > 0) {
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

    const numberOfChannels = 1; // Mono
    const durationInSeconds = notes
      .map((n) => n.time)
      .reduce((sum, summand) => sum + summand);
    const sampleRate = 44100;
    const frameCount = sampleRate * durationInSeconds;

    // Have a singleton OfflineAudioContext
    const audioContext = new OfflineAudioContext({
      numberOfChannels,
      length: sampleRate * durationInSeconds,
      sampleRate,
    });

    previousTime = 0.1;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    gain.gain.setValueAtTime(1, audioContext.currentTime);

    // Can be sine [default], square, sawtooth, triangle and custom
    oscillator.type = "square";
    notes.forEach((note) => {
      const { hz, time } = note;
      oscillator.frequency.setValueAtTime(hz, previousTime);
      previousTime += time;
    });

    const { currentTime } = audioContext;
    oscillator.start(currentTime);
    oscillator.stop(currentTime + durationInSeconds);

    const buffer = await audioContext.startRendering();
    const wavAsArrayBuffer = audioBufferToWav(buffer);
    let binary = "";
    const bytes = new Uint8Array(wavAsArrayBuffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return `data:audio/wav;base64,${window.btoa(binary)}`;
  }
}
