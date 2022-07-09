import Swal from "sweetalert2";
export const mostrarToast = (mensaje) => {
  //funcion que llama al sweetalert
  Swal.fire({
    text: mensaje,
    target: '.toast',
    customClass: {
      container: 'position-absolute'
    },
    toast: true,
    position: 'bottom-right'
  });
};

export const mostrarAlerta = (titulo, descripcion, icono) => {
  Swal.fire(titulo, descripcion, icono);
}
export const mostrarAlertaError = (titulo, descripcion) => {
  Swal.fire({
    icon: 'error',
    title: titulo,
    text: descripcion,
    footer: '<h2>Por favor inténtalo de nuevo</h2>',
  })
};
//Alertas para diferentes tipos de errores de autenticacion
export const erroAutenticacion = (codigo) => {
  switch (codigo) {
    case 'auth/weak-password':
      Swal.fire('Error', 'La contraseña debe tener más de 6 digitos', 'warning');
      break;
    case 'contrasena-no-coinciden':
      Swal.fire('Error', 'Las contraseñas no coinciden', 'warning');
      break;
    case 'auth/user-not-found':
      Swal.fire('Error', 'El usuario no se encuentra registrado', 'danger');
      break;


    default:
      Swal.fire('Error', 'Hubo un problema registrando el usuario', 'danger');
      break;
  }
}
