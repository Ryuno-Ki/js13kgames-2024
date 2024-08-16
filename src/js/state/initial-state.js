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
export const initialState = {
  activeColorScheme: "system",
  activeRoom: "home",
  activeScenario: "",
  activeScene: "title-section",
  activities: {
    home: {
      go: ["outside"],
      pickup: [],
      read: [],
      use: [],
    },
    outside: {
      go: ["home"],
      pickup: [],
      read: [],
      use: [],
    },
  },
  playername: "",
  possiblePrompts: [],
  prompt: "",
};
