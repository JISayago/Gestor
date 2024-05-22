import React from 'react'

function CabeceraHistorialVentas() {
  return (
<div className="w-full flex justify-evenly p-5">
            <div className='w-2/6'>
              <h1 className='text-4xl text-white font-bolder underline decoration-2 underline-offset-8'> Historial de Ventas</h1>
            </div>
            <div className="w-2/6 p-2 flex justify-center">
              <input type="text" placeholder="Buscar..." className="border px-2 rounded-xl bg-blanco" />
              <button className="mx-2 bg-color-1 text-white px-2 rounded-xl">Buscar</button>
            </div>
            <div className="w-2/6 flex justify-evenly items-center p-2">
              <span className='text-white font-lg'>Desde</span>
              <input  className='p-2 rounded-xl bg-blanco' type='date'/>
              <span className='text-white font-lg'>Hasta</span>
              <input className='p-2 rounded-xl bg-blanco' type='date'/>
            </div>
          </div>
  )
}

export default CabeceraHistorialVentas