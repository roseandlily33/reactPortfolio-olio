import { projectListFrontEnd } from "./ProjectLists/projectsFE";
// import { projectListGroups } from "./projectsGROUP";
import { TopContainer } from "../CaseStudies/CaseStudies.styles";
import { projectListMERN } from "./ProjectLists/projectsMERN";
import { projectListBackEnd } from "./ProjectLists/projectsBE";
import { projectListFrontEndMentor } from "./ProjectLists/projectsFEM";
import { projectListClient } from "./ProjectLists/projectsClient";
import SingleProject from "../../components/SingleProject/EachProject";
import { useState } from "react";
import SelectedProject from "./ModalForProject/SelectedProject";

import { CertificateContainer } from "../Certificates/Certificates.styles";
import TabButton from "../../components/Buttons/TabButton.component";

const tabOptions = [
  { key: "client", label: "Client Applications" },

  { key: "mern", label: "Main MERN Applications" },
  {
    key: "frontend",
    label: "Front End Projects (Coursework & Side Projects)",
  },
  {
    key: "backend",
    label: "Back End Projects (Coursework & Side Projects)",
  },
  {
    key: "mentor",
    label: "Frontend Mentor Challenges",
  },
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("client");

  const openModal = (cert) => {
    setSelectedProject(cert);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

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
        <section>
          <SingleProject projectList={projectList} openModal={openModal} />
        </section>
      </CertificateContainer>
      <SelectedProject
        selectedProject={selectedProject}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default Projects;
