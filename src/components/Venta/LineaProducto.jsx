import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function LineaProducto() {
  return (
    <div className='bg-blanco w-full flex justify-between border border-negro-2 '>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'>
      <input className='w-full h-full p-2 bg-negro-2 text-white placeholder:text-white rounded-lg' type='text' placeholder='Ej:201574' />
      <button className='p-2 mx-2 bg-transparent text-color-1 hover:text-white'>
      <FontAwesomeIcon icon="fa-solid fa-plus" />
      </button>
    </div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-6/12 items-center'><label>Produto</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>Precio</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'>
      <input className=' p-2 w-full bg-negro-2 text-white text-center placeholder:text-white rounded-lg' type='text' placeholder='0' />
    </div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'>
      <button className='p-2 mx-2 bg-transparent text-color-1 hover:text-white'>
      <FontAwesomeIcon className='text-negro-1 hover:text-color-3' icon="fa-solid fa-trash" />
      </button>
    </div>
  </div>
  )
}

export default LineaProducto