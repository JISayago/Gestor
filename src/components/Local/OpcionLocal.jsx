import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OpcionLocal({ optionText, local }) {
  const navigate = useNavigate();
  const [icon, setIcon] = useState();
  const [color, setColor] = useState();
  useEffect(() => {
    if (optionText === "Ventas") {
      setIcon(<FontAwesomeIcon icon="fa-solid fa-cash-register" />)
      return setColor('text-color-1');
    }
    if (optionText === "Usuarios") {
      setIcon(<FontAwesomeIcon icon="fa-solid fa-users" />)
      return setColor('text-color-2');
    }
    if (optionText === "Proveedores") {
      setIcon(<FontAwesomeIcon icon="fa-solid fa-dolly" />)
      return setColor('text-color-5');
    }
    if (optionText === "Productos") {
      setIcon(<FontAwesomeIcon icon="fa-solid fa-box-open" />)
      return setColor('text-color-4');
    }
  },[])


  
  return (
    <button onClick={() => navigate(`/local/${local.id}/${optionText.toLowerCase()}`)}
      className='flex flex-col justify-evenly items-center m-3 p-5 w-full md:w-1/2 md:h-full text-3xl border border-blanco rounded-xl transition ease-in-out delay-100 hover:border-color-1 hover:bg-negro-1 hover:-translate-y-1 hover:scale-30 duration-300 '>
      <label className='text-white'>{optionText}</label>
      <label className={color}>{icon}</label>
    </button>
  )
}

export default OpcionLocal