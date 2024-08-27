/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { clone } from "../helpers/clone.js";
import { el } from "./el.js";

/**
 * Component to display the current inventory.
 *
 * @argument {HTMLDivElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLDivElement}
 */
export function inventory(targetElement, state) {
  const element = /** @type {HTMLDivElement} */ (clone(targetElement));

  element.appendChild(
    el(
      /** @type {import('./el.js').G} */ ([
        "ul",
        [],
        {},
        "",
        [["li", [], {}, "Inventory"]],
      ]),
    ),
  );

  return element;
}
