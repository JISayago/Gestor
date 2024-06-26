import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import LineaVenta from '../components/Venta/LineaVenta';
import CabeceraHistorialVentas from '../components/Venta/CabeceraHistorialVentas';
import CabeceraListadoVentas from '../components/Venta/CabeceraListadoVentas';
import Ventas_bd from '../bbdd/ventas.json';
import { useUser } from '../context/UsuarioContext';


function Ventas() {
  
  const [ventas, setVentas] = useState([])

  useEffect(() => {
    // Extraer todas las ventas de cada sucursal
    const allVentas = Ventas_bd.ventas;

    // Ordenar las ventas por fecha más reciente primero
    const sortedVentas = allVentas.sort((a, b) => {
      const dateA = new Date(a.fecha.split('-').reverse().join('-'));
      const dateB = new Date(b.fecha.split('-').reverse().join('-'));
      return dateB - dateA;
    });

    setVentas(sortedVentas);
  }, []);


  return (
    <>
    <Navbar />
    <div className='w-full h-screen bg-negro-2'>
  <div className='w-full h-5/12'>
  <CabeceraHistorialVentas />
</div>
<div className='p-2 '>
<CabeceraListadoVentas/>
</div>
<div className=' flex-1  p-2'>
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