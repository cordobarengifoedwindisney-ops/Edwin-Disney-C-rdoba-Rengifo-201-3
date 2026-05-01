import express from "express";

import productosRouter from "./routes/productos.js";
import pedidosRouter from "./routes/pedidos.js";


const app = express();

const port = 3000;

// Middleware
app.use(express.json());


app.get("/", (req, res) => {

    res.send("BIENVENIDO A COQUITO AMARILLO SAS");

});

app.use("/api/productos", productosRouter);
app.use("/api/pedidos", pedidosRouter);

app.listen(port, () => {

    console.log(`Servidor ejecutándose en puerto ${port}`);

});