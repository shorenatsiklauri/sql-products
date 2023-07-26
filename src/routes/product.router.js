import express from "express";
import {
  getAllTodos,
  createTodo,
  deleteTodo,
  completeTodo,
} from "../controllers/prodacts.controler.js";

const productRouter = express.Router();

productRouter.get("/todo", getAllTodos);
productRouter.post("/todo", createTodo);
productRouter.delete("/todo/:id", deleteTodo);
productRouter.put("/todo/:id", completeTodo);

export default productRouter;
