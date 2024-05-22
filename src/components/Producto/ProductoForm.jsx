import React from 'react'

function ProductoForm({locales,nombre,setNombre,precio,setPrecio,stock,setStock,categoria,setCategoria,talle,setTalle,color,setColor,codigo,setCodigo,localesAsignados,setLocalesAsignados,handleInputChange,productoeditar,editar}) {
  return (
    <div className='flex flex-col justify-evenly p-6'>
    <div className='w-full mb-10 flex flex-col items-center'>
      <div className='flex w-2/3 justify-evenly'>
        <input
          className='m-4 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
          type='text'
            placeholder='Código...'
            value={codigo}
            onChange={(e) => handleInputChange(e, setCodigo)}
        />
        <input
          className='m-4 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
          type='text'
            placeholder='Descripción...'
            value={nombre}
            onChange={(e) => handleInputChange(e, setNombre)}
        />
      </div>
      <div className='flex w-2/3 justify-evenly'>
          <input
            className='m-4 flex flex-col w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-400'
            type='text'
            placeholder='Categoría...'
            value={categoria}
            onChange={(e) => handleInputChange(e, setCategoria)}
          />
          <input
            className='m-4 flex flex-col w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
            type='text'
            placeholder='Precio...'
            value={precio}
            onChange={(e) => handleInputChange(e, setPrecio)}
          />
      </div>
      <div className='flex w-2/3 justify-evenly'>
        <input
          className='m-4 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
          type='text'
            placeholder='Cantidad...'
            value={stock}
            onChange={(e) => handleInputChange(e, setStock)}
        />
        <input
          className='m-4 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
          type='tel'
            placeholder='Talle...'
            value={talle}
            onChange={(e) => handleInputChange(e, setTalle)}
        />
      </div>
    </div>
      <div className='flex w-full justify-center'>
        <button
          className='mt-5 w-1/4 p-2 rounded-md bg-color-1 text-white mb-3 hover:bg-white hover:text-color-1'
        >
         Guardar
        </button>
    </div>
  </div>      
  )
}

export default ProductoForm