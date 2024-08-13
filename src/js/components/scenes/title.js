/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../../helpers/clone.js";
import { el } from "../el.js";

/**
 * Component to initialise the game.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionTitle(targetElement, state) {
  const element = clone(targetElement);
  element.innerHTML = "";

  if (state.activeScene === "title-section") {
    element.appendChild(
      el(
        /** @type {import('../el.js').G} */ ([
          "div",
          [],
          {},
          "",
          [
            ["h1", [], {}, "Name of the game"],
            [
              "div",
              ["f", "fc", "g"],
              {},
              "",
              [
                [
                  "button",
                  [],
                  { "data-scene": "new-game-section" },
                  "New Game",
                ],
                [
                  "button",
                  [],
                  { "data-scene": "load-game-section" },
                  "Load Game",
                ],
                [
                  "button",
                  [],
                  { "data-scene": "settings-section" },
                  "Settings",
                ],
                ["button", [], { "data-scene": "about-section" }, "About"],
              ],
            ],
          ],
        ]),
      ),
    );
  }
  return element;
}
