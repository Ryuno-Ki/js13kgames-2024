/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Helper function to deep clone an HTMLElement or SVGElement.
 *
 * @argument {HTMLElement | SVGElement} el
 * @returns {HTMLElement | SVGElement}
 */
export function clone(el) {
  return /** @type {HTMLElement | SVGElement} */ (el.cloneNode(true));
}
