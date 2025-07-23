import cluster from "cluster";
import os from "os";
import { app } from "./index";

const totalCpus = os.cpus().length;
const port = 3001;

if (cluster.isPrimary) {
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
  cluster.on("exit", () => {
    cluster.fork();
  });
} else {
  app.listen(port, () => {
    console.log("Server is started");
  });
}
