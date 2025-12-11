import React from "react";
import PrimaryButton from "../../../components/Buttons/PrimaryButton.component";
import Modal from "react-modal";
import { FaGithub } from "react-icons/fa";
import {
  ModalContent,
  ModalImageWrapper,
  ModalImage,
  ModalHeader,
  ModalTitle,
  ModalLinks,
  ModalDetails,
  ModalStatusType,
  ModalStatus,
  ModalType,
  ModalSectionTitle,
  ModalList,
} from "./SelectedProject.styles";

const SelectedProject = ({ selectedProject, modalIsOpen, closeModal }) => {
  return (
    <>
      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Modal"
          style={{
            content: {
              top: "55%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              padding: 0,
              width: "100%",
              maxWidth: "900px",
              minWidth: "320px",
              height: "auto",
              maxHeight: "90vh",
              borderRadius: "25px",
              backgroundColor: "transparent",
              border: "none",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <ModalContent>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "1rem",
              }}
            >
              <PrimaryButton span="close" onClick={closeModal} />
            </div>
            {selectedProject?.img && (
              <ModalImageWrapper>
                <ModalImage
                  src={selectedProject.img}
                  alt={selectedProject.alt}
                />
              </ModalImageWrapper>
            )}
            <ModalHeader>
              {selectedProject?.title && (
                <ModalTitle>{selectedProject.title}</ModalTitle>
              )}
              <ModalLinks>
                {selectedProject?.deployed && (
                  <a
                    href={selectedProject.deployed}
                    alt="Deployed Link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VISIT LIVE SITE
                  </a>
                )}
                {selectedProject?.github && (
                  <a
                    href={selectedProject.github}
                    alt="GitHub Repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={32} style={{ color: "var(--medPink)" }} />
                  </a>
                )}
              </ModalLinks>
            </ModalHeader>
            <ModalDetails>
              <ModalStatusType>
                {selectedProject?.status !== undefined && (
                  <ModalStatus>
                    Status:{" "}
                    {selectedProject.status === true ? (
                      <span className="complete">Complete</span>
                    ) : (
                      <span className="in-progress">Under Development</span>
                    )}
                  </ModalStatus>
                )}
                {selectedProject?.type && (
                  <ModalType>{selectedProject.type}</ModalType>
                )}
              </ModalStatusType>
            </ModalDetails>
            {selectedProject?.description && (
              <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                {selectedProject.description}
              </p>
            )}
            {selectedProject?.role && (
              <p style={{ margin: "1rem 0 0.5rem 0" }}>
                <strong>Role: </strong>
                {selectedProject.role}
              </p>
            )}
            {selectedProject?.technologies && (
              <p style={{ margin: "1rem 0 0.5rem 0" }}>
                <strong>Technologies:</strong>{" "}
                {selectedProject.technologies.join(", ")}
              </p>
            )}
            {selectedProject?.keyFeatures && (
              <div style={{ margin: "1.5rem 0 0.5rem 0" }}>
                <ModalSectionTitle>Key Features:</ModalSectionTitle>
                <ModalList>
                  {selectedProject.keyFeatures.map((p, i) => (
                    <li key={i}>- {p}</li>
                  ))}
                </ModalList>
              </div>
            )}
            {selectedProject?.challenges && (
              <div style={{ margin: "1.5rem 0 0.5rem 0" }}>
                <ModalSectionTitle>Challenges:</ModalSectionTitle>
                <ModalList>
                  {selectedProject.challenges.map((p, i) => (
                    <li key={i}>- {p}</li>
                  ))}
                </ModalList>
              </div>
            )}
            {selectedProject?.futureDevelopment && (
              <div style={{ margin: "1.5rem 0 0.5rem 0" }}>
                <ModalSectionTitle>
                  Ideas for Future Development:
                </ModalSectionTitle>
                <ModalList>
                  {selectedProject.futureDevelopment.map((p, i) => (
                    <li key={i}>- {p}</li>
                  ))}
                </ModalList>
              </div>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default SelectedProject;
