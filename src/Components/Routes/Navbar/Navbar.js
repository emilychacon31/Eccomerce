import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import { UsuarioContext } from "../../../contexts/usuarios.context";
import { signOutUsuario } from "../../../utils/firebase/firebase.util";
import './Navbar.scss';
const Navbar = () => {
    const { usuarioLogueado } = useContext(UsuarioContext);

    return (
        <>
            <nav className="navbar">
                <Link className="logo" to='/'>
                    <img
                        src="https://i.pinimg.com/236x/61/ba/a8/61baa8bcf0a80adba8af15e29a6ac31d.jpg"
                        alt="logo" />
                </Link>

                <div className="navbar-links">
                    <Link className="navbar-link" to='/tienda'>
                        Tienda
                    </Link>

                    {
                        //hacemos una condicional para ver si existe el usuario
                        //evalua a falso => null y/o undefined


                        usuarioLogueado ? (
                            <span className="navbar-link" onClick={signOutUsuario} >
                                Salir
                            </span>
                        ) : (

                            <Link className="navbar-link" to='/acceder'>
                                Acceder
                            </Link>
                        )}

                </div>

            </nav>
            <Outlet />
        </>
    )
}

export default Navbar