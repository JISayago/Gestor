import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import LogoLocal from '../../assets/LogoLocal.png';

function ModalSeleccionProveedor({proveedor,handleXClick,handleClick}) {
  return (
    <div className='absolute flex flex-col justify-center items-center w-3/4 h-3/4 bg-negro-1 border-4 border-color-1  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            {/* Aquí puedes renderizar los botones de selección de local */}
            {/* Por ejemplo, puedes hacer un map de los locales y renderizar un botón para cada uno */}
            <button
              className='absolute top-0 right-0 p-3 text-red-500 w-15 font-bolder'
               onClick={handleXClick}><FontAwesomeIcon className='hover:text-white' icon="fa-brands fa-mixer" /></button>
            <div>
            <h1 className='text-white text-lg '>Por favor especifique el local al que quiere realizar el pedido</h1>
            </div>
            <div className='flex flex-row'>

            {proveedor.locales.map(local => (
              <button
                className={`m-5 border w-36 border-blanco flex flex-col items-center p-2 rounded-xl bg-negro-1 hover:bg-color-1 `}
                key={local.id}
                onClick={() => handleClick(local.id)}>
                 <label className='text-white text-lg'>{local.nombre}</label>
                 <img className='w-24 h-24 rounded-xl' src={LogoLocal} alt="Logo" />
               </button>  
            ))}
            </div>
          </div>
  )
}

export default ModalSeleccionProveedor