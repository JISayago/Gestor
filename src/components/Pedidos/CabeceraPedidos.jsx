import React from 'react'

function CabeceraPedidos() {
  return (
    <div className='bg-color-1 w-full flex justify-between border border-negro-2 '>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>N° Pedido</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Local</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Fecha</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Proveedor</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Cantidad de Productos</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Estado</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Total</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Detalle</label></div>
  </div>
  )
}

export default CabeceraPedidos