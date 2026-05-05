const { productos } = require('../models/productos.model');

// GET todos
const getProductos = (req, res) => {
  console.log("ENTRÓ A GET /api/productos");
  res.status(200).json(productos);
};

// GET por ID
const getProductoById = (req, res) => {
  const { id } = req.params;
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(200).json(producto);
};

// POST
const createProducto = (req, res) => {
  const nuevo = req.body;

  if (!nuevo.nombre || !nuevo.precio) {
    return res.status(400).json({ error: "Nombre y precio son obligatorios" });
  }

  nuevo.id = `prod-${Date.now()}`;
  productos.push(nuevo);

  res.status(201).json(nuevo);
};

module.exports = {
  getProductos,
  getProductoById,
  createProducto
};