/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it } from "vitest";

import { resetAction } from "../actions/reset.js";
import store from "../store.js";
import { updatePromptReducer } from "./update-prompt.js";

describe("updatePromptReducer", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when prompt is empty", function () {
    it("should not change the active room", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = updatePromptReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.activeRoom).to.equal(state.activeRoom);
    });

    it("should not change the possiblePrompts", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = updatePromptReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.possiblePrompts).to.deep.equal(state.possiblePrompts);
    });

    it("should not change the prompt", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = updatePromptReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.prompt).to.equal(state.prompt);
    });
  });

  describe("when the prompt starts with 'go'", function () {
    it("should not change the active room", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "go" };

      // Act
      const newState = updatePromptReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.activeRoom).to.equal(state.activeRoom);
    });

    it("should suggest possible rooms", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "go" };

      // Act
      const newState = updatePromptReducer(state, payload);
      const possibleRooms = state.activities[state.activeRoom].go;

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.possiblePrompts).to.deep.equal(possibleRooms);
    });

    it("should not change the prompt", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "go" };

      // Act
      const newState = updatePromptReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.prompt).to.equal(payload.prompt);
    });
  });

  describe("when the prompt matches with 'go outside'", function () {
    it("should change the active room", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "go outside" };

      // Act
      const newState = updatePromptReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.activeRoom).to.equal("outside");
    });

    it("should clear possible prompts", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "go outside" };

      // Act
      const newState = updatePromptReducer(state, payload);
      const possibleRooms = state.activities[state.activeRoom].go;

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.possiblePrompts).to.deep.equal([]);
    });

    it("should clear the prompt", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "go outside" };

      // Act
      const newState = updatePromptReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.prompt).to.equal("");
    });
  });
});
