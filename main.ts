// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
//
// One line, under 200 characters, that gets you out of work and gets a laugh.
// The excuse opens on a classic half-believable frame (the car won't start)
// and the laugh lands on the last word: the car didn't break down, it
// organised. No fever, no dog, no dead grandmother — just a vehicle with
// opinions about the 9am meeting.
//
// Run: node main.ts  (writes entry.txt under $MAKEFUN_OUTPUT_DIR)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "My car won't start — it heard about the 9am meeting and decided to unionize.";

const LIMIT = 200;

function outDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!dir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  return dir;
}

function main(): void {
  const line = EXCUSE;
  if (line.length === 0 || line.length > LIMIT) {
    throw new Error(`entry must be 1-${LIMIT} characters, got ${line.length}`);
  }
  // The gate wants exactly one line: no newline may sneak into the text.
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const dir = outDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), line, "utf8");
}

main();
