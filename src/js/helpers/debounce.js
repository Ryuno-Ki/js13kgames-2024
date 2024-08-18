/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Helper function to debounce a function by a delay.
 *
 * @argument {function} fn
 * @argument {number} [delay=300]
 * @returns {function}
 */
export function debounce(fn, delay = 300) {
  /** @type {number} */
  let timer;

  return (/** @type {Array<*>} */ ...args) => {
    clearTimeout(timer);
    // Capturing `this` to please TypeScript is too hard.
    // @ts-ignore
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
