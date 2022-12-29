const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

const carrito = [
    { nombre: 'monitor 20 pulgadas', precio: 500},
    { nombre: 'playStation 5', precio: 2000},
    { nombre: 'Motorola A20', precio: 300},
    { nombre: 'televisor 70 pulgadas', precio: 1200},
    { nombre: 'smart watch', precio: 200},
    { nombre: 'Radio JLB WibeJS', precio: 600},
    { nombre: 'Contoller PS', precio: 400},
    { nombre: 'keyboard neon GX', precio: 300},
];

//foreach
meses.forEach(function(meses) {
    if (meses == 'marzo') {
        console.log('marzo si existe perro');
    }
});

//includes

let resultado = meses.includes ('octubre');

//some ideal para arrays de objetos
resultado2 = carrito.some(function(producto){
    return producto.nombre === 'keyboard neon GX'})

//reduce

resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

//filter
resultado4 = carrito.filter(function(producto){
    return producto.precio > 800
});

resultado4 = carrito.filter(function(producto){
    return producto.nombre !== 'televisor'
});

resultado4 = carrito.filter(function(producto){
    return producto.nombre === 'smart watch'
});

console.log(resultado4);