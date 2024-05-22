import React, {  useEffect, useState } from 'react'
import ListadoLocales from '../components/Local/ListadoLocales'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UsuarioContext';

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
      <div className='w-full h-screen bg-negro-2'>
        <ListadoLocales locales={locales} />
    </div>
    </>
  )
}

export default Locales