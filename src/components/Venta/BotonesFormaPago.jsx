import React from 'react'

function BotonesFormaPago() {
  return (
    <div>{/* esto tiene que ir con radio button o algo que cambie el estado y lo de je "activo"*/}
    <button className='p-2 mx-2 rounded-xl text-white border border-white bg-color-1 ' >Targeta Crédito</button>
    <button className='p-2 mx-2 bg-blanco rounded-xl text-negro-1'>Targeta Débito</button>
    <button className='p-2 mx-2 bg-blanco rounded-xl text-negro-1'>Efectivo</button>
 </div>
  )
}

export default BotonesFormaPago