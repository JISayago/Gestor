import React, { useEffect, useState } from 'react'
import CabeceraComprobante from '../components/Venta/CabeceraComprobante'
import LineaComprobante from '../components/Venta/LineaComprobante'
import PieComprobante from '../components/Venta/PieComprobante'
import Navbar from '../components/Navbar'
import { useLocation, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Comprobante() {
  const location = useLocation()
  const {nro} = useParams()
  const [venta, setVenta] = useState(location.state.venta);
  const [productos, setProductos] = useState(venta.productos)
  const [local, setLocal] = useState(location.state.local);
  
  return (
    <>
            <Navbar />
            <div className='w-full h-screen bg-negro-2 flex flex-col items-center p-5'>
        <div className='w-11/12 flex justify-end items-center p-5'>
          <label className='mx-5 text-white text-bolder'>Generar PDF</label>
                    <button className='p-2 rounded-md bg-color-1 text-white mb-3 hover:bg-white hover:text-color-1'><FontAwesomeIcon icon="fa-solid fa-file-pdf" /></button>
                </div>
                <div className="w-11/12 h-4/5 rounded-lg border-2 border-color-1 flex flex-col justify-between">
                    <div className='h-2/4'>
            <CabeceraComprobante nro={nro} local={local} venta={venta} textoTipo={'N° Venta:'}/>
            {productos.map(producto => {
              return <LineaComprobante producto={producto } />
            })}
          </div>
          <PieComprobante venta={ venta} />
            </div>
            </div>
        </>
  )
}

export default Comprobante