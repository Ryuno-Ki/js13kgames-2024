/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export { resetAction } from "./reset.js";
export { setColorPreferenceAction } from "./set-color-preference.js";
export { setPlayernameAction } from "./set-playername.js";
export { showTextboxAction } from "./show-textbox.js";
export { switchToSceneAction } from "./switch-to-scene.js";
export { updatePromptAction } from "./update-prompt.js";

/**
 * @typedef {import('./reset.js').RESET_ACTION | import('./set-color-preference.js').SET_COLOR_PREFERENCE_ACTION | import('./set-playername.js').SET_PLAYERNAME_ACTION | import('./show-textbox.js').SHOW_TEXTBOX_ACTION | import('./switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('./update-prompt.js').UPDATE_PROMPT_ACTION} ACTION
 */
