
import { Router } from "express";

import {
    getAllPedidos,
    createPedido

} from "../controllers/pedidosController.js";

const router = Router();

// GET pedidos
router.get("/", getAllPedidos);

// POST pedido
router.post("/", createPedido);

export default router;