# 🥥 Coquito Amarillo S.A.S. — API REST

API REST desarrollada con Node.js y Express para la tienda virtual de Coquito Amarillo S.A.S.

## 🚀 Instalación y ejecución

npm install
node src/app.js

## 📡 Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/productos | Listar todos los productos |
| GET | /api/productos/:id | Obtener producto por ID |
| POST | /api/productos | Crear nuevo producto |
| PUT | /api/productos/:id | Actualizar producto |
| DELETE | /api/productos/:id | Eliminar producto |
| GET | /api/pedidos | Listar todos los pedidos |
| POST | /api/pedidos | Crear nuevo pedido |
| POST | /api/pagos-pse | Simular pago PSE |
| GET | /api/pagos-pse/:ref | Consultar estado de pago |

## 🛠️ Stack tecnológico

- Node.js v20 LTS
- Express 4.18
- GitHub Codespaces

## 📦 Estructura del proyecto

src/
├── controllers/
├── models/
├── middlewares/
└── routes/

## 👩‍💻 Autora

Valentina Arias — Ingeniería de Software — FUMC
