const UsuarioAutenticado = new Promise ((resolve, reject) => {
    const auth = true

    if (auth) {
        resolve("usuario Autenticado");
    }
    else {
        reject("No se ha podido iniciar seción");
    }
});

UsuarioAutenticado 
    .then( resultado => console.log(resultado))
    .catch( Error => console.log(Error))
    