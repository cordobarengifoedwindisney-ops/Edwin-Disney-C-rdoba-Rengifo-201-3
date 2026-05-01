
import * as pedidosModel from "../models/pedidosModel.js";

// GET pedidos
export const getAllPedidos = (req, res) => {

    const pedidos = pedidosModel.findAll();

    res.json(pedidos);
};

// POST pedido
export const createPedido = (req, res) => {

    const nuevoPedido = req.body;

    pedidosModel.create(nuevoPedido);

    res.status(201).json({
        mensaje: "Pedido creado correctamente",
        pedido: nuevoPedido
    });
};