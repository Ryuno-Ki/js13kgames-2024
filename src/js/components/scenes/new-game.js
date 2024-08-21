/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../../helpers/clone.js";
import { el } from "../el.js";

/**
 * Component to query for player information such as display name.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionNewgame(targetElement, state) {
  const element = clone(targetElement);
  element.innerHTML = "";

  if (state.activeScene === "new-game-section") {
    element.appendChild(
      el(
        /** @type {import('../el.js').G} */ ([
          "div",
          [],
          {},
          "",
          [
            ["h1", [], {}, "New game"],
            [
              "fieldset",
              [],
              {},
              "",
              [
                ["legend", [], {}, "Player name"],
                [
                  "div",
                  [],
                  {},
                  "",
                  [
                    [
                      "label",
                      [],
                      { for: "playername" },
                      "How do you want to be known?",
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
                      "input",
                      [],
                      { id: "playername", type: "text", max: "64" },
                    ],
                  ],
                ],
              ],
            ],
            ["p", [], {}, greetPlayer(state)],
            ["div", [], {}, "", showActionButtons(state)],
          ],
        ]),
      ),
    );
  }

  return element;
}

/**
 * Greet the player if a name was entered.
 *
 * @private
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {string}
 */
function greetPlayer(state) {
  const { playername } = state;

  if (playername) {
    return `I greet you, ${playername}.`;
  }

  return "";
}

/**
 * Only allow to move forward once a playername was entered.
 *
 * @private
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {Array<*>}
 */
function showActionButtons(state) {
  const { playername } = state;

  if (playername.trim()) {
    return [
      [
        "button",
        ["action"],
        { "data-scene": "level-section" },
        "Start playing",
      ],
      [
        "button",
        ["action"],
        { "data-scene": "title-section" },
        "Back to Title",
      ],
    ];
  }

  return [
    ["button", ["action"], { "data-scene": "title-section" }, "Back to Title"],
  ];
}
