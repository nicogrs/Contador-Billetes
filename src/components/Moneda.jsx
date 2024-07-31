import {useState, useEffect} from 'react'
import './Moneda.css'


function Moneda({ billete, onSubtotalChange, reset }) {
    
    const [valor, setValor] = useState(0);

    const valorEventListener = (e) => {
    const inputValue = e.target.value
    setValor(inputValue > -1 ? inputValue : 0);
    onSubtotalChange();
    }

    useEffect ( () =>{
        if(reset){
            setValor(0);
        }
        onSubtotalChange();
    }, [billete,onSubtotalChange,valor,reset])

    return(
            <tr>
                <td>
                    <img className='imagenBill' src={billete.obtenerImagen()} alt="Imagen de billete" />
                </td>
                <td>
                    <p>{billete.obtenerDenominacion()}</p>
                </td>
                <td>
                    <input onChange={valorEventListener} value={valor}  type="number" />
                </td>
                <td>
                    <p>{billete.calcularSubTotal(valor)}</p>
                </td>
            </tr>
    )
}

export default Moneda