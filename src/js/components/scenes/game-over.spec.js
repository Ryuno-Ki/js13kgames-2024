/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../../state/actions/reset.js";
import store from "../../state/store.js";
import { sectionGameOver } from "./game-over.js";

describe("sectionGameOver", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when game-over is not the active scene", function () {
    it("should be empty", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const gameOverScene = sectionGameOver(targetElement, state);

      // Assert
      expect(gameOverScene.innerHTML).to.be.empty;
    });
  });

  describe("when game-over is the active scene", function () {
    it("should show a Game Over", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "game-over-section",
      });

      // Act
      const gameOverScene = sectionGameOver(targetElement, state);

      // Assert
      expect(gameOverScene.querySelector("h1")).not.to.be.null;
    });

    it("should link to the title scene", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "game-over-section",
      });

      // Act
      const gameOverScene = sectionGameOver(targetElement, state);

      // Assert
      expect(gameOverScene.querySelector('[data-scene="title-section"]')).not.to
        .be.null;
    });
  });
});
