const sumar = (n1, n2) => console.log(n1 + n2);

sumar(5, 40);

const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');






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
meses.forEach(meses => {
    if (meses == 'marzo') {
        console.log('marzo si existe perro');
    }
});

let resultado

//some ideal para arrays de objetos
resultado = carrito.some( producto => { return producto.nombre === 'keyboard neon GX'});

    console.log(resultado);
//reduce

resultado = carrito.reduce((total, producto) => { return total + producto.precio}, 0);

    console.log(resultado);
//filter
resultado = carrito.filter(producto =>  producto.precio > 10 );
console.log(resultado);
resultado = carrito.filter(producto =>  producto.nombre !== 'televisor');

resultado = carrito.filter(producto =>  producto.nombre === 'smart watch');

console.log(resultado);
 