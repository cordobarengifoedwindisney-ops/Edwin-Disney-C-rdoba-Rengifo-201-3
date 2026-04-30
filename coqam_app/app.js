import express from "express";

import productosRouter from "./routes/productos.js";

const app = express();

const port = 3000;

// Middleware
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {

    res.send("BIENVENIDO A COQUITO AMARILLO SAS");

});

// Rutas productos
app.use("/api/productos", productosRouter);

// Servidor
app.listen(port, () => {

    console.log(`Servidor ejecutándose en puerto ${port}`);

});