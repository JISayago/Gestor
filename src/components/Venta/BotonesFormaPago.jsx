import React, { useState } from 'react'

function BotonesFormaPago({ handleTipoPago }) {
  const [selected, setSelected] = useState([0,0,0,0])
  const classestw = 'text-white border border-white bg-color-1'
  
  const handleSubmit = (tipo) => {
    handleTipoPago(tipo)
    if (tipo === 'Targeta Crédito') {
      setSelected([1,0,0,0])
      return true;
    }
    if (tipo === 'Targeta Débito') {
      setSelected([0,1,0,0])
      return true;
    }
    if (tipo === 'Efectivo') {
      setSelected([0,0,1,0])
      return true;
    }
    if (tipo === 'Transferencia') {
      setSelected([0,0,0,1])
      return true;
    }
  }
  return (
    <div>{/* esto tiene que ir con radio button o algo que cambie el estado y lo de je "activo"*/}
    <button id='Credito' onClick={() => handleSubmit('Targeta Crédito')} className={`p-2 mx-2 rounded-xl ${selected[0] === 1 ? classestw :'text-negro-1 bg-blanco'}`} >Targeta Crédito</button>
    <button id='Debito' onClick={() => handleSubmit('Targeta Débito')} className={`p-2 mx-2 rounded-xl ${selected[1] === 1 ? classestw :'text-negro-1 bg-blanco'}`}>Targeta Débito</button>
    <button id='Efectivo' onClick={() => handleSubmit('Efectivo')} className={`p-2 mx-2 rounded-xl ${selected[2] === 1 ? classestw :'text-negro-1 bg-blanco'} `}>Efectivo</button>
    <button id='Transferencia' onClick={() => handleSubmit('Transferencia')} className={`p-2 mx-2 rounded-xl ${selected[3] === 1 ? classestw :'text-negro-1 bg-blanco'} `}>Transferencia</button>
 </div>
  )
}

export default BotonesFormaPago