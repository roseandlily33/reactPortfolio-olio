import { NavLink } from "react-router-dom";

const Navbar = () => {
    const styles = {
        navLink: {
            textDecoration: 'none',
            color: '#98A4B3',
        }
    }

    return (
        <header className="header">
        <h1>Victoria Benoit</h1>
       <nav className="navbar">
       <NavLink to="/" style={styles.navLink}>About Me</NavLink>
       <NavLink to="/Portfolio" style={styles.navLink}>Portfolio</NavLink>
       <NavLink to="/ContactMe" style={styles.navLink}>Contact Me</NavLink>
       <NavLink to="/Resume" style={styles.navLink}>Resume</NavLink>
    </nav>
    </header>
      );
}
 
export default Navbar;