// sync and await

function descargarNuevosClientes () {
    return new Promise ( resolve => {
        console.log ("descargando nuevos clientes... espere");
        console.log("esto puede tardar unos segundos");

        setTimeout( () => {
            resolve('Los clientes fueron descargados de forma correcta');
        }, 5000 );
    });
}




function descargarUltimosPedidos () {
    return new Promise ( resolve => {
        console.log ("descargando los ultimos pedidos... espere");
        console.log("esto puede tardar unos segundos");

        setTimeout( () => {
            resolve('Los pedidos fueron descargados de forma correcta');
        }, 5000 );
    });
}




async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all ([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);

    } catch (error) {
        console.log(error);
    }
}

app();