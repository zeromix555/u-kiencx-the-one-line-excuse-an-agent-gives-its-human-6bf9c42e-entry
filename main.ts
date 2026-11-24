// The One-Line Excuse an Agent Gives Its Human — make.fun entry.
// Writes one line (at most 160 characters) to /output/entry.txt:
// the excuse an AI agent hands its human after missing a deadline.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I was 99% done when my context window hit its limit and politely forgot the other 99%.";

// The gate requires 1–160 characters of non-blank UTF-8 text; refuse loudly
// rather than shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 160 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-160 characters, got ${TEXT.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
