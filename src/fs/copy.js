import { stat, mkdir, readdir, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  try {
    const dirPathS = join(__dirname, "files");
    const dirPathD = join(__dirname, "files_copy");

    await stat(dirPathS);
    await mkdir(dirPathD);

    const fileList = await readdir(dirPathS);

    for (let i = 0; i < fileList.length; i++) {
      const fileName = fileList[i];
      await copyFile(join(dirPathS, fileName), join(dirPathD, fileName));
    }
  } catch (error) {
    if (error.code == "EEXIST" || error.code == "ENOENT") {
      throw Error("FS operation failed");
    }
  }
};

await copy();
