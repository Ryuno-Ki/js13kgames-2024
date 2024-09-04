/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it } from "vitest";

import { resetAction } from "../actions/reset.js";
import store from "../store.js";
import { meetReducer } from "./meet.js";

describe("meetReducer", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  it("should pass through the seed", function () {
    // Arrange
    const state = store.getState();
    const payload = { name: "someone", seed: "seed" };

    // Act
    const newState = meetReducer(state, payload);

    // Assert
    expect(newState).not.to.equal(state);
    expect(newState.seed).not.to.equal(state.seed);
    expect(newState.seed).to.equal(payload.seed);
  });

  it("should introduce Yu to them", function () {
    // Arrange
    const state = store.getState();
    const payload = { name: "someone", seed: "seed" };

    // Act
    const newState = meetReducer(state, payload);

    // Assert
    expect(newState).not.to.equal(state);
    expect(newState.facts["#someone"]["foaf:knows"]).to.deep.equal([
      {
        value: "#Yu",
        type: "uri",
      },
    ]);
  });

  it("should introduce them to Yu", function () {
    // Arrange
    const state = store.getState();
    const payload = { name: "someone", seed: "seed" };

    // Act
    const newState = meetReducer(state, payload);

    // Assert
    expect(newState).not.to.equal(state);
    expect(newState.facts["#Yu"]["foaf:knows"]).to.deep.equal([
      {
        value: `#${payload.name}`,
        type: "uri",
      },
    ]);
  });
});
