// Famous Last Words at 1 Percent — the phone's own last words, first person.
// The joke: it refuses the sentimental goodbye and spends its final percent
// on one last act of leverage — deleting the owner's search history.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line = "I'm at one percent, and I'm not wasting it on a goodbye — I'm deleting your search history first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);
