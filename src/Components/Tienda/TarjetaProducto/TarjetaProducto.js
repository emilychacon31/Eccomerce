import Button from '../../../layouts/Button/Button';
import './TarjetaProducto.scss';

const TarjetaProducto = ({ producto }) => {
    const { nombre, imagenUrl, precio } = producto;
    return (
        <div className="contenedor-producto">
            <img src={imagenUrl} alt={nombre} />
            <div className='footer-producto'>
                <span>{nombre}</span>
                <span>${precio}</span>
            </div>
            <Button type='submit' texto='Agregar al carrito' />
        </div>

    )
}
export default TarjetaProducto;