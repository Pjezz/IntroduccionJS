const MetodoDePago = 'efectivo';

switch(MetodoDePago) {
    case 'tarjeta' :
        console.log('Pagaste con tarjeta');
        break
    case 'Cheque' :
        console.log('Pagaste con cheque');
        break
    case 'efectivo' :
        console.log('Pagaste con efecitivo');
        break
    case 'Bitcoin' :
        console.log('Pagaste con bitcoin');
        break
    default:
        console.log('aun no has pagado');
        break;
}