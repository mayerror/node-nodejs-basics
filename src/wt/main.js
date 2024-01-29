import { Worker } from "node:worker_threads";
import os from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileWorker = join(__dirname, "worker.js");

const workers = [];
const numCores = os.cpus().length;
let results = [];
let logFlag = false;

function createWorker(data) {
  let worker = new Worker(fileWorker, { workerData: data });
  workers.push(worker);

  worker.on("message", (message) => {
    results.push({
      status: "resolved",
      data: message,
    });
  });

  worker.on("error", () => {
    results.push({
      status: "error",
      data: null,
    });
  });

  worker.on("exit", () => {
    if (results.length === numCores && !logFlag) {
      results = results.sort((a, b) => {
        return a.data - b.data;
      });

      console.log(results);
      logFlag = true;
    }
  });
}

const performCalculations = async () => {
  for (let i = 0; i < numCores; i++) {
    createWorker(10 + i);
  }
};

await performCalculations();
