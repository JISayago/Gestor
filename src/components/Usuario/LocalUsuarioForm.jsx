import React, { useEffect, useState } from 'react';
import LogoLocal from '../../assets/LogoLocal.png';

function LocalUsuarioForm({ local, usuarioEditar, editar }) {
  const [color, setColor] = useState('bg-negro-2');

  useEffect(() => {
    if (usuarioEditar.locales !== undefined) {
      usuarioEditar.locales.find(l => l.id === local.id) ? setColor('bg-color-1') : setColor('bg-negro-2');
    } else {
      setColor('bg-negro-2');
    }
  }, [usuarioEditar, local.id]);

  const marcarLocal = () => {
    if (!editar) {
      setColor(prevColor => prevColor === 'bg-negro-2' ? 'bg-color-1' : 'bg-negro-2');
    } 
  }

  return (
    <button id="botonLocal" onClick={marcarLocal} className={`m-5 w-1/12 border border-blanco flex flex-col items-center p-2 rounded-xl ${color}`}>
      <label className='text-white text-sm p-2'>{local.nombre}</label>
      <img className='w-20 h-20 rounded-xl' src={LogoLocal} alt="Logo" />
    </button>  
  );
}

export default LocalUsuarioForm;
