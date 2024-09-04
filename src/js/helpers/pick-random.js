/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { roll } from "./roll.js";

/**
 * Randomly pick an item from a list.
 *
 * @argument {Array<string>} list
 * @argument {function} rng
 * @returns {string}
 */
export function pickRandom(list, rng) {
  const index = roll(rng, list.length);
  return list[index];
}
