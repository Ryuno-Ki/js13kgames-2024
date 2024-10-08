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

import { canvas } from "./components/canvas.js";
import { inventory } from "./components/inventory.js";
import { prompt } from "./components/prompt.js";
import { suggestions } from "./components/suggestions.js";
import { textbox } from "./components/textbox.js";

import { draw } from "./draw.js";
import { playMusic } from "./helpers/melody.js";
import { add } from "./registry.js";
import { registerEventListeners } from "./register-event-listeners.js";

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

  add("canvas", canvas);
  add("inventory", inventory);
  add("prompt", prompt);
  add("suggestions", suggestions);
  add("textbox", textbox);

  registerEventListeners();
  await draw();
  const dataUrl = await playMusic();
  const audio = document.querySelector("audio");
  audio?.setAttribute("src", dataUrl || "");
}
