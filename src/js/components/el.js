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
 * Helper function to generate DOM elements from a data structure.
 *
 * The last argument is basically arguments of this function.
 *
 * @argument {G} gil
 * @returns {HTMLElement | SVGElement}
 */
export function el(gil) {
  const [name, classList, attributes, text, children] = gil;
  /** @type {HTMLElement | SVGElement} */
  let element;
  const svgElements = ["circle", "g", "polygon", "svg", "text", "tspan"];

  if (svgElements.includes(/** @type {string} */ (name))) {
    element = document.createElementNS("http://www.w3.org/2000/svg", name);
  } else {
    element = document.createElement(name);
  }

  /** @type {Array<string>} */
  const classNames = classList || /** @type {Array<string>} */ ([]);
  classNames.forEach((className) => element.classList.add(className));

  Object.entries(
    /** @type {Record<string, string>} */ (attributes || {}),
  ).forEach(([key, value]) => element.setAttribute(key, value));

  element.textContent = text || "";

  /** @type {Array<G>} */
  const recursion = children || [];
  recursion.forEach((child) => element.appendChild(el(child)));

  return element;
}
