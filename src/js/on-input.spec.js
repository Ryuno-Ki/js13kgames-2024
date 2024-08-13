/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { setPlayernameAction } from "./state/actions/set-playername.js";
import { resetAction } from "./state/actions/reset.js";
import store from "./state/store.js";
import { onInput } from "./on-input.js";

describe("onInput", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  it("should dispatch to set the playername", function () {
    // Arrange
    const playername = "Christoph";

    const event = new window.Event("input");
    const target = document.createElement("input");
    target.id = "playername";
    target.type = "text";
    target.value = playername;
    target.addEventListener("input", onInput);
    const spy = vi.spyOn(store, "dispatch");

    // Act
    target.dispatchEvent(event);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(setPlayernameAction(playername));
  });
});
