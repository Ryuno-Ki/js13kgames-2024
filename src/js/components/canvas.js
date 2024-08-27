/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../helpers/clone.js";
import { el } from "./el.js";

/**
 * Component to draw the game world onto.
 *
 * @argument {HTMLDivElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLDivElement}
 */
export function canvas(targetElement, state) {
  const element = /** @type {HTMLDivElement} */ (clone(targetElement));

  /**
   * Helper function to make the end event bubble.
   *
   * @argument {SVGAnimationElement} event
   */
  const onend = function (event) {
    const { targetElement } = event;
    const ev = new CustomEvent("end", { bubbles: true });
    targetElement?.dispatchEvent(ev);
  };

  element.appendChild(
    el(
      /** @type {import('./el.js').G} */ ([
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
            "def",
            [],
            {},
            "",
            [
              [
                "path",
                [],
                {
                  id: "gramma",
                  fill: "none",
                  stroke: "lightgrey",
                  d: "M85,70 L85,60 L15,60",
                },
              ],
            ],
          ],
          [
            "text",
            [],
            { x: 10, y: 40 },
            "🛌",
            [["tspan", ["sr-only"], {}, "You, sleeping in bed"]],
          ],
          [
            "text",
            [],
            { x: 80, y: 90 },
            "🚪",
            [["tspan", ["sr-only"], {}, "A door"]],
          ],
          ,
          [
            "text",
            [],
            {},
            "👵",
            [
              ["tspan", ["sr-only"], {}, "An old woman"],
              [
                "animateMotion",
                [],
                {
                  dur: "3s",
                  fill: "freeze",
                  onend: `(${onend.toString()})(this)`,
                  repeatCount: "1",
                },
                "",
                [["mpath", [], { href: "#gramma" }]],
              ],
            ],
          ],
          ["g", [], { "data-component": "textbox" }],
          /*
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
          */
        ],
      ]),
    ),
  );

  return element;
}
