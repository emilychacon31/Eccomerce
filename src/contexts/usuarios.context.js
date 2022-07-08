//funciones
import { createContext, useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.util";
//crear el contexto para usuario
//el contexto la estructura del objeto que se va recibir
//Es como: si usted quiere mandarme algo tiene que tener esos dos parametros
export const UsuarioContext = createContext({
    usuarioLogueado: null,
    setUsuarioLogueado: () => null
});

//proveedor
//children es el componente hijo
//Aqui obtenemos los datos de usuarioLogueado y setUsuarioLogueado utilizando useState
export const UsuarioProvider = ({ children }) => {
    const [usuarioLogueado, setUsuarioLogueado] = useState(null);
    const value = { usuarioLogueado, setUsuarioLogueado };

    //callback => Una funcion que se ejecuta dentro de una funcion
    // useEfect=> Le indica a React que el componente tiene que hacer alfo despues de renderizarse, se puede actualizar el titulo del documento, hacer peticiones de datos
    useEffect(() => {
        //Contenido --- Traer al usuario
        const estadoUsuario = onAuthStateChangedListener((usuario) => {
            setUsuarioLogueado(usuario);
            console.log(estadoUsuario);
            //Navegate sirve para navegar entre rutas cuando la pagina es renderizada
            // if (usuario) {
            //     <Navigate to={'/'} replace={true} />

            // }
        });

    }, []) // [] contador---Solo se vuelve a ejecutar si contador cambia


    //vamos a devolver el usuario con el proveedor
    //Encerrar el componente hijo en el useContext.Provider
    return (
        <UsuarioContext.Provider
            value={value}>{children}
        </UsuarioContext.Provider>
    );
}

//Importamos el UsuarioProvider al index.js para encerrar al componente App para que se pueda acceder al usuario en cualquier componente