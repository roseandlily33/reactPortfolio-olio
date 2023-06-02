import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="header">
            <h1>Victoria Benoit</h1>
              <nav className="navbar">
           <NavLink to="/AboutMe">About Me</NavLink>
           <NavLink to="/Portfolio">Portfolio</NavLink>
           <NavLink to="/Resume">Resume</NavLink>
        </nav>
        </header>
      
      );
}
 
export default Navbar;