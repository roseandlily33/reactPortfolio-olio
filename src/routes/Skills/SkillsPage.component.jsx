import React, { useState } from "react";
import { CertificateContainer } from "../Certificates/Certificates.styles";
import {
  TopContainer,
  EachCaseStudyContainer,
} from "../CaseStudies/CaseStudies.styles";
import TabButton from "../../components/Buttons/TabButton.component";

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const skills = {
    Frontend: [
      "HTML",
      "CSS",
      "CSS Libraries: Bootstrap, Styled Components, Pure.css",
      "Responsive Design",
      "JavaScript",
      "APIs",
      "React",
      "Redux & Tanstack Query",
      "JWTs",
      "Paypal",
      "Visuals: Image Compression, PDFs",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB & Mongoose",
      "AWS Amazon",
      "GraphQL",
      "Multer, bcrypt",
      "xlsx files",
      "Winston",
    ],
    Other: [
      "UX/UI Design",
      "SEO",
      "Cyber Security",
      "CORS",
      "Testing",
      "Performance",
      "Sessions & JWT",
      "CI/CD",
      "PWAs",
      "Emails: MJML, Handlebars, nodemailer, react-email",
    ],
    SoftSkills: [
      "Organization",
      "Communication",
      "Problem Solving",
      "Leadership Roles",
      "Accessibility",
    ],
  };

  return (
    <CertificateContainer>
      <TopContainer>
        <h2>Skills</h2>
        <div className="tabs">
          {Object.keys(skills).map((category) => (
            <TabButton
              key={category}
              span={category}
              onClick={() => setActiveTab(category)}
              isActive={activeTab === category}
            />
          ))}
        </div>
      </TopContainer>
      <EachCaseStudyContainer>
        <ul>
          {skills[activeTab].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </EachCaseStudyContainer>
    </CertificateContainer>
  );
};

export default SkillsPage;
