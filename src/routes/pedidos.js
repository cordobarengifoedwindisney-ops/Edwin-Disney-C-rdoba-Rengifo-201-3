const express = require('express');
const router = express.Router();

const {
  getPedidos,
  createPedido
} = require('../controllers/pedidos.controller');

// RUTAS
router.get('/', getPedidos);
router.post('/', createPedido);

module.exports = router;