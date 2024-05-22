import React from 'react'

function CabeceraProveedores() {
  return (
    <div className='bg-color-1 w-full flex justify-between border border-negro-2 '>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Nombre</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Razón Social</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>CUIT</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Cta Cte</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Email</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Locales</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-2/12'><label className='font-bold text-white'>Rubro</label></div>
    <div className='border border-negro-2 h-full py-2 px-5 text-center w-1/12'><label className='font-bold text-white'>Pedido</label></div>
  </div>
  )
}

export default CabeceraProveedores