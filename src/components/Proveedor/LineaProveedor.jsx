import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SeleccionProveedor from './SeleccionProveedor';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalSeleccionProveedor from './ModalSeleccionProveedor';


function LineaProveedor({ proveedor, localId, cargarProveedor}) {
  const navigate = useNavigate();
  const [showLocalSelection, setShowLocalSelection] = useState(false);
  
  const handleClick = (selectedLocalId) => {
    navigate(`/local/${selectedLocalId}/proveedor`, { state: { proveedor: proveedor } });
  }

  const handleLocalSelectionClick = () => {
    setShowLocalSelection(true);
  }
  const handleXClick = () => {
setShowLocalSelection(false)
  }

  return (
    <div className='bg-blanco w-full flex justify-between border border-negro-2 '>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{ proveedor.nombre}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{proveedor.razonSocial }</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{proveedor.cuit }</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{proveedor.cuentaCorriente}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{proveedor.email }</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{proveedor.locales.length}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{proveedor.rubro }</label></div>
      <div className='flex flex-row justify-evenly border border-negro-2 h-full py-2 px-5 w-1/12 items-center'>
        {localId !== undefined ? (
          <>
          <button onClick={() => handleClick(localId)}><FontAwesomeIcon className='text-negro-1 hover:text-color-2' icon="fa-solid fa-clipboard-list" /></button>
          </>
        ) : (
            <>
        <button onClick={()=> cargarProveedor(proveedor)}><FontAwesomeIcon className='text-negro-1 hover:text-color-4' icon="fa-solid fa-pen" /></button>
            <button onClick={handleLocalSelectionClick}><FontAwesomeIcon className='text-negro-1 hover:text-color-2' icon="fa-solid fa-clipboard-list" /></button>
            </>
            
        )}
        {showLocalSelection && (
         <ModalSeleccionProveedor proveedor={proveedor} handleClick={handleClick} handleXClick={handleXClick}/>
        )}
      </div>
    </div>
  );
}

export default LineaProveedor;
