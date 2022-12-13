//objetos

const producto = {
    nombreProducto : "monitos 20 pulgadas",
    precio : 250,
    disponible : true,
}

//forma antigua

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//destructuring

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);