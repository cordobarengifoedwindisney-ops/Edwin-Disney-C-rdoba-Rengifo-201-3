// routes/productos.js

import { Router } from "express";

import {
    getAllProductos,
    getProductoById,
    createProducto
} from "../controllers/productosController.js";

const router = Router();

// GET todos los productos
router.get("/", getAllProductos);

// GET producto por ID
router.get("/:id", getProductoById);

// POST crear producto
router.post("/", createProducto);

export default router;