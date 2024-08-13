/**
 * Reducer to set the color preference.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function setColorPreferenceReducer(
  state: import("../initial-state.js").State,
  payload: import("../actions/set-color-preference.js").SET_COLOR_PREFERENCE_ACTION["payload"],
): import("../initial-state.js").State;
