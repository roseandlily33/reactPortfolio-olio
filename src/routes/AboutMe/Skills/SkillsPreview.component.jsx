import React from "react";
import { skills } from "../../Skills/SkillsList.jsx";
import {
  SkillsPreviewSection,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
} from "./SkillsPreview.styles";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../../components/Buttons/SecondaryButton/SecondaryButton.jsx";

const getTopSkills = () => {
  return [
    ...skills.Frontend.filter((s) => s.top),
    ...skills.Backend.filter((s) => s.top),
    ...skills.Other.filter((s) => s.top),
    ...skills.SoftSkills.filter((s) => s.top),
  ];
};

const SkillsPreview = () => {
  const navigate = useNavigate();
  const topSkills = getTopSkills();

  return (
    <SkillsPreviewSection>
      <h4>Top Skills</h4>
      <SkillsGrid>
        {topSkills.map((skill, idx) => (
          <SkillCard key={skill.name + idx}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
      <SecondaryButton onClick={() => navigate("/Skills")} span={"See My Skills →"} />
    </SkillsPreviewSection>
  );
};

export default SkillsPreview;
