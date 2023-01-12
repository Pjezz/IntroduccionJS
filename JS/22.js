// const puntaje = 1000;

// if (puntaje == 1000){
//     console.log('el puntaje es de 1000');
// } else{
//     console.log('no es 1000');
// }


// const efectivo = 1000;
// const carrito = 800;

// if (efectivo > carrito){
//     console.log('el usuario puede pagar');
// } else {
//     console.log('Fondos insuficientes');
// }

const rol = 'EDITOR'

if(rol === 'ADMINISTRADOR'){
    console.log('Tienes acceso a todo el sistema');
}else if(rol === 'EDITOR') {
    console.log('Eres editor, no podras hacer mayor cosa');
}else {
    console.log('acceso denegado');
}