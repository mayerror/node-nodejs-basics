import { open } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const filePath = join(__dirname, "files", "fileToWrite.txt");
  const fd = await open(filePath, "w+");
  const fileStream = fd.createWriteStream();

  output.write("Use Ctrl + C to stop stdin\n");
  output.write("Enter some text:\n");
  input.on("data", (chunk) => {
    const data = chunk.toString();
    fileStream.write(data);
  });

  input.on("end", () => {
    fileStream.end();
  });
};

await write();
