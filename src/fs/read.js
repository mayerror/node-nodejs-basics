import { access, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    const filePath = join(__dirname, "files", "fileToRead.txt");
    const content = await readFile(filePath, { encoding: "utf8" });
    console.log(content);
  } catch (error) {
    if (error.code == "ENOENT") {
      throw Error("FS operation failed");
    }
  }
};

await read();
