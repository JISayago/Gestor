import React from "react";
import { useUser } from '../../context/UsuarioContext';
import { Route,useNavigate} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { usuarioCntxt } = useUser();
    const navigate = useNavigate()
  
    return (
      <Route
        {...rest} // Pasa todas las props restantes (como path, exact, etc.) al componente Route
        render={(props) =>
          usuarioCntxt ? (
            <Component {...props} /> // Pasa las props de Route (como history, location, match) al componente objetivo
          ) : (
           navigate('/login') // Redirige a la página de inicio de sesión si no está autenticado
          )
        }
      />
    );
  };
export default PrivateRoute;