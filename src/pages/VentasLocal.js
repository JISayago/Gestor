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
import { useUser } from '../context/UsuarioContext';

function VentasLocal() {
  const { id } = useParams();
  const [local, setLocal] = useState(Locales_bd.locales.find(l => l.id === parseInt(id)));
  const [ventas, setVentas] = useState([]);
  const [nro, setNro] = useState();
  const [lineasProducto, setLineasProducto] = useState([null]);
  const { usuarioCntxt } = useUser();
  const [tipoPago, setTipoPago] = useState('Efectivo');
  
  useEffect(() => {
    // Almacenar ventas en localStorage
    localStorage.setItem('ventas', JSON.stringify(ventas));
  }, [ventas]);

  useEffect(() => {
    if (local) {
      // Obtener ventas almacenadas en localStorage
      const storedVentas = JSON.parse(localStorage.getItem('ventas')) || [];
      // Si hay ventas almacenadas, ordenarlas por fecha más reciente primero
      const sortedVentas = [...storedVentas].sort((a, b) => {
        const dateA = new Date(a.fecha.split('-').reverse().join('-'));
        const dateB = new Date(b.fecha.split('-').reverse().join('-'));
        return dateB - dateA;
      });
      const sortedVentas2 = [...local.ventas].sort((a, b) => {
        const dateA = new Date(a.fecha.split('-').reverse().join('-'));
        const dateB = new Date(b.fecha.split('-').reverse().join('-'));
        return dateB - dateA;
      });
      // Si hay ventas almacenadas, establecerlas como las ventas actuales
      setVentas(sortedVentas.length > 0 ? sortedVentas : sortedVentas2);
    }
  }, [local]);

  useEffect(() => {
    if (ventas.length < 1) { return setNro("0001"); }
    const ultimoNro = ventas.reduce((max, item) => {
      const partes = item.numeroComprobante.split('/');
      const numeroParte = parseInt(partes[0], 10);
      return Math.max(max, numeroParte);
    }, 0);
    const numeroIncrementado = ultimoNro + 1;
    const parteNumericaNueva = numeroIncrementado.toString().padStart(ventas[0]?.numeroComprobante.split('/')[0].length || 1, '0');
    setNro(parteNumericaNueva);

      //return setNro(`${parteNumericaNueva}/${partes[1]}`);
        
    }, [ventas]);


 
  const agregarLineaProducto = () => {
    setLineasProducto([...lineasProducto, null]);
  };

  const eliminarLineaProducto = (index) => {
    if (lineasProducto.length > 1) {
      setLineasProducto(lineasProducto.filter((_, i) => i !== index));
    } else {
      const nuevasLineasProducto = [...lineasProducto];
      nuevasLineasProducto[index] = null;
      setLineasProducto(nuevasLineasProducto);
    }
  };

  const actualizarLineaProducto = (index, producto) => {
    const nuevasLineasProducto = [...lineasProducto];
    nuevasLineasProducto[index] = producto;
    setLineasProducto(nuevasLineasProducto);
  };

  const calcularTotalVenta = () => {
    return lineasProducto.reduce((total, producto) => {
      if (producto && producto.cantidad) { // Asegurar que el producto y su cantidad existan
        return total + (producto.precio * producto.cantidad); // Multiplicar precio por cantidad
      } else {
        return total;
      }
    }, 0);
  };

  const handleTipoPago = (tipo) => {
    setTipoPago(tipo)
  } 

  const generarCompra = () => {
    const fecha = new Date();

    // Obtener el día, mes y año
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses van de 0 a 11, por lo que se suma 1
    const año = fecha.getFullYear();

    // Formatear la fecha con el formato día-mes-año
    const fechaFormateada = `${dia < 10 ? '0' + dia : dia}-${mes < 10 ? '0' + mes : mes}-${año}`;
    
    // Obtener la hora, minutos y segundos
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    // Formatear la hora con el formato hora:minutos:segundos
    const horaFormateada = `${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;

    // Construir venta con los productos de las líneas de producto
    const nuevaVenta = {
      id: ventas.length + 1, // Asignar un nuevo ID único
      numeroComprobante: `${nro}/${local.id}`, // Usar el número de comprobante generado
      fecha: fechaFormateada,
      hora: horaFormateada,
      local: local.nombre,
      usuario: usuarioCntxt.nombreUsuario,
      productos: lineasProducto.filter(producto => producto !== null), // Filtrar productos no nulos
      tipoDePago:tipoPago,
      total: calcularTotalVenta(), // Calcular el total de la venta
    };

    // Agregar la nueva venta al inicio de la lista de ventas
    setVentas([nuevaVenta, ...ventas]);

    // Reiniciar las líneas de producto
    setLineasProducto([null]);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-fit lg:h-screen bg-negro-2 flex flex-col p-4">
        {/* Sección para el formulario */}
        <div className="w-full h-7/12 rounded-lg border-2 border-color-1 ">
          <CabeceraComprobante nro={nro} local={local} venta={""} textoTipo={'N° Venta: '}/>
          <div className='hidden md:flex md:flex-col md:bg-negro-2 md:h-4/6 md:rounded-b-lg md:border md:border-negro-2 '>
            {/*Contenido - Grilla*/}
            <div className='w-full'>
              <CabeceraProducto />
            </div>
            <div className='w-full overflow-y-auto'>
              {lineasProducto.map((producto, index) => (
                <LineaProducto
                  key={index}
                  index={index}
                  producto={producto}
                  onEliminar={eliminarLineaProducto}
                  onActualizar={actualizarLineaProducto}
                />
              ))}
            </div>
            <div className='w-full flex flex-row justify-center'>
              <button onClick={agregarLineaProducto} className="p-2 bg-transparent text-color-4 text-2xl">
                <FontAwesomeIcon icon="fa-solid fa-plus" />
              </button>
            </div>
            <div className='bg-transparent w-1/5 self-end h-14 flex justify-end border border-negro-2'>
              <label className='text-white text-lg mx-5'>Total:</label>
              <label className='font-bold text-color-4 text-xl mr-5'>{`$ ${calcularTotalVenta()}`}</label>
            </div>
          </div>
          <div className='flex w-full h-1/6 justify-between p-3 mb-2 bg-negro-2'>
            <BotonesFormaPago handleTipoPago={handleTipoPago} />
            <div className='bg-negro-2'>
              <button onClick={generarCompra} className='p-2 mx-2 bg-color-1 text-white hover:bg-white hover:text-color-1'>Generar Compra</button>
            </div>
          </div>
        </div>

        {/* División para el historial de ventas */}
        <div className="flex flex-col w-full h-5/12 bg-negro-2">
          <CabeceraHistorialVentas />
          <div className="flex flex-col bg-negro-2 w-full">
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
