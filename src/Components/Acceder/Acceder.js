
import FormularioRegistro from "../FormularioRegistro/FormularioRegistro";
import FormularioAcceso from "../FormularioAcceso/FormularioAcceso";

const Acceder = () => {



  return (
    //poner estilos sin necesidad de hacer un doc sccss
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '200px'
    }}>
      <FormularioAcceso />
      <FormularioRegistro />
    </div>
  )
}

export default Acceder
