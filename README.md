# Coquito Amarillo API

API REST desarrollada con Node.js y Express para la gestión de productos, pedidos y pagos PSE.

---

# Descripción

Este proyecto permite:

- Consultar productos
- Crear pedidos
- Consultar pedidos
- Actualizar pedidos
- Eliminar pedidos
- Simular pagos PSE

La API fue desarrollada siguiendo una arquitectura organizada con rutas y controladores separados.

---

# Tecnologías usadas

- Node.js
- Express.js
- JavaScript
- Nodemon
- Git
- GitHub

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/TU-USUARIO/coquito-amarillo-api-LPM01-201-3.git
```

Entrar a la carpeta del proyecto:

```bash
cd coquito-amarillo-api-LPM01-201-3
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm run dev
```

Servidor corriendo en:

```bash
http://localhost:3000
```

---

# Estructura del proyecto

```bash
src/
│
├── controllers/
├── routes/
├── middlewares/
├── models/
└── app.js
```

---

# Endpoints

# Productos

## Obtener productos

```http
GET /api/productos
```

---

# Pedidos

## Obtener todos los pedidos

```http
GET /api/pedidos
```

## Obtener pedido por ID

```http
GET /api/pedidos/:id
```

## Crear pedido

```http
POST /api/pedidos
```

Ejemplo:

```json
{
  "cliente": "Jose Agudelo",
  "producto": "Coquito Fresa",
  "cantidad": 2,
  "total": 16000
}
```

---

## Actualizar pedido

```http
PUT /api/pedidos/:id
```

Ejemplo:

```json
{
  "cliente": "Jose Agudelo",
  "producto": "Coquito Tradicional",
  "cantidad": 3,
  "total": 24000
}
```

---

## Eliminar pedido

```http
DELETE /api/pedidos/:id
```

---

# Pagos PSE

## Procesar pago PSE

```http
POST /api/pagos-pse
```

Ejemplo:

```json
{
  "banco": "Bancolombia",
  "usuario": "Jose Agudelo",
  "valor": 50000
}
```

---

# Validaciones implementadas

## Pedidos

- Todos los campos son obligatorios
- La cantidad debe ser mayor a 0
- El total debe ser mayor a 0
- Validación de ID inexistente

## Pagos PSE

- Banco obligatorio
- Usuario obligatorio
- Valor mayor a 0

---

# Autor

Proyecto desarrollado por Jose Gabriel Agudelo Vargas.