/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Clause to check available items for pickup.
 *
 * @argument {import('../initial-state.js').State} state
 * @returns {import('../initial-state.js').Items}
 */
export function pickup(state) {
  const room = state.facts.places.find((r) => r.name === state.activeRoom);
  return room?.items || [];
}
