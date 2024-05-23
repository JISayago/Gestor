import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import CabeceraListadoProveedor from '../components/Proveedor/CabeceraListadoProveedor';
import CabeceraPedidos from '../components/Pedidos/CabeceraPedidos';
import LineaPedido from '../components/Pedidos/LineaPedido';
import Data from '../bbdd/bbdd.json';
import { useUser } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';

function Pedidos() {
  const [pedidos, setPedidos] = useState(Data.pedidosProveedores);
  const [titulo,setTitulo] = useState(false)
  

  return (
    <>
    <Navbar />
    <div className='w-full h-screen bg-negro-2'>
      <h2 className='p-2 text-4xl text-white font-bolder text-center'>Listado de Pedidos</h2>
  <div className='w-full h-5/12'>
  <CabeceraListadoProveedor titulo={titulo} />
</div>
<div className='p-2 pr-6'>

<CabeceraPedidos/>
</div>
        <div className=' flex-1 h-96 overflow-y-scroll p-2'>
          {pedidos.map(pedido => {
            return <LineaPedido pedido={pedido} />;
                  })}              
</div>
    </div>
  </>
  )
}

export default Pedidos