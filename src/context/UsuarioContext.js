import React, { createContext, useContext, useState, useEffect } from 'react';
import ImgBuho from '../assets/perfilAnimal/buho.png';
import ImgPanda from '../assets/perfilAnimal/panda.png';
import ImgTucan from '../assets/perfilAnimal/tucan.png';
import ImgZorro from '../assets/perfilAnimal/zorro.png';

// Creamos el contexto
const imgPerfil = [ImgBuho, ImgPanda, ImgTucan, ImgZorro];
const UsuarioContext = createContext();

// Proveedor del contexto
export const UsuarioProvider = ({ children }) => {
  const [usuarioCntxt, setUsuarioCntxt] = useState(null); // Estado para almacenar el usuario logeado
  const [animalPerfil, setAnimalPerfil] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga inicial
  const [isAdmin, setIsAdmin] = useState(false);

  // Cargar el usuario del localStorage al montar el componente
  useEffect(() => {
    const savedUser = localStorage.getItem('usuarioCntxt');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUsuarioCntxt(parsedUser);
      const savedIndex = parsedUser.imgPerfilIndex;
      if (savedIndex >= 0 && savedIndex < imgPerfil.length) {
        setAnimalPerfil(imgPerfil[savedIndex]);
      } else {
        const randomIndex = Math.floor(Math.random() * imgPerfil.length);
        parsedUser.imgPerfilIndex = randomIndex;
        setAnimalPerfil(imgPerfil[randomIndex]);
        localStorage.setItem('usuarioCntxt', JSON.stringify(parsedUser));
      }
      parsedUser.rol === "admin" && setIsAdmin(true);
    } else {
      setIsLoading(false); // Cambia el estado de carga a false después de intentar cargar el usuario
    }
  }, []);

  // Guardar el usuario en localStorage cuando cambie
  useEffect(() => {
    if (usuarioCntxt) {
      const updatedUser = { ...usuarioCntxt }; // Clonar el usuario para no modificar el estado directamente
      if (updatedUser.imgPerfilIndex === -1) {
        const randomIndex = Math.floor(Math.random() * imgPerfil.length);
        updatedUser.imgPerfilIndex = randomIndex;
        setAnimalPerfil(imgPerfil[randomIndex]); // Si deseas que también se muestre la imagen de perfil aleatoria en el primer render
      }
      localStorage.setItem('usuarioCntxt', JSON.stringify(updatedUser));
      updatedUser.rol === "admin" && setIsAdmin(true);
    } else {
      localStorage.removeItem('usuarioCntxt');
      setIsAdmin(false);
    }
  }, [usuarioCntxt]);

  return (
    <UsuarioContext.Provider value={{ usuarioCntxt, setUsuarioCntxt, animalPerfil, setAnimalPerfil, isLoading, isAdmin, setIsAdmin }}>
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
