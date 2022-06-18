import { useState } from "react";
import { crearDocumentoUsuarios } from "../../utils/firebase/firebase.util";
import { createUserWithEmailPasswordFirestore } from "../../utils/firebase/firebase.util";

import { mostrarAlerta, erroAutenticacion } from "../../utils/sweetalert2/sweetalert2";

import Input from "../../layouts/Input/Input";
import Button from "../../layouts/Button/Button";

const FormularioRegistro = () => {

    //Objeto de datos formulario
    const datosFormulario = {
        nombre: '',
        correo: '',
        contrasena: '',
        confirmarContrasena: '',
    };

    //UseSate Hace que el objeto sea dinámico 
    const [camposFormulario, setCamposFormulario] = useState(datosFormulario);
    //destructuramos el objeto dinamico para hacer mas limpio el codigo y pasarselo al value del form
    const { nombre, correo, contrasena, confirmarContrasena } = camposFormulario;
    console.log(camposFormulario);
    //event.preventDefault sirve para que no se refresque la pagina

    //Se hace un array de objetos para refactorizar el codigo porque antes era codigo repetido
    const inputs = [
        {
            label: 'Nombre',
            type: 'text',
            name: 'nombre',
            value: nombre,

        },
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
        {
            label: 'Confirmar Contraseña',
            type: 'password',
            name: 'confirmarContrasena',
            value: confirmarContrasena,

        }
    ]
    const handleChanged = (evento) => {
        //Target capta lo que escribe el usuario en el form // entonces necesitamos destrcuturarlo para poder tener los datos
        const { name, value } = evento.target;
        //Spread ...De los datos de un objeto realiza un nuevo objeto
        setCamposFormulario({ ...camposFormulario, [name]: value });

    };
    //Si se utiliza cualquier propiedad OnXXX hay que ponerle a la funcion handleOnXXX
    //On submit: Va a mandar los datos a internet y lo va enviar a google
    const handleOnsubmit = async (evento) => {
        evento.preventDefault();
        console.log('Form enviado');

        //confirmar contraseña
        if (contrasena !== confirmarContrasena) {
            erroAutenticacion('contrasena-no-coincide');
            return;

        }
        //mandarle a la funcion createUserWithEnailPasswordFirestore el email y la contraseña 
        //la autenticacion
        try {
            //obtener el user
            const { user } = await createUserWithEmailPasswordFirestore(correo, contrasena);
            //mandar el nombre 
            crearDocumentoUsuarios(user, { nombre: nombre });
            mostrarAlerta('Usuario creado', 'realizado con éxito', 'success');
            setCamposFormulario(datosFormulario);
        } catch (error) {
            erroAutenticacion(error.code);

        }
    };

    return (
        <div style={{ width: '30%' }}>

            <h2 style={{ marginBottom: '30px' }}>Registrarse</h2>

            <form onSubmit={handleOnsubmit}>
                {
                    //map para correr el objeto inputs y se desestructuran los atributos
                    inputs.map(({ label, type, value, name, id }) => (
                        <Input
                            key={id}
                            label={label}
                            type={type}
                            onChange={handleChanged}
                            value={value}
                            name={name}
                            required={true}
                        />
                    ))
                }
                <div style={{ marginTop: '20px' }}>
                    <Button type={'submit'} texto={'Registrarse'} />
                </div>

            </form>
        </div>
    )
}
// Required: Requerido para poder enviar el formulario
//Onchanged:
export default FormularioRegistro;
