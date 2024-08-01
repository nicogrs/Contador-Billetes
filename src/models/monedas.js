import Billete from './billete';

const Uru_billeteUno = new Billete(1, "./uruguay/moneda1.jpg");
const Uru_billeteDos = new Billete(2, "./uruguay/moneda2.jpg");
const Uru_billeteCinco = new Billete(5, "./uruguay/moneda5.jpg");
const Uru_billeteDiez = new Billete(10, "./uruguay/moneda10.jpg");
const Uru_billeteVeinte = new Billete(20, "./uruguay/billete20.jpg");
const Uru_billeteCinc = new Billete(50, "./uruguay/billete50.jpg");
const Uru_billeteCien = new Billete(100, "./uruguay/billete100.jpg");
const Uru_billeteDoscientos = new Billete(200, "./uruguay/billete200.jpg");
const Uru_billeteQuinientos = new Billete(500, "./uruguay/billete500.jpg");
const Uru_billeteMil = new Billete(1000, "./uruguay/billete1000.jpg");
const Uru_billeteDosMil = new Billete(2000, "./uruguay/billete2000.jpg");

const Uru_billetesArr = [Uru_billeteUno, Uru_billeteDos, Uru_billeteCinco, Uru_billeteDiez, Uru_billeteVeinte, Uru_billeteCinc, Uru_billeteCien, Uru_billeteDoscientos, Uru_billeteQuinientos, Uru_billeteMil, Uru_billeteDosMil]


const Arg_billeteUno = new Billete(1, "./argentina/moneda1.jpg");
const Arg_billeteDos = new Billete(2, "./argentina/moneda2.jpg");
const Arg_billeteCinco = new Billete(5, "./argentina/moneda5.jpg");
const Arg_billeteDiez = new Billete(10, "./argentina/moneda10.jpg");
const Arg_billeteVeinte = new Billete(20, "./argentina/billete20.jpg");
const Arg_billeteCinc = new Billete(50, "./argentina/billete50.jpg");
const Arg_billeteCien = new Billete(100, "./argentina/billete100.jpg");
const Arg_billeteDoscientos = new Billete(200, "./argentina/billete200.jpg");
const Arg_billeteQuinientos = new Billete(500, "./argentina/billete500.jpg");
const Arg_billeteMil = new Billete(1000, "./argentina/billete1000.jpg");
const Arg_billeteDosMil = new Billete(2000, "./argentina/billete2000.jpg");
const Arg_billeteDiezMil = new Billete(10000, "./argentina/billete10000.jpg");

const Arg_billetesArr = [Arg_billeteUno, Arg_billeteDos, Arg_billeteCinco, Arg_billeteDiez, Arg_billeteVeinte,Arg_billeteCinc,Arg_billeteCien,Arg_billeteDoscientos,Arg_billeteQuinientos, Arg_billeteMil, Arg_billeteDosMil, Arg_billeteDiezMil]

function obtenerMoneda(e){
    switch (e) {
        case 'uy':
           return  Uru_billetesArr;
            break;
        case 'ar':
           return  Arg_billetesArr;
        break;

        default:
            return Uru_billetesArr;
            break;
    }
}


export {obtenerMoneda}