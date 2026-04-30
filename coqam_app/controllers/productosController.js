// controllers/productosController.js

import * as productosModel from '../models/productosModel.js';

export const getAllProductos = (req, res) => {

    const productos = productosModel.findAll();

    res.json(productos);
};

export const getProductoById = (req, res) => {

    const id = req.params.id;

    const producto = productosModel.findById(id);

    if(producto){

        res.json(producto);

    } else {

        res.status(404).json({
            mensaje: "Producto no encontrado"
        });

    }
};

export const createProducto = (req, res) => {

    const nuevoProducto = req.body;

    const producto = productosModel.create(nuevoProducto);

    res.status(201).json(producto);
};