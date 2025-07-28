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
import { FaRegStar, FaStar } from "react-icons/fa";

import TechStack from "./TechStack.component";
import { skills } from "./SkillsList";

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

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
