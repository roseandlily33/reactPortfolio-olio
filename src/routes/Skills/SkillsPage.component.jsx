import React, { useState } from "react";
import { CertificateContainer } from "../Certificates/Certificates.styles";
import {
  TopContainer,
  EachCaseStudyContainer,
} from "../CaseStudies/CaseStudies.styles";
import TabButton from "../../components/Buttons/TabButton.component";
import StarLegend from "./Legend.component";
import {
  SkillList,
  SkillItem,
  SkillInfo,
  SkillRating,
} from "./SkillsPage.styles";
import {
  FaReact,
  FaUniversalAccess,
  FaNodeJs,
  FaRegStar,
  FaAws,
  FaHtml5,
  FaStar,
  FaCss3Alt,
  FaPaypal,
  FaRegFileExcel,
} from "react-icons/fa";
import {
  SiRedux,
  SiGraphql,
  SiExpress,
  SiStyledcomponents,
  SiMongodb,
  SiMysql,
  SiGatsby,
  SiTestinglibrary,
  SiJavascript,
} from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import TechStack from "./TechStack.component";

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const skills = {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 />, rating: 3 },
      { name: "CSS", icon: <FaCss3Alt />, rating: 3 },
      {
        name: "CSS Libraries: Bootstrap, Styled Components, Pure.css",
        icon: <SiStyledcomponents />,
        rating: 3,
      },
      { name: "Responsive Design", icon: <FaRegStar />, rating: 3 },
      { name: "JavaScript", icon: <SiJavascript />, rating: 3 },
      { name: "APIs", icon: <FaRegStar />, rating: 3 },
      { name: "React", icon: <FaReact />, rating: 3 },
      { name: "Next.js", icon: <RiNextjsFill />, rating: 1 },
      { name: "Redux & Tanstack Query", icon: <SiRedux />, rating: 2 },
      { name: "JWTs", icon: <FaRegStar />, rating: 2 },
      { name: "Paypal", icon: <FaPaypal />, rating: 2 },
      { name: "Gatsby", icon: <SiGatsby />, rating: 1 },
      {
        name: "Visuals: Image Compression, PDFs",
        icon: <FaRegStar />,
        rating: 2,
      },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs />, rating: 3 },
      { name: "Express.js", icon: <SiExpress />, rating: 3 },
      { name: "MySQL", icon: <SiMysql />, rating: 2 },
      { name: "MongoDB & Mongoose", icon: <SiMongodb />, rating: 3 },
      { name: "AWS Amazon", icon: <FaAws />, rating: 2 },
      { name: "GraphQL", icon: <SiGraphql />, rating: 1 },
      { name: "Multer", icon: <FaNodeJs />, rating: 2 },
      { name: "Bcrypt", icon: <FaNodeJs />, rating: 2 },
      { name: "xlsx files", icon: <FaRegFileExcel />, rating: 1 },
      { name: "Winston", icon: <FaNodeJs />, rating: 1 },
      { name: "Database Design", icon: <FaRegStar />, rating: 2 },
    ],
    Other: [
      { name: "UX/UI Design", icon: <FaRegStar />, rating: 3 },
      { name: "SEO", icon: <FaRegStar />, rating: 2 },
      { name: "Cyber Security", icon: <FaRegStar />, rating: 2 },
      { name: "CORS", icon: <FaRegStar />, rating: 1 },
      { name: "Testing", icon: <SiTestinglibrary />, rating: 1 },
      { name: "Performance", icon: <FaRegStar />, rating: 1 },
      { name: "Sessions & JWT", icon: <FaRegStar />, rating: 1 },
      { name: "CI/CD", icon: <FaRegStar />, rating: 1 },
      { name: "PWAs", icon: <FaRegStar />, rating: 1 },
      {
        name: "Emails: MJML, Handlebars, nodemailer, react-email",
        icon: <MdAlternateEmail />,
        rating: 3,
      },
    ],
    SoftSkills: [
      { name: "Organization", icon: <FaRegStar />, rating: 3 },
      { name: "Communication", icon: <FaRegStar />, rating: 2 },
      { name: "Problem Solving", icon: <FaRegStar />, rating: 3 },
      { name: "Leadership Roles", icon: <FaRegStar />, rating: 2 },
      { name: "Accessibility", icon: <FaUniversalAccess />, rating: 2 },
    ],
  };

  return (
    <CertificateContainer>
      <TopContainer>
        <h2>Skills</h2>

        <div className="tabs">
          {Object.keys(skills)?.map((category) => (
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
        <StarLegend />
        <SkillList>
          {skills[activeTab]?.map((skill, index) => (
            <SkillItem key={index}>
              <SkillInfo>
                <p className="skill-icon">
                  {skill?.icon}
                  <span className="skill-name">{skill?.name}</span>
                </p>
              </SkillInfo>
              <SkillRating>
                {[...Array(3)]?.map((_, i) =>
                  i < skill?.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </SkillRating>
            </SkillItem>
          ))}
        </SkillList>
        <TechStack />
      </EachCaseStudyContainer>
    </CertificateContainer>
  );
};

export default SkillsPage;
