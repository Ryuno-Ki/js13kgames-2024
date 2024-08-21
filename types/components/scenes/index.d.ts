export { sectionAbout } from "./about.js";
export { sectionLevel } from "./level.js";
export { sectionLoadgame } from "./load-game.js";
export { sectionNewgame } from "./new-game.js";
export { sectionSettings } from "./settings.js";
export { sectionTitle } from "./title.js";
export type Scene =
  | "about-section"
  | "level-section"
  | "load-game-section"
  | "new-game-section"
  | "settings-section"
  | "title-section";
