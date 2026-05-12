// models/productosModel.js

let productos = [
    {
        id: "001",
        nombre: "VELA AROMATICA DE COCO CON HIERBABUENA ",
        descripcion: "Disfruta una experiencia refrescante y tropical con esta vela aromática de coco y hierbabuena. Su fragancia combina la suavidad dulce del coco con el toque fresco de la menta, creando un ambiente relajante, limpio y revitalizante. Perfecta para tu hogar, momentos de descanso o espacios de bienestar.",
        precio: 69000,
        stock: 18,
        categoria:"Velas Aromaticas",
        activo: true
    }
    , 
 {
id: "002",
        nombre: "VELA AROMATICA DE FRUTOS ROJOS CON VAINILLA  ",
        descripcion: "Llena tu espacio de calidez y dulzura con esta vela aromática de frutos rojos y vainilla. Su aroma mezcla notas frutales intensas con la suavidad cremosa de la vainilla, creando un ambiente acogedor, romántico y elegante. Ideal para relajarte o ambientar tus momentos especiales.",
        precio: 69000,
        stock: 14,
        categoria:"Velas Aromaticas",
        activo: true

 }   
 ,
{
    id: "003",
        nombre: "VELA AROMATICA DE MANZANA CON CANELA ",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 2,
        categoria:"Velas Aromaticas",
        activo: true
} 
, 
{
    id: "004",
        nombre: "VELA AROMATICA DE BRISA MARINA CON COCO  ",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 13,
        categoria:"Velas Aromaticas",
        activo: true
}
,
{
    id: "005",
        nombre: "VELA AROMATICA DE LAVANDA Y MIEL   ",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 22,
        categoria:"Velas Aromaticas",
        activo: true
}
,
{
    id: "006",
        nombre: "VELA AROMATICA DE MANDARINA CON CANELA",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 8,
        categoria:"Velas Aromaticas",
        activo: true
}
,
{
    id: "007",
        nombre: "VELA AROMATICA DE CHOCOLATE  ",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 3,
        categoria:"Velas Aromaticas",
        activo: true
}
,
{
    id: "008",
        nombre: "VELA AROMATICA DE FRUTOS AMARILLOS   ",
        descripcion: "Disfruta una fragancia envolvente que combina la intensidad de los frutos rojos con la dulzura de la vainilla. Esta vela es perfecta para crear un ambiente cálido, armonioso y sofisticado en cualquier espacio de tu hogar.",
        precio: 69000,
        stock: 5,
        categoria:"Velas Aromaticas",
        activo: true
}
,
{
     id: "009",
        nombre: "JABON ARTESANAL MIEL DORADA",
        descripcion: "El jabon clasico de la colmena,nutre piel seca, deja sensación sedosa",
        precio: 80000,
        stock: 5,
        categoria: "Jabones artesanales",
        activo: true
}
,
{
     id: "0010",
        nombre: "JABON ARTESANAL LAVANDA LUNAR",
        descripcion: "",
        precio: 80000,
        stock: 15,
        categoria: "Jabones artesanales",
        activo: true
}
,
{
     id: "0011",
        nombre: "JABON ARTESANAL CARBON DETOX",
        descripcion: "",
        precio: 85000,
        stock: 5,
        categoria: "Jabones artesanales",
        activo: true
}
,
{
     id: "0012",
        nombre: "JABON ARTESANAL COCO NUBE",
        descripcion: "",
        precio: 80000,
        stock: 5,
        categoria: "Jabones artesanales",
        activo: true
}
,
{
     id: "0013",
        nombre: "JABON ARTESANAL ROSA MASQUETA",
        descripcion: "",
        precio: 80000,
        stock: 5,
        categoria: "Jabones artesanales",
        activo: true
}
,
{
     id: "0014",
        nombre: "JABON ARTESANAL CACAO MENTA",
        descripcion: "",
        precio: 80000,
        stock: 5,
        categoria: "Jabones artesanales",
        activo: true
}
,
{
     id: "0015",
        nombre: "JABON ARTESANAL MARACUYA",
        descripcion: "",
        precio: 80000,
        stock: 5,
        categoria: "Jabones artesanales",
        activo: true
}
,
{
     id: "0016",
        nombre: "JABON ARTESANAL AVENA",
        descripcion: "",
        precio: 80000,
        stock: 5,
        categoria: "Jabones artesanales",
        activo: true
}
,
{
     id: "0017",
        nombre: " SALES MINERALES ROSA ANDINA 250gr",
        descripcion: "",
        precio: 30000,
        stock: 55,
        categoria: "Sales minerales ",
        activo: true
}
,
{
     id: "0018",
        nombre: " SALES MINERALES LAVANDA 250gr",
        descripcion: "",
        precio: 30000,
        stock: 6,
        categoria: "Sales minerales ",
        activo: true
}
,
{
     id: "0019",
        nombre: " SALES MINERALES EUCALIPTO 250gr",
        descripcion: "",
        precio: 30000,
        stock: 19,
        categoria: "Sales minerales ",
        activo: true
}
,
{
     id: "0020",
        nombre: " SALES MINERALES LUNA CARBON 500GR",
        descripcion: "",
        precio: 48000,
        stock: 24,
        categoria: "Sales minerales ",
        activo: true
}
,
{
     id: "0021",
        nombre: " SALES MINERALES CAFE 500gr",
        descripcion: "",
        precio: 48000,
        stock: 5,
        categoria: "Sales minerales ",
        activo: true
}
,
{
     id: "0022",
        nombre: " SALES MINERALES DE HIERBAS 500gr",
        descripcion: "",
        precio: 48000,
        stock: 5,
        categoria: "Sales minerales ",
        activo: true
}
,
{
     id: "0023",
        nombre: " SALES MINERALES CANELA 1000gr",
        descripcion: "",
        precio: 58000,
        stock: 5,
        categoria: "Sales minerales ",
        activo: true
}
,
{
     id: "0024",
        nombre: " SALES MINERALES GUAYABA ROSADA 1000gr",
        descripcion: "",
        precio: 58000,
        stock: 5,
        categoria: "Sales minerales ",
        activo: true
}
,
{
     id: "0025",
        nombre: " SALES DE MAR MINERALES  1000gr",
        descripcion: "",
        precio: 58000,
        stock: 5,
        categoria: "Sales minerales ",
        activo: true
}
,
{
     id: "0026",
        nombre: " SALES MINERALES CURUCUMA CON GENGIBRE 1000gr",
        descripcion: "",
        precio: 58000,
        stock: 5,
        categoria: "Sales minerales ",
        activo: true
}
,
{
     id: "0027",
        nombre: "ACEITE CORPORAL MIEL ",
        descripcion: "",
        precio: 35000,
        stock: 5,
        categoria: "Aceites corporales ",
        activo: true
}
,
{
     id: "0028",
        nombre: "ACEITE CORPORAL COCO ",
        descripcion: "",
        precio: 35000,
        stock: 5,
        categoria: "Aceites corporales ",
        activo: true
}
,
{
     id: "0029",
        nombre: "ACEITE CORPORAL VAINILLA",
        descripcion: "",
        precio: 35000,
        stock: 5,
        categoria: "Aceites corporales ",
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