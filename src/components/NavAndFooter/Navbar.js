import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavBarComponent, NavbarOuter } from "./Navbar.styles";

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("scrolled-down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("scrolled-up"); // User is scrolling down
      } else {
        setScrollDirection("scrolled-down"); // User is scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    navLink: {
      textDecoration: "none",
      color: "#3D4249",
      padding: "0.5rem",
    },
  };
  return (
    <NavbarOuter className={scrollDirection}>
      <h1>Victoria Benoit</h1>
      <NavBarComponent>
        <NavLink to="/" style={styles.navLink}>
          About Me
        </NavLink>
        <NavLink to="/Projects" style={styles.navLink}>
          Projects
        </NavLink>
        <NavLink to="/Skills" style={styles.navLink}>
          Skills
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
