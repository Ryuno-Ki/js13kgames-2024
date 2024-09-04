/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export { goToMapAction } from "./go-to-map.js";
export { meetAction } from "./meet.js";
export { offerAction } from "./offer.js";
export { resetAction } from "./reset.js";
export { setColorPreferenceAction } from "./set-color-preference.js";
export { setPlayernameAction } from "./set-playername.js";
export { showTextboxAction } from "./show-textbox.js";
export { switchToSceneAction } from "./switch-to-scene.js";

/**
 * @typedef {import('./go-to-map.js').GO_TO_MAP_ACTION | import('./meet.js').MEET_ACTION | import('./offer.js').OFFER_ACTION | import('./reset.js').RESET_ACTION | import('./set-color-preference.js').SET_COLOR_PREFERENCE_ACTION | import('./set-playername.js').SET_PLAYERNAME_ACTION | import('./show-textbox.js').SHOW_TEXTBOX_ACTION | import('./switch-to-scene.js').SWITCH_TO_SCENE_ACTION} ACTION
 */
