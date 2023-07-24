import express from "express";
import {
  createProduct,
  getAllproducts,
} from "../controllers/prodacts.controler.js";

const productRouter = express.Router();

productRouter.get("/products", getAllproducts);
productRouter.post("/products", createProduct);

export default productRouter;
