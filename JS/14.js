//arreglos o arrays

const numeros = [10, 20, 30, 40, 50];
// console.table(numeros);


const arreglo = ['hola', 10, true, null, 'si', {nombre: "jezz", trabajo: "programador frontend"}, [1, 2, 3]]; //cualquier tipo de datos son compatibles con array
console.log(arreglo);

//acceder a los valores de un arreglo


// console.log(numeros[2]);
// console.table(numeros[4]);
// console.log(numeros[45]);

// //conocer la extencion de nuestro arreglo


// console.log(numeros.length);
// console.log(arreglo.length);

// numeros.forEach(function(numeros) {
//     console.log(numeros);
// }); 

// arreglo.forEach(function(arreglo){
//     console.log(arreglo)
// });

//metodos para los arrays
numeros.push(60, 70, 80);                   //pondra elementos nuevos al final del arreglo
numeros.unshift(-30, -20, -10, 0);          //pondra elementos nuevos al inicio del arreglo
console.table(numeros);

//eliminar elementos del array

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

// meses.pop();         //elimina el ultimo elemento del array
// meses.shift();       //elimina el primer elemento del array
// meses.splice(1, 2);     //elimina segun la posicion y la cantidad que se desea eliminar
// console.table(meses);

//rest operator o spread operator
const nuevoArreglo = ['este no sale', ...meses, 'julio'];
console.table(nuevoArreglo);