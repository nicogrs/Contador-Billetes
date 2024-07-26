import {useState, useEffect} from 'react'
import './Moneda.css'


function Moneda({ billete, onSubtotalChange }) {
    
    const [valor, setValor] = useState(0);

    const valorEventListener = (e) => {
        if(e.target.value > 0)
    setValor(e.target.value);
    }

    useEffect ( () =>{
        onSubtotalChange();
    }, [valor])

    return(
            <tr>
                <td>
                    <img className='imagenBill' src={billete.obtenerImagen()} alt="Imagen de billete" />
                </td>
                <td>
                    <p>{billete.obtenerDenominacion()}</p>
                </td>
                <td>
                    <input onChange={valorEventListener} value={valor} min="0" type="number" />
                </td>
                <td>
                    <p>{billete.calcularSubTotal(valor)}</p>
                </td>
            </tr>
    )
}

export default Moneda