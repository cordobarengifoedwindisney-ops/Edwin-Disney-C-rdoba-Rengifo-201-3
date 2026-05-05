const express = require('express');
const router = express.Router();

const {
  getProductos,
  getProductoById,
  createProducto
} = require('../controllers/productos.controller');

// RUTAS
router.get('/', getProductos);
router.get('/:id', getProductoById);
router.post('/', createProducto);

module.exports = router;