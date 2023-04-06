const boton = document.querySelector('#boton');
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`el resultado es ${resultado}`) )
});

if (Notification.permission == 'granted') {
    new Notification ('estas siendo notificado', {
        icon: 'img/amogus.jpg',
        body: 'sus'
    })

}