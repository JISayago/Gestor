import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CabeceraComprobante from '../components/Venta/CabeceraComprobante';
import CabeceraProducto from '../components/Venta/CabeceraProducto';
import LineaProducto from '../components/Venta/LineaProducto';
import BotonesFormaPago from '../components/Venta/BotonesFormaPago';
import CabeceraHistorialVentas from '../components/Venta/CabeceraHistorialVentas';
import CabeceraListadoVentas from '../components/Venta/CabeceraListadoVentas';
import LineaVenta from '../components/Venta/LineaVenta';
import { useParams } from 'react-router-dom';
import Data from '../bbdd/bbdd.json';


function VentasLocal() {

  const { id } = useParams();
  const [local, setLocal] = useState(Data.locales.find(l => l.id === parseInt(id)))
  const [ventas, setVentas] = useState(local.ventas)
  const [nro, setNro] = useState();
  
  useEffect(() => {
    
      ventas.map(item => {
        const partes = item.numeroComprobante.split('/');
        const numeroParte = parseInt(partes[0], 10);
        const numeroIncrementado = numeroParte + 1;
        const parteNumericaNueva = numeroIncrementado.toString().padStart(partes[0].length, '0');
        
        return setNro(parteNumericaNueva);
        //return setNro(`${parteNumericaNueva}/${partes[1]}`);
        
      })
  })

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-negro-2 flex flex-col p-3">
        {/* División para el formulario */}
        <div className="w-full h-1/2 rounded-lg border-2 border-color-1">
          <CabeceraComprobante nro={nro} local={local} venta={""} textoTipo={'N° Venta: '}/>
          <div className='hidden md:flex md:flex-col md:bg-negro-2 md:h-4/6 md:rounded-b-lg md:border md:border-negro-2 '>{/*Contenido - Grilla*/}
          <CabeceraProducto/>
          <LineaProducto/>
            </div>
          <div className='flex w-full h-1/6 justify-between p-3'>
           <BotonesFormaPago/>
            <div className=''>
               <button className='p-2 mx-2 bg-color-1 text-white hover:bg-white hover:text-color-1'>Generar Compra</button>
            </div>
          </div>
        </div>
        {/* División para el historial de ventas */}
        <div className="flex flex-col w-full h-1/2 ">
          <CabeceraHistorialVentas/>
          <div className="bg-transparent w-full flex-1 overflow-y-auto p-2">
            <CabeceraListadoVentas />
            {ventas.map(venta => {
              return <LineaVenta venta={venta } local={local} />
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default VentasLocal;