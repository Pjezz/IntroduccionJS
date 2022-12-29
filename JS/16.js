
// declaracion de la funcion
sumar();
function sumar() {
    console.log(10+10);
}

//expresion de una funcion
sumar();
const sumar2 = function() {
    console.log(5+5)
}


//IIFE  evita que colisionen variables de otros archivos o librerias 
(function(){
    console.log('esto es una funcion, creo')
}) ();