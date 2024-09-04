/**
 * Prepare the RNG.
 *
 * @argument {import('../state/initial-state.js').State["seed"]} seed
 * @returns {{ quick: function, state: function }}
 */
export function getRng(
  seed: import("../state/initial-state.js").State["seed"],
): {
  quick: Function;
  state: Function;
};
