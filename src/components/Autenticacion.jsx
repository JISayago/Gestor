// RequireAuth.js
// Autenticacion.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UsuarioContext';
import '../css/input.css'

const Autenticacion = ({ children }) => {
  const { usuarioCntxt} = useUser();


  if (!usuarioCntxt) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Autenticacion;
