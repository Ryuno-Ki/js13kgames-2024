/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Tuple of tag name, list of className, attribute mapping, text content and children
 *
 * @template {[string, Array<string>, Record<string, string>, string, Array<G>]} G
 */

// TypeScript hallucinates something about a circular reference here.
// But it doesn't allow me to typecast anywhere else without it.
// @ts-ignore
/** @typedef {G} G */

/**
 * Builder to generate HTML from an well-defined object structure.
 *
 * @param {G} gil
 * @returns {HTMLElement}
 */
export function el(gil) {
  const [name, classList, attributes, text, children] = gil;

  const element = document.createElement(/** @type {string} */ (name));

  /** @type {Array<string>} */
  const classNames = classList || /** @type {Array<string>} */ ([]);
  classNames.forEach((className) => element.classList.add(className));

  Object.entries(
    /** @type {Record<string, string>} */ (attributes || {}),
  ).forEach((attribute) => {
    const [key, value] = attribute;
    element.setAttribute(key, value);
  });

  element.textContent = text || "";

  /** @type {Array<G>} */
  const recursion = children || [];
  recursion.forEach((child) => element.appendChild(el(child)));

  return element;
}
