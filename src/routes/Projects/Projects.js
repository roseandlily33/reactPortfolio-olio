import { projectListFrontEnd } from "./projectsFE";
// import { projectListGroups } from "./projectsGROUP";
import { TopContainer } from "../CaseStudies/CaseStudies.styles";
import { projectListMERN } from "./projectsMERN";
import { projectListBackEnd } from "./projectsBE";
import { projectListFrontEndMentor } from "./projectsFEM";
import SingleProject from "../../components/SingleProject/EachProject";
import { useState } from "react";
import SelectedProject from "./SelectedProject";

import { CertificateContainer } from "../Certificates/Certificates.styles";
import TabButton from "../../components/Buttons/TabButton.component";

const tabOptions = [
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
  const [activeTab, setActiveTab] = useState("mern");

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
