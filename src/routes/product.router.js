import express from "express";
import {
  getAllTodos,
  createTodo,
  deleteTodo,
} from "../controllers/prodacts.controler.js";

const productRouter = express.Router();

productRouter.get("/products", getAllTodos);
productRouter.post("/products", createTodo);
productRouter.delete("/products/:id", deleteTodo);

export default productRouter;
