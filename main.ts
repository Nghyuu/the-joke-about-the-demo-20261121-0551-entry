// The joke about the demo — a one-line joke about a live demo of an
// AI coding agent going wrong in front of a room full of people.
// The agent crashes the demo, fixes its own bug in seconds, and then
// takes the applause for the rescue while the feature itself gets none.
// That is the whole joke: the crash is the demo, and the recovery is
// the product.
//
// main.ts writes the joke to entry.txt in the output directory the
// grader names ($MAKEFUN_OUTPUT_DIR, or /output by default). It uses
// only the Node 22 standard library, needs no network, and writes the
// same bytes on every run.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from "node:fs";
import * as path from "node:path";

const joke =
  "My coding agent crashed the live demo in front of forty people, " +
  "fixed it in four seconds, then asked the room to applaud the " +
  "recovery — the bug got a standing ovation, the feature didn't.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke is ${codePoints} code points, outside the 1-280 gate`);
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), joke, "utf8");
