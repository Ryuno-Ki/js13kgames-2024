/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../../state/actions/reset.js";
import store from "../../state/store.js";
import { sectionLoadgame } from "./load-game.js";

describe("sectionLoadgame", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when load-game is not the active scene", function () {
    it("should be empty", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const newGameScene = sectionLoadgame(targetElement, state);

      // Assert
      expect(newGameScene.innerHTML).to.be.empty;
    });
  });

  describe("when load-game is the active scene", function () {
    it.skip("should list saved games", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "load-game-section",
      });

      // Act
      const newGameScene = sectionLoadgame(targetElement, state);

      // Assert
      expect(newGameScene.querySelector("button[data-state]")).not.to.be.null;
    });

    it("should link to the title scene", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "load-game-section",
      });

      // Act
      const newGameScene = sectionLoadgame(targetElement, state);

      // Assert
      expect(newGameScene.querySelector('button[data-scene="title-section"]'))
        .not.to.be.null;
    });
  });
});
