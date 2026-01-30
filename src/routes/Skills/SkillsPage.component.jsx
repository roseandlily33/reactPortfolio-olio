import React, { useState } from "react";
import { FaCode, FaDatabase, FaPaintBrush, FaCogs } from "react-icons/fa";
import { CertificateContainer } from "../Certificates/Certificates.styles";
import {
  TopContainer,
} from "../CaseStudies/CaseStudies.styles";
import StarLegend from "./Legend.component";
import {
  SkillList,
  SkillItem,
  SkillInfo,
  SkillRating,
  SkillsTabsLegendCard,
  TabsPillRow,
  PillTab,
  StarLegendCard,
  SkillsContainer,
} from "./SkillsPage.styles";
import { FaRegStar, FaStar } from "react-icons/fa";
import BackToTopButton from "../../components/BackToTop/BackToTop.button";


import TechStack from "./TechStack.component";
import { skills } from "./SkillsList";

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  // Category icon mapping
  const categoryIcons = {
    Frontend: <FaCode className="category-bg-icon" />,
    Backend: <FaDatabase className="category-bg-icon" />,
    Design: <FaPaintBrush className="category-bg-icon" />,
    Other: <FaCogs className="category-bg-icon" />,
    SoftSkills: <FaCogs className="category-bg-icon" />,
  };

  return (
    <CertificateContainer>
      <TopContainer>
        <h2>Skills</h2>
      </TopContainer>
      <TechStack />

      <SkillsContainer>
        <SkillsTabsLegendCard>
          <TabsPillRow>
            {Object.keys(skills)?.map((category) => {
              let icon = <FaCogs />;
              if (category.toLowerCase().includes("front")) icon = <FaCode />;
              else if (category.toLowerCase().includes("back"))
                icon = <FaDatabase />;
              else if (category.toLowerCase().includes("design"))
                icon = <FaPaintBrush />;
              return (
                <PillTab
                  key={category}
                  className={activeTab === category ? "activeTab" : ""}
                  onClick={() => setActiveTab(category)}
                >
                  {icon}
                  <span>{category}</span>
                </PillTab>
              );
            })}
          </TabsPillRow>
          <StarLegendCard>
            <StarLegend />
          </StarLegendCard>
        </SkillsTabsLegendCard>

        <div className="category-bg-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'var(--spacing-m)' }}>
          {categoryIcons[activeTab]}
          <span style={{ fontWeight: 700, fontSize: '1.3rem', color: 'var(--pink-5)' }}>{activeTab}</span>
        </div>
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
                  i < skill?.rating ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} />
                  ),
                )}
              </SkillRating>
            </SkillItem>
          ))}
        </SkillList>
      </SkillsContainer>
      <BackToTopButton />
    </CertificateContainer>
  );
};

export default SkillsPage;
