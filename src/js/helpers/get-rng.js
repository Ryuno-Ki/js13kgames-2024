/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { prng_alea } from "esm-seedrandom";

/**
 * Prepare the RNG.
 *
 * @argument {import('../state/initial-state.js').State["seed"]} seed
 * @returns {{ quick: function, state: function }}
 */
export function getRng(seed) {
  const rngSeed = typeof seed === "string" ? seed : "";
  const rngState = typeof seed === "object" ? seed : true;

  // First call of prng_alea: prng_alea("someinitialSeed", { state: true });
  // Subsequent calls: prng_alea("", { state: savedState });
  // savedState is an object with properties that I don't need to care about
  const rng = prng_alea(rngSeed, { state: rngState });
  return rng;
}
