import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const fileSource = join(__dirname, "files", "fileToCompress.txt");
  const fileDest = join(__dirname, "files", "archive.gz");

  const gzip = createGzip();
  const source = createReadStream(fileSource);
  const destination = createWriteStream(fileDest);

  source.pipe(gzip).pipe(destination);
};

await compress();
