import React, { useState } from 'react'
import { useUser } from '../../context/UsuarioContext';

function CabeceraComprobantePedido({ nro, local, pedido, textoTipo }) {
    const {usuarioCntxt} = useUser()
    const fechacompleta = new Date();
    const [user, setUser] = useState();
    

  return (
    <div className='flex flex-col p-2 md:flex-row md:justify-between bg-blanco md:h-1/6 md:p-5 rounded-t-lg border border-negro-2'>{/*Cabecera*/}
    <div className='flex md:w-1/3 md:items-center'>
        <h2 className='text-lg font-semibold'>{`${textoTipo} ${nro}/${local.id}`}</h2>
    </div>
    <div className='flex flex-wrap p-3 md:flex-nowrap md:w-3/5 md:items-center justify-evenly'>
      <div className=''>
        <label className='m-2 font-semibold'>Fecha:</label>
          <label className=''>{fechacompleta.getDate()}/{fechacompleta.getMonth()+1}/{fechacompleta.getFullYear()}</label>
      </div>
      <div>
    <label className='m-2 font-semibold'>Hora:</label>
          <label className=''>{fechacompleta.getHours()}:{fechacompleta.getMinutes()}:{fechacompleta.getSeconds()}</label>
      </div>
      <div>
    <label className='m-2 font-semibold'>Local:</label>
          <label className=''>{local.nombre}</label>
      </div>
      <div>
    <label className='m-2 font-semibold'>Usuario:</label>
          <label className=''>{user}</label>
      </div>
    </div>
  </div>
  )
}

export default CabeceraComprobantePedido