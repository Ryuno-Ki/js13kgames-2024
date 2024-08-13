/**
 * Reducer to compute the transition to another scene.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function switchToSceneReducer(
  state: import("../initial-state.js").State,
  payload: import("../actions/switch-to-scene.js").SWITCH_TO_SCENE_ACTION["payload"],
): import("../initial-state.js").State;
