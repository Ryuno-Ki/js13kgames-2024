/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { GO_TO_MAP_ACTION } from "../../constants.js";

/**
 * @typedef {object} GO_TO_MAP_ACTION
 * @property {import('../../constants.js').GO_TO_MAP_ACTION} GO_TO_MAP_ACTION.type
 * @property {object} GO_TO_MAP_ACTION.payload
 * @property {string} GO_TO_MAP_ACTION.payload.prompt
 */

/**
 * Action creator to go to another map.
 *
 * @argument {string} prompt
 * @returns {GO_TO_MAP_ACTION}
 */
export function goToMapAction(prompt) {
  return {
    type: GO_TO_MAP_ACTION,
    payload: {
      prompt,
    },
  };
}
