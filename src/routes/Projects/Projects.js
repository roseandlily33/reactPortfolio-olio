import React, { useState } from "react";
import { projectListFrontEnd } from "./ProjectLists/projectsFE";
// import { projectListGroups } from "./projectsGROUP";
import { TopContainer } from "../CaseStudies/CaseStudies.styles";
import { projectListMERN } from "./ProjectLists/projectsMERN";
import { projectListBackEnd } from "./ProjectLists/projectsBE";
import { projectListFrontEndMentor } from "./ProjectLists/projectsFEM";
import { projectListClient } from "./ProjectLists/projectsClient";
import SingleProject from "../../components/SingleProject/EachProject";
import { CertificateContainer } from "../Certificates/Certificates.styles";
import TabButton from "../../components/Buttons/TabButton.component";

const tabOptions = [
  { key: "client", label: "Client" },

  { key: "mern", label: "Main MERN " },
  {
    key: "frontend",
    label: "Front End ",
  },
  {
    key: "backend",
    label: "Back End ",
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
    case "backend":
      projectList = projectListBackEnd;
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
          <SingleProject projectList={projectList} />
      </CertificateContainer>
    </>
  );
};

export default Projects;
