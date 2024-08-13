/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../actions/reset.js";
import store from "../store.js";
import { resetReducer } from "./reset.js";

describe("resetReducer", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  it("should reset the state to initial", function () {
    // Arrange
    const state = store.getState();
    const payload = {};

    // Act
    const newState = resetReducer(state, payload);

    // Assert
    expect(newState).not.to.equal(state);
    expect(newState).to.deep.equal(state);
  });
});
