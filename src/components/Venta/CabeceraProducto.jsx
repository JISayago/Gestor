import React from 'react'

function CabeceraProducto() {
  return (
    <div className='bg-color-1 w-full flex justify-between border border-negro-2 '>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Codigo</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-6/12'><label className='font-bold text-white'>Produto</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Precio</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Cantidad</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Acción</label></div>
  </div>
  )
}

export default CabeceraProducto