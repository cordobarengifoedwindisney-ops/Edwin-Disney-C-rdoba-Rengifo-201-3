const express = require('express');
const router = express.Router();

// Datos en memoria (como pide el profe)
let productos = [
  {
    id: 1,
    nombre: "Coquito  ",
    precio: 4500
  }
];

// GET todos
router.get('/', (req, res) => {
  res.json(productos);
});

// GET por id
router.get('/:id', (req, res) => {
  const producto = productos.find(p => p.id == req.params.id);
  if (!producto) return res.status(404).json({mensaje: "No encontrado"});
  res.json(producto);
});

// POST crear
router.post('/', (req, res) => {
  const nuevo = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio
  };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

module.exports = router;

// PUT actualizar
router.put('/:id', (req, res) => {
  const producto = productos.find(p => p.id == req.params.id);
  if (!producto) return res.status(404).json({ mensaje: "No encontrado" });

  producto.nombre = req.body.nombre;
  producto.precio = req.body.precio;

  res.json(producto);
});

// DELETE eliminar
router.delete('/:id', (req, res) => {
  productos = productos.filter(p => p.id != req.params.id);
  res.status(204).send();
});