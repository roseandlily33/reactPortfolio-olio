import React from "react";
import {
  ProjectCard,
  EntityContainer,
} from "../../components/SingleProject/EachProject.styles";

const CertificateList = ({ openModal, CertList, selectedTag }) => {
  return (
    <EntityContainer>
      {CertList?.filter(
        (cert) => selectedTag === "" || cert?.tags?.includes(selectedTag),
      )?.map((cert) => {
        return (
          <ProjectCard
            key={cert?.id}
            onClick={() => openModal(cert)}
            style={{
              minHeight: 220,
              maxHeight: 420,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            {cert?.important && (
              <div className="important-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-label="important star"
                  focusable="false"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            )}
            <div
              className="project-image-wrapper certificate-image-wrapper"
              style={{
                width: '100%',
                height: 210,
                minHeight: 210,
                maxHeight: 210,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                borderTopRightRadius: 22,
                borderTopLeftRadius: 22,
                borderBottom: '1px solid #f7e6ed',
                transition: 'border-radius 0.2s, height 0.2s',
                overflow: 'hidden',
              }}
            >
              <img
                src={cert?.photo}
                alt={cert?.title}
                style={{
                  objectFit: 'contain',
                  background: '#fff',
                  width: '100%',
                  height: '100%',
                  maxHeight: 210,
                  minHeight: 210,
                  borderTopRightRadius: 22,
                  borderTopLeftRadius: 22,
                  transition: 'filter 0.5s',
                }}
              />
            </div>
            <div
              className="project-details"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flex: 1,
                width: '100%',
                padding: '1rem 1.2rem 0.7rem 1.2rem',
                gap: '0.3rem',
                minHeight: 0,
                overflow: 'hidden',
              }}
            >
              <h5
                style={{
                  fontFamily: "var(--headerFont)",
                  color: "var(--darkPink)",
                  fontWeight: 700,
                  margin: "0 0 0.7rem 0",
                  letterSpacing: "0.01em",
                  width: "100%",
                }}
              >
                {cert?.title}
              </h5>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: 'center'
                }}
              >
                <span
                  className="certificate-provider"
                  style={{
                    fontSize: "1.08rem",
                    color: "var(--medPink)",
                    fontWeight: 700,
                    fontFamily: "var(--headerFont)",
                    background: "rgba(241, 116, 150, 0.08)",
                    borderRadius: "999px",
                    padding: "0.18em 1.1em",
                    letterSpacing: "0.01em",
                    minWidth: 110,
                    textAlign: "center",
                    lineHeight: 1.2,
                    marginBottom: "0.2em",
                    display: "inline-block",
                  }}
                >
                  {cert?.provider}
                </span>
                <span
                  className="certificate-date"
                  style={{
                    fontSize: "1.01rem",
                    fontFamily: "var(--headerFont)",
                    fontWeight: 500,
                    marginTop: "0.1em",
                    marginBottom: "0.2em",
                    display: "inline-block",
                  }}
                >
                  {cert?.date}
                </span>
              </div>
            </div>
          </ProjectCard>
        );
      })}
    </EntityContainer>
  );
};

export default CertificateList;
