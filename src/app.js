const express = require('express');
const cors = require('cors');

const app = express();

const productRoutes = require('./routes/productRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.use('/api/products', productRoutes);

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});

module.exports = app;