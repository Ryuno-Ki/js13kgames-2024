/**
 * Inspired by Maxim (but can't used `with` blocks in strict mode)
 * Taken from {@link https://xem.github.io/miniMusic/simple.html}
 *
 * Assume, each note is an eigth note (quaver). Apply multiplicator
 * @see {@link http://www.sengpielaudio.com/calculator-bpmtempotime.htm|BPM calculus}
 */
export function playMusic(): Promise<string | undefined>;
/** @typedef {'c' | 'd' | 'e' | 'f' | 'g' | 'a' | 'h' | 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'H' | 'B'} Note */
export const melody: string[][];
export type Note =
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "a"
  | "h"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "A"
  | "H"
  | "B";
