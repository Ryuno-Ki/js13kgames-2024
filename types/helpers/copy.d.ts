/**
 * Helper function to shallow copy properties from an object but override some.
 *
 * @argument {import('../state/initial-state.js').State} original
 * @argument {Object} overrides
 * @argument {Object} [patches]
 * @returns {import('../state/initial-state.js').State}
 */
export function copy(
  original: import("../state/initial-state.js").State,
  overrides: Object,
  patches?: Object | undefined,
): import("../state/initial-state.js").State;
