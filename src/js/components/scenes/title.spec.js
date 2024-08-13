/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../../state/actions/reset.js";
import store from "../../state/store.js";
import { sectionTitle } from "./title.js";

describe("sectionTitle", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when title is not the active scene", function () {
    it("should be empty", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "about-section",
      });

      // Act
      const titleScene = sectionTitle(targetElement, state);

      // Assert
      expect(titleScene.innerHTML).to.be.empty;
    });
  });

  describe("when title is the active scene", function () {
    it("should link to the new game scene", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const titleScene = sectionTitle(targetElement, state);

      // Assert
      expect(titleScene.querySelector('button[data-scene="new-game-section"]'))
        .not.to.be.null;
    });

    it("should link to the about scene", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const titleScene = sectionTitle(targetElement, state);

      // Assert
      expect(titleScene.querySelector('button[data-scene="about-section"]')).not
        .to.be.null;
    });

    it("should link to the settings scene", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const titleScene = sectionTitle(targetElement, state);

      // Assert
      expect(titleScene.querySelector('button[data-scene="settings-section"]'))
        .not.to.be.null;
    });
  });
});
