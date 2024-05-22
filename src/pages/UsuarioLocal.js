import React, { useState } from 'react';
import CabeceraListadoUsuarios from '../components/Usuario/CabeceraListadoUsuarios';
import CabeceraUsuarios from '../components/Usuario/CabeceraUsuarios';
import LineaUsuario from '../components/Usuario/LineaUsuario';
import { useParams } from 'react-router-dom';
import Data from '../bbdd/bbdd.json';
import Navbar from '../components/Navbar';

function UsuarioLocal() {
  const { id } = useParams();
  const [local, setLocal] = useState(Data.locales.find(l => l.id === parseInt(id)));
  const [usuarios, setUsuarios] = useState(Data.usuarios.filter(usuario => usuario.locales.some(local => local.id === parseInt(id))));
  const cargarUsuario = "";

  return (
    <>
      <Navbar />
      <div className='w-full h-screen bg-negro-2'>
        <h2 className='p-2 text-4xl text-white font-bolder text-center'>Usuarios de {local.nombre}</h2>
    <div className='w-full h-5/12'>
    <CabeceraListadoUsuarios />
  </div>
  <div className='p-2 pr-6'>

  <CabeceraUsuarios/>
  </div>
  <div className=' flex-1 overflow-y-scroll p-2'>
    {usuarios.map(usuario => {
      return <LineaUsuario usuario={usuario} cargarUsuario={cargarUsuario} />
    })}
  </div>
      </div>
    </>
  )
}

export default UsuarioLocal