import express from "express";
import {
  createProduct,
  getAllproducts,
  deleteProduct,
} from "../controllers/prodacts.controler.js";

const productRouter = express.Router();

productRouter.get("/products", getAllproducts);
productRouter.post("/products", createProduct);
productRouter.delete("/products/:id", deleteProduct);

export default productRouter;
