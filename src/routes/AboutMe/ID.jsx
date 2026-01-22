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
        </IDPhoto>
        <IDInfo>
          <IDName>Victoria Benoit</IDName>
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
          {/* <IDCatchPhrase>
            <FaStar style={{ marginRight: "0.4rem" }} />
            "Turning ideas into beautiful, functional web experiences."
          </IDCatchPhrase> */}
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
        {/* New Section: How I Work & What I'm Known For */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.7rem",
            borderLeft: "6px solid var(--medPink)",
            paddingLeft: "2rem",
            minWidth: "320px",
            maxWidth: "420px",
          }}
        >
          <div>
            <h4
              style={{
                color: "var(--darkPink)",
                fontWeight: 700,
                marginBottom: "0.7rem",
                fontSize: "1.13rem",
              }}
            >
              How I Work
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                color: "var(--darkBerry)",
                fontWeight: 600,
              }}
            >
              {[
                "Strategy before design",
                "Design with intention",
                "Accessibility baked in",
                "Support beyond launch",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>
                    ▸
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              style={{
                color: "var(--darkPink)",
                fontWeight: 700,
                marginBottom: "0.7rem",
                fontSize: "1.13rem",
              }}
            >
              What I’m Known For
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                color: "var(--darkBerry)",
                fontWeight: 600,
              }}
            >
              {["Clear, thoughtful interfaces", "Clean, maintainable code"].map(
                (item) => (
                  <li
                    key={item}
                    style={{
                      marginBottom: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <span
                      style={{ color: "var(--medPink)", fontSize: "1.1rem" }}
                    >
                      ▸
                    </span>{" "}
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </IDCardContainer>
    </section>
  );
};

export default IDSection;
