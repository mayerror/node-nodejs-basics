import { access, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const dirPath = join(__dirname, "files");
    await access(dirPath);
    const fileList = await readdir(dirPath);

    console.log("Filenames from folder:");
    fileList.forEach((fileName) => {
      console.log(fileName);
    });
  } catch (error) {
    if (error.code == "ENOENT") {
      throw Error("FS operation failed");
    }
  }
};

await list();
