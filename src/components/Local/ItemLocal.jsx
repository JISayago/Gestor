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
      <div className='flex w-full h-3/5 m-10 p-2 items-center border-2 border-color-1 rounded-lg bg-blanco md:w-1/4'>
        
        <div className='w-1/2 h-full'>
        <img className='rounded-md w-48 h-48 mt-5' src={local.imagen} />
        </div>
        
        <div className='flex flex-col w-1/2 h-full justify-around items-center'>
          <div className='w-full flex justify-center h-1/2 p-3 '>
            <label className='text-2xl font-bold text-color-1'>{local.nombre}</label> 
          </div>
          <div className='w-full flex text-center h-1/2 p-3 '>
            <label className='text-xl'>{local.dirección}</label> 
          </div>
        </div>
      </div>
    :
      <div className='flex w-full h-3/5 m-10 p-2 items-center border-2 border-color-1 rounded-lg bg-blanco md:w-1/4'>
        <div className='w-1/2 h-full'>
          <img className='rounded-md w-48 h-48' src={local.imagen} />
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