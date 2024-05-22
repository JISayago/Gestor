import React, { useState } from 'react';
import Data from '../../bbdd/bbdd.json';
import LocalUsuarioForm from '../Usuario/LocalUsuarioForm';
function ProveedorForm({titulo,locales,nombre,setNombre,razonSocial,setRazonSocial,rubro,setRubro,cuit,setCuit,email,setEmail,ctacte,setCtaCte,localesAsignados,setLocalesAsignados,handleInputChange,usuarioEditar}) {
  return (
    <div className='flex flex-col justify-evenly p-6'>
    <div className='w-full mb-10 flex flex-col items-center'>
      <div className='flex w-2/3 justify-evenly'>
        <input
          className='m-4 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
          type='text'
            placeholder='Nombre...'
            value={nombre}
            onChange={(e) => handleInputChange(e, setNombre)}
        />
        <input
          className='m-4 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
          type='text'
            placeholder='Razon Social...'
            value={razonSocial}
            onChange={(e) => handleInputChange(e, setRazonSocial)}
        />
      </div>
      <div className='flex w-2/3 justify-evenly'>
          <input
            className='m-4 flex flex-col w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-400'
            type='text'
            placeholder='Rubro...'
            value={rubro}
            onChange={(e) => handleInputChange(e, setRubro)}
          />
          <input
            className='m-4 flex flex-col w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
            type='text'
            placeholder='Cuit...'
            value={cuit}
            onChange={(e) => handleInputChange(e, setCuit)}
          />
      </div>
      <div className='flex w-2/3 justify-evenly'>
        <input
          className='m-4 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
          type='text'
            placeholder='Cuenta Corriente...'
            value={ctacte}
            onChange={(e) => handleInputChange(e, setCtaCte)}
        />
        <input
          className='m-4 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
          type='tel'
            placeholder='Email...'
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
        />
      </div>
          </div>
          <div className='w-full flex flex-col p-2 border-y border-y-white items-center'>
        <h2 className='text-xl text-white font-bolder'>Asignar a Local/es</h2>
        <div className='flex w-full justify-evenly flex-wrap'>
          {locales.map((local) => (
           <LocalUsuarioForm
              key={local.id}
              local={local}
              usuarios={[]}
              asignados={localesAsignados}
              setAsignados={setLocalesAsignados}
              usuarioEditar={usuarioEditar}
              titulo={titulo}
            />
          ))}
        </div>
        <div className='flex w-1/3 justify-center'>
          <button
            className='mt-5 w-2/3 p-2 rounded-md bg-color-1 text-white mb-3 hover:bg-white hover:text-color-1'
          >
           Guardar
          </button>
        </div>
      </div>
  </div>      
  )
}

export default ProveedorForm