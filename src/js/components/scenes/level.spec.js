/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../../state/actions/reset.js";
import store from "../../state/store.js";
import { sectionLevel } from "./level.js";

describe("sectionLevel", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when level is not the active scene", function () {
    it("should be empty", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const levelScene = sectionLevel(targetElement, state);

      // Assert
      expect(levelScene.innerHTML).to.be.empty;
    });
  });

  describe.skip("when level is the active scene", function () {
    it("should show the intro", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "level-section",
      });

      // Act
      const levelScene = sectionLevel(targetElement, state);

      // Assert
      expect(levelScene.querySelector('[data-component="intro"]')).not.to.be
        .null;
    });
  });
});
