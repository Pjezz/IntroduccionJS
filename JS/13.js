const producto = {
    nombreProducto : "monitos 20 pulgadas",
    precio : 250,
    disponible : true,
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas};
console.log(producto);
console.log(nuevoProducto);