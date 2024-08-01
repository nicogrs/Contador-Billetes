import { useState, useEffect } from 'react';
import './Select.css'

function Select({ onSelectChange }) {
    const [opcion, setOpcion] = useState('');

    const handleOption = (e) => {
        setOpcion(e.target.value);
    }

    useEffect(() => {
        onSelectChange(opcion);
    }, [opcion])

    return (
        <div className='sel-container'>
            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column align-items-center'>
                    <h4 className='p-2'>Seleccionar una moneda:</h4>
                    <select className='form-control' onChange={handleOption} name="paises" id="select-paises">
                        <option value="uy">URUGUAY</option>
                        <option value="ar">ARGENTINA</option>
                        <option value="cl">CHILE</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Select