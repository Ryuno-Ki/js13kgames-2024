/**
 * @typedef {object} SWITCH_TO_SCENE_ACTION
 * @property {import('../../constants.js').SWITCH_TO_SCENE_ACTION} SWITCH_TO_SCENE_ACTION.type
 * @property {object} SWITCH_TO_SCENE_ACTION.payload
 * @property {import('../../components/scenes/index.js').Scene} SWITCH_TO_SCENE_ACTION.payload.scene
 */
/**
 * Action creator to switch to another scene.
 *
 * @argument {import('../../components/scenes/index.js').Scene} scene
 * @returns {SWITCH_TO_SCENE_ACTION}
 */
export function switchToSceneAction(
  scene: import("../../components/scenes/index.js").Scene,
): SWITCH_TO_SCENE_ACTION;
export type SWITCH_TO_SCENE_ACTION = {
  type: "SWITCH_TO_SCENE_ACTION";
  payload: {
    scene: import("../../components/scenes/index.js").Scene;
  };
};
