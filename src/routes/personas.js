const express = require('express');
const router = express.Router();
const { getPersonas, getPersonaById, createPersona, updatePersona, deletePersona } = require('../controllers/personasController');

router.get('/', getPersonas);
router.get('/:id', getPersonaById);
router.post('/', createPersona);
router.put('/:id', updatePersona);
router.delete('/:id', deletePersona);

module.exports = router;