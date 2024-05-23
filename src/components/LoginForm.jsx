import React, { useState } from 'react';
import Icono from '../assets/icono.png';
import { useNavigate } from 'react-router-dom';
import Data from '../bbdd/bbdd.json';
import { useUser } from '../context/UsuarioContext';

function LoginForm() {
  const { setUsuarioCntxt,setIsAdmin } = useUser();
  console.log('loginstorage',localStorage.getItem('usuarioCntxt'))
  
  const [users, setUsers] = useState(Data.usuarios)
  const [inputUser, setInputUser] = useState('cgonzalez');
  const [inputPass, setInputPass] = useState('tigre');
  const navigate = useNavigate();

  const handleUserChange = (e) => {
      setInputUser(e.target.value); // Guardar el valor del campo "Usuario"
  };

  const handlePassChange = (e) => {
    setInputPass(e.target.value); // Guardar el valor del campo "Contraseña"
  };

  const logear = () => {
    if (inputUser === '' || inputPass === '') {
      alert('Por favor, complete todos los campos');
    } else {
        // Aquí puedes agregar lógica de autenticación, por ejemplo, usando un servicio de autenticación
        // Para este ejemplo, simplemente redirisgimos a la página principal ("/")
        let user = users.find(u => u.nombreUsuario === inputUser);
        if(!user) {return alert('Por favor, complete todos los campos');}
        if (user.contrasena !== inputPass) { return alert('Error de contraseña.'); }
        
        if (user.contrasena === inputPass) {
          localStorage.setItem('usuarioCntxt', JSON.stringify(user));
          setUsuarioCntxt(user);
          return navigate('/');
        }
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-4/5 rounded-lg bg-negro-2 p-5'>
      <div className='flex items-center p-4 justify-center'>
        <img src={Icono} className='w-2/6' alt='Icono' />
      </div>
      <h1 className='text-3xl text-white'>Ingreso al Sistema</h1>
      <div className='flex flex-col justify-evenly w-full h-3/4 md:w-2/5 md:h-2/3'>
        <div className='p-2 w-full'>
          <input
            className='w-full bg-blanco p-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-color-1 placeholder:text-stone-500'
            type='text'
            placeholder='Usuario...'
            value={inputUser} // Asignar el estado al valor del input
            onChange={handleUserChange} // Manejar cambio de texto
          />
        </div>
        <div className='p-2 w-full'>
          <input
            className='w-full bg-blanco p-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-color-1 placeholder:text-stone-500'
            type='password'
            placeholder='Contraseña...'
            value={inputPass} // Asignar el estado al valor del input
            onChange={handlePassChange} // Manejar cambio de texto
          />
        </div>
      </div>
      <div className='flex flex-col justify-evenly items-center'>
        <div className='w-full text-center rounded-md'>
          <button onClick={logear} className='w-full p-2 rounded-md bg-color-1 text-white mb-3 hover:bg-white hover:text-color-1'>
            Ingresar
          </button>
        </div>
        <div className='w-full text-center'>
          <a className="text-white w-full hover:text-color-1" href='#'>
            ¿Olvidaste usuario y/o contraseña?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
