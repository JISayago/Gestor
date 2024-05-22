import React from 'react'

function PieComprobantePedido({pedido}) {
  return (
    <div className='rounded-b-lg w-full bg-negro-1 flex justify-end '>
    <div className='flex flex-col p-5 '>
        <h2 className='text-white text-lg'><strong>Total: $</strong>{pedido.total} </h2>
     <h2 className='text-white text-lg'><strong>Tipo Pago: </strong>{/*pedido.tipoDePago*/}</h2>
    </div>
</div>
  )
}

export default PieComprobantePedido