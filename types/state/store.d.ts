export default store;
declare const store: Store;
declare class Store {
  /**
   * @argument {import('./reducers/index.js').reducer} reducer
   */
  constructor(reducer: typeof import("./reducers/index.js").reducer);
  reducer: typeof reducer;
  /** @type {import('./initial-state.js').State} */
  state: import("./initial-state.js").State;
  /**
   * Compute a new state.
   *
   * It's asynchronous because I might need to call out to an API. Not relevant
   * to this game, but I keep the habit.
   *
   * @argument {import('./actions/index.js').ACTION} action
   */
  dispatch(action: import("./actions/index.js").ACTION): Promise<void>;
  /**
   * Return the current state.
   */
  getState(): import("./initial-state.js").State;
  /**
   * Run side effects on certain actions.
   *
   * @private
   * @argument {import('./actions/index.js').ACTION} action
   */
  private _applySideEffects;
  /**
   * Helper method to manipulate the DOM.
   *
   * @private
   * @argument {import('./initial-state.js').ColorScheme} colorScheme
   */
  private _applyColorTheme;
  /**
   * Helper method to keep the document.title in sync with the game.
   *
   * @private
   */
  private _setDocumentTitle;
}
import { reducer } from "./reducers/index.js";
