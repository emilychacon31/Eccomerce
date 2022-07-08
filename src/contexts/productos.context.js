import { createContext, useState } from "react";

import PRODUCTOS from './../data.json';


//crear el contexto para los productos
export const ProductosContext = createContext({
    productos: [],
});
//Aqui obtenemos los datos de usuarioLogueado y setUsuarioLogueado utilizando useState
export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState(PRODUCTOS);

    const value = { productos };

    //callback => Una funcion que se ejecuta dentro de una funcion




    //vamos a devolver el usuario con el proveedor
    //Encerrar el componente hijo en el useContext.Provider
    return (
        <ProductosContext.Provider
            value={value}>{children}
        </ProductosContext.Provider>
    );
}
