// UsuarioContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import ImgBuho from '../assets/perfilAnimal/buho.png';
import ImgPanda from '../assets/perfilAnimal/panda.png';
import ImgTucan from '../assets/perfilAnimal/tucan.png';
import ImgZorro from '../assets/perfilAnimal/zorro.png';

// Creamos el contexto
const imgPerfil = [ImgBuho, ImgPanda, ImgTucan, ImgZorro];
const randomIndex = Math.floor(Math.random() * imgPerfil.length);
const UsuarioContext = createContext();

// Proveedor del contexto
export const UsuarioProvider = ({ children }) => {
  const [usuarioCntxt, setUsuarioCntxt] = useState(null); // Estado para almacenar el usuario logeado
  const [animalPerfil, setAnimalPerfil] = useState(imgPerfil[randomIndex]);
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga inicial

  // Cargar el usuario del localStorage al montar el componente
  useEffect(() => {
    const savedUser = localStorage.getItem('usuarioCntxt');
    if (savedUser) {
      setUsuarioCntxt(JSON.parse(savedUser));
    }
    setIsLoading(false); // Cambia el estado de carga a false después de intentar cargar el usuario
  }, []);

  // Guardar el usuario en localStorage cuando cambie
  useEffect(() => {
    if (usuarioCntxt) {
      localStorage.setItem('usuarioCntxt', JSON.stringify(usuarioCntxt));
    } else {
      localStorage.removeItem('usuarioCntxt');
    }
  }, [usuarioCntxt]);

  return (
    <UsuarioContext.Provider value={{ usuarioCntxt, setUsuarioCntxt, animalPerfil, setAnimalPerfil, isLoading }}>
      {children}
    </UsuarioContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useUser = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error('useUser debe ser usado dentro de un UsuarioProvider');
  }
  return context;
};
