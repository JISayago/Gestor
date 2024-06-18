import React from 'react'
import LogoLocal from '../../assets/LogoLocal.png'

import LogoLocal2 from '../../assets/localesImg/faster.jpg'
import LogoLocal3 from '../../assets/localesImg/man.jpg'
import LogoLocal4 from '../../assets/localesImg/valky.jpg'

import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUser } from '../../context/UsuarioContext';

function ItemLocal({ local,esNuevo }) {
  const navigate = useNavigate();
  const { setLogeado } = useUser()
  
  const handleClick = (e) => {
    e.preventDefault();
    setLogeado(local.id)
    navigate(`/local/${local.id}`)
  }
  console.log('item',local.imagen)
  
  return (
    
    esNuevo ?
      <div className='flex w-full lg:m-10 h-1/3 p-2 items-center border-2 border-color-1 rounded-lg bg-blanco md:w-1/4'>
        
        <div className='w-1/2 h-full flex justify-center items-center'>
        <img className='rounded-md w-full h-full' src={local.imagen} />
        </div>
        
        <div className='flex flex-col w-1/2 h-auto items-center'>
          <div className='w-full flex justify-center h-1/3 p-2'>
            <label className='text-xl font-bold text-color-1 overflow-hidden text-ellipsis whitespace-nowrap'>{local.nombre}</label> 
          </div>
          <div className='w-full flex text-center h-1/3 p-2'>
            <label className='text-lg overflow-hidden text-ellipsis whitespace-nowrap'>{local.dirección}</label> 
          </div>
        </div>
      </div>
    :
      <div className='flex w-full h-3/5 m-10 p-2 items-center border-2 border-color-1 rounded-lg bg-blanco md:w-1/4'>
        <div className='w-1/2 h-full'>
          <img className='rounded-md w-40 h-40' src={local.imagen} />
        </div>
        <div className='flex flex-col w-1/2 h-full justify-around'>
          <div className='w-full flex justify-center  p-3 '>
            <label className='text-xl'>{local.nombre}</label> 
          </div>
          <div className='w-full flex justify-center  p-3 '>
            <button onClick={(e) => handleClick(e)} className='flex flex-row justify-evenly items-center w-2/3 p-2 rounded-md bg-color-1 text-white mb-3 hover:bg-white hover:text-color-1'>
              <label>Ingresar</label>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    
    
  )
}

export default ItemLocal
//<button onClick={() => navigate(`/local/${local.id}`, {state:{local:local}}) } className='w-2/3 p-2 rounded-md bg-color-1 text-white mb-3 hover:bg-white hover:text-color-1'>Ingresar al Local</button>