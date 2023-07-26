import express from "express";
import {
  getAllTodos,
  createTodo,
  deleteTodo,
  completeTodo,
  clearALL,
} from "../controllers/prodacts.controler.js";

const productRouter = express.Router();

productRouter.get("/todo", getAllTodos);
productRouter.post("/todo", createTodo);
productRouter.delete("/todo/:id", deleteTodo);
productRouter.delete("/todo/", clearALL);
productRouter.put("/todo/:id", completeTodo);

export default productRouter;
