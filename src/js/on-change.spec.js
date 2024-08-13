/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "./state/actions/reset.js";
import { setColorPreferenceAction } from "./state/actions/set-color-preference.js";
import store from "./state/store.js";
import { onChange } from "./on-change.js";

describe("onChange", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  it("should set another color preference", function () {
    // Arrange
    const event = new window.Event("change");
    const color = "dark";
    const target = document.createElement("input");
    target.setAttribute("id", "color-preference");
    target.setAttribute("value", color);
    target.addEventListener("change", onChange);
    const spy = vi.spyOn(store, "dispatch");

    // Act
    target.dispatchEvent(event);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(setColorPreferenceAction(color));
  });
});
