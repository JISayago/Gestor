import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Error404() {
  return (
    <>
      <Navbar/>
      <div className='w-full h-screen bg-negro-2'>
        <div className='flex flex-col w-full h-full justify-between items-center'>
          <div className='flex flex-col w-2/3 h-2/5 items-center text-center p-5'>
            <h1 className='text-color-3 text-9xl mb-14 font-extrabold italic'>Error 404</h1>
            <p className='text-white text-2xl '>Lo sentimos, la página que estás buscando no se puede encontrar. Por favor, verifica la URL e inténtalo de nuevo.</p>
          </div>
          <div className='flex flex-row justify-center w-full h-2/5 text-center p-5'>
            <button className='w-1/3 bg-color-1 text-white h-1/5 rounded-full hover:bg-blanco hover:text-negro-1'>
           <Link to={'/'}><FontAwesomeIcon icon="fa-solid fa-arrow-left" /> <label className='font-semibold'>Regresar a la página principal</label> </Link>
            </button>
          </div>
          <div className='h-1/5'>

          </div>
        </div>

      </div>
    </>
  )
}

export default Error404