/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { onChange } from "./on-change.js";
import { onClick } from "./on-click.js";
import { onInput } from "./on-input.js";

/**
 * @typedef {*} EventListener
 * @todo Frigging TypeScript is not able to detect document.body event listeners
 * with an union of window event listeners.
 */

/**
 * Registers event listeners.
 */
export function registerEventListeners() {
  on(/** @type {HTMLBodyElement} */ (document.body), "change", onChange);
  on(/** @type {HTMLBodyElement} */ (document.body), "click", onClick);
  on(/** @type {HTMLBodyElement} */ (document.body), "input", onInput);
}

/**
 * Helper function to reduce file size.
 *
 * @private
 * @argument {HTMLBodyElement} el
 * @argument {'change' | 'click' | 'input'} eventType
 * @argument {EventListener} eventListener
 */
function on(el, eventType, eventListener) {
  el.addEventListener(eventType, eventListener);
}
