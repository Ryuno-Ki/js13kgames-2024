/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Helper function to deep clone an HTMLElement.
 *
 * @argument {HTMLElement} el
 * @returns {HTMLElement}
 */
export function clone(el) {
  return /** @type {HTMLElement} */ (el.cloneNode(true));
}
