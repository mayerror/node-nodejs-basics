import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const fileSource = join(__dirname, "files", "archive.gz");
  const fileDest = join(__dirname, "files", "fileToCompress.txt");

  const unzip = createUnzip();
  const source = createReadStream(fileSource);
  const destination = createWriteStream(fileDest);

  source.pipe(unzip).pipe(destination);
};

await decompress();
