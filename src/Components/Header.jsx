import Title from "./Title";
import Navbar from "./NavBar";
import logo from "../assets/supremepreview.png"; // Asegúrate de ajustar la ruta si es necesario

function Header() {
    return (
        <nav>
            <div className="logo-container">
            <img src={logo} alt="Supreme Fit Logo" style={{ height: "70px" }}/>
                <Title titulo="SupremeFit" />
                
            </div>
            <Navbar />
        </nav>
    );
}

export default Header;