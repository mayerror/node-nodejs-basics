import { open, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  try {
    const dirPathS = join(__dirname, "files");
    const dirPathD = join(__dirname, "files_copy");

    await stat(dirPathS);
  } catch (error) {
    // console.log(error);
    if (error.code == "EEXIST" || error.code == "ENOENT") {
      throw Error("FS operation failed");
    }
  }
};

await copy();
