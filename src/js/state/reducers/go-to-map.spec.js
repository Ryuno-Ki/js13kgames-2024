/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it } from "vitest";

import { meetAction } from "../actions/meet.js";
import { resetAction } from "../actions/reset.js";
import store from "../store.js";
import { goToMapReducer } from "./go-to-map.js";

describe("goToMapReducer", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when prompt is empty", function () {
    it("should not change the active room", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = goToMapReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.activeRoom).to.equal(state.activeRoom);
    });

    it("should not change the possiblePrompts", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = goToMapReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.possiblePrompts).to.deep.equal(state.possiblePrompts);
    });

    it("should not change the prompt", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = goToMapReducer(state, payload);

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
      const newState = goToMapReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.activeRoom).to.equal(state.activeRoom);
    });

    it("should suggest possible rooms", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "go " };

      // Act
      const newState = goToMapReducer(state, payload);
      const possibleRooms = state.facts[`#${state.activeRoom}`][
        "schema:geoTouches"
      ]
        .map((gameLocation) => gameLocation.value)
        .map((uri) => state.facts[uri])
        .map((schemaPlace) => schemaPlace["schema:name"][0].value.slice(1))
        .map((room) => room.toLowerCase());

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.possiblePrompts).to.deep.equal(possibleRooms);
    });

    it("should not change the prompt", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "go" };

      // Act
      const newState = goToMapReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.prompt).to.equal(payload.prompt);
    });

    describe("when the prompt matches with 'go outside'", function () {
      it("should change the active room", function () {
        // Arrange
        const state = store.getState();
        const payload = { prompt: "go outside" };

        // Act
        const newState = goToMapReducer(state, payload);

        // Assert
        expect(newState).not.to.equal(state);
        expect(newState.activeRoom).to.equal("Outside");
      });

      it("should clear possible prompts", function () {
        // Arrange
        const state = store.getState();
        const payload = { prompt: "go outside" };

        // Act
        const newState = goToMapReducer(state, payload);

        // Assert
        expect(newState).not.to.equal(state);
        expect(newState.possiblePrompts).to.deep.equal([]);
      });

      it("should clear the prompt", function () {
        // Arrange
        const state = store.getState();
        const payload = { prompt: "go outside" };

        // Act
        const newState = goToMapReducer(state, payload);

        // Assert
        expect(newState).not.to.equal(state);
        expect(newState.prompt).to.equal("");
      });
    });
  });
});
