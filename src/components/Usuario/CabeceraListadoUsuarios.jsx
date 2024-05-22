import React from 'react'

function CabeceraListadoUsuarios() {
  return (
    <div className="w-full flex justify-evenly items-center">
            <div className='w-2/6'>
              <h1 className='p-2 text-2xl text-white font-bolder underline decoration-2 underline-offset-4'>Listado de Usuarios</h1>
            </div>
            <div className="w-2/6 p-2 flex justify-center">
              <input type="text" placeholder="Buscar..." className="text-lg border px-2 rounded-xl bg-blanco" />
              <button className="mx-2 bg-color-1 text-white px-2 rounded-xl">Buscar</button>
            </div>
          </div>
  )
}

export default CabeceraListadoUsuarios