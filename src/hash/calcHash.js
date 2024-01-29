import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { stdout } from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");
  const content = await readFile(filePath, { encoding: "utf8" });

  let digest = createHash("sha256").update(content).digest("hex");

  //logs it into console as hex using Streams API
  stdout.write(digest);
};

await calculateHash();
