/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../../state/actions/reset.js";
import store from "../../state/store.js";
import { sectionNewgame } from "./new-game.js";

describe("sectionNewgame", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when new-game is not the active scene", function () {
    it("should be empty", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const newGameScene = sectionNewgame(targetElement, state);

      // Assert
      expect(newGameScene.innerHTML).to.be.empty;
    });
  });

  describe("when new-game is the active scene", function () {
    it("should query for player name", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "new-game-section",
      });

      // Act
      const newGameScene = sectionNewgame(targetElement, state);

      // Assert
      expect(newGameScene.querySelector('input#playername[type="text"]')).not.to
        .be.null;
    });

    it("should link to the title scene", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "new-game-section",
      });

      // Act
      const newGameScene = sectionNewgame(targetElement, state);

      // Assert
      expect(newGameScene.querySelector('button[data-scene="title-section"]'))
        .not.to.be.null;
    });

    it("should not link to the level selection scene", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "new-game-section",
      });

      // Act
      const newGameScene = sectionNewgame(targetElement, state);

      // Assert
      expect(newGameScene.querySelector('button[data-scene="level-section"]'))
        .to.be.null;
    });

    describe("when playername was entered", function () {
      it("should show the sanitised player name", function () {
        // Arrange
        const targetElement = document.createElement("section");
        const state = Object.assign({}, store.getState(), {
          activeScene: "new-game-section",
          playername: "Christoph",
        });

        // Act
        const newGameScene = sectionNewgame(targetElement, state);

        // Assert
        expect(newGameScene.textContent).to.contain("Christoph");
      });

      it("should link to the level selection scene", function () {
        // Arrange
        const targetElement = document.createElement("section");
        const state = Object.assign({}, store.getState(), {
          activeScene: "new-game-section",
          playername: "Christoph",
        });

        // Act
        const newGameScene = sectionNewgame(targetElement, state);

        // Assert
        expect(newGameScene.querySelector('button[data-scene="level-section"]'))
          .not.to.be.null;
      });
    });
  });
});
