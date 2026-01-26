import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  NavBarComponent,
  NavbarOuter,
  Hamburger,
  MobileMenu,
} from "./Navbar.styles";

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("scrolled-down");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("scrolled-up");
      } else {
        setScrollDirection("scrolled-down");
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

  const navLinks = (
    <>
      <NavLink to="/" style={styles.navLink} onClick={() => setMenuOpen(false)}>
        About Me
      </NavLink>
      <NavLink
        to="/Projects"
        style={styles.navLink}
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </NavLink>
      <NavLink
        to="/Skills"
        style={styles.navLink}
        onClick={() => setMenuOpen(false)}
      >
        Skills
      </NavLink>
      <NavLink
        to="/CaseStudies"
        style={styles.navLink}
        onClick={() => setMenuOpen(false)}
      >
        Case Studies
      </NavLink>
      <NavLink
        to="/Work"
        style={{
          ...styles.navLink,
          background: "var(--darkPink)",
          color: "#fff",
          borderRadius: "999px",
          padding: "0.5em 1.2em",
          fontWeight: 600,
          marginLeft: "0.7em",
          boxShadow: "0 2px 12px rgba(241,116,150,0.12)",
          border: "2px solid var(--darkPink)",
          transition: "background 0.2s, color 0.2s",
        }}
        onClick={() => setMenuOpen(false)}
      >
        Work with Me
      </NavLink>
    </>
  );

  return (
    <NavbarOuter className={scrollDirection}>
      <NavLink to="/">
        <h1>Victoria Benoit</h1>
      </NavLink>
      <Hamburger
        className={menuOpen ? "open" : ""}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </Hamburger>
      <NavBarComponent className="desktop">{navLinks}</NavBarComponent>
      <MobileMenu id="mobile-menu" open={menuOpen}>
        {navLinks}
      </MobileMenu>
    </NavbarOuter>
  );
};

export default Navbar;
