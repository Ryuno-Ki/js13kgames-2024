export { resetAction } from "./reset.js";
export { setColorPreferenceAction } from "./set-color-preference.js";
export { setPlayernameAction } from "./set-playername.js";
export { switchToSceneAction } from "./switch-to-scene.js";
export type ACTION =
  | import("./reset.js").RESET_ACTION
  | import("./set-color-preference.js").SET_COLOR_PREFERENCE_ACTION
  | import("./set-playername.js").SET_PLAYERNAME_ACTION
  | import("./switch-to-scene.js").SWITCH_TO_SCENE_ACTION;
