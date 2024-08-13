/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { SET_PLAYERNAME_ACTION } from "../../constants.js";

/**
 * @typedef {object} SET_PLAYERNAME_ACTION
 * @property {import('../../constants.js').SET_PLAYERNAME_ACTION} SET_PLAYERNAME_ACTION.type
 * @property {object} SET_PLAYERNAME_ACTION.payload
 * @property {string} SET_PLAYERNAME_ACTION.payload.playername
 */

/**
 * Action creator to set name of the player.
 *
 * @argument {string} playername
 * @returns {SET_PLAYERNAME_ACTION}
 */
export function setPlayernameAction(playername) {
  return {
    type: SET_PLAYERNAME_ACTION,
    payload: {
      playername,
    },
  };
}
