import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterComponent } from "./Footer.styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterComponent>
      {/* Logo or Name */}
      <h3
        style={{
          fontFamily: "var(--titleFont)",
          color: "var(--pink-5)",
          marginBottom: "var(--spacing-xs)",
        }}
      >
        Victoria Benoit
      </h3>
      {/* Social Icons */}
      <div style={{ marginBottom: "var(--spacing-xs)" }}>
        <a
          href="https://github.com/roseandlily33"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub
            size={36}
            style={{ marginRight: "var(--spacing-m)", color: "var(--pink-2)" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/victoria-benoit-3rose3/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={36} style={{ color: "var(--pink-2)" }} />
        </a>
      </div>
      {/* Contact Info */}
      <div
        style={{
          marginBottom: "var(--spacing-xs)",
          color: "var(--grey-7)",
          fontSize: "var(--spacing-m)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--spacing-m)",
          justifyContent: "center",
        }}
      >
        <span>
          Email:{" "}
          <a
            href="mailto:victoria.benoit.dev@gmail.com"
            style={{ color: "var(--orange-6)" }}
          >
            victoria.benoit.dev@gmail.com
          </a>
        </span>
        <span style={{ marginLeft: "1.5rem" }}>
          Phone:{" "}
          <a href="tel:9028171001" style={{ color: "var(--orange-6)" }}>
            902-817-1001
          </a>
        </span>
      </div>
      {/* Footer Navigation (commented out for comparison)
      <nav
        style={{
          marginBottom: "var(--spacing-xs)",
          display: "flex",
          gap: "var(--spacing-l)",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <NavLink to="/" style={{ color: "var(--pink-5)" }}>
          About Me
        </NavLink>
        <NavLink to="/Projects" style={{ color: "var(--pink-5)" }}>
          Projects
        </NavLink>
        <NavLink to="/Work" style={{ color: "var(--pink-5)" }}>
          Work with Me
        </NavLink>
        <NavLink to="/Skills" style={{ color: "var(--pink-5)" }}>
          Skills
        </NavLink>
        <NavLink to="/CaseStudies" style={{ color: "var(--pink-5)" }}>
          Case Studies
        </NavLink>
        <NavLink to="/Certificates" style={{ color: "var(--pink-5)" }}>
          Certificates
        </NavLink>
      </nav>
      */}
      {/* Copyright */}
      <div
        style={{
          color: "var(--grey-7)",
          fontSize: "var(--spacing-m)",
          marginTop: "var(--spacing-xs)",
        }}
      >
        &copy; {currentYear} Victoria Benoit. All rights reserved.
      </div>
    </FooterComponent>
  );
};

export default Footer;
