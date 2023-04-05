//classses

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    FormatearProducto () {
        return `El prodcuto ${this.nombre} tiene un precio total de ${this.precio}`;
    }
    formatearPrecio () {
        return `El precio del producto es de ${this.precio}`;
    }
}

const Producto2 = new Producto('Monitor Curvo 49"', 800,false);
const Producto3 = new Producto('PS5', 1800, true);

console.log(Producto2.FormatearProducto());
console.log(Producto3.FormatearProducto());
console.log(Producto2.formatearPrecio());

// // // // // // // // // // // // // // // // // //

class Puerta {
    constructor(altura, peso){
        this.altura = altura
        this.peso = peso
    }
    formatearPuerta () {
        return `La puerta mide ${this.altura} y pesa un total de ${this.peso}`;
    } 
}

const Puerta2 = new Puerta("mide 150","pesa 16kg");
const Puerta3 = new Puerta("mide 87", "pesa 17kg");

// console.log(Puerta2.formatearPuerta());
// console.log(Puerta3.formatearPuerta());





class Libro extends Producto {
    constructor(nombre, precio, ISBN) {
        super(nombre, precio);
        this.ISBN = ISBN; 
    }
    FormatearProducto () {
        return `El prodcuto ${this.nombre} tiene un precio total de ${this.precio} y el ISBN del prodcuto es ${this.ISBN}`;
    }
}

const libro = new Libro("Revolucion Industrial", 160, "4684651658");

console.log(libro.FormatearProducto());