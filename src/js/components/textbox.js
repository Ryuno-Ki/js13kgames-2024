/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../helpers/clone.js";
import { el } from "./el.js";

/**
 * Component to display the a textbox.
 *
 * @argument {SVGGElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {SVGGElement}
 */
export function textbox(targetElement, state) {
  const element = /** @type {SVGGElement} */ (clone(targetElement));

  element.appendChild(
    el(
      /** @type {import('./el.js').G} */ ([
        "g",
        ["tb"],
        {},
        "",
        maybeShowTextbox(state),
      ]),
    ),
  );

  return element;
}

/**
 * Helper function to conditionally render children.
 *
 * @argument {import('../state/initial-state.js').State} state
 * @returns {import('./el.js').G}
 */
function maybeShowTextbox(state) {
  if (state.text.length === 0) {
    return [];
  }

  const numberOfLines = state.text.length;

  return [
    ["rect", [], { x: 0, y: 75, width: 100, height: 25 }],
    ...state.text.map((line, index) => {
      return ["text", [], { x: 5, y: 85 + index * 10 }, line];
    }),
  ];
}
