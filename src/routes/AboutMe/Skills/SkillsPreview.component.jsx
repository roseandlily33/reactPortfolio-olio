import React from "react";
import { skills } from "../../Skills/SkillsList.jsx";
import {
  SkillsPreviewSection,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  SeeSkillsButton,
} from "./SkillsPreview.styles";
import { useNavigate } from "react-router-dom";

const getTopSkills = () => {
  // Get top 3 from Frontend, Backend, Other, SoftSkills (rating 3)
  const topFrontend = skills.Frontend.filter((s) => s.rating === 3).slice(0, 3);
  const topBackend = skills.Backend.filter((s) => s.rating === 3).slice(0, 2);
  const topOther = skills.Other.filter((s) => s.rating === 3).slice(0, 1);
  const topSoft = skills.SoftSkills.filter((s) => s.rating === 3).slice(0, 2);
  return [...topFrontend, ...topBackend, ...topOther, ...topSoft];
};

const SkillsPreview = () => {
  const navigate = useNavigate();
  const topSkills = getTopSkills();

  return (
    <SkillsPreviewSection>
      <h2>Top Skills</h2>
      <SkillsGrid>
        {topSkills.map((skill, idx) => (
          <SkillCard key={skill.name + idx}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
      <SeeSkillsButton onClick={() => navigate("/Skills")}>
        See My Skills &rarr;
      </SeeSkillsButton>
    </SkillsPreviewSection>
  );
};

export default SkillsPreview;
