/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../../helpers/clone.js";
import { el } from "../el.js";

/**
 * Component to display the level.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionLevel(targetElement, state) {
  const element = /** @type {HTMLElement} */ (clone(targetElement));
  element.innerHTML = "";

  if (state.activeScene === "level-section") {
    element.appendChild(
      el(
        /** @type {import('../el.js').G} */ ([
          "div",
          [],
          {},
          "",
          [
            ["h1", [], {}, `Level in ${state.activeRoom}`],
            ["div", [], { "data-component": "canvas" }],
            ["div", [], { "data-component": "inventory" }],
            ["div", [], { "data-component": "prompt" }],
            [
              "div",
              [],
              {
                "data-component": "suggestions",
              },
            ],
          ],
        ]),
      ),
    );
  }

  return element;
}
