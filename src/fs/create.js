import { open } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  try {
    const dirPath = join(__dirname, "files", "fresh.txt");
    const fileHandler = await open(dirPath, "ax");

    await fileHandler.write("I am fresh and young");
    await fileHandler.close();
  } catch (error) {
    if (error.code == "EEXIST") {
      throw Error("FS operation failed");
    }
  }
};

await create();
