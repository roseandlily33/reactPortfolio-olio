import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { FaCode, FaDatabase, FaPaintBrush, FaCogs } from "react-icons/fa";
import { skills } from "./SkillsList";
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
} from "./SkillsList.styles";
import { FaRegStar, FaStar } from "react-icons/fa";
import StarLegend from "./Legend.component";

const SkillsList = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  return (
    <>
      <SkillsContainer>
        <h4>{activeTab}</h4>
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

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={activeTab}
            timeout={350}
            classNames="fade"
            unmountOnExit
          >
            <SkillList>
              {skills[activeTab]?.map((skill, index) => (
                <SkillItem key={index}>
                  <SkillInfo>
                    <p className="skill-icon">{skill?.icon}</p>
                    <p className="skill-name">{skill?.name}</p>
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
          </CSSTransition>
        </SwitchTransition>
      </SkillsContainer>
    </>
  );
};

export default SkillsList;
