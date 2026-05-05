const express = require('express');
const router = express.Router();
const { crearPago, consultarPago } = require('../controllers/pagosController');

router.post('/', crearPago);
router.get('/:ref', consultarPago);

module.exports = router;
