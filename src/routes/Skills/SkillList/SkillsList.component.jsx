import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { FaCode, FaDatabase, FaPaintBrush, FaCogs } from "react-icons/fa";
import { skills } from "./SkillsList.info";
import {
  SkillList,
  SkillItem,
  SkillInfo,
  SkillRating,
  SkillsTabsLegendCard,
  PillTab,
  SkillsContainer,
  SkillsSplitLayout,
  SkillsTabsColumn,
} from "./SkillsList.styles";


const SkillsList = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  return (
    <>
      <SkillsContainer>
        <h4>{activeTab}</h4>
        <SkillsSplitLayout>
          <SkillsTabsColumn>
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
                  style={{ width: '100%', marginBottom: '0.5em' }}
                >
                  {icon}
                  <span>{category}</span>
                </PillTab>
              );
            })}
          </SkillsTabsColumn>
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
                      <span className="skill-icon">{skill?.icon}</span>
                      <span className="skill-name">{skill?.name}</span>
                    </SkillInfo>
                    <SkillRating>
                      {[...Array(3)].map((_, i) => (
                        <span
                          key={i}
                          style={{
                            display: 'inline-block',
                            width: '0.85em',
                            height: '0.85em',
                            borderRadius: '50%',
                            margin: '0 0.13em',
                            background: i < skill?.rating ? 'var(--pink-5)' : 'var(--grey-3)',
                            opacity: i < skill?.rating ? 1 : 0.45,
                            transition: 'background 0.2s',
                          }}
                        />
                      ))}
                    </SkillRating>
                  </SkillItem>
                ))}
              </SkillList>
            </CSSTransition>
          </SwitchTransition>
        </SkillsSplitLayout>
      </SkillsContainer>
    </>
  );
};

export default SkillsList;
