import React, { useState } from "react";
import { projectListFrontEnd } from "./ProjectLists/projectsFE";
import { TopContainer } from "../CaseStudies/CaseStudies.styles";
import { projectListMERN } from "./ProjectLists/projectsMERN";
import { projectListFrontEndMentor } from "./ProjectLists/projectsFEM";
import { projectListClient } from "./ProjectLists/projectsClient";
import { CertificateContainer } from "../Certificates/Certificates.styles";
import TabButton from "../../components/Buttons/TabButton/TabButton.component";
import ProjectCard from "../../components/Cards/ProjectCard/ProjectCard.component";
import { CardsBackground } from "../../components/Cards/CardsBackground.styles";

const tabOptions = [
  { key: "client", label: "Client" },

  { key: "mern", label: "Main MERN " },
  {
    key: "frontend",
    label: "Front End ",
  },
  {
    key: "mentor",
    label: "Frontend Mentor Challenges",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("client");

  let projectList;
  switch (activeTab) {
    case "mern":
      projectList = projectListMERN;
      break;
    case "client":
      projectList = projectListClient;
      break;
    case "frontend":
      projectList = projectListFrontEnd;
      break;
    case "mentor":
      projectList = projectListFrontEndMentor;
      break;
    default:
      projectList = [];
  }

  return (
    <>
      <CertificateContainer>
        <TopContainer>
          <h2>Projects</h2>
          <div className="tabs">
            {tabOptions.map((tab) => (
              <TabButton
                key={tab.key}
                span={tab.label}
                onClick={() => setActiveTab(tab.key)}
                isActive={activeTab === tab.key}
              />
            ))}
          </div>
        </TopContainer>
        <CardsBackground>
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardsBackground>
      </CertificateContainer>
    </>
  );
};

export default Projects;
