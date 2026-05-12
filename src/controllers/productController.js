let products = [
  {
    id: 1,
    name: 'Laptop',
    price: 2500
  }
];

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado'
    });
  }

  res.json(product);
};

const createProduct = (req, res) => {
  const { name, price } = req.body;

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

  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado'
    });
  }

  const { name, price } = req.body;

  product.name = name || product.name;
  product.price = price || product.price;

  res.json(product);
};

const deleteProduct = (req, res) => {
  products = products.filter(p => p.id != req.params.id);

  res.json({
    message: 'Producto eliminado'
  });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};