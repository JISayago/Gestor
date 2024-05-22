import React, { useEffect, useState } from 'react'
import Logo from '../assets/LogoLocal.png'
import IconoPerfil from '../assets/icono.png'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UsuarioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {

    const { usuarioCntxt, setUsuarioCntxt,animalPerfil } = useUser();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [seguro, setSeguro] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (seguro) {
            // Si seguro se establece en true, entonces realiza las acciones de cierre de sesión
            setUsuarioCntxt(null);
            localStorage.removeItem('usuarioCntxt');
            navigate('/login');
      }
            
    }, [seguro]); // Se ejecutará cada vez que seguro cambie

    const pregSeguro = () => {
        const confirmacion = window.confirm('¿Cerrar Sesión?');
        setSeguro(confirmacion);
    }

  return (
    <div className='flex flex-col p-2 md:flex-row justify-between items-center w-full md:p-5 bg-negro-1 border-b border-b-blanco'>
      <div className='w-full justify-center items-center md:w-32'>
        <div className='w-auto flex justify-center md:w-32'>
          <img className='w-2/5 rounded-full md:w-32' src={Logo} alt="Logo" />
        </div>
      </div>
      <div className='flex justify-center items-end w-full'>
        <ol className='text-xl text-center text-white flex flex-col w-full h-full md:flex-row md:justify-evenly md:items-end md:h-full md:w-2/3 p-4'>
          <li className='p-3 border-b border-b-color-1 rounded-xl w-full md:border-b-negro-primario transition ease-in-out delay-100 hover:bg-color-1 hover:-translate-y-1 hover:scale-110 duration-300 '><Link to='/'>Inicio</Link></li>
          <li className='p-3 border-b border-b-color-1 rounded-xl w-full md:border-b-negro-primario transition ease-in-out delay-100 hover:bg-color-1 hover:-translate-y-1 hover:scale-110 duration-300 '><Link to='/proveedores'>Proveedores</Link></li>
          <li className='p-3 border-b border-b-color-1 rounded-xl w-full md:border-b-negro-primario transition ease-in-out delay-100 hover:bg-color-1 hover:-translate-y-1 hover:scale-110 duration-300 '><Link to='/productos'>Stock</Link></li>
          <li className='p-3 border-b border-b-color-1 rounded-xl w-full md:border-b-negro-primario transition ease-in-out delay-100 hover:bg-color-1 hover:-translate-y-1 hover:scale-110 duration-300 '><Link to='/ventas'>Ventas</Link></li>
          <li className='p-3 border-b border-b-color-1 rounded-xl w-full md:border-b-negro-primario transition ease-in-out delay-100 hover:bg-color-1 hover:-translate-y-1 hover:scale-110 duration-300 '><Link to='/pedidos'>Pedidos</Link></li>
          <li className='p-3 border-b border-b-color-1 rounded-xl w-full md:border-b-negro-primario transition ease-in-out delay-100 hover:bg-color-1 hover:-translate-y-1 hover:scale-110 duration-300 '><Link to='/usuarios'>Usuarios</Link></li>
        </ol>
      </div>
      <div className='w-2/4 bg-negro-2 rounded-full md:w-1/8 md:w-24  md:rounded-none md:bg-transparent'>
        <button
          className='p-5 flex justify-center items-center md:flex-col md:w-auto'
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <img className ='w-20 p-2 flex bg-negro-2 border-dotted border-4 border-color-1 rounded-full justify-center md:w-32' src={animalPerfil} alt="Perfil" />
          <label className='text-white'>{usuarioCntxt ? usuarioCntxt.nombreUsuario : "Nombre Usuario"}</label>
        </button>
        {showProfileMenu && (
          <div className="absolute right-0 mt-10 bg-white rounded-md shadow-md">
            <ul>
              <li><Link to='#'>Perfil</Link></li>
              <li><button onClick={pregSeguro}>Cerrar Sesión</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;