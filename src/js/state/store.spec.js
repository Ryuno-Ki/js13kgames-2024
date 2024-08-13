/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "./actions/reset.js";
import { setColorPreferenceAction } from "./actions/set-color-preference.js";
import { switchToSceneAction } from "./actions/switch-to-scene.js";
import store from "./store.js";

describe("store", function () {
  it("should be a singleton", function () {
    // Arrange
    // Nothing to prepare

    // Act
    // Nothing to run

    // Assert
    // TODO: Figure out why I can't assert being a class anymore
    expect(store).not.to.be.undefined;
  });

  it("should have a dispatch method", function () {
    // Arrange
    // Nothing to prepare

    // Act
    // Nothing to run

    // Assert
    expect(store).to.respondTo("dispatch");
  });

  it("should have a getState method", function () {
    // Arrange
    // Nothing to prepare

    // Act
    // Nothing to run

    // Assert
    expect(store).to.respondTo("getState");
  });

  describe("when color preference is changed", function () {
    it("should update the document.body", async function () {
      // Arrange
      const colorScheme = "dark";

      // Act
      await store.dispatch(setColorPreferenceAction(colorScheme));

      // Assert
      expect(Array.from(document.body.classList)).to.contain("theme-dark");
    });
  });

  describe("when player navigates to a new scene", function () {
    beforeEach(async function () {
      await store.dispatch(resetAction());
    });

    describe("when that scene is about", function () {
      it("should include About in the title", async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction("about-section"));

        // Assert
        expect(document.title).to.equal("About | js13kgames 2024");
      });
    });

    describe("when that scene is settings", function () {
      it("should include Settings in the title", async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction("settings-section"));

        // Assert
        expect(document.title).to.equal("Settings | js13kgames 2024");
      });
    });

    describe("when that scene is title", function () {
      it("should reset the title", async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction("title-section"));

        // Assert
        expect(document.title).to.equal("js13kgames 2024");
      });
    });
  });
});
