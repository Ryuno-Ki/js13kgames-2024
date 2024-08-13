/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../actions/reset.js";
import store from "../store.js";
import { switchToSceneReducer } from "./switch-to-scene.js";

describe("switchToSceneReducer", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  it("should update the active scene", function () {
    // Arrange
    const state = store.getState();
    const payload = { scene: "about-section" };

    // Act
    const newState = switchToSceneReducer(state, payload);

    // Assert
    expect(newState).not.to.equal(state);
    expect(newState.activeScene).to.equal("about-section");
  });
});
