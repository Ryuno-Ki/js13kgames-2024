/**
 * @typedef {'dark' | 'light' | 'system'} ColorScheme
 */
/**
 * @typedef {'go' | 'pickup' | 'read' | 'use'} Command
 */
/**
 * @typedef {'home' | 'outside'} Room
 */
/**
 * @typedef {Record<Room, Record<Command, Array<*>>>} Activity
 */
/**
 * @typedef {'tutorial' | ''} Scenario
 */
/**
 * @typedef {object} State
 * @property {ColorScheme} activeColorScheme
 * @property {Room} activeRoom
 * @property {import('../components/scenes/index.js').Scene} activeScene
 * @property {Scenario} activeScenario
 * @property {Activity} activities
 * @property {string} playername
 * @property {Array<string>} possiblePrompts
 * @property {string} prompt
 */
/** @type {State} */
export const initialState: State;
export type ColorScheme = "dark" | "light" | "system";
export type Command = "go" | "pickup" | "read" | "use";
export type Room = "home" | "outside";
export type Activity = Record<Room, Record<Command, Array<any>>>;
export type Scenario = "tutorial" | "";
export type State = {
  activeColorScheme: ColorScheme;
  activeRoom: Room;
  activeScene: import("../components/scenes/index.js").Scene;
  activeScenario: Scenario;
  activities: Activity;
  playername: string;
  possiblePrompts: Array<string>;
  prompt: string;
};
