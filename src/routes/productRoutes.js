const express = require('express');
const router = express.Router();

let products = [
  {
    id: 1,
    name: 'Laptop',
    price: 2500
  },
  {
    id: 2,
    name: 'Mouse',
    price: 120
  }
];


// GET ALL PRODUCTS
router.get('/', (req, res) => {

  res.json(products);

});


// POST PRODUCT
router.post('/', (req, res) => {

  const { name, price } = req.body;

  // VALIDACIÓN
  if (!name || !price) {

    return res.status(400).json({
      message: 'Nombre y precio son obligatorios'
    });

  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);

  res.status(201).json({
    message: 'Producto creado correctamente',
    product: newProduct
  });

});

module.exports = router;