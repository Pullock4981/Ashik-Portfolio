import "./Navbar.css"
import logo from '../../assets/name_logo.png'
import underline_img from '../../assets/nav_underline.svg'
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from "react";

const Navbar = () => {

    // state declaration

    const [manu, setManu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className="navbar">
            <img src={logo} alt="" />
            
            <div onClick={openMenu} className="menu-open">
                <img  src={menu_open} alt="" />
            </div>
            <ul ref={menuRef} className="nav-manu">
                <div onClick={closeMenu} className="menu-close">
                    <img src={menu_close} alt="" />
                </div>
                <li><AnchorLink className="anchor-link" href="#home-section"><p onClick={()=>setManu("home")}>Home</p></AnchorLink>{manu === "home" ? <img src={ underline_img} alt="" />:<></> }</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about-section-here"><p onClick={()=>setManu("about")}>About Me</p></AnchorLink>{manu === "about" ? <img src={ underline_img} alt="" />:<></> }</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#my-work-section"><p onClick={()=>setManu("projects")}>Projects</p></AnchorLink>{manu === "projects" ? <img src={ underline_img} alt="" />:<></> }</li>
                {/* <li><AnchorLink className="anchor-link" offset={50} href="#portfolio"><p onClick={()=>setManu("portfolio")}>Portfolio</p></AnchorLink>{manu === "portfolio" ? <img src={ underline_img} alt="" />:<></> }</li> */}
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setManu("contact")}>Contact</p></AnchorLink>{manu === "contact" ? <img src={ underline_img} alt="" />:<></> }</li>
            </ul>
            <div className="nav-contact"><a target="_blank" href="https://drive.google.com/file/d/1xozYHydK6FAVCWWyRFwK7ie0O0Vu9i37/view?usp=drive_link">My Resume</a></div>
        </div>
    );
};

export default Navbar;