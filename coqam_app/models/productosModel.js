// models/productosModel.js

let productos = [
    {
        id: "001",
        nombre: "VELA AROMATICA DE COCO CON HIERBABUENA ",
        descripcion: "Disfruta una experiencia refrescante y tropical con esta vela aromática de coco y hierbabuena. Su fragancia combina la suavidad dulce del coco con el toque fresco de la menta, creando un ambiente relajante, limpio y revitalizante. Perfecta para tu hogar, momentos de descanso o espacios de bienestar.",
        precio: 69000,
        stock: 10,
        categoria: "Velas aromaticas 120gr ",
        activo: true
    }
    , 
 {
id: "002",
        nombre: "VELA AROMATICA DE FRUTOS ROJOS CON VAINILLA  ",
        descripcion: "Llena tu espacio de calidez y dulzura con esta vela aromática de frutos rojos y vainilla. Su aroma mezcla notas frutales intensas con la suavidad cremosa de la vainilla, creando un ambiente acogedor, romántico y elegante. Ideal para relajarte o ambientar tus momentos especiales.",
        precio: 69000,
        stock: 18,
        categoria: "Velas aromaticas 120gr ",
        activo: true

 }   
 ,
{
    id: "003",
        nombre: "VELA AROMATICA DE MANZANA CON CANELA ",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 10,
        categoria: "Velas aromaticas 120gr ",
        activo: true
} 
, 
{
    id: "004",
        nombre: "VELA AROMATICA DE BRISA MARINA CON COCO  ",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 10,
        categoria: "Velas aromaticas 120gr ",
        activo: true
}
,
{
    id: "005",
        nombre: "VELA AROMATICA DE LAVANDA Y MIEL   ",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 10,
        categoria: "Velas aromaticas 120gr ",
        activo: true
}
,
{
    id: "006",
        nombre: "VELA AROMATICA DE MANDARINA CON CANELA",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 10,
        categoria: "Velas aromaticas 120gr ",
        activo: true
}
,
{
    id: "007",
        nombre: "VELA AROMATICA DE CHOCOLATE  ",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 10,
        categoria: "Velas aromaticas 120gr ",
        activo: true
}
,
{
    id: "008",
        nombre: "VELA AROMATICA DE FRUTOS AMARILLOS   ",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
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