import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

function LineaUsuario({ usuario, cargarUsuario }) {
  return (
    <div className='bg-blanco w-full flex justify-between border border-negro-2 '>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{ usuario.nombreUsuario}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{`${usuario.nombre} ${usuario.apellido}`}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{usuario.dni}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{ usuario.email}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{ usuario.telefono}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{usuario.locales.length}</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{usuario.ventasRealizadas }</label></div>
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{usuario.estado }</label></div>{/* Segun el tipo bloqueado - normal - deshabilitado */ }
    <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><button onClick={()=>cargarUsuario(usuario)}>edita solo listado<FontAwesomeIcon className='text-negro-1 hover:text-color-4' icon="fa-solid fa-pen" /></button></div>
  </div>
  )
}

export default LineaUsuario