
let pedidos = [];

export const findAll = () => pedidos;

export const create = (nuevoPedido) => {

    pedidos.push(nuevoPedido);

    return nuevoPedido;
};