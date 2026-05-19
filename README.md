# T'essence — API REST

API REST desarrollada con Node.js y Express para la tienda virtual T'essence.
Construida como parte del curso Lenguajes de Programación para Móviles — FUMC 2026.

## Instalación y ejecución

npm install
node src/app.js

Servidor disponible en http://localhost:3000

## Endpoints

### Productos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/productos | Listar todos los productos |
| GET | /api/productos?categoria=... | Filtrar por categoría |
| GET | /api/productos/:id | Obtener producto por ID |
| POST | /api/productos | Crear nuevo producto |
| PUT | /api/productos/:id | Actualizar producto |
| DELETE | /api/productos/:id | Eliminar producto |

### Pedidos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/pedidos | Listar todos los pedidos |
| GET | /api/pedidos?estado=... | Filtrar por estado |
| GET | /api/pedidos/:id | Obtener pedido por ID |
| POST | /api/pedidos | Crear nuevo pedido |
| PUT | /api/pedidos/:id | Actualizar pedido |
| DELETE | /api/pedidos/:id | Eliminar pedido |

### Personas
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/personas | Listar clientes (numDoc enmascarado) |
| GET | /api/personas/:id | Obtener cliente por ID |
| POST | /api/personas | Registrar nuevo cliente |
| PUT | /api/personas/:id | Actualizar cliente |
| DELETE | /api/personas/:id | Desactivar cliente |

### Pagos PSE
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | /api/pagos-pse | Simular transacción PSE |
| GET | /api/pagos-pse/:ref | Consultar estado por referencia |
| PUT | /api/pagos-pse/:ref/estado | Actualizar estado (APROBADO/RECHAZADO) |

## Stack tecnológico

- Node.js v20 LTS
- Express 4.18
- GitHub Codespaces
- HTML / CSS / JavaScript vanilla
- Lucide Icons

## Estructura del proyecto

src/
├── controllers/
├── models/
├── middlewares/
├── routes/
└── public/
    ├── index.html
    └── img/

## Normativa aplicada

- Ley 527 de 1999 — Comercio electronico en Colombia
- Ley 1581 de 2012 — Proteccion de datos personales (Habeas Data)

## Autora

Valentina Arias — Ingenieria de Software — FUMC 2026