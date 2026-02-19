import React from "react";
import { useNavigate } from "react-router-dom";
// import MyImage from "../../../images/1F431994-4D99-4CA6-8049-1D03C3A8D143_1_105_c.jpeg";
import { FaMapMarkerAlt, FaClock, FaCertificate } from "react-icons/fa";
import CTAButton from "../../../components/Buttons/CTAButton/CTAButton.jsx";
import SecondaryButton from "../../../components/Buttons/SecondaryButton/SecondaryButton.jsx";

import { IDCardContainer, IDInfo, IDRow, IDName } from "./ID.styles.jsx";

const IDSection = () => {
  const navigate = useNavigate();
  return (
    // <section>
    <IDCardContainer>
      <IDName>Victoria Benoit</IDName>
      <h4>Full Stack &amp; UX/UI Developer</h4>
      <IDInfo>
        <IDRow>
          <FaClock />
          4+ Years Experience
        </IDRow>
        <IDRow>
          <FaMapMarkerAlt />
          Halifax, NS
        </IDRow>
        <IDRow>
          <FaCertificate />
          Certified (University of New Brunswick, Codecademy, Zero to Mastery)
        </IDRow>
      </IDInfo>
      <IDInfo>
        <CTAButton
          span="View Selected Work"
          handleClick={() => navigate("/Projects")}
        />
        <SecondaryButton
          span="Let's Connect"
          onClick={() => navigate("/Work")}
        />
      </IDInfo>
    </IDCardContainer>
  );
};

export default IDSection;
