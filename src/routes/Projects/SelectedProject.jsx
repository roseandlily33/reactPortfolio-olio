import React from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton.component";
import Modal from "react-modal";
import { FaGithub } from "react-icons/fa"; // Use react-icons for GitHub

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
              padding: "2rem",
              width: "100%",
              maxWidth: "900px",
              minWidth: "320px",
              height: "auto",
              maxHeight: "90vh",
              borderRadius: "25px",
              backgroundColor: "var(--lightCream)",
              border: "none",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
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
            <img
              src={selectedProject.img}
              alt={selectedProject.alt}
              style={{
                width: "100%",
                maxWidth: "800px",
                minWidth: "220px",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "2px 4px 12px rgba(0,0,0,0.12)",
                marginBottom: "1.5rem",
                objectFit: "contain",
              }}
            />
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            {selectedProject?.title && (
              <div>
                <h3 style={{ color: "var(--darkPink)", margin: 0 }}>
                  {selectedProject.title}
                </h3>
              </div>
            )}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              {selectedProject?.deployed && (
                <a
                  href={selectedProject.deployed}
                  alt="Deployed Link"
                  style={{ color: "var(--medBrown)", fontWeight: "bold" }}
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
            </div>
          </div>
          {selectedProject?.status !== undefined && (
            <h5 className="bold" style={{ marginTop: "1rem", marginBottom: 0 }}>
              Status:{" "}
              {selectedProject.status === true ? (
                <span style={{ color: "#5CB85C" }}>Complete</span>
              ) : (
                <span style={{ color: "#e6b607" }}>Under Development</span>
              )}
            </h5>
          )}
          {selectedProject?.type && (
            <h6 style={{ margin: "0.5rem 0" }}>{selectedProject.type}</h6>
          )}
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
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Key Features: </strong>
              </p>
              <ul style={{ marginTop: 0 }}>
                {selectedProject.keyFeatures.map((p, i) => (
                  <li key={i} style={{ fontSize: "1rem" }}>
                    - {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedProject?.challenges && (
            <div style={{ margin: "1.5rem 0 0.5rem 0" }}>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Challenges: </strong>
              </p>
              <ul style={{ marginTop: 0 }}>
                {selectedProject.challenges.map((p, i) => (
                  <li key={i} style={{ fontSize: "1rem" }}>
                    - {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedProject?.futureDevelopment && (
            <div style={{ margin: "1.5rem 0 0.5rem 0" }}>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Ideas for Future Development: </strong>
              </p>
              <ul style={{ marginTop: 0 }}>
                {selectedProject.futureDevelopment.map((p, i) => (
                  <li key={i} style={{ fontSize: "1rem" }}>
                    - {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default SelectedProject;
