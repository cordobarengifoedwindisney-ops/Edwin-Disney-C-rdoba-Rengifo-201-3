const pedidos = require('../models/pedidos');

const getPedidos = (req, res) => {
  res.json(pedidos);
};

const createPedido = (req, res) => {
  const { cliente, productos, total } = req.body;
  if (!cliente || !productos || !total) {
    return res.status(400).json({ mensaje: "Faltan campos requeridos: cliente, productos, total" });
  }
  const nuevo = {
    id: "ped-" + String(pedidos.length + 1).padStart(3, '0'),
    cliente,
    productos,
    total,
    estado: "PENDIENTE",
    fecha: new Date().toISOString()
  };
  pedidos.push(nuevo);
  res.status(201).json(nuevo);
};

module.exports = { getPedidos, createPedido };
