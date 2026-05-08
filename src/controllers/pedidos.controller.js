const pedidos = [];

// GET /pedidos
const getPedidos = (req, res) => {
  res.status(200).json(pedidos);
};

// POST /pedidos
const createPedido = (req, res) => {
  const nuevoPedido = {
    id: `ped-${Date.now()}`,
    ...req.body
  };

  pedidos.push(nuevoPedido);

  res.status(201).json({
    mensaje: 'Pedido creado correctamente',
    pedido: nuevoPedido
  });
};

module.exports = {
  getPedidos,
  createPedido
};