import { open, stat, mkdir, readdir, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  try {
  } catch (error) {
    if (error.code == "EEXIST" || error.code == "ENOENT") {
      throw Error("FS operation failed");
    }
  }
};

await rename();
