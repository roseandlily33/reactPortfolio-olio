import React, { useState } from "react";
import { projectListFrontEnd } from "./ProjectLists/projectsFE.info";
import { projectListMERN } from "./ProjectLists/projectsMERN.info";
import { projectListFrontEndMentor } from "./ProjectLists/projectsFEM.info";
import { projectListClient } from "./ProjectLists/projectsClient.info";
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
        <div
          style={{
            background: "white",
            textAlign: "center",
            paddingTop: "var(--spacing-xxxl)",
            backgroundColor: "#fff",
            marginBottom: "var(--spacing-xxl)",
          }}
        >
          <h1
            style={{
              color: "var(--pink-6)",
              marginBottom: "var(--spacing-xl)",
              // color: "var(--pink-6)",
            }}
          >
            Projects
          </h1>
          <div style={{ display: 'flex', gap: 'var(--spacing-m)', justifyContent: 'center', flexWrap: 'wrap' }}>
            {tabOptions.map((tab) => (
              <TabButton
                key={tab.key}
                span={tab.label}
                onClick={() => setActiveTab(tab.key)}
                isActive={activeTab === tab.key}
              />
            ))}
          </div>
        </div>
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
