/**
 * @typedef {'dark' | 'light' | 'system'} ColorScheme
 */
/**
 * @typedef {'tutorial' | ''} Scenario
 */
/**
 * @typedef {object} State
 * @property {ColorScheme} activeColorScheme
 * @property {import('../components/scenes/index.js').Scene} activeScene
 * @property {Scenario} activeScenario
 * @property {string} playername
 */
/** @type {State} */
export const initialState: State;
export type ColorScheme = "dark" | "light" | "system";
export type Scenario = "tutorial" | "";
export type State = {
  activeColorScheme: ColorScheme;
  activeScene: import("../components/scenes/index.js").Scene;
  activeScenario: Scenario;
  playername: string;
};
