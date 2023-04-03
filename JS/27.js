// POO

//object Literal

const product = {
    nombre: `Tablet`,
    precio: `500`
}

//object cronstuctor

function Producto(nombre, precio, disponible) {

    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

//crear funciones que solo se utilizan en objetos especificos

Producto.prototype.FormatearProducto = function(){
    return `El producto ${this.nombre} tiene un valor de $ ${this.precio} Totales`;
}

const Producto2 = new Producto('Monitor Curvo 49"', 800,false);
const Producto3 = new Producto('PS5', 1800, true);
const Producto4 = new Producto('Impresora Canon 4021', 900, true);
const Producto5 = new Producto('Control remoto SAMSUNG', 500, false);


function FormatearProducto(Producto){
    return `El producto ${Producto.nombre} tiene un valor de $ ${Producto.precio} Totales`;
}


console.log(Producto2.FormatearProducto());
console.log(Producto3.FormatearProducto() );
console.log(Producto4.FormatearProducto() );
console.log(Producto5.FormatearProducto() );

console.log( FormatearProducto(Producto2) );
