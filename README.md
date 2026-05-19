Coquito Amarillo API REST

Proyecto desarrollado con Node.js y Express que permite gestionar productos, pedidos y pagos PSE mediante una API REST.

Tecnologías utilizadas

- Node.js
- Express
- Cors
- Nodemon

Instalación del proyecto

```bash
npm install
```

Ejecución del servidor

```bash
node src/app.js
```

También se puede ejecutar con:

```bash
npm run dev
```

Funcionalidades disponibles

Productos

- Consultar todos los productos
- Consultar producto por ID
- Registrar nuevos productos
- Actualizar productos
- Eliminar productos

Pedidos

- Crear pedidos
- Consultar pedidos registrados

Pagos PSE

- Registrar pagos PSE
- Consultar pagos por referencia

Rutas principales

GET

```bash
/api/productos
/api/productos/:id
/api/pedidos
/api/pagos-pse/:ref
```

POST

```bash
/api/productos
/api/pedidos
/api/pagos-pse
```

PUT

```bash
/api/productos/:id
```

DELETE

```bash
/api/productos/:id
```

Autor

Juan David Torres
