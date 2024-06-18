import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

function LineaUsuario({ usuario, cargarUsuario, esUsuarioLocal }) {
  return (
    <div className='bg-blanco w-full flex justify-between border border-negro-2 '>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{ usuario.nombreUsuario}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center '><label className='overflow-hidden text-ellipsis whitespace-nowrap'>{`${usuario.nombre} ${usuario.apellido}`}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{usuario.dni}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-3/12 items-center'><label className='overflow-hidden text-ellipsis whitespace-nowrap'>{ usuario.email}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{ usuario.telefono}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{usuario.locales.length}</label></div>
    {/*<div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{usuario.ventasRealizadas }</label></div>*/}
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{usuario.estado }</label></div>{/* Segun el tipo bloqueado - normal - deshabilitado */ }
      {
        esUsuarioLocal
          ?
          <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><button onClick={() => cargarUsuario(usuario)}><FontAwesomeIcon className='text-negro-1 hover:text-color-5' icon="fa-solid fa-user" /></button></div>
          :
          <div className='flex justify-evenly border border-negro-2 h-full py-2 px-5 w-1/12 items-center'>
            <button onClick={() => cargarUsuario(usuario)}><FontAwesomeIcon className='text-negro-1 hover:text-color-4' icon="fa-solid fa-pen" /></button>
            <button ><FontAwesomeIcon className='text-negro-1 hover:text-color-5' icon="fa-solid fa-user" /></button>
          </div>
      }
  </div>
  )
}

export default LineaUsuario