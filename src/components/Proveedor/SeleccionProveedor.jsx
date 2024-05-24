import React, { useEffect, useState } from 'react'
import LogoLocal from '../../assets/LogoLocal.png';
import Locales_bd from '../../bbdd/locales.json';

function SeleccionProveedor() {
    const [locales,setLocales] = useState(Locales_bd.locales)
    const [color, setColor] = useState('bg-negro-2');

    const handleClick = () => {
        return console.log("clickeo")
    }

    return (
            locales.map(l => {
            return <button id="botonLocal" onClick={handleClick} className={`m-5 w-1/12 border border-blanco flex flex-col items-center p-2 rounded-xl ${color}`}>
                     <label className='text-white text-lg'>{l.nombre}</label>
                     <img className='w-24 h-24 rounded-xl' src={LogoLocal} alt="Logo" />
                      </button>
            }
        )
        
    );
}

export default SeleccionProveedor