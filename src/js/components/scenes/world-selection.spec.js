/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../../state/actions/reset.js";
import store from "../../state/store.js";
import { sectionWorldselection } from "./world-selection.js";

describe("sectionWorldselection", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when world is not the active scene", function () {
    it("should be empty", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const winScene = sectionWorldselection(targetElement, state);

      // Assert
      expect(winScene.innerHTML).to.be.empty;
    });
  });

  describe("when world is the active scene", function () {
    it("should show a list of scenarios", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "world-section",
      });

      // Act
      const winScene = sectionWorldselection(targetElement, state);

      // Assert
      expect(winScene.querySelector("h1")).not.to.be.null;
    });

    describe("when no scenario is chosen", function () {
      it("should not show a button to move forward", function () {
        // Arrange
        const targetElement = document.createElement("section");
        const state = Object.assign({}, store.getState(), {
          activeScene: "world-section",
        });

        // Act
        const winScene = sectionWorldselection(targetElement, state);

        // Assert
        expect(winScene.querySelector("[data-scene]")).to.be.null;
      });
    });

    describe("when no scenario is chosen", function () {
      it("should not show a button to move forward", function () {
        // Arrange
        const targetElement = document.createElement("section");
        const state = Object.assign({}, store.getState(), {
          activeScene: "world-section",
          activeScenario: "tutorial",
        });

        // Act
        const winScene = sectionWorldselection(targetElement, state);

        // Assert
        expect(winScene.querySelector("[data-scene]")).not.to.be.null;
      });
    });
  });
});
