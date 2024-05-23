import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UsuarioContext';
import '../css/input.css'

const AutenticacionRol = ({ children }) => {
  const { usuarioCntxt, isLoading } = useUser();

  if (usuarioCntxt.rol !== "admin") {
    return <Navigate to="/limitado" replace />;
  }
  return children;
};

export default AutenticacionRol;
