import React from 'react'

function CabeceraProductos() {
  return (
    <div className='bg-color-1 w-full flex justify-between border border-negro-2 '>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Código</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Detalle</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Talle</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Color</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Precio</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Locales</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Cantidad</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Acciones</label></div>
  </div>
  )
}

export default CabeceraProductos