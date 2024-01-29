import { rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  try {
    const filePath = join(__dirname, "files", "fileToRemove.txt");

    await rm(filePath);
  } catch (error) {
    if (error.code == "ENOENT") {
      throw Error("FS operation failed");
    }
  }
};

await remove();
