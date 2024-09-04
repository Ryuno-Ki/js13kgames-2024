/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { pickRandom } from "./pick-random.js";
import { roll } from "./roll.js";

/**
 * Generate a new name.
 *
 * @argument {{ quick: function, state: function }} rng
 * @returns {string}
 */
export function generateName(rng) {
  const consonants = "bdfghklmnprstvwz".split("");
  const vowels = "aeiou".split("");
  const MAXIMUM_NUMBER_OF_CHARACTERS = 6;
  const MINIMUM_NUMBER_OF_CHARACTERS = 2;

  const nameLength = roll(
    rng.quick,
    MAXIMUM_NUMBER_OF_CHARACTERS,
    MINIMUM_NUMBER_OF_CHARACTERS,
  );
  let seed = rng.state();

  const name = new Array(nameLength)
    .fill("x")
    .map(function (_, index) {
      const alphabet = index % 2 ? vowels : consonants;
      const character = pickRandom(alphabet, rng.quick);
      seed = rng.state();

      if (index === 0) {
        return character.toUpperCase();
      }
      return character;
    })
    .join("");

  return name;
}
