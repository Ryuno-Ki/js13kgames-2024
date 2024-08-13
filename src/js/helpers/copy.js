/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Helper function to shallow copy properties from an object but override some.
 *
 * @argument {import('../state/initial-state.js').State} original
 * @argument {Object} overrides
 * @argument {Object} [patches]
 * @returns {import('../state/initial-state.js').State}
 */
export function copy(original, overrides, patches) {
  return Object.assign({}, original, overrides, patches || {});
}
