/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../../helpers/clone.js";
import { el } from "../el.js";

/**
 * Component to display the about scene containing information about the game.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionAbout(targetElement, state) {
  const element = clone(targetElement);
  element.innerHTML = "";

  if (state.activeScene === "about-section") {
    element.appendChild(
      el(
        /** @type {import('../el.js').G} */ ([
          "div",
          [],
          {},
          "",
          [
            ["h1", [], {}, "About"],
            [
              "p",
              [],
              {},
              "This game was developed entirely by me, ",
              [["a", [], { href: "https://jaenis.ch/" }, "André Jaenisch"]],
            ],
            [
              "p",
              [],
              {},
              "It is licensed under ",
              [
                [
                  "a",
                  [],
                  {
                    href: "https://code.jaenis.ch/js13kgames/js13kgames-2024/src/branch/main/LICENSES/AGPL-3.0-or-later.txt",
                  },
                  "AGPL version 3 or newer",
                ],
              ],
            ],
            [
              "p",
              [],
              {},
              "Find the source code on ",
              [
                [
                  "a",
                  [],
                  {
                    href: "https://code.jaenis.ch/js13kgames/js13kgames-2024/",
                  },
                  "my Forgejo instance",
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
