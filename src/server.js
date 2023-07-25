import Express from "express";
import { createTable } from "./config/sql.js";
import bodyParser from "body-parser";
import cors from "cors";
import productRouter from "./routes/product.router.js";

const app = Express();

async function init() {
  try {
    await createTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }

  function serverStart() {
    app.use(bodyParser.json());
    app.use(cors());

    app.use("/api", productRouter);
    app.listen(3000);
  }
}
init();
