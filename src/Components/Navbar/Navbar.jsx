import "./Navbar.css"
import logo from '../../assets/name_logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <ul className="nav-manu">
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div className="nav-contact">Contact With Me</div>
        </div>
    );
};

export default Navbar;