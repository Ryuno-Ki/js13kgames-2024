/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi } from "vitest";

import { SWITCH_TO_SCENE_ACTION } from "../../constants.js";
import { switchToSceneAction } from "./switch-to-scene.js";

describe("switchToSceneAction", function () {
  it(`should create a ${SWITCH_TO_SCENE_ACTION}`, function () {
    // Arrange
    const scene = "about-section";

    // Act
    const action = switchToSceneAction(scene);

    // Assert
    expect(action.type).to.equal(SWITCH_TO_SCENE_ACTION);
    expect(action.payload.scene).to.equal(scene);
  });
});
