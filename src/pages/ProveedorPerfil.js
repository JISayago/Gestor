import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import CabeceraComprobante from '../components/Venta/CabeceraComprobante';
import Locales_bd from '../bbdd/locales.json';
import PedidosProveedores_bd from '../bbdd/pedidosProveedores.json';
import CabeceraProducto from '../components/Venta/CabeceraProducto';
import LineaProducto from '../components/Venta/LineaProducto';
import CabeceraHistorialVentas from '../components/Venta/CabeceraHistorialVentas';
import LineaVenta from '../components/Venta/LineaVenta';
import CabeceraListadoVentas from '../components/Venta/CabeceraListadoVentas';
import CabeceraListadoProveedor from '../components/Proveedor/CabeceraListadoProveedor';
import CabeceraProveedores from '../components/Proveedor/CabeceraProveedores';
import CabeceraPedidos from '../components/Pedidos/CabeceraPedidos';
import LineaPedido from '../components/Pedidos/LineaPedido';

function ProveedorPerfil() {

  const location = useLocation()
  const { id } = useParams();
  const [proveedor, setProveedor] = useState(location.state.proveedor);
  const [local, setLocal] = useState(Locales_bd.locales.find(l => l.id === parseInt(id)));
  const [pedidos, setPedidos] = useState(PedidosProveedores_bd.pedidosProveedores.filter(p => ((p.proveedor.id === proveedor.id) && (p.local.id === parseInt(id)))))
  const [nro, setNro] = useState('');
  console.log("pedidos por proveedors:", pedidos)
  useEffect(() => {
    if (pedidos.length < 1) { return setNro("0001"); }
     pedidos.map(item => {
      const partes = item.numeroReferencia.split('/');
      let numeroParte = parseInt(partes[0], 10);
      const numeroIncrementado = numeroParte + 1;
      const parteNumericaNueva = numeroIncrementado.toString().padStart(partes[0].length, '0');
      console.log('', parteNumericaNueva)
      return setNro(parteNumericaNueva);
      //return setNro(`${parteNumericaNueva}/${partes[1]}`);
        
    })
},[pedidos])
  
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-negro-2 flex flex-col p-3">
        {/* División para el formulario */}
        <div className="w-full h-1/2 rounded-lg border-2 border-color-1">
          <CabeceraComprobante nro={nro} local={local} venta={""} textoTipo={"N° Pedido: "} />
          <div className='hidden md:flex md:flex-col md:bg-negro-2 md:h-4/6 md:rounded-b-lg md:border md:border-negro-2 '>{/*Contenido - Grilla*/}
          <CabeceraProducto/>
          <LineaProducto/>
            </div>
          <div className='flex w-full h-1/6 justify-between p-3'>
          { /*<BotonesFormaPago/>*/}
            <div className=''>
               <button className='p-2 mx-2 bg-color-1 text-white hover:bg-white hover:text-color-1'>Generar Pedido</button>
            </div>
          </div>
        </div>
        {/* División para el historial de ventas */}
        <div className="flex flex-col w-full h-1/2 ">
          <CabeceraListadoProveedor />
          <div className="bg-transparent w-full flex-1 overflow-y-auto p-2">
           <CabeceraPedidos/>
            {pedidos.map(p => {
              return <LineaPedido pedido={p } />
            })}
          </div>
        </div>
      </div>
    </>
  );
  
}

export default ProveedorPerfil