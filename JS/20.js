//metodos de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`reproduciendo cancion con el ID : ${id}`);
    },
    pausar : function(){
        console.log('pausando la cancion... ');
    },
    crearPlaylist : function(nombre){
        console.log(`creando playlist : ${nombre}`);
    },
    reproduciendoPlaylist : function(nombre){
        console.log(`reproduciendo playlist : ${nombre}`);
    },
}

reproductor.borrarCancion = function(id){
    console.log(`borrando la cancion con el ID : ${id}`);
}

reproductor.reproducir(5140);
reproductor.pausar();
reproductor.borrarCancion(8);
reproductor.crearPlaylist('phonk');
reproductor.reproduciendoPlaylist('phonk');