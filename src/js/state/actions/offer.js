/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { UPDATE_PROMPT_ACTION } from "../../constants.js";

/**
 * @typedef {object} UPDATE_PROMPT_ACTION
 * @property {import('../../constants.js').UPDATE_PROMPT_ACTION} UPDATE_PROMPT_ACTION.type
 * @property {object} UPDATE_PROMPT_ACTION.payload
 * @property {string} UPDATE_PROMPT_ACTION.payload.prompt
 */

/**
 * Action creator to update a new prompt.
 *
 * @argument {string} prompt
 * @returns {UPDATE_PROMPT_ACTION}
 */
export function updatePromptAction(prompt) {
  return {
    type: UPDATE_PROMPT_ACTION,
    payload: {
      prompt,
    },
  };
}
