import React from 'react'
import ItemLocal from './ItemLocal'

function ListadoLocales({locales}) {
  return (
    <div className='flex flex-wrap justify-center w-full bg-negro-2 md:p-5'>
      {
        locales.map(local => 
          <ItemLocal local={local} />
          )}
    </div>
  )
}

export default ListadoLocales