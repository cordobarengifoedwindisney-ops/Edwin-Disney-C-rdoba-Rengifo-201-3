// models/productosModel.js

let productos = [
    {
        id: "001",
        nombre: "VELA AROMATICA DE COCO CON HIERBABUENA ",
        descripcion: "Vela aromatizadora, ideal para poner en tu hogar y Obtener olor refrescante y tropical ",
        precio: 69000,
        stock: 10,
        categoria: "Velas aromaticas 120gr ",
        activo: true
    }
];

export const findAll = () => productos;

export const findById = (id) => {
    return productos.find(producto => producto.id === id);
};

export const create = (nuevoProducto) => {
    productos.push(nuevoProducto);
    return nuevoProducto;
};
export const update = (id, datosActualizados) => {

    const index = productos.findIndex(
        producto => producto.id === id
    );

    if(index !== -1){

        productos[index] = {
            ...productos[index],
            ...datosActualizados
        };

        return productos[index];
    }

    return null;
};

export const remove = (id) => {

    const index = productos.findIndex(
        producto => producto.id === id
    );

    if(index !== -1){

        productos.splice(index, 1);

        return true;
    }

    return false;
};