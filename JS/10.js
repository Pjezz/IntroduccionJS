//objetos

const producto = {
    nombreProducto : "monitos 20 pulgadas",
    precio : 250,
    disponible : true,
}

// console.log(producto.precio);
// console.log(producto["precio"]);

//agregar valores al objeto

producto.imagen = 'imagen.jpg'  ;
//eliminar valores al objeto

delete producto.disponible;

console.log(producto);