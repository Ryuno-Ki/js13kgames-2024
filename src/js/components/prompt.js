/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../helpers/clone.js";
import { el } from "./el.js";

/**
 * Component to accept player prompt.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function prompt(targetElement, state) {
  const element = clone(targetElement);

  element.appendChild(
    el(
      /** @type {import('./el.js').G} */ ([
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
              list: "possible-commands",
            },
          ],
        ],
      ]),
    ),
  );

  return element;
}
