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
  const element = clone(targetElement);
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
            [
              "svg",
              [],
              {
                "aria-role": "presentation",
                viewBox: "0 0 100 100",
                xmlns: "http://www.w3.org/2000/svg",
              },
              "",
              [
                [
                  "text",
                  [],
                  { x: 10, y: 20 },
                  "🧑‍🍳",
                  [["tspan", ["sr-only"], {}, "Cook"]],
                ],
                [
                  "text",
                  [],
                  { x: 30, y: 20 },
                  "🧑‍⚕️",
                  [["tspan", ["sr-only"], {}, "Doctor"]],
                ],
                [
                  "text",
                  [],
                  { x: 50, y: 20 },
                  "🧑‍🏫",
                  [["tspan", ["sr-only"], {}, "Teacher"]],
                ],
                [
                  "text",
                  [],
                  { x: 70, y: 20 },
                  "🧑‍🌾",
                  [["tspan", ["sr-only"], {}, "Farmer"]],
                ],
                [
                  "text",
                  [],
                  { x: 10, y: 40 },
                  "🧑‍🎤",
                  [["tspan", ["sr-only"], {}, "Singer"]],
                ],
                [
                  "text",
                  [],
                  { x: 30, y: 40 },
                  "🧑‍🚒",
                  [["tspan", ["sr-only"], {}, "Firefighter"]],
                ],
                [
                  "text",
                  [],
                  { x: 50, y: 40 },
                  "👮",
                  [["tspan", ["sr-only"], {}, "Police officer"]],
                ],
                [
                  "text",
                  [],
                  { x: 70, y: 40 },
                  "🥷",
                  [["tspan", ["sr-only"], {}, "Ninja"]],
                ],
                [
                  "text",
                  [],
                  { x: 10, y: 60 },
                  "🫂",
                  [["tspan", ["sr-only"], {}, "People hugging"]],
                ],
                [
                  "text",
                  [],
                  { x: 30, y: 60 },
                  "🗣",
                  [["tspan", ["sr-only"], {}, "Speaking head"]],
                ],
                [
                  "text",
                  [],
                  { x: 50, y: 60 },
                  "👣",
                  [["tspan", ["sr-only"], {}, "Footprints"]],
                ],
                [
                  "text",
                  [],
                  { x: 70, y: 60 },
                  "🛌",
                  [["tspan", ["sr-only"], {}, "Person in bed"]],
                ],
                [
                  "text",
                  [],
                  { x: 10, y: 80 },
                  "🙅",
                  [["tspan", ["sr-only"], {}, "Person gesturing No"]],
                ],
                [
                  "text",
                  [],
                  { x: 30, y: 80 },
                  "🙆",
                  [["tspan", ["sr-only"], {}, "Person gesturing Ok"]],
                ],
                [
                  "text",
                  [],
                  { x: 50, y: 80 },
                  "🤷",
                  [["tspan", ["sr-only"], {}, "Person gesturing Shrugging"]],
                ],
                [
                  "text",
                  [],
                  { x: 70, y: 80 },
                  "🤝",
                  [["tspan", ["sr-only"], {}, "Handshake"]],
                ],
                [
                  "text",
                  [],
                  { x: 10, y: 100 },
                  "🫶",
                  [["tspan", ["sr-only"], {}, "heart hands"]],
                ],
                [
                  "text",
                  [],
                  { x: 30, y: 100 },
                  "👋",
                  [["tspan", ["sr-only"], {}, "waving hand"]],
                ],
                [
                  "text",
                  [],
                  { x: 50, y: 100 },
                  "👍",
                  [["tspan", ["sr-only"], {}, "thumbs up"]],
                ],
                [
                  "text",
                  [],
                  { x: 70, y: 100 },
                  "👎",
                  [["tspan", ["sr-only"], {}, "thumbs down"]],
                ],
              ],
            ],
            [
              "label",
              [],
              { for: "prompt" },
              "",
              [
                ["span", ["sr-only"], {}, "What do you want to do?"],
                [
                  "input",
                  [],
                  {
                    type: "text",
                    id: "prompt",
                    name: "prompt",
                    value: state.prompt,
                    list: "possible-commands",
                  },
                ],
              ],
            ],
            [
              "datalist",
              [],
              { id: "possible-commands" },
              "",
              state.possiblePrompts.map((value) => ["option", [], { value }]),
            ],
          ],
        ]),
      ),
    );
  }

  return element;
}
