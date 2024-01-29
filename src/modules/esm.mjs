import path from "node:path";
import { release, version } from "os";
import { createServer } from "http";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = await import("./files/a.json", { with: { type: "json" } });
} else {
  unknownObject = await import("./files/a.json", { with: { type: "json" } });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted 2");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
