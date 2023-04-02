// this
const reservacion = {
    nombre: 'jezz',
    apellido: 'huerta',
    total: 800,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} a reservado y su total a pagar es de ${this.total}`);
    }
}
const reservacion2 = {
    nombre: 'Alejandro',
    apellido: 'de Leon',
    total: 1200,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} a reservado y su total a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();