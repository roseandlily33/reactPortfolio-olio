import React from "react";
import {
    ProjectCardContainer,
    ProjectImage,
    ProjectTitle,
    TypeBadge
} from "../ProjectCard/ProjectCard.styles";

const CertificateCard = ({ cert, openModal }) => {
    return (
        <ProjectCardContainer key={cert?.id} onClick={() => openModal(cert)}>
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
            <ProjectImage
                src={cert?.photo}
                alt={cert?.title}
                style={{ objectFit: "contain", background: "#fff", minHeight: 140, maxHeight: 140 }}
            />
            <ProjectTitle style={{ textAlign: "center", width: "100%" }}>{cert?.title}</ProjectTitle>
            <TypeBadge style={{ marginBottom: "0.3em" }}>{cert?.provider}</TypeBadge>
            <span
                className="certificate-date"
                style={{
                    fontSize: "1.01rem",
                    fontFamily: "var(--headerFont)",
                    fontWeight: 500,
                    marginTop: "0.1em",
                    marginBottom: "var(--spacing-xs)",
                    display: "inline-block",
                }}
            >
                {cert?.date}
            </span>
        </ProjectCardContainer>
    );
};

export default CertificateCard;
