import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Locales_bd from '../../bbdd/locales.json';
import { useParams } from 'react-router-dom';

function LineaProducto() {
  const { id } = useParams();
  const [local, setLocal] = useState(Locales_bd.locales.find(l => l.id === parseInt(id)));
  const [productos, setProductos] = useState(local.productos);

  const [productoCargado, setProductoCargado] = useState({
    "nombre": "...",
    "precio": 0,
    "stock": 0,
    "categoria": "...",
    "talle": "...",
    "color": "---",
    "codigo": 0
  });
  const [codigo, setCodigo] = useState();

  const handleInputCodigoChange = (e, setCodigo) => {
     e.preventDefault();
    setCodigo(e.target.value);
  }

  const handleCargaProdcuto = () => {
    const cod = codigo;
    setProductoCargado(productos.find(p => p.codigo === parseInt(codigo)));
  }


  return (
    <div className='bg-blanco w-full h-14 flex justify-between border border-negro-2 '>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'>
        <input className='w-full h-full p-2 bg-negro-2 text-white placeholder:text-white rounded-lg' type='text' placeholder='Ej:201574'
          value={codigo} onChange={(e) => handleInputCodigoChange(e, setCodigo)} />
        <button onClick={handleCargaProdcuto} className='p-2 mx-2 bg-transparent text-color-1 hover:text-white'>
      <FontAwesomeIcon icon="fa-solid fa-plus" />
      </button>
    </div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-6/12 items-center'><label>{productoCargado.nombre}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>$ {productoCargado.precio}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'>
      <input className=' p-2 w-full bg-negro-2 text-white text-center placeholder:text-white rounded-lg' type='text' placeholder='0' value={productoCargado.stock} />
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