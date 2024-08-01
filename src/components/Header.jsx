import './Header.css'

function Header () {

    return (
        <header className="text-center">
            <div className='d-flex align-items-center'>
                <div className='logo d-flex justify-content-start'>
                    <img className='logo' src="./icono-pes.ico" alt="Logo" />
                </div>
                <div className='flex-grow-1 d-flex justify-content-center'>
                    <h1 className='text-uppercase'>Contador de Dinero Online</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;