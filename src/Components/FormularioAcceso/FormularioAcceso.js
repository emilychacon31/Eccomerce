import { useState } from "react";
import {
    crearDocumentoUsuarios,
    signInWithGooglePopup,
    signInWithEmailPasswordFirestore
} from "../../utils/firebase/firebase.util";


import { erroAutenticacion } from "../../utils/sweetalert2/sweetalert2";

import Input from "../../layouts/Input/Input";
import Button from "../../layouts/Button/Button";

const FormularioAcceso = () => {

    //Objeto de datos formulario
    const datosFormulario = {
        correo: '',
        contrasena: '',
    };
    //UseSate Hace que el objeto sea dinámico 
    const [camposFormulario, setCamposFormulario] = useState(datosFormulario);
    //destructuramos el objeto dinamico para hacer mas limpio el codigo y pasarselo al value del form
    const { correo, contrasena } = camposFormulario;

    //Lo que va en parentesis de useContext es la estructura que se va a usar
    //Desetructuramos la funcion setUsuarioLogueado para enviar los datos del objeto al contexto


    //event.preventDefault sirve para que no se refresque la pagina
    //Se hace un array de objetos para refactorizar el codigo porque antes era codigo repetido
    const inputs = [
        {
            label: 'Correo',
            type: 'email',
            name: 'correo',
            value: correo,

        },
        {
            label: 'Contraseña',
            type: 'password',
            name: 'contrasena',
            value: contrasena,

        },

    ]
    const handleOnChanged = (evento) => {
        //Target capta lo que escribe el usuario en el form // entonces necesitamos destrcuturarlo para poder tener los datos
        const { name, value } = evento.target;
        //Spread ...De los datos de un objeto realiza un nuevo objeto
        setCamposFormulario({ ...camposFormulario, [name]: value });

    };

    //Si se utiliza cualquier propiedad OnXXX hay que ponerle a la funcion handleOnXXX
    //On submit: Va a mandar los datos a internet y lo va enviar a google
    const handleOnsubmit = async (evento) => {
        evento.preventDefault();

        //mandarle a la funcion signinWithEnailPasswordFirestore el email y la contraseña 
        //la autenticacion
        try {

            const { user } = await signInWithEmailPasswordFirestore(correo, contrasena);
            console.log(user);
            //Se envia los datos del objeto

        } catch (error) {
            erroAutenticacion(error.code)

        }
    };
    const loguear = async () => {
        const { user } = await signInWithGooglePopup();
        crearDocumentoUsuarios(user);
    };

    return (
        <div style={{ width: '30%' }}>

            <h2 style={{ marginBottom: '30px' }}>Iniciar Sesión</h2>

            <form onSubmit={handleOnsubmit}>
                {
                    //map para correr el objeto inputs y se desestructuran los atributos
                    inputs.map(({ label, type, value, name, id }) => (
                        <Input
                            key={id}
                            label={label}
                            type={type}
                            onChange={handleOnChanged}
                            value={value}
                            name={name}
                            required={true}
                        />
                    ))
                }
                <div style={{ marginTop: '20px' }}>
                    <Button type={'submit'} texto={'Acceder'} />
                    <Button onClick={loguear} texto='Acceder con Google' />
                </div>

            </form>
        </div>
    )
}
// Required: Requerido para poder enviar el formulario
//Onchanged:
export default FormularioAcceso;
