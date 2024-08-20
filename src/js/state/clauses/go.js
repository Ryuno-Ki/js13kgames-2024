/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Clause to determine possible places to go to.
 *
 * @argument {import('../initial-state.js').State} state
 * @returns {import('../initial-state.js').Room['connections']}
 */
export function go(state) {
  const room = state.facts.places.find((r) => r.name === state.activeRoom);
  return room?.connections || [];
}
