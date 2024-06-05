import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import Locales_bd from '../../bbdd/locales.json';
import { useParams } from 'react-router-dom';

function LineaProducto({ index, producto, onEliminar, onActualizar}) {
  const { id } = useParams();
  const [local] = useState(Locales_bd.locales.find(l => l.id === parseInt(id)));
  const [productos] = useState(local.productos);
  const [codigo, setCodigo] = useState("");
  const [cantidad, setCantidad] = useState(1); // Estado para la cantidad de productos

  useEffect(() => {
    if (producto) {
      setCodigo(producto.codigo);
    } else {
      setCodigo("");
    }
  }, [producto]);

  useEffect(() => {
    if (!codigo) {
      onActualizar(index, null);
    } else {
      const productoEncontrado = productos.find(p => p.codigo === parseInt(codigo));
      onActualizar(index, productoEncontrado ? { ...productoEncontrado, cantidad } : null);
    }
  }, [codigo, cantidad]); // Actualizar producto cuando cambia el código o la cantidad

  const handleInputCodigoChange = (e) => {
    setCodigo(e.target.value);
  };

  const handleEliminarProducto = () => {
    onEliminar(index);
  };

  const handleCantidadChange = (e) => {
    setCantidad(parseInt(e.target.value) || 1); // Convertir a entero y asegurar que sea al menos 1
  };

  return (
    <div className='bg-blanco w-full h-14 flex justify-between border border-negro-2'>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'>
        <input
          className='w-2/3 text-center h-full p-2 bg-negro-2 text-white placeholder:text-gray-500 rounded-lg'
          type='text'
          placeholder='Ej:201574'
          value={codigo}
          onChange={handleInputCodigoChange}
        />
      </div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-6/12 items-center'>
        <label>{producto ? producto.nombre : 'Producto no cargado'}</label>
      </div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'>
        <label>{producto ? `$ ${producto.precio}` : '$ 0'}</label>
      </div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'>
        <input
          className='p-2 w-full bg-negro-2 text-white text-center placeholder:text-white rounded-lg'
          type='number'
          min='1'
          value={cantidad}
          onChange={handleCantidadChange} // Manejar cambio en la cantidad
        />
      </div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'>
        <button onClick={handleEliminarProducto} className='p-2 mx-2 bg-transparent text-color-1 hover:text-white'>
          <FontAwesomeIcon className='text-negro-1 hover:text-color-3' icon="fa-solid fa-trash" />
        </button>
      </div>
    </div>
  );
}

export default LineaProducto;
