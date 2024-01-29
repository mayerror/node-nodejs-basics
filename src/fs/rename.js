import { stat, rename as reName, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  try {
    const filePathW = join(__dirname, "files", "wrongFilename.txt");
    const filePathP = join(__dirname, "files", "properFilename.md");

    await stat(filePathW);

    try {
      await access(filePathP);
      throw { message: "Proper file already exist!", code: "EXISTT" };
    } catch (error) {
      if (error.code == "EXISTT") {
        throw { message: "Proper file already exist!", code: "EEXIST" };
      }
    }
    await reName(filePathW, filePathP);
  } catch (error) {
    if (error.code == "EEXIST" || error.code == "ENOENT") {
      throw Error("FS operation failed");
    }
  }
};

await rename();
