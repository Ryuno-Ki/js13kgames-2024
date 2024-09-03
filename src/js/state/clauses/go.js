/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Clause to determine possible places to go to.
 *
 * @argument {import('../initial-state.js').State} state
 * @returns {Array<import('../initial-state.js').SchemaGameLocation>}
 */
export function go(state) {
  const activeRoom =
    /** @type {import('../initial-state.js').SchemaGameLocation} */ (
      state.facts[`#${state.activeRoom}`]
    );

  return activeRoom["schema:geoTouches"]
    .map((gameLocation) => gameLocation.value)
    .map((uri) => {
      return /** @type {import('../initial-state.js').SchemaGameLocation} */ (
        state.facts[uri]
      );
    });
}
