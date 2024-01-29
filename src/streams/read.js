import { open } from "node:fs/promises";
import { dirname, join } from "node:path";
import { stdout } from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filePath = join(__dirname, "files", "fileToRead.txt");
  const fd = await open(filePath);
  const readable = fd.createReadStream();
  readable.pipe(stdout);

  readable.on("end", () => {
    fd.close();
  });
};

await read();
