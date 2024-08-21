/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../../helpers/clone.js";
import { el } from "../el.js";

/**
 * Component to allow for tweaking the interface (visual and audio).
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionSettings(targetElement, state) {
  const element = clone(targetElement);
  element.innerHTML = "";

  if (state.activeScene === "settings-section") {
    element.appendChild(
      el(
        /** @type {import('../el.js').G} */ ([
          "div",
          [],
          {},
          "",
          [
            ["h1", [], {}, "Settings"],
            [
              "fieldset",
              [],
              {},
              "",
              [
                ["legend", [], {}, "Visual Interface"],
                [
                  "div",
                  [],
                  {},
                  "",
                  [
                    [
                      "label",
                      [],
                      { for: "color-preference" },
                      "Choose your theme",
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
                      { id: "color-preference" },
                      "",
                      [
                        [
                          "option",
                          [],
                          { value: "system", checked: "checked" },
                          "System",
                        ],
                        ["option", [], { value: "light" }, "Light"],
                        ["option", [], { value: "dark" }, "Dark"],
                      ],
                    ],
                  ],
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
                  "button",
                  [],
                  { "data-scene": "title-section" },
                  "Back to Title",
                ],
              ],
            ],
          ],
        ]),
      ),
    );
  }

  return element;
}
