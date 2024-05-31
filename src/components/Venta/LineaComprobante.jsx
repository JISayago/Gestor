import React from 'react'

function LineaComprobante({producto}) {
  return (
    <div className='bg-color-4 w-full flex justify-between border border-negro-2 '>
                    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-3/12 items-center'><label>{producto.codigo}</label></div>
                    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-5/12 items-center'><label>{producto.nombre}</label></div>
                    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{producto.precio}</label></div>
                    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{producto.cantidad}</label></div>
                  </div>
  )
}

export default LineaComprobante