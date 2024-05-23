import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CabeceraListadoProductos from '../components/Producto/CabeceraListadoProductos'
import CabeceraProductos from '../components/Producto/CabeceraProductos'
import LineaProducto from '../components/Producto/LineaProducto'
import Data from '../bbdd/bbdd.json';
import { useUser } from '../context/UsuarioContext'
import { useNavigate } from 'react-router-dom'

function Productos() {
  const { usuarioCntxt } = useUser();
  const navigate = useNavigate();
  const [productos, setProductos] = useState(Data.productos)

  useEffect(() => {
    (!usuarioCntxt && (!usuarioCntxt.rol === "admin") && navigate('/limitado'));
  },[usuarioCntxt])
  
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