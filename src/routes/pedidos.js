const express = require('express');
const router = express.Router();

const {
  getPedidos,
  createPedido,
  getPedidoById,
  updatePedido
} = require('../controllers/pedidos.controller');

// RUTAS
router.get('/', getPedidos);
router.get('/:id', getPedidoById);
router.put('/:id', updatePedido);
router.post('/', createPedido);



module.exports = router;