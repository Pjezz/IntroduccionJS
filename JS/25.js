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

 //ForEach

 carrito.forEach( producto => console.log(producto) );

 //map

 const arreglo1 = carrito.map( producto => producto.nombre );

 console.log(arreglo1);