/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { LOCAL_STORAGE_KEY } from "../../constants.js";
import { clone } from "../../helpers/clone.js";
import { el } from "../el.js";

/**
 * Component to load an exisiting game.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionLoadgame(targetElement, state) {
  const element = clone(targetElement);
  element.innerHTML = "";

  if (state.activeScene === "load-game-section") {
    const savedGames = getSavedGames();

    element.appendChild(
      el(
        /** @type {import('../el.js').G} */ ([
          "div",
          [],
          {},
          "",
          [
            ["h1", [], {}, "Load game"],
            [
              "ul",
              [],
              {},
              "",
              savedGames.map((savedGame) => {
                return [
                  "li",
                  [],
                  {},
                  savedGame.playername,
                  [
                    [
                      "button",
                      [],
                      {
                        type: "button",
                        "data-state": JSON.stringify(savedGame),
                      },
                      "Load game",
                    ],
                    [
                      "button",
                      [],
                      {
                        type: "button",
                        "data-playername": savedGame.playername,
                      },
                      "Delete game",
                    ],
                  ],
                ];
              }),
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

/**
 * Helper function to load saved game states from localStorage.
 *
 * @private
 * @returns {Array<import('../../state/initial-state.js').State>}
 */
function getSavedGames() {
  const savedGames = window.localStorage.getItem(LOCAL_STORAGE_KEY) || "[]";

  return JSON.parse(savedGames);
}
