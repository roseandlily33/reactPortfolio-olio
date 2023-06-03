import { NavLink } from "react-router-dom";

const Navbar = () => {
    const styles = {
        navLink: {
            textDecoration: 'none',
            color: '#3D4249',
            padding: '1em 2em'
        }
    }
    return (
        <header className="header">
        <h1>Victoria Benoit</h1>
       <nav className="navbar">
       <NavLink to="/" style={styles.navLink}><h4>About Me</h4></NavLink>
       <NavLink to="/Portfolio" style={styles.navLink}><h4>Portfolio</h4></NavLink>
       <NavLink to="/ContactMe" style={styles.navLink}><h4>Contact Me</h4></NavLink>
       <NavLink to="/Resume" style={styles.navLink}><h4>Resume</h4></NavLink>
    </nav>
    </header>
      );
}
 
export default Navbar;