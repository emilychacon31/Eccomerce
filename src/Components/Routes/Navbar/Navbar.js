import { Link,Outlet} from "react-router-dom"
import './Navbar.scss';
const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <Link className="logo" to='/'> 
                <img 
                    src="https://i.pinimg.com/236x/61/ba/a8/61baa8bcf0a80adba8af15e29a6ac31d.jpg" 
                    alt="logo"/> 
            </Link>
            <div className="navbar-links">
                <Link className="navbar-link" to='/tienda'>
                    Tienda
                </Link>
                <Link className="navbar-link" to='/acceder'>
                    Acceder
                </Link>
                
            </div>

        </nav>
        <Outlet/>
    </>
  )
}

export default Navbar