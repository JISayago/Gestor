import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CabeceraListadoProveedor from '../components/Proveedor/CabeceraListadoProveedor'
import CabeceraProveedores from '../components/Proveedor/CabeceraProveedores'
import ProveedorForm from '../components/Proveedor/ProveedorForm'
import LineaProveedor from '../components/Proveedor/LineaProveedor'
import Data from '../bbdd/bbdd.json';

function Proveedores() {
  const [proveedores, setProveedores] = useState(Data.proveedores);
  const [locales,setLocales] =useState(Data.locales)
  const [titulo, setTitulo] = useState('Agregar Proveedor');
  const [editar, setEditar] = useState(false);
  const [proveedorEditar,setProvedorEditar] = useState({})
  const [nombre, setNombre] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [rubro, setRubro] = useState('');
  const [cuit, setCuit] = useState('');
  const [email, setEmail] = useState('');
  const [ctacte, setCtaCte] = useState('');
  const [localesAsignados, setLocalesAsignados] = useState([]);

  const handleInputChange = (event, setValue) => {
    setValue(event.target.value);
  };


  const cargarProveedor = (p) => {
    const proveedorEjemplo = proveedores.find(proveedor => proveedor.cuit === p.cuit)
    setEditar(true)
    setTitulo('Editar Proveedor');
    setProvedorEditar(proveedorEjemplo);
    // Actualizamos el estado con los datos del JSON
    setNombre(proveedorEjemplo.nombre);
    setRazonSocial(proveedorEjemplo.razonSocial);
    setRubro(proveedorEjemplo.rubro);
    setCuit(proveedorEjemplo.cuit);
    setEmail(proveedorEjemplo.email);
    setCtaCte(proveedorEjemplo.cuentaCorriente);
  };


  return (
    <>
    <Navbar/>
    <div className='w-full h-fit bg-negro-2 flex flex-col'>
        <div className='flex flex-col w-full h-4/12'>
          <div className='p-2 flex items-center content-center '>
            <h2 className='mx-5 text-2xl text-white font-bolder underline decoration-2 underline-offset-8'>Proveedores</h2>{/*cambia segun el usuario si se crea o se carga */ }
          </div>
          <ProveedorForm proveedores={proveedores} locales={locales}
            nombre={nombre}
            setNombre={setNombre}
            razonSocial={razonSocial}
            setRazonSocial={setRazonSocial}
            rubro={rubro}
            setRubro={setRubro}
            cuit={cuit}
            setCuit={setCuit}
            email={email}
            setEmail={setEmail}
            ctacte={ctacte}
            setCtaCte={setCtaCte}
            localesAsignados={localesAsignados}
            setLocalesAsignados={setLocalesAsignados}
            handleInputChange={handleInputChange}
            usuarioEditar={proveedorEditar}
            titulo={titulo}
            
          />
        </div>
        <div className='w-full h-4/12'>
          <CabeceraListadoProveedor />
        </div>
        <div className='p-2 pr-6'>

        <CabeceraProveedores/>
        </div>
        <div className='flex-1 h-7 overflow-y-auto p-2'>
          {proveedores.map(p => {
          return <LineaProveedor proveedor={p} cargarProveedor={cargarProveedor}/>
        })}
        </div>
    </div>
    </>
  )
}

export default Proveedores