const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Coquito Amarillo funcionando');
});

// IMPORTAR RUTAS
const productosRouter = require('./routes/productos');
const pedidosRoutes = require('./routes/pedidos');
const pagosPseRoutes = require('./routes/pagos-pse');

// USAR RUTAS
app.use('/api/productos', productosRouter);
app.use('/api/pedidos', pedidosRoutes);
app.use('/api/pagos-pse', pagosPseRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

// Levantar servidor (SIEMPRE AL FINAL)
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});