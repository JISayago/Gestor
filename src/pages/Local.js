import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import OpcionLocal from '../components/Local/OpcionLocal';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Locales_bd from '../bbdd/locales.json';
import '../css/input.css'

function Local() {
  const { id } = useParams()
  const location = useLocation()
  const [local, setLocal] = useState(Locales_bd.locales.find(l => l.id === parseInt(id)))
  return (
    <>
 <Navbar/>
    <div className='w-full h-screen bg-negro-2 p-2'>
      <div className='w-full h-full'>
          <div className='flex w-full md:items-center md:justify-center md:h-10 p-5'>
            <label className='m-2 text-4xl text-center w-full text-white underline decoration-2 underline-offset-8'>{local.nombre}</label>
          </div>
          <div className='flex flex-col w-full md:h-2/3 p-5 items-center '>
            <div className='flex flex-col w-full items-center h-1/3 md:flex-row md:m-3 md:h-full '>
              <OpcionLocal optionText={"Ventas"} local={ local} />
              <OpcionLocal optionText={"Usuarios"} local={ local}/>
            </div>
            <div className='flex flex-col w-full items-center h-1/3 md:flex-row md:m-3 md:h-full '>
           <OpcionLocal optionText={"Proveedores"} local={ local}/>
           <OpcionLocal optionText={"Productos"} local={ local}/>
          </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Local