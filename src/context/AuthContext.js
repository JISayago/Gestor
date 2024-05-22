import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom

// Crea un contexto para autenticación
const AuthContext = createContext();

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Almacena el objeto de usuario
  const navigate = useNavigate(); // Obtiene la función de navegación

  useEffect(() => {
    // Revisa si hay un usuario autenticado en localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData)); // Guarda el objeto de usuario en localStorage
    setUser(userData); // Establece el objeto de usuario en el estado
    //navigate('/'); // Navega a la página principal después de iniciar sesión
  };

  const logout = () => {
    localStorage.removeItem('user'); // Remueve el objeto de usuario de localStorage
    setUser(null); // Limpia el estado de usuario
    navigate('/login'); // Navega a la página de inicio de sesión después de cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};
