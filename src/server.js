import Express from "express";
import { createTable } from "./config/sql.js";

const app = Express();

async function init() {
  try {
    await createTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }

  function serverStart() {
    app.get("/", (request, response) => {
      return response.status(200).json({ message: "works!" });
    });
    app.listen(3000);
  }
}
init();
