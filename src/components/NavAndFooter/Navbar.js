import { NavLink } from "react-router-dom";
import Logo from '../../images/VBLogo.svg';
import { NavBarComponent, NavbarOuter } from "./Navbar.styles";

const Navbar = () => {
    const styles = {
        navLink: {
            textDecoration: 'none',
            color: '#3D4249',
            padding: '1em 2em'
        }
    }
    return (
    <NavbarOuter>
    <img src={Logo} alt="Victoria Benoit" />
    <NavBarComponent>
       <NavLink to="/" style={styles.navLink}><h4>About Me</h4></NavLink>
       <NavLink to="/Projects" style={styles.navLink}><h4>Portfolio</h4></NavLink>
    </NavBarComponent>
    </NavbarOuter>
      );
}
 
export default Navbar;