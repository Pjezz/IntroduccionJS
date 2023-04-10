async function obtenerEmpleados() {

    const archivo = 'JS/empleados.json';
    // fetch (archivo)
    //     .then( resultado =>  resultado.json())
    //     .then( datos => {
    //         const {empleados} = datos;

    //         empleados.forEach (empleados => {
    //             console.log(empleados.id);
    //             console.log(empleados.nombre);
    //             console.log(empleados.puesto);
    //         })
    //     })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

}

obtenerEmpleados();