import Billete from './billete';

//BILLETES URUGUAYOS
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

const Uru_billetesArr = [
    Uru_billeteUno, 
    Uru_billeteDos, 
    Uru_billeteCinco, 
    Uru_billeteDiez, 
    Uru_billeteVeinte, 
    Uru_billeteCinc, 
    Uru_billeteCien, 
    Uru_billeteDoscientos, 
    Uru_billeteQuinientos, 
    Uru_billeteMil, 
    Uru_billeteDosMil
];
//END BILLETES URUGUAYOS


//BILLETES ARGENTINOS
const Arg_billeteUno = new Billete(1, "./argentina/moneda1ar.png");
const Arg_billeteDos = new Billete(2, "./argentina/moneda2ar.png");
const Arg_billeteCinco = new Billete(5, "./argentina/moneda5ar.png");
const Arg_billeteDiez = new Billete(10, "./argentina/moneda10ar.png");
const Arg_billeteVeinte = new Billete(20, "./argentina/billete20.png");
const Arg_billeteCinc = new Billete(50, "./argentina/billete50.png");
const Arg_billeteCien = new Billete(100, "./argentina/billete100.png");
const Arg_billeteDoscientos = new Billete(200, "./argentina/billete200.png");
const Arg_billeteQuinientos = new Billete(500, "./argentina/billete500.png");
const Arg_billeteMil = new Billete(1000, "./argentina/billete1000.png");
const Arg_billeteDosMil = new Billete(2000, "./argentina/billete2000.png");
const Arg_billeteDiezMil = new Billete(10000, "./argentina/billete10000.jpg");

const Arg_billetesArr = [
    Arg_billeteUno, 
    Arg_billeteDos, 
    Arg_billeteCinco, 
    Arg_billeteDiez, 
    Arg_billeteVeinte,
    Arg_billeteCinc,
    Arg_billeteCien,
    Arg_billeteDoscientos,
    Arg_billeteQuinientos, 
    Arg_billeteMil, 
    Arg_billeteDosMil, 
    Arg_billeteDiezMil
];
//END BILLETES ARGENTINOS

//BILLETES CHILENOS
const Chi_billeteUno = new Billete(1, "./chile/moneda1.png");
const Chi_billeteCinco = new Billete(5, "./chile/moneda5.png");
const Chi_billeteDiez = new Billete(10, "./chile/moneda10.png");
const Chi_billeteCincuenta = new Billete(50, "./chile/moneda50.png");
const Chi_billeteCien = new Billete(100, "./chile/moneda100.png");
const Chi_billeteQuinientos = new Billete(500, "./chile/moneda500.png");
const Chi_billeteMil = new Billete(1000, "./chile/billete1000.jpg");
const Chi_billeteDosMil = new Billete(2000, "./chile/billete2000.jpg");
const Chi_billeteCincoMil = new Billete(5000, "./chile/billete5000.jpg");
const Chi_billeteDiezMil = new Billete(10000, "./chile/billete10000.jpg");
const Chi_billeteVeinteMil = new Billete(20000, "./chile/billete20000.jpg");

const Chi_billetesArr = [
  Chi_billeteUno, 
  Chi_billeteCinco, 
  Chi_billeteDiez, 
  Chi_billeteCincuenta,
  Chi_billeteCien,
  Chi_billeteQuinientos, 
  Chi_billeteMil, 
  Chi_billeteDosMil, 
  Chi_billeteCincoMil,
  Chi_billeteDiezMil,
  Chi_billeteVeinteMil
];

//END BILLETES CHILENOS

function obtenerMoneda(e){
    switch (e) {
        case 'uy':
           return  Uru_billetesArr;
            break;
        case 'ar':
           return  Arg_billetesArr;
        break;
        case 'cl':
            return  Chi_billetesArr;
         break;

        default:
            return Uru_billetesArr;
            break;
    }
}


export {obtenerMoneda}