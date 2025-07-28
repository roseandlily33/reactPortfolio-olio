import { projectListFrontEnd } from "./projectsFE";
import { projectListGroups } from "./projectsGROUP";
import { TopContainer } from "../CaseStudies/CaseStudies.styles";
import PrimaryButton from "../../components/Buttons/PrimaryButton.component";
import { projectListMERN } from "./projectsMERN";
import { projectListBackEnd } from "./projectsBE";
import { projectListFrontEndMentor } from "./projectsFEM";
import SingleProject from "../../components/SingleProject/EachProject";
import { useState } from "react";
import Modal from "react-modal";
import GithubIcon from "../../images/icons8-github-bubbles/icons8-github-50.png";
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
      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Certificate Modal"
          style={{
            content: {
              top: "55%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              padding: "2rem",
              width: "90%",
              height: "90%",
              borderRadius: "25px",
              backgroundColor: "var(--lightCream)",
              border: "none",
            },
          }}
        >
          <PrimaryButton span="close" onClick={closeModal} />
          <img
            src={selectedProject?.img}
            alt={selectedProject?.alt}
            style={{ width: "100%", padding: "2rem" }}
          />
          <h3 style={{ color: "var(--darkPink)" }}>{selectedProject?.title}</h3>
          <h5 className="bold" style={{ marginTop: "1rem" }}>
            Status:{" "}
            {selectedProject?.status === true ? (
              <span style={{ color: "#5CB85C" }}>Complete</span>
            ) : (
              <span style={{ color: "#e6b607" }}>Under Development</span>
            )}
          </h5>
          <h6>{selectedProject?.type}</h6>
          <p style={{ marginTop: "1rem" }}>{selectedProject?.description}</p>
          <p style={{ marginTop: "1rem" }}>
            Technologies: {selectedProject?.technologies?.map((t) => t + ", ")}{" "}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <a
              href={selectedProject?.deployed}
              alt="Deployed Link"
              style={{ color: "var(--medBrown)" }}
            >
              VISIT LIVE SITE
            </a>
            <img src={GithubIcon} alt="Link to github repo" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Projects;
