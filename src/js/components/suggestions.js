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
  const element = clone(targetElement);

  element.appendChild(
    el(
      /** @type {import('./el.js').G} */ ([
        "datalist",
        [],
        { id: "possible-commands" },
        "",
        state.possiblePrompts.map((value) => ["option", [], { value }]),
      ]),
    ),
  );

  return element;
}
