/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

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
export const initialState = {
  activeColorScheme: "system",
  activeScenario: "",
  activeScene: "title-section",
  playername: "",
};
