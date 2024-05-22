import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UsuarioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LineaVenta({ venta, local }) {
  const [nro, setNro] = useState();
  const { usuarioCntxt } = useUser();
  const [localo, setLocalo] = useState(local)
  useEffect(() => {
    
        const partes = venta.numeroComprobante.split('/');
        const numeroParte = parseInt(partes[0], 10);
        const parteNumericaNueva = numeroParte.toString().padStart(partes[0].length, '0');
    setNro(parteNumericaNueva);
    if (local.id === undefined) {
      return setLocalo(usuarioCntxt.locales.find(l => l.nombre === local))
    }
    
  })  
  
  
  const navigate = useNavigate()
  return (
    <div className='bg-blanco w-full flex justify-between border border-negro-2 '>
        
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{venta.numeroComprobante}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{localo.nombre}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{venta.fecha}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{venta.usuario}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{venta.productos.length }</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{venta.tipoDePago }</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{venta.total }</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><button onClick={() => navigate(`/local/${localo.id}/ventas/comprobante/${nro}`, { state: { local:localo,venta:venta } })}><FontAwesomeIcon className='text-negro-1 hover:text-color-5' icon="fa-solid fa-receipt" /></button></div>
      </div>
  )
}

export default LineaVenta