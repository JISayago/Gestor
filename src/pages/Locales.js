import React, {  useEffect, useState } from 'react'
import ListadoLocales from '../components/Local/ListadoLocales'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UsuarioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Locales({isAuthenticated}) {
  const {usuarioCntxt} = useUser()
  
  const [locales, setLocales] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    usuarioCntxt && setLocales(usuarioCntxt.locales)
   },[usuarioCntxt])

  return (
    <>
    <Navbar/>
      <div className='w-full h-fit bg-negro-2'>
        <ListadoLocales locales={locales} />
        <div className='w-full flex justify-center'>
          {usuarioCntxt.rol === 'admin' ? 
      <button className='w-1/3 bg-color-1 text-white h-20 rounded-full hover:bg-blanco hover:text-negro-1'>
           <Link to={'/local'}><label className='font-semibold mx-5'>Agregar Local</label><FontAwesomeIcon icon="fa-solid fa-plus" /> </Link>
            </button> :
            <></>
          }
        </div>
      </div>
        
    </>
  )
}

export default Locales