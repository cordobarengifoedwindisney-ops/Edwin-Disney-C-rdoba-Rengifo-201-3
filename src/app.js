const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');
const pseRouter = require('./routes/pagos');

app.use('/api/productos', productosRouter);
app.use('/api/pedidos', pedidosRouter);
app.use('/api/pagos-pse', pseRouter);

app.get('/', (req, res) => {
  res.json({ mensaje: "API Coquito Amarillo S.A.S. funcionando 🚀" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));

module.exports = app;
