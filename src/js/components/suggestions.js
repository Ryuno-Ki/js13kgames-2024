/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../helpers/clone.js";
import { el } from "./el.js";

/**
 * Component to suggest prompts to the player.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function suggestions(targetElement, state) {
  const element = /** @type {HTMLDivElement} */ (clone(targetElement));

  element.appendChild(
    el(
      /** @type {import('./el.js').G} */ ([
        "label",
        [],
        { for: "possible-commands" },
        "",
        [
          ["span", ["sr-only"], {}, "Suggested prompts"],
          [
            "select",
            [],
            {
              id: "possible-commands",
              style: state.possiblePrompts.length > 0 ? "" : "display:none;",
            },
            "",
            [
              [
                "option",
                [],
                { value: "", selected: "selected" },
                "pick suggestion",
              ],
              ...state.possiblePrompts.map((value) => [
                "option",
                [],
                { value: `${state.prompt} ${value}` },
                value,
              ]),
            ],
          ],
        ],
      ]),
    ),
  );

  return element;
}
