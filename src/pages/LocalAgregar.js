import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';

import UsuarioForm from '../components/Usuario/UsuarioForm';
import CabeceraListadoUsuarios from '../components/Usuario/CabeceraListadoUsuarios';
import LineaUsuario from '../components/Usuario/LineaUsuario';
import Locales_bd from '../bbdd/locales.json';
import Usuarios_bd from '../bbdd/usuarios.json';
import CabeceraUsuarios from '../components/Usuario/CabeceraUsuarios';
import { useUser } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';
import LocalForm from '../components/Local/LocalForm';
import ItemLocal from '../components/Local/ItemLocal';

function LocalAgregar() {
    const { usuarioCntxt } = useUser();
    const [esNuevo,setEsNuevo] = useState(true)
  const [esUsuarioLocal, setEsUsuarioLocal] = useState(false);
  const navigate = useNavigate();
  const [locales, setLocales] = useState(Locales_bd.locales);
  const [usuarios, setUsuarios] = useState(Usuarios_bd.usuarios)
  const [titulo, setTitulo] = useState('Agregar Local');
  const [editar, setEditar] = useState(false);
  const [usuarioEditar,setUsuarioEditar] = useState({})
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [localesAsignados, setLocalesAsignados] = useState([]);

  // Función para manejar el cambio de valores en los campos del formulario
  const handleInputChange = (event, setValue) => {
    setValue(event.target.value);
  };

  // Función para cargar datos desde un JSON
  const cargarUsuario = (uname) => {
    const usuarioEjemplo = usuarios.find(usuario => usuario.nombreUsuario === uname.nombreUsuario)
    setEditar(true)
    setTitulo('Editar Usuario');
    setUsuarioEditar(usuarioEjemplo);
    // Actualizamos el estado con los datos del JSON
    setNombre(usuarioEjemplo.nombre);
    setApellido(usuarioEjemplo.apellido);
    setDni(usuarioEjemplo.dni);
    setEmail(usuarioEjemplo.email);
    setTelefono(usuarioEjemplo.telefono);
  };


  return (
    <>
    <Navbar/>
    <div className='w-full h-screen bg-negro-2 flex flex-col'>
        <div className='flex flex-col w-full h-5/12'>
          <div className='p-4 flex items-center content-center '>
            <h2 className='mx-5 text-2xl text-white font-bolder underline decoration-2 underline-offset-8'>{titulo}</h2>{/*cambia segun el usuario si se crea o se carga */ }
          </div>
          <LocalForm locales={locales} usuarios={usuarios}
            nombre={nombre}
            setNombre={setNombre}
            apellido={apellido}
            setApellido={setApellido}
            dni={dni}
            setDni={setDni}
            email={email}
            setEmail={setEmail}
            telefono={telefono}
            setTelefono={setTelefono}
            localesAsignados={localesAsignados}
            setLocalesAsignados={setLocalesAsignados}
            handleInputChange={handleInputChange}
            usuarioEditar={usuarioEditar}
            editar={editar}
          />
        </div>
        <div className='flex p-2 flex-wrap h-fir justify-center bg-negro-2'>
          {locales.map(l => {
              return <ItemLocal local={l} esNuevo={esNuevo } />
          })}
        </div>
    </div>
    </>
  )
}

export default LocalAgregar