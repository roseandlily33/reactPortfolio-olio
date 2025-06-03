import { NavLink } from "react-router-dom";
import { NavBarComponent, NavbarOuter } from "./Navbar.styles";

const Navbar = () => {
  const styles = {
    navLink: {
      textDecoration: "none",
      color: "#3D4249",
      padding: "1em 2em",
    },
  };
  return (
    <NavbarOuter>
      <h1>Victoria Benoit</h1>
      <NavBarComponent>
        <NavLink to="/" style={styles.navLink}>
          About Me
        </NavLink>
        <NavLink to="/Projects" style={styles.navLink}>
          Portfolio
        </NavLink>
        <NavLink to="/CaseStudies" style={styles.navLink}>
          Case Studies
        </NavLink>
        <NavLink to="/Certificates" style={styles.navLink}>
          Certificates
        </NavLink>
      </NavBarComponent>
    </NavbarOuter>
  );
};

export default Navbar;
