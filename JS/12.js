const producto = {
    nombreProducto : "monitos 20 pulgadas",
    precio : 250,
    disponible : true,
}

// Object.freeze(producto); //nada entra ni sale del objeto
Object.seal(producto); //nada entra ni sale pero es permitido modificar los existentes

producto.imagen = '400  ';
nombreProducto = 'claro que si';



console.log(producto);