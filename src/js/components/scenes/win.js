/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../../helpers/clone.js";
import { el } from "../el.js";

/**
 * Component to display the victory at the end of the game.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionWin(targetElement, state) {
  const element = clone(targetElement);
  element.innerHTML = "";

  if (state.activeScene === "win-section") {
    element.appendChild(
      el(
        /** @type {import('../el.js').G} */ ([
          "div",
          [],
          {},
          "",
          [
            ["h1", [], {}, "Win"],
            [
              "div",
              [],
              {},
              "",
              [["button", [], { "data-scene": "title-section" }, "Title"]],
            ],
          ],
        ]),
      ),
    );
  }

  return element;
}
