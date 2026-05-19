// routes/productos.js

import { Router } from "express";

import {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto

} from "../controllers/productosController.js";

const router = Router();

// GET todos
router.get("/", getAllProductos);

// GET por ID
router.get("/:id", getProductoById);

// POST
router.post("/", createProducto);

// PUT actualizar producto
router.put("/:id", updateProducto);

// DELETE eliminar producto
router.delete("/:id", deleteProducto);

export default router;