import CartWidget from '../Components/cartWidget/cartWidget';

function Navbar() {
    return (
        <>
<ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Carrito</a></li>
        </ul>
        <CartWidget />
        </>
    );
}

export default Navbar  