const express = require('express');
const cors = require('cors');

const app = express();

const productRoutes = require('./routes/productRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.use('/api/productos', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});

module.exports = app;