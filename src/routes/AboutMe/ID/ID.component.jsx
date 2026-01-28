import React from "react";
import MyImage from "../../../images/1F431994-4D99-4CA6-8049-1D03C3A8D143_1_105_c.jpeg";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  IDCardContainer,
  IDPhoto,
  IDInfo,
  IDRow,
  IDName,
  IDOccupation,
  IDSocials,
  IDKeyAspects,
  IDRightSide,
  IDLeftSide,
} from "./ID.styles.jsx";

const IDSection = () => {
  return (
    <section>
      <IDCardContainer>
        <IDLeftSide>
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
        </IDLeftSide>
        {/* New Section: How I Work & What I'm Known For */}
        <IDRightSide>
          <div>
            <h5>How I Work</h5>
            <ul>
              {[
                "Strategy before design",
                "Design with intention",
                "Accessibility baked in",
                "Support beyond launch",
              ].map((item) => (
                <li key={item}>
                  <span>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>What I’m Known For</h5>
            <ul>
              {["Clear, thoughtful interfaces", "Clean, maintainable code"].map(
                (item) => (
                  <li key={item}>
                    <span>▸</span> {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </IDRightSide>
      </IDCardContainer>
    </section>
  );
};

export default IDSection;
