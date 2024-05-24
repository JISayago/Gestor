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
import Locales_bd from '../bbdd/locales.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function VentasLocal() {
  const { id } = useParams();
  const [local, setLocal] = useState(Locales_bd.locales.find(l => l.id === parseInt(id)));
  const [ventas, setVentas] = useState(local.ventas);
  const [nro, setNro] = useState();
  const [lineasProducto, setLineasProducto] = useState([]);

  useEffect(() => {
    const ultimoNro = ventas.reduce((max, item) => {
      const partes = item.numeroComprobante.split('/');
      const numeroParte = parseInt(partes[0], 10);
      return Math.max(max, numeroParte);
    }, 0);
    const numeroIncrementado = ultimoNro + 1;
    const parteNumericaNueva = numeroIncrementado.toString().padStart(ventas[0].numeroComprobante.split('/')[0].length, '0');
    setNro(parteNumericaNueva);
  }, [ventas]);

  const agregarLineaProducto = () => {
    setLineasProducto([...lineasProducto, {}]);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-negro-2 flex flex-col p-3">
        {/* División para el formulario */}
        <div className="w-full h-1/2 rounded-lg border-2 border-color-1">
          <CabeceraComprobante nro={nro} local={local} venta={""} textoTipo={'N° Venta: '}/>
          <div className='hidden md:flex md:flex-col md:bg-negro-2 md:h-4/6 md:rounded-b-lg md:border md:border-negro-2 '>
            {/*Contenido - Grilla*/}
            <div className='w-full pr-4'>
            <CabeceraProducto />
            </div>
            <div className='w-full overflow-y-auto'>
            {lineasProducto.map((_, index) => (
              <LineaProducto key={index} />
            ))}
            </div>
            <div className='w-full flex flex-row justify-center mt-2'>
            <button onClick={agregarLineaProducto} className="p-2 bg-transparent text-color-4 text-2xl">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
            </button>
            </div>
          </div>
          <div className='flex w-full h-1/6 justify-between p-3'>
            <BotonesFormaPago />
            <div className=''>
              <button className='p-2 mx-2 bg-color-1 text-white hover:bg-white hover:text-color-1'>Generar Compra</button>
            </div>
          </div>
        </div>
        {/* División para el historial de ventas */}
        <div className="flex flex-col w-full h-1/2 ">
          <CabeceraHistorialVentas />
          <div className="bg-transparent w-full flex-1 overflow-y-auto p-2">
            <CabeceraListadoVentas />
            {ventas.map(venta => (
              <LineaVenta key={venta.id} venta={venta} local={local} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default VentasLocal;
