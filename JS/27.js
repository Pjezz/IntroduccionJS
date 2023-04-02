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

const Producto2 = new Producto('Monitor Curvo 49"', 800,false);
const Producto3 = new Producto('PS5', 1800, true);
const Producto4 = new Producto('Impresora Canon 4021', 900, true);
const Producto5 = new Producto('Control remoto SAMSUNG', 500, false);
console.log(Producto2);
console.log(Producto3);
console.log(Producto4);
console.log(Producto5);

