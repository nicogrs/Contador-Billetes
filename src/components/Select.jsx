import {useState, useEffect} from 'react';
import './Select.css'

function Select ({onSelectChange}){
    const [opcion, setOpcion] = useState('');

    const handleOption = (e) => {
        setOpcion(e.target.value);
    }

    useEffect(() => {
        onSelectChange(opcion);
    },[opcion])

    return(
        <div>
            <div className='flex'>
                <p>Seleccionar una moneda:</p>
            </div>
            <select onChange={handleOption} name="paises" id="select-paises">
                <option value="uy">UY</option>
                <option value="ar">AR</option>
                <option value="cl">CL</option>
            </select>
        </div>
    )
}

export default Select