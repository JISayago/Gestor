import React, { useState } from 'react';
import Productos_bd from '../../bbdd/productos.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LineaProducto({ producto,todos,cargarProducto }) {
  const [prod,setProd] = useState(Productos_bd.productos.find(p => p.codigo === producto.codigo)) 
  const [cantLocales, setCantLocales] = useState(producto.length)

  const handleClick = () => {
  }
  useState(() => {
    if (producto.length === undefined) {
      setCantLocales(prod.locales.length)
    }
    
  })
  return (
    <div className='bg-blanco w-full flex justify-between border border-negro-2 '>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{producto.codigo}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{producto.nombre}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{ producto.talle}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{producto.color}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{`$ ${producto.precio}`}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{cantLocales}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{producto.stock}</label></div>
      {
        todos ?
          <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><button onClick={()=>console.log("Eliminao")}><FontAwesomeIcon className='text-negro-1 hover:text-color-3' icon="fa-solid fa-trash" /></button></div> :
          <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><button onClick={()=>cargarProducto(producto)}><FontAwesomeIcon className='text-negro-1 hover:text-color-4' icon="fa-solid fa-pen" /></button></div>
          
      }
  </div>
  )
}

export default LineaProducto