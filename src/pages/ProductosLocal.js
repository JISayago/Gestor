import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CabeceraListadoUsuarios from '../components/Usuario/CabeceraListadoUsuarios'
import CabeceraUsuarios from '../components/Usuario/CabeceraUsuarios'
import LineaUsuario from '../components/Usuario/LineaUsuario'
import ProductoForm from '../components/Producto/ProductoForm'
import CabeceraListadoProductos from '../components/Producto/CabeceraListadoProductos'
import CabeceraProductos from '../components/Producto/CabeceraProductos'
import LineaProducto from '../components/Producto/LineaProducto'
import { useParams } from 'react-router-dom'
import Locales_bd from '../bbdd/locales.json';

function ProductosLocal() {
  const { id } = useParams();
  const [local, setLocal] = useState(Locales_bd.locales.find(l => l.id === parseInt(id)));
  const [locales, setLocales] = useState(Locales_bd.locales);
  const [productos, setProductos] = useState(local.productos)
  const [titulo, setTitulo] = useState('Agregar Usuario');
  const [editar, setEditar] = useState(false);
  const [productoeditar,setProductoEditar] = useState({})
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState('');
  const [talle, setTalle] = useState('');
  const [color, setColor] = useState('');
  const [codigo, setCodigo] = useState('');
  const [localesAsignados, setLocalesAsignados] = useState([]);

  const handleInputChange = (event, setValue) => {
    setValue(event.target.value);
  };

  // Función para cargar datos desde un JSON
  const cargarProducto = (pname) => {
    const productoEjemplo = productos.find(producto => producto.nombre === pname.nombre)
    setEditar(true)
    setTitulo('Editar Producto');
    setProductoEditar(productoEjemplo);
    // Actualizamos el estado con los datos del JSON
    setNombre(productoEjemplo.nombre);
    setPrecio(productoEjemplo.precio);
    setStock(productoEjemplo.stock);
    setCategoria(productoEjemplo.categoria);
    setTalle(productoEjemplo.talle);
    setColor(productoEjemplo.color);
    setCodigo(productoEjemplo.codigo);
  };


  return (
      <>
          <Navbar />
          <div className='w-full h-screen bg-negro-2'>
              <div>
                  
          <div className='p-4 flex items-center content-center '>
            <h2 className='w-full mx-5 text-3xl text-white text-center font-bolder underline decoration-2 underline-offset-8'>{titulo}</h2>{/*cambia segun el usuario si se crea o se carga */ }
          </div>
          <ProductoForm locales={locales} 
            nombre={nombre}
            setNombre={setNombre}
            precio={precio}
            setPrecio={setPrecio}
            stock={stock}
            setStock={setStock}
            categoria={categoria}
            setCategoria={setCategoria}
            talle={talle}
            setTalle={setTalle}
            color={color}
            setColor={setColor}
            codigo={codigo}
            setCodigo={setCodigo}
            localesAsignados={localesAsignados}
            setLocalesAsignados={setLocalesAsignados}
            handleInputChange={handleInputChange}
            productoeditar={productoeditar}
            editar={editar}
              />
              </div>
              <div className='w-full h-5/12 border-t border-t-white p-4'>
              <CabeceraListadoProductos />
              </div>
              <div className='p-2 pr-6'>
               <CabeceraProductos/>
              </div>
        <div className=' flex-1 overflow-y-scroll p-2'>
          {productos.map(p => {
            return <LineaProducto producto={p} cargarProducto={ cargarProducto} />
                 }
                  )}
  </div>
          </div>
   </>
  )
}

export default ProductosLocal