/**
 * Reducer to update the prompt.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/update-prompt.js').UPDATE_PROMPT_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function updatePromptReducer(
  state: import("../initial-state.js").State,
  payload: import("../actions/update-prompt.js").UPDATE_PROMPT_ACTION["payload"],
): import("../initial-state.js").State;
