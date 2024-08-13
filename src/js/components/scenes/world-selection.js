/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../../helpers/clone.js";
import { el } from "../el.js";

/**
 * Component to choose between scenarios.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionWorldselection(targetElement, state) {
  const element = clone(targetElement);
  element.innerHTML = "";

  if (state.activeScene === "world-section") {
    element.appendChild(
      el(
        /** @type {import('../el.js').G} */ ([
          "div",
          [],
          {},
          "",
          [
            ["h1", [], {}, "World"],
            [
              "fieldset",
              [],
              {},
              "",
              [
                ["legend", [], {}, "Scenarios"],
                [
                  "div",
                  [],
                  {},
                  "",
                  [
                    [
                      "label",
                      [],
                      { for: "level-scenario" },
                      "Choose your scenario",
                    ],
                  ],
                ],
                [
                  "div",
                  [],
                  {},
                  "",
                  [
                    [
                      "select",
                      [],
                      { id: "level-scenario" },
                      "",
                      [
                        [
                          "option",
                          [],
                          { value: "", checked: "checked" },
                          "Please choose",
                        ],
                        [
                          "option",
                          [],
                          { value: "tutorial" },
                          "Learn the ropes",
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            ["div", [], {}, "", showActionButtons(state)],
          ],
        ]),
      ),
    );
  }

  return element;
}

/**
 * Helper function to only show the action button once a choice was made.
 *
 * @private
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {Array<*>}
 */
function showActionButtons(state) {
  if (state.activeScenario) {
    return [["button", [], { "data-scene": "level-section" }, "Level"]];
  }

  return [["span"]];
}
