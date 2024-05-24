import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { UsuarioProvider, useUser } from './context/UsuarioContext.js';
import 'tailwindcss/tailwind.css';
import Locales from "./pages/Locales.js";
import Local from "./pages/Local.js";
import Login from "./pages/Login.js";
import Productos from "./pages/Productos.js";
import Proveedores from "./pages/Proveedores.js";
import Usuarios from "./pages/Usuarios.js";
import Ventas from "./pages/Ventas.js";
import Error404 from "./pages/Error404.js";
import Error403 from "./pages/Error403.js";
import Comprobante from "./pages/Comprobante.js";
import UsuarioLocal from "./pages/UsuarioLocal.js";
import ProductosLocal from "./pages/ProductosLocal.js";
import ListadoProveedores from './pages/ListadoProveedores.js';
import VentasLocal from "./pages/VentasLocal.js";
import ProveedorPerfil from "./pages/ProveedorPerfil.js";
import ComprobantePedido from "./pages/ComprabantePedido.js";
import Pedidos from "./pages/Pedidos.js";
import Autenticacion from "./components/Autenticacion.jsx";
import './index.css'; // Asegúrate de importar los estilos aquí
import AutenticacionRol from "./components/AutenticacionRol.jsx";


function App() {
  const { isAdmin } = useUser();
  
  return (
    <Routes>
    <Route path="/" element={<Autenticacion><Locales /></Autenticacion>}/>
    <Route path="/login" element={<Login />} /> 
    <Route path="/local/:id" element={<Autenticacion><Local /></Autenticacion>}/>
    <Route path="//local/:id/ventas" element={<Autenticacion><VentasLocal /></Autenticacion>}/>
    <Route path="/local/:id/usuarios" element={<Autenticacion><UsuarioLocal /></Autenticacion>}/>
    <Route path="/local/:id/proveedores" element={<Autenticacion><ListadoProveedores /></Autenticacion>}/>
    <Route path="/local/:id/productos" element={<Autenticacion><ProductosLocal /></Autenticacion>}/>
    <Route path="/local/:id/ventas/comprobante/:nro" element={<Autenticacion><Comprobante /></Autenticacion>}/>{/*NEcesito que si o si sea con un id en parametro o un numero de comprobante*/}
    <Route path="/local/:id/pedidos/comprobante/:nro" element={<Autenticacion><ComprobantePedido /></Autenticacion>}/>{/*NEcesito que si o si sea con un id en parametro o un numero de comprobante*/}
    <Route path="/local/:id/proveedor" element={<Autenticacion><ProveedorPerfil /></Autenticacion>}/>
    
    <Route path="/productos" element={<Autenticacion><Productos /></Autenticacion>} />
    
    <Route path="/usuarios" element={<Autenticacion><AutenticacionRol><Usuarios /></AutenticacionRol></Autenticacion>} />
    <Route path="/proveedores" element={<Autenticacion><AutenticacionRol><Proveedores /></AutenticacionRol></Autenticacion>}/>
    <Route path="/pedidos" element={<Autenticacion><AutenticacionRol><Pedidos /></AutenticacionRol></Autenticacion>}/>
    <Route path="/ventas" element={<Autenticacion><AutenticacionRol><Ventas /></AutenticacionRol></Autenticacion>} />
    
    <Route path="/limitado" element={<Error403 />} />{/*pagina restringidda error 403 forbiden access */}
    <Route path="*" element={<Error404 />} />{/*pagina no encontrada error 404 pagina no encontrada*/}
    </Routes>
  );
}

export default App;
