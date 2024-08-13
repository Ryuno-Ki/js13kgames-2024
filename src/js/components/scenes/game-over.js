/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../../helpers/clone.js";
import { el } from "../el.js";

/**
 * Component to display the game over scene when the game is lost.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionGameOver(targetElement, state) {
  const element = clone(targetElement);
  element.innerHTML = "";

  if (state.activeScene === "game-over-section") {
    element.appendChild(
      el(
        /** @type {import('../el.js').G} */ ([
          "div",
          [],
          {},
          "",
          [
            ["h1", [], {}, "Game Over"],
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
