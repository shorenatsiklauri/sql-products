import express from "express";
import {
  getAllTodos,
  createTodo,
  deleteTodo,
} from "../controllers/prodacts.controler.js";

const productRouter = express.Router();

productRouter.get("/todo", getAllTodos);
productRouter.post("/todo", createTodo);
productRouter.delete("/todo/:id", deleteTodo);

export default productRouter;
