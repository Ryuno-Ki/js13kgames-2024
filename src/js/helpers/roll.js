/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Randomly generate a number between lower and upper.
 *
 * @argument {function} rng
 * @argument {number} upper
 * @argument {number} lower
 * @returns {number}
 */
export function roll(rng, upper, lower = 0) {
  return lower + Math.floor(rng() * (upper - lower));
}
