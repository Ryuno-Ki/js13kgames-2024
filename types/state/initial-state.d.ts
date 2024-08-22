/**
 * @typedef {'dark' | 'light' | 'system'} ColorScheme
 */
/**
 * @typedef {'go' | 'pickup' | 'read' | 'use'} Command
 */
/**
 * @typedef {object} Item
 * @property {string} name
 * @property {number} quantity
 */
/**
 * @typedef {Array<Item>} Items
 */
/**
 * @typedef {object} Person
 * @property {Room['name']} home
 * @property {Items} inventory
 * @property {number} money
 * @property {string} name
 * @property {Room['name']} position
 */
/**
 * @typedef {Array<Person>} People
 */
/**
 * @typedef {object} Room
 * @property {Array<Room['name']>} connections
 * @property {Items} items
 * @property {string} name
 */
/**
 * @typedef {Array<Room>} Rooms
 */
/**
 * @typedef {object} Facts
 * @property {Items} items
 * @property {People} people
 * @property {Rooms} places
 */
/**
 * @typedef {'tutorial' | ''} Scenario
 */
/**
 * @typedef {object} State
 * @property {ColorScheme} activeColorScheme
 * @property {Room['name']} activeRoom
 * @property {import('../components/scenes/index.js').Scene} activeScene
 * @property {Scenario} activeScenario
 * @property {Facts} facts
 * @property {string} playername
 * @property {Array<string>} possiblePrompts
 * @property {string} prompt
 */
/** @type {State} */
export const initialState: State;
export type ColorScheme = "dark" | "light" | "system";
export type Command = "go" | "pickup" | "read" | "use";
export type Item = {
  name: string;
  quantity: number;
};
export type Items = Array<Item>;
export type Person = {
  home: Room["name"];
  inventory: Items;
  money: number;
  name: string;
  position: Room["name"];
};
export type People = Array<Person>;
export type Room = {
  connections: Array<Room["name"]>;
  items: Items;
  name: string;
};
export type Rooms = Array<Room>;
export type Facts = {
  items: Items;
  people: People;
  places: Rooms;
};
export type Scenario = "tutorial" | "";
export type State = {
  activeColorScheme: ColorScheme;
  activeRoom: Room["name"];
  activeScene: import("../components/scenes/index.js").Scene;
  activeScenario: Scenario;
  facts: Facts;
  playername: string;
  possiblePrompts: Array<string>;
  prompt: string;
};
