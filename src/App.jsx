import {useState, useEffect} from 'react'
import Moneda from './components/Moneda.jsx'
import {obtenerMoneda} from './models/monedas.js'
import Billete from './models/billete.js';
import Select from './components/Select.jsx';
import './App.css'

function App() {
  const [totales, setTotal] = useState(0);
  const [reset, setReset] = useState(false);
  const [billetesArrr, setBilletesArr] = useState([]);
  const [pais, setPais] = useState('')


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

const billetesArr = [Uru_billeteUno, Uru_billeteDos, Uru_billeteCinco, Uru_billeteDiez, Uru_billeteVeinte, Uru_billeteCinc, Uru_billeteCien, Uru_billeteDoscientos, Uru_billeteQuinientos, Uru_billeteMil, Uru_billeteDosMil]



  const calcularTotal = () => {
    let total = 0; 
    billetesArr.forEach(bill => {
      total += bill.obtenerSubTotal();
    });
    setTotal(total);
  };

  const resetearTotal = () =>{
    billetesArr.forEach(bill => {
      bill.actualizarSubtotal = 0;
    });
    setTotal(0)
    setReset(true)
  }

  const imprimir = () => {
    window.print();
  }

  useEffect(() => {
    calcularTotal();
    obtenerArr();
  },[totales,pais])

  useEffect(() => {
    if(reset){
      setReset(false)
    }
  },[reset])

  const obtenerArr = () =>{
    setBilletesArr(obtenerMoneda(pais))
  }

  return (
    <div className='container'> 
    <Select onSelectChange={(e) => setPais(e)} />
    <div className='table-responsive d-flex flex-column'>
    <div className='container-fluid flex-grow-1 pb-3 d-flex justify-content-end' >
         <button onClick={imprimir} id='imprimir'>Imprimir página</button>
    </div> 
      <table className='table'>
        <thead className='table-dark'>
        <tr>
          <th scope='col' className='d-none d-md-table-cell'>Billete</th>
          <th scope='col'>Denominacion</th>
          <th scope='col'>Cantidad</th>
          <th scope='col'>Subtotal</th>
        </tr>
        </thead>
        <tbody className='table-group-divider'>
          {billetesArr.map((bill, index) => (
          <Moneda key={index} billete={bill} cambArr={obtenerArr} reset={reset} onSubtotalChange={calcularTotal} />
         ))}
       </tbody>
      </table>
      <div>
        <h3>Total: $ {totales}</h3>
      </div>
      
      <div className='container pt-4' >
         <button onClick={resetearTotal} id='reiniciar-valores'>Reiniciar Valores</button>
      </div>  

      </div>
      </div>

  )
}

export default App
