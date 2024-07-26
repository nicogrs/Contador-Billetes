import {useState} from 'react'
import Moneda from './components/Moneda.jsx'
import Billete from './models/billete';
import './App.css'

function App() {
  let total = 0;

  const [totales, setTotal] = useState(0);

  const billeteUno = new Billete(1, "./public/uruguay/moneda1.jpg");
  const billeteDos = new Billete(2, "./public/uruguay/moneda2.jpg");
  const billeteCinco = new Billete(5, "./public/uruguay/moneda5.jpg");
  const billeteDiez = new Billete(10, "./public/uruguay/moneda10.jpg");
  const billeteVeinte = new Billete(20, "./public/uruguay/billete20.jpg");
  const billeteCinc = new Billete(50, "./public/uruguay/billete50.jpg");
  const billeteCien = new Billete(100, "./public/uruguay/billete100.jpg");
  const billeteDoscientos = new Billete(200, "./public/uruguay/billete200.jpg");
  const billeteQuinientos = new Billete(500, "./public/uruguay/billete500.jpg");
  const billeteMil = new Billete(1000, "./public/uruguay/billete1000.jpg");
  const billeteDosMil = new Billete(2000, "./public/uruguay/billete2000.jpg");

  const billetesArr = [billeteUno, billeteDos, billeteCinco, billeteDiez, billeteVeinte, billeteCinc, billeteCien, billeteDoscientos, billeteQuinientos, billeteMil, billeteDosMil]

  const calcularTotal = () =>{
    billetesArr.forEach(bill => {
      total = total + bill.obtenerSubTotal();
    });
    return total;
  }

  return (
    <div className='container'>
    <section>
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
          <Moneda key={index} billete={bill} onSubtotalChange={(() => setTotal(calcularTotal))} />
         ))}
       </tbody>
      </table>

      <div>
        <h3>Total: $ {totales}</h3>
      </div>
      </section>
      </div>
  )
}

export default App
