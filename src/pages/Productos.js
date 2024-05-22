import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CabeceraListadoProductos from '../components/Producto/CabeceraListadoProductos'
import CabeceraProductos from '../components/Producto/CabeceraProductos'
import LineaProducto from '../components/Producto/LineaProducto'
import Data from '../bbdd/bbdd.json';

function Productos() {
  const [productos, setProductos] = useState(Data.productos)
  return (
    <>
      <Navbar />
      <div className='w-full h-screen bg-negro-2'>
    <div className='w-full h-5/12'>
    <CabeceraListadoProductos />
  </div>
  <div className='p-2 pr-6'>
  <CabeceraProductos/>
  </div>
        <div className=' flex-1 overflow-y-scroll p-2'>
          
          {productos.map((p) => <LineaProducto producto={p} todos={true}/>)}
  </div>
      </div>
    </>
  )
}

export default Productos