import React, { useState } from 'react'
import LocalUsuarioForm from './LocalUsuarioForm'



function UsuarioForm({titulo,usuarioEditar,handleInputChange,locales,usuarios,nombre, setNombre,apellido, setApellido,dni, setDni,email, setEmail,telefono, setTelefono,localesAsignados, setLocalesAsignados}) {

  return (
    <div className='flex flex-col justify-evenly '>
      <div className='w-full mb-10 flex flex-col items-center'>
        <div className='flex w-2/3 justify-evenly'>
          <input
            className='m-2 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
            type='text'
            placeholder='Nombre...'
            value={nombre}
            onChange={(e) => handleInputChange(e, setNombre)}
          />
          <input
            className='m-2 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
            type='text'
            placeholder='Apellido...'
            value={apellido}
            onChange={(e) => handleInputChange(e, setApellido)}
          />
        </div>
        <div className='flex w-2/3 justify-evenly'>
          <div className='m-2 flex flex-col w-2/5'>
            <input
              className=' p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-400'
              type='text'
              placeholder='Usuario'
              disabled
              value={`${nombre}.${apellido}`}
            />
            <small className='text-white'>
              (Se genera automáticamente, una vez llenados los campos del nombre y del apellido.)
            </small>
          </div>
          <div className='m-2 flex flex-col w-2/5'>
            <input
              className=' p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
              type='text'
              placeholder='22111000'
              value={dni}
              onChange={(e) => handleInputChange(e, setDni)}
            />
            <small className='text-white'>
              (Agregar el Dni sin los ".")
            </small>
          </div>
        </div>
        <div className='flex w-2/3 justify-evenly'>
          <input
            className='m-2 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
            type='text'
            placeholder='ejemplo@gmail.com '
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
          />
          <input
            className='m-2 w-2/5 p-2 bg-blanco text-negro placeholder:text-white rounded-lg placeholder:text-stone-600'
            type='tel'
            placeholder='381465645'
            value={telefono}
            onChange={(e) => handleInputChange(e, setTelefono)}
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
              usuarios={usuarios}
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
  );
};

export default UsuarioForm;