/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../../state/actions/reset.js";
import store from "../../state/store.js";
import { sectionAbout } from "./about.js";

describe("sectionAbout", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when about is not the active scene", function () {
    it("should be empty", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const aboutScene = sectionAbout(targetElement, state);

      // Assert
      expect(aboutScene.innerHTML).to.be.empty;
    });
  });

  describe("when about is the active scene", function () {
    it("should display information about the game", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "about-section",
      });

      // Act
      const aboutScene = sectionAbout(targetElement, state);

      // Assert
      expect(aboutScene.querySelector("h1")).not.to.be.null;
    });

    it("should link to my homepage", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "about-section",
      });

      // Act
      const aboutScene = sectionAbout(targetElement, state);

      // Assert
      expect(aboutScene.querySelector('a[href="https://jaenis.ch/"]')).not.to.be
        .null;
    });

    it("should link to the LICENSE", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "about-section",
      });

      // Act
      const aboutScene = sectionAbout(targetElement, state);

      // Assert
      expect(aboutScene.querySelector('a[href$="AGPL-3.0-or-later.txt"]')).not
        .to.be.null;
    });

    it("should link to the source code", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "about-section",
      });

      // Act
      const aboutScene = sectionAbout(targetElement, state);

      // Assert
      expect(
        aboutScene.querySelector(
          'a[href^="https://code.jaenis.ch/js13kgames/js13kgames-2024"]',
        ),
      ).not.to.be.null;
    });

    it("should link to the title scene", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "about-section",
      });

      // Act
      const aboutScene = sectionAbout(targetElement, state);

      // Assert
      expect(aboutScene.querySelector('[data-scene="title-section"]')).not.to.be
        .null;
    });
  });
});
