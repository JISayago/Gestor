import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function LocalForm() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex flex-col justify-evenly p-6 items-center'>
      <div className='w-full flex flex-col items-center'>
        <div className='w-full mb-10 flex justify-center'>
          <div className='flex w-2/3 justify-evenly items-center'>
            <div className='flex flex-col items-center w-1/3'>
              <input
                className='m-2 w-full p-2 bg-white text-black placeholder:text-stone-600 rounded-lg'
                type='text'
                placeholder='Numero...'
              />
              <input
                className='m-2 w-full p-2 bg-white text-black placeholder:text-stone-600 rounded-lg'
                type='text'
                placeholder='Nombre...'
              />
             
            </div>

            <div className='flex flex-col items-center w-1/3'>
              <input
                className='m-2 w-full p-2 bg-white text-black placeholder:text-stone-600 rounded-lg'
                type='text'
                placeholder='Cuit...'
              />
              <input
                className='m-2 w-full p-2 bg-white text-black placeholder:text-stone-600 rounded-lg'
                type='text'
                placeholder='Dirección...'
              />
            </div>

            <div className='relative flex flex-col items-center w-1/5'>
              <div className='w-full mb-2 h-56 relative border-2 rounded-lg border-color-1'>
                <img
                  src={imageSrc || 'https://via.placeholder.com/150'}
                  alt='Cargar imagen'
                  className='w-full h-56 rounded-lg object-cover p-1 text-blanco'
                />
                <input
                  type='file'
                  accept='image/*'
                  className='hidden'
                  id='image-upload'
                  onChange={handleImageUpload}
                />
                <label
                  htmlFor='image-upload'
                  className='absolute bottom-0 left-0 w-full p-2 bg-color-1 bg-opacity-75 text-white text-center rounded-b-lg cursor-pointer hover:bg-opacity-100'
                >
                 <FontAwesomeIcon icon="fa-solid fa-upload" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col p-2 border-y border-y-white items-center'>
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
}

export default LocalForm;
