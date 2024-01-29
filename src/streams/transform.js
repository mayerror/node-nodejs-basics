import { Transform } from "node:stream";
import { stdin as input, stdout as output } from "node:process";

const transform = async () => {
  const ReverseTransform = new Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
      const data = chunk.toString().split("").reverse().join("");

      callback(null, data);
    },
  });

  output.write("Use Ctrl + C to stop stdin\n");
  output.write("Enter some text:\n");

  input.pipe(ReverseTransform).pipe(output);
};

await transform();
