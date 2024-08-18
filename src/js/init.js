/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { sectionTitle } from "./components/scenes/title.js";
import { sectionSettings } from "./components/scenes/settings.js";
import { sectionAbout } from "./components/scenes/about.js";
import { sectionNewgame } from "./components/scenes/new-game.js";
import { sectionLoadgame } from "./components/scenes/load-game.js";
import { sectionLevel } from "./components/scenes/level.js";
import { sectionWorldselection } from "./components/scenes/world-selection.js";
import { sectionWin } from "./components/scenes/win.js";
import { sectionGameOver } from "./components/scenes/game-over.js";

import { canvas } from "./components/canvas.js";
import { prompt } from "./components/prompt.js";
import { suggestions } from "./components/suggestions.js";

import { registerEventListeners } from "./register-event-listeners.js";
import { draw } from "./draw.js";
import { add } from "./registry.js";

/**
 * Entry point to the game. Registers components and event listeners before
 * triggering the render loop.
 */
export async function init() {
  add("title-section", sectionTitle);
  add("settings-section", sectionSettings);
  add("about-section", sectionAbout);
  add("new-game-section", sectionNewgame);
  add("load-game-section", sectionLoadgame);
  add("level-section", sectionLevel);
  add("world-section", sectionWorldselection);
  add("win-section", sectionWin);
  add("game-over-section", sectionGameOver);

  add("canvas", canvas);
  add("prompt", prompt);
  add("suggestions", suggestions);

  registerEventListeners();
  await draw();
}
