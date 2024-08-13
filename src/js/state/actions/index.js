/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export { resetAction } from "./reset.js";
export { setColorPreferenceAction } from "./set-color-preference.js";
export { setPlayernameAction } from "./set-playername.js";
export { switchToSceneAction } from "./switch-to-scene.js";

/**
 * @typedef {import('./reset.js').RESET_ACTION | import('./set-color-preference.js').SET_COLOR_PREFERENCE_ACTION | import('./set-playername.js').SET_PLAYERNAME_ACTION | import('./switch-to-scene.js').SWITCH_TO_SCENE_ACTION} ACTION
 */
