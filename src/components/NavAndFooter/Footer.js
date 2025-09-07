import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterComponent } from "./Footer.styles";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterComponent>
      {/* Logo or Name */}
      <h1
        style={{
          fontFamily: "var(--titleFont)",
          color: "var(--darkPink)",
          marginBottom: "0.5rem",
        }}
      >
        Victoria Benoit
      </h1>
      {/* Social Icons */}
      <div style={{ marginBottom: "0.5rem" }}>
        <a
          href="https://github.com/roseandlily33"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub
            size={36}
            style={{ marginRight: "1rem", color: "var(--medPink)" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/victoria-benoit-3rose3/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={36} style={{ color: "var(--medPink)" }} />
        </a>
      </div>
      {/* Footer Navigation */}
      <nav
        style={{
          marginBottom: "0.5rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <NavLink to="/" style={{ color: "var(--darkPink)" }}>
          About Me
        </NavLink>
        <NavLink to="/Projects" style={{ color: "var(--darkPink)" }}>
          Projects
        </NavLink>
        <NavLink to="/Work" style={{ color: "var(--darkPink)" }}>
          Work with Me
        </NavLink>
        <NavLink to="/Skills" style={{ color: "var(--darkPink)" }}>
          Skills
        </NavLink>
        <NavLink to="/CaseStudies" style={{ color: "var(--darkPink)" }}>
          Case Studies
        </NavLink>
        <NavLink to="/Certificates" style={{ color: "var(--darkPink)" }}>
          Certificates
        </NavLink>
      </nav>
      {/* Contact Info */}
      <div
        style={{
          marginBottom: "0.5rem",
          color: "var(--medGrey)",
          fontSize: "1rem",
        }}
      >
        <span>
          Email:{" "}
          <a href="mailto:vrose834@email.com" style={{ color: "var(--medPink)" }}>
            vrose834@gmail.com
          </a>
        </span>
        <span style={{ marginLeft: "1.5rem" }}>
          Phone:{" "}
          <a href="tel:9028171001" style={{ color: "var(--medPink)" }}>
            902-817-1001
          </a>
        </span>
      </div>
      <div
        style={{
          color: "var(--medGrey)",
          fontSize: "0.95rem",
          marginTop: "0.5rem",
        }}
      >
        &copy; {currentYear} Victoria Benoit. All rights reserved.
      </div>
    </FooterComponent>
  );
};

export default Footer;
