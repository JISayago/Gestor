import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LineaPedido({ pedido }) {
    const navigate = useNavigate()
    const [nro, setNro] = useState();

    useEffect(() => {
        const partes = pedido.numeroReferencia.split('/');
        const numeroParte = parseInt(partes[0], 10);
        const parteNumericaNueva = numeroParte.toString().padStart(partes[0].length, '0');
    setNro(parteNumericaNueva);
    
    })
    
  return (
    <div className='bg-blanco w-full flex justify-between border border-negro-2 '>
        
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{pedido.numeroReferencia}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label className='overflow-hidden text-ellipsis whitespace-nowrap'>{pedido.local.nombre}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label>{pedido.fechaPedido}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-2/12 items-center'><label className='overflow-hidden text-ellipsis whitespace-nowrap'>{pedido.proveedor.nombre}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{pedido.productos.length}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{pedido.estadoRecibido ? 'Recibido': 'Pedido'}</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><label>{`$ ${pedido.total}` }</label></div>
      <div className='flex justify-center border border-negro-2 h-full py-2 px-5 w-1/12 items-center'><button onClick={() => navigate(`/local/${pedido.local.id}/pedidos/comprobante/${nro}`, { state: { local:pedido.local,pedido:pedido } })}><FontAwesomeIcon className='text-negro-1 hover:text-color-5' icon="fa-solid fa-receipt" /></button></div>
  </div>
  )
}

export default LineaPedido