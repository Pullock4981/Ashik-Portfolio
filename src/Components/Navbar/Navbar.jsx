import "./Navbar.css"
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <ul className="nav-manu">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Potfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-contact">Contact With Me</div>
        </div>
    );
};

export default Navbar;