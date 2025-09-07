import React from "react";
import MyImage from "../../images/1F431994-4D99-4CA6-8049-1D03C3A8D143_1_105_c.jpeg";
import {
  // FaUser,
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";
import { AboutMePicture } from "./AboutMe.styles";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  IDCardContainer,
  IDPhoto,
  IDInfo,
  IDRow,
  IDName,
  IDOccupation,
  IDSocials,
  IDCatchPhrase,
  IDKeyAspects,
} from "./ID.styles.jsx";

const IDSection = () => {
  return (
    <section>
      <IDCardContainer>
        <IDPhoto>
          <img src={MyImage} alt="Victoria" />
          {/* <span style={{ color: "#ccc", fontSize: "1.2rem" }}>Your Photo</span> */}
        </IDPhoto>
        <IDInfo>
          <IDName>
            {/* <FaUser /> */}
            Victoria Benoit
          </IDName>
          <IDOccupation>
            <FaBriefcase />
            Full Stack &amp; UX/UI Developer
          </IDOccupation>
          <IDRow>
            <FaClock />
            4+ Years Experience
          </IDRow>
          <IDRow>
            <FaMapMarkerAlt />
            Halifax, NS
          </IDRow>
          <IDKeyAspects>
            <span>React</span>
            <span>Node.js</span>
            <span>UI/UX</span>
            <span>Accessibility</span>
            <span>SEO</span>
          </IDKeyAspects>
          <IDCatchPhrase>
            <FaStar style={{ marginRight: "0.4rem" }} />
            "Turning ideas into beautiful, functional web experiences."
          </IDCatchPhrase>
          <IDSocials>
            <a
              href="https://github.com/roseandlily33"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/victoria-benoit-3rose3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </IDSocials>
        </IDInfo>
      </IDCardContainer>
    </section>
  );
};

export default IDSection;
