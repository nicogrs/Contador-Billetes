import {useState, useEffect} from 'react'
import Moneda from './components/Moneda.jsx'
import Billete from './models/billete';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
  const [totales, setTotal] = useState(0);
  const [reset, setReset] = useState(false);

  const billeteUno = new Billete(1, "./uruguay/moneda1.jpg");
  const billeteDos = new Billete(2, "./uruguay/moneda2.jpg");
  const billeteCinco = new Billete(5, "./uruguay/moneda5.jpg");
  const billeteDiez = new Billete(10, "./uruguay/moneda10.jpg");
  const billeteVeinte = new Billete(20, "./uruguay/billete20.jpg");
  const billeteCinc = new Billete(50, "./uruguay/billete50.jpg");
  const billeteCien = new Billete(100, "./uruguay/billete100.jpg");
  const billeteDoscientos = new Billete(200, "./uruguay/billete200.jpg");
  const billeteQuinientos = new Billete(500, "./uruguay/billete500.jpg");
  const billeteMil = new Billete(1000, "./uruguay/billete1000.jpg");
  const billeteDosMil = new Billete(2000, "./uruguay/billete2000.jpg");

  const billetesArr = [billeteUno, billeteDos, billeteCinco, billeteDiez, billeteVeinte, billeteCinc, billeteCien, billeteDoscientos, billeteQuinientos, billeteMil, billeteDosMil]

  const calcularTotal = () => {
    let total = 0; // Reiniciar total en cada llamada a calcularTotal
    billetesArr.forEach(bill => {
      total += bill.obtenerSubTotal();
    });
    setTotal(total); // Actualizar el estado totales
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
  },[totales])

  useEffect(() => {
    if(reset){
      setReset(false)
    }
  },[reset])

  return (
    <div className='container'> 
    <div className='table-responsive d-flex flex-column'>
    <div className='container-fluid pb-3 d-flex justify-content-end' >
         <button onClick={imprimir} id='imprimir'>Imprimir página</button>
    </div> 
      <table className='table'>
        <thead className='table-dark'>
        <tr>
          <th scope='col'>Billete</th>
          <th scope='col'>Denominacion</th>
          <th scope='col'>Cantidad</th>
          <th scope='col'>Subtotal</th>
        </tr>
        </thead>
        <tbody className='table-group-divider'>
          {billetesArr.map((bill, index) => (
          <Moneda key={index} billete={bill} reset={reset} onSubtotalChange={calcularTotal} />
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
