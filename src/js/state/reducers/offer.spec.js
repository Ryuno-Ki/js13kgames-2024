/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it } from "vitest";

import { meetAction } from "../actions/meet.js";
import { resetAction } from "../actions/reset.js";
import store from "../store.js";
import { offerReducer } from "./offer.js";

describe("offerReducer", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when prompt is empty", function () {
    it("should not change the active room", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = offerReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.activeRoom).to.equal(state.activeRoom);
    });

    it("should not change the possiblePrompts", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = offerReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.possiblePrompts).to.deep.equal(state.possiblePrompts);
    });

    it("should not change the prompt", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = offerReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.prompt).to.equal(state.prompt);
    });
  });

  describe("when the prompt starts with 'pickup'", function () {
    beforeEach(async function () {
      await store.dispatch(meetAction("John", "Doe"));
    });

    it("should suggest possible items", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "pickup" };

      // Act
      const newState = offerReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.possiblePrompts).to.deep.equal(["apple"]);
    });

    it("should not change the prompt", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "pickup" };

      // Act
      const newState = offerReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.prompt).to.equal(payload.prompt);
    });

    it.skip("should not change your inventory", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "pickup" };

      // Act
      const newState = offerReducer(state, payload);
      const yourInventory = newState.facts.people.find(
        (p) => p.name === "Yu",
      ).inventory;

      // Assert
      expect(newState).not.to.equal(state);
      expect(yourInventory).to.deep.equal(state.facts.people[0].inventory);
    });

    describe("when the prompt matches with 'pickup 1 apple'", function () {
      it("should clear possible prompts", function () {
        // Arrange
        const state = store.getState();
        const payload = { prompt: "pickup 1 apple" };

        // Act
        const newState = offerReducer(state, payload);

        // Assert
        expect(newState).not.to.equal(state);
        expect(newState.possiblePrompts).to.deep.equal([]);
      });

      it("should clear the prompt", function () {
        // Arrange
        const state = store.getState();
        const payload = { prompt: "pickup 1 apple" };

        // Act
        const newState = offerReducer(state, payload);

        // Assert
        expect(newState).not.to.equal(state);
        expect(newState.prompt).to.equal("");
      });

      it.skip("should change your inventory", function () {
        // Arrange
        const state = store.getState();
        const payload = { prompt: "pickup 1 apple" };

        // Act
        const newState = offerReducer(state, payload);
        const yourInventory = newState.facts.people.find(
          (p) => p.name === "Yu",
        ).inventory;

        // Assert
        expect(newState).not.to.equal(state);
        expect(yourInventory).not.to.deep.equal(
          state.facts.people[0].inventory,
        );
        expect(yourInventory).toMatchObject([
          {
            name: "apple",
            quantity: 1,
          },
        ]);
      });

      it.skip("should change the room items", function () {
        // Arrange
        const state = store.getState();
        const payload = { prompt: "pickup 1 apple" };

        // Act
        const newState = offerReducer(state, payload);
        const homeItems = newState.facts.places.find(
          (r) => r.name === "home",
        ).items;

        // Assert
        expect(newState).not.to.equal(state);
        expect(homeItems).not.to.deep.equal(state.facts.places[0].items);
        expect(homeItems).toEqual([]);
      });
    });

    describe.skip("when the prompt matches with 'pickup 20 apples'", function () {
      it("should pickup as much as possible", function () {
        // Arrange
        const state = Object.assign({}, store.getState(), {
          activeRoom: "outside",
        });
        const payload = { prompt: "pickup 20 apples" };

        // Act
        const newState = offerReducer(state, payload);
        const yourInventory = newState.facts.people.find(
          (p) => p.name === "Yu",
        ).inventory;

        // Assert
        expect(newState).not.to.equal(state);
        expect(yourInventory).not.to.deep.equal(
          state.facts.people[0].inventory,
        );
        expect(yourInventory).toMatchObject([
          {
            name: "apple",
            quantity: 10,
          },
        ]);
      });

      it("should empty the room items", function () {
        // Arrange
        const state = Object.assign({}, store.getState(), {
          activeRoom: "outside",
        });
        const payload = { prompt: "pickup 20 apples" };

        // Act
        const newState = offerReducer(state, payload);
        const roomItems = newState.facts.places.find(
          (r) => r.name === state.activeRoom,
        ).items;

        // Assert
        expect(newState).not.to.equal(state);
        expect(roomItems).not.to.deep.equal(state.facts.places[1].items);
        expect(roomItems).toEqual(
          state.facts.places[1].items.filter((item) => item.name !== "apple"),
        );
      });
    });
  });
});
