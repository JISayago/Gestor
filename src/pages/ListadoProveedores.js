import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CabeceraListadoProveedor from '../components/Proveedor/CabeceraListadoProveedor'
import CabeceraProveedores from '../components/Proveedor/CabeceraProveedores'
import LineaProveedor from '../components/Proveedor/LineaProveedor'
import { useParams } from 'react-router-dom';
import Locales_bd from '../bbdd/locales.json';
import Proveedores_bd from '../bbdd/proveedores.json';

function ListadoProveedores() {
  const { id } = useParams();
  const [proveedores, setProveedores] = useState([]);
  const [local, setLocal] = useState('Local Predeterminado');
  const [titulo ,setTitulo] = useState(true)

  useState(() => {
    setProveedores(Proveedores_bd.proveedores.filter(proveedor => proveedor.locales.some(local => local.id === parseInt(id))));
    setLocal(Locales_bd.locales.find(l => l.id === parseInt(id)).nombre);
    
  },proveedores)
  return (
    <>
    <Navbar />
    <div className='w-full h-screen bg-negro-2'>
      <h2 className='p-2 text-4xl text-white font-bolder text-center'>{`Proveedores de ${local}`}</h2>
  <div className='w-full h-5/12'>
  <CabeceraListadoProveedor titulo={titulo} />
</div>
<div className='p-2'>

<CabeceraProveedores/>
</div>
        <div className=' flex-1 h-96 px-2'>
          {proveedores.map(p => {
            return <LineaProveedor proveedor={p} localId={parseInt(id)} cargarProveedor={""} />;
                  })}              
</div>
    </div>
  </>
  )
}

export default ListadoProveedores