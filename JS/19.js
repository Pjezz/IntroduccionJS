function sumar(n1,n2) {
    return n1 + n2;
}

const resultado = sumar(5, 5);
console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calImpuesto(total){
    return 1.12 * total;
}

total = agregarCarrito(500);
total = agregarCarrito(500);
total = agregarCarrito(500);

const totalAPagar = calImpuesto(total);
console.log(total);
console.log(totalAPagar);