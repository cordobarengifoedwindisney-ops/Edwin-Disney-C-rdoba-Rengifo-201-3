const express = require('express');
const router = express.Router();

const {
  getPedidos,
  createPedido,
  getPedidoById
} = require('../controllers/pedidos.controller');

// RUTAS
router.get('/', getPedidos);
router.get('/:id', getPedidoById);
router.post('/', createPedido);

module.exports = router;