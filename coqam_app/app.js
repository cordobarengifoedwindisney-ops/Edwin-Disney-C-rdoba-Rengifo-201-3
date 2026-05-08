import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// IMPORTANTE: Importamos tus rutas
import productosRoutes from "./routes/productos.js";
import pedidosRoutes from "./routes/pedidos.js";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares necesarios
app.use(express.json()); // Para poder recibir datos en los POST (pedidos)
app.use(express.static(path.join(__dirname, "public")));

// --- CONEXIÓN DE RUTAS API ---
app.use("/api/productos", productosRoutes);
app.use("/api/pedidos", pedidosRoutes);

// Ruta para el frontend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, "0.0.0.0", () => {
    console.log(`---`);
    console.log(`🚀 COQUITO AMARILLO S.A.S. - Servidor Activo`);
    console.log(`🔗 API Productos: http://localhost:${port}/api/productos`);
    console.log(`---`);
});