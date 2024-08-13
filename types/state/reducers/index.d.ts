/**
 * Combined reducer.
 *
 * @argument {import('../initial-state.js').State | undefined} state
 * @argument {import('../actions/index.js').ACTION} action
 * @returns {import('../initial-state.js').State}
 */
export function reducer(
  state: import("../initial-state.js").State | undefined,
  action: import("../actions/index.js").ACTION,
): import("../initial-state.js").State;
