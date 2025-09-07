import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterComponent } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterComponent>
      <div>
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
    </FooterComponent>
  );
};

export default Footer;
