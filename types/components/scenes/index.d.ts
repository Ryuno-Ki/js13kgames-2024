export { sectionAbout } from "./about.js";
export { sectionGameOver } from "./game-over.js";
export { sectionLevel } from "./level.js";
export { sectionLoadgame } from "./load-game.js";
export { sectionNewgame } from "./new-game.js";
export { sectionSettings } from "./settings.js";
export { sectionTitle } from "./title.js";
export { sectionWin } from "./win.js";
export { sectionWorldselection } from "./world-selection.js";
export type Scene =
  | "about-section"
  | "game-over-section"
  | "level-section"
  | "load-game-section"
  | "new-game-section"
  | "settings-section"
  | "title-section"
  | "win-section"
  | "world-section";
