import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import LineaVenta from '../components/Venta/LineaVenta';
import CabeceraHistorialVentas from '../components/Venta/CabeceraHistorialVentas';
import CabeceraListadoVentas from '../components/Venta/CabeceraListadoVentas';
import Ventas_bd from '../bbdd/ventas.json';
import { useUser } from '../context/UsuarioContext';


function Ventas() {
  
  const [ventas, setVentas] = useState(Ventas_bd.ventas)

  return (
    <>
    <Navbar />
    <div className='w-full h-screen bg-negro-2'>
  <div className='w-full h-5/12'>
  <CabeceraHistorialVentas />
</div>
<div className='p-2 pr-6'>
<CabeceraListadoVentas/>
</div>
<div className=' flex-1 overflow-y-scroll p-2'>
          {ventas.map(venta => {
              return <LineaVenta venta={venta} local={venta.local} />
          })
          }
</div>
    </div>
  </>

  );
}

export default Ventas;