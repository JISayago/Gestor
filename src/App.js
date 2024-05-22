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
import Loader from './components/Loader.jsx';
import './index.css'; // Asegúrate de importar los estilos aquí


function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const { usuarioCntxt } = useUser();
  const navigate = useNavigate();
  
  const [isStylesLoaded, setIsStylesLoaded] = useState(false);

  useEffect(() => {
    const loadStyles = async () => {
      // Simula una carga asíncrona de los estilos (aquí deberías cargar realmente los estilos)
      const response = await fetch('/output.css'); // Cambia la ruta según tu configuración
      if (response.ok) {
        setIsStylesLoaded(true);
      }
    };

    loadStyles(); // Inicia la carga de los estilos
  }, []);

  if (!isStylesLoaded) {
    return <Loader />; // Muestra el preloader mientras se cargan los estilos
  }
  return (
    
    <Routes>
      {/*Todos las Rutas del Local o referente al local, diferenciando por el id del local seleccionado */}
       
      <Route path="/" element={<Autenticacion><Locales /></Autenticacion>}/>
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />} /> 
        {/*La idea es separarlos para filtrar el tipo de dato consumido y mostrado particular para cada local*/}

      <Route path="/local/:id" element={<Autenticacion><Local /></Autenticacion>}/>
      <Route path="//local/:id/ventas" element={<Autenticacion><VentasLocal /></Autenticacion>}/>
      <Route path="/local/:id/usuarios" element={<Autenticacion><UsuarioLocal /></Autenticacion>}/>
      <Route path="/local/:id/proveedores" element={<Autenticacion><ListadoProveedores /></Autenticacion>}/>
      <Route path="/local/:id/productos" element={<Autenticacion><ProductosLocal /></Autenticacion>}/>
      <Route path="/local/:id/ventas/comprobante/:nro" element={<Autenticacion><Comprobante /></Autenticacion>}/>{/*NEcesito que si o si sea con un id en parametro o un numero de comprobante*/}
      <Route path="/local/:id/pedidos/comprobante/:nro" element={<Autenticacion><ComprobantePedido /></Autenticacion>}/>{/*NEcesito que si o si sea con un id en parametro o un numero de comprobante*/}

      <Route path="/local/:id/proveedor" element={<Autenticacion><ProveedorPerfil /></Autenticacion>}/>
      <Route path="/productos" element={<Autenticacion><Productos /></Autenticacion>}/>
      
        {/*Genericos para el admin datos en teoria solo para el admin*/}
      <Route path="/usuarios" element={isAdmin? <Autenticacion><Productos /></Autenticacion> : <Navigate replace to={"/limitado"}/>} />
      <Route path="/proveedores" element={isAdmin ? <Autenticacion><Proveedores /></Autenticacion>  : <Navigate replace to={"/limitado"} />}/>
      <Route path="/pedidos" element={isAdmin ? <Autenticacion><Pedidos /></Autenticacion>  : <Navigate replace to={"/limitado"} />}/>
      <Route path="/ventas" element={isAdmin ? <Autenticacion><Ventas /></Autenticacion>  : <Navigate replace to={"/limitado"} />}/>
        
        <Route path="/limitado" element={<Error403 />} />{/*pagina restringidda error 403 forbiden access */}
        <Route path="*" element={<Error404 />} />{/*pagina no encontrada error 404 pagina no encontrada*/}
      }
    </Routes>
  );
}

export default App;
