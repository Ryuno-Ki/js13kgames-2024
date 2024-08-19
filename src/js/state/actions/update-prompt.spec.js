/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from "vitest";

import { UPDATE_PROMPT_ACTION } from "../../constants.js";
import { updatePromptAction } from "./update-prompt.js";

describe("updatePromptAction", function () {
  it(`should create a ${UPDATE_PROMPT_ACTION}`, function () {
    // Arrange
    const prompt = "go home";

    // Act
    const action = updatePromptAction(prompt);

    // Assert
    expect(action.type).to.equal(UPDATE_PROMPT_ACTION);
    expect(action.payload.prompt).to.equal(prompt);
  });
});
