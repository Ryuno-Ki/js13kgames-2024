/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import {
  SET_COLOR_PREFERENCE_ACTION,
  SWITCH_TO_SCENE_ACTION,
  UPDATE_PROMPT_ACTION,
} from "../constants.js";
import { resetAction } from "./actions/reset.js";
import { reducer } from "./reducers/index.js";

class Store {
  /**
   * @argument {import('./reducers/index.js').reducer} reducer
   */
  constructor(reducer) {
    this.reducer = reducer;
    /** @type {import('./initial-state.js').State} */
    this.state = reducer(undefined, resetAction());
  }

  /**
   * Compute a new state.
   *
   * It's asynchronous because I might need to call out to an API. Not relevant
   * to this game, but I keep the habit.
   *
   * @argument {import('./actions/index.js').ACTION} action
   */
  async dispatch(action) {
    const oldState = this.state;
    this.state = this.reducer(this.state, action);
    this._applySideEffects(action, oldState, this.state);
  }

  /**
   * Return the current state.
   */
  getState() {
    return this.state;
  }

  /**
   * Run side effects on certain actions.
   *
   * @private
   * @argument {import('./actions/index.js').ACTION} action
   * @argument {import('./initial-state.js').State} oldState
   * @argument {import('./initial-state.js').State} newState
   */
  _applySideEffects(action, oldState, newState) {
    if (action.type === SET_COLOR_PREFERENCE_ACTION) {
      this._applyColorTheme(action.payload.colorScheme);
    }

    if (action.type === SWITCH_TO_SCENE_ACTION) {
      this._setDocumentTitle();
    }

    if (action.type === UPDATE_PROMPT_ACTION) {
      this._maybeClearPrompt(oldState, newState);
    }
  }

  /**
   * Helper method to manipulate the DOM.
   *
   * @private
   * @argument {import('./initial-state.js').ColorScheme} colorScheme
   */
  _applyColorTheme(colorScheme) {
    ["system", "light", "dark"].forEach((theme) => {
      document.body.classList.remove(`theme-${theme}`);
    });
    document.body.classList.add(`theme-${colorScheme}`);
  }

  /**
   * Helper method to keep the document.title in sync with the game.
   *
   * @private
   */
  _setDocumentTitle() {
    const { activeScene } = this.getState();
    /** @type {Record<import('../components/scenes/index.js').Scene, string>} */
    const sceneToTitleMapping = {
      "about-section": "About",
      "level-section": "", // Empty on purpose
      "load-game-section": "Load Game",
      "new-game-section": "New Game",
      "settings-section": "Settings",
      "title-section": "", // Empty on purpose
    };

    const sceneTitle = sceneToTitleMapping[activeScene];
    const parts = [sceneTitle, "js13kgames 2024"];
    document.title = parts.filter(Boolean).join(" | ");
  }

  /**
   * Helper method to clear the prompt.
   *
   * @private
   * @argument {import('./initial-state.js').State} oldState
   * @argument {import('./initial-state.js').State} newState
   */
  _maybeClearPrompt(oldState, newState) {
    if (newState.possiblePrompts.length < oldState.possiblePrompts.length) {
      const prompt = document.getElementById("prompt");
      prompt?.setAttribute("value", "");
    }
  }
}

const store = new Store(reducer);
export default store;
