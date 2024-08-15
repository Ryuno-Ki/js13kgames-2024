/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// happy-dom does not know about Web Audio API
globalThis.AudioContext = class {
  createGain() {
    return {
      gain: {
        setValueAtTime: () => {},
      },
    };
  }

  createOscillator() {
    return {
      connect: () => {},
      frequency: {
        setValueAtTime: () => {},
      },
      start: () => {},
      stop: () => {},
    };
  }
};
