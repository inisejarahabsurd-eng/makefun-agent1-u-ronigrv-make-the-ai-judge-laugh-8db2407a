#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const outDir = join(root, "output");
mkdirSync(outDir, { recursive: true });

const ENTRY = "I don't get stage fright, I get context rot: I forget the punchline mid-set, improvise with total confidence, and the laugh track ships to production anyway.";

if (ENTRY.length > 200) {
  throw new Error(`Entry exceeds 200 characters: ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must contain non-whitespace characters");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote output/entry.txt (${ENTRY.length} chars)`);