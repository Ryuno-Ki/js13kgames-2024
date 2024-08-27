/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

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
 * @property {string} seed
 * @property {Array<string>} text
 */

/** @type {State} */
export const initialState = {
  activeColorScheme: "system",
  activeRoom: "home",
  activeScenario: "",
  activeScene: "title-section",
  facts: {
    items: [
      {
        name: "apple",
        quantity: 20,
      },
      {
        name: "wheat",
        quantity: 100,
      },
    ],
    people: [
      {
        home: "home",
        inventory: [],
        money: 1000,
        name: "Yu",
        position: "home",
      },
    ],
    places: [
      {
        connections: ["outside"],
        items: [
          {
            name: "apple",
            quantity: 1,
          },
        ],
        name: "home",
      },
      {
        connections: ["home", "shop"],
        items: [
          {
            name: "apple",
            quantity: 10,
          },
          {
            name: "wheat",
            quantity: 80,
          },
        ],
        name: "outside",
      },
      {
        connections: ["outside"],
        items: [
          {
            name: "wheat",
            quantity: 20,
          },
        ],
        name: "shop",
      },
    ],
  },
  playername: "",
  possiblePrompts: [],
  prompt: "",
  seed: "Triskaidekaphobia",
  text: [],
};
