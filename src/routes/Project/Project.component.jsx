import React, { useState } from "react";
import {
  FaTools,
  FaStar,
  FaPuzzlePiece,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { projectListMERN } from "../Projects/ProjectLists/projectsMERN";
import { projectListBackEnd } from "../Projects/ProjectLists/projectsBE";
import { projectListFrontEnd } from "../Projects/ProjectLists/projectsFE";
import { projectListFrontEndMentor } from "../Projects/ProjectLists/projectsFEM";
import { projectListClient } from "../Projects/ProjectLists/projectsClient";
import {
  ProjectDetailContainer,
  ProjectBreadcrumbs,
  ProjectDetailHeader,
  ProjectDetailMain,
  ProjectDetailImageWrapper,
  ProjectDetailImage,
  ProjectDetailInfo,
  ProjectDetailStatusType,
  ProjectDetailStatus,
  ProjectDetailType,
  ProjectDetailDescription,
  ProjectDetailRole,
  ProjectDetailSection,
  ProjectDetailSectionTitle,
  ProjectDetailList,
  ProjectTestimonial,
} from "./Project.styles.jsx";

const Project = () => {
  const { id } = useParams();
  const allProjects = [
    ...projectListMERN,
    ...projectListBackEnd,
    ...projectListFrontEndMentor,
    ...projectListClient,
    ...projectListFrontEnd,
  ];

  // Try to find by id or by title (case-insensitive)
  const project =
    allProjects.find((proj) => proj.id?.toString() === id) ||
    allProjects.find(
      (proj) =>
        proj.title?.toLowerCase().replace(/\s+/g, "-") === id?.toLowerCase(),
    );

  // Tab system for Technologies, Key Features, Challenges
  const tabOptions = [
    {
      key: "technologies",
      label: "Technologies",
      icon: <FaTools style={{ marginRight: 6, verticalAlign: "middle" }} />,
      show: !!project?.technologies,
    },
    {
      key: "keyFeatures",
      label: "Key Features",
      icon: <FaStar style={{ marginRight: 6, verticalAlign: "middle" }} />,
      show: !!project?.keyFeatures,
    },
    {
      key: "challenges",
      label: "Challenges",
      icon: (
        <FaPuzzlePiece style={{ marginRight: 6, verticalAlign: "middle" }} />
      ),
      show: !!project?.challenges,
    },
  ];
  const visibleTabs = tabOptions.filter((tab) => tab.show);
  const [activeTab, setActiveTab] = useState(
    visibleTabs[0]?.key || "technologies",
  );

  if (!project) {
    return (
      <ProjectDetailContainer>
        <h1>Project not found</h1>
      </ProjectDetailContainer>
    );
  }

  return (
    <ProjectDetailContainer>
      <ProjectBreadcrumbs aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span>&gt;</span>
        <a href="/projects">Projects</a>
        <span>&gt;</span>
        <span>{project?.title ?? "Project"}</span>
      </ProjectBreadcrumbs>
      <ProjectDetailHeader>
        <h1>
          {project?.title}
          {project.important && (
            <span className="featured-badge" aria-label="Featured Project">
              ★ Featured
            </span>
          )}
        </h1>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <ProjectDetailStatus>
            Status:{" "}
            {project?.status === true ? (
              <span className="complete">Complete</span>
            ) : (
              <span className="in-progress">Under Development</span>
            )}
          </ProjectDetailStatus>
          <p style={{ fontWeight: "400" }}>{project?.year}</p>
          {project?.type && (
            <ProjectDetailType>{project?.type}</ProjectDetailType>
          )}
        </div>
        <div className="project-detail-links">
          {project?.deployed && (
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <FaExternalLinkAlt style={{ marginRight: 5, fontSize: "1em" }} />
              Live Site
            </a>
          )}
          {project?.github && (
            <a
              href={project?.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <FaGithub style={{ marginRight: 5, fontSize: "1.1em" }} />
              GitHub
            </a>
          )}
        </div>
      </ProjectDetailHeader>
      <ProjectDetailMain>
        <ProjectDetailImageWrapper>
          <ProjectDetailImage
            src={project?.img}
            alt={project?.alt || project?.title}
          />
        </ProjectDetailImageWrapper>
        <ProjectDetailInfo>
          <ProjectDetailStatusType></ProjectDetailStatusType>
          <ProjectDetailDescription>
            {project.description}
          </ProjectDetailDescription>
          {project.role && (
            <ProjectDetailRole>
              <strong>Role:</strong> {project.role}
            </ProjectDetailRole>
          )}
          {project?.testimonial && (
            <ProjectTestimonial>{project?.testimonial}</ProjectTestimonial>
          )}
        </ProjectDetailInfo>
      </ProjectDetailMain>
      {/* Tab Buttons */}
      {visibleTabs.length > 0 && (
        <div
          style={{
            margin: "1.5rem 0 0.5rem 0",
            display: "flex",
            gap: "1rem",
          }}
        >
          {visibleTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                background:
                  activeTab === tab.key ? "var(--medPink)" : "#f8f8f8",
                color: activeTab === tab.key ? "#fff" : "var(--darkPink)",
                border: "none",
                borderRadius: "999px",
                padding: "0.4em 1.3em",
                fontWeight: 600,
                fontSize: "1.05rem",
                boxShadow:
                  activeTab === tab.key
                    ? "0 2px 8px rgba(241, 116, 150, 0.12)"
                    : "none",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
              // aria-selected removed for lint compliance
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      )}
      {/* Tab Content */}
      {activeTab === "technologies" && project?.technologies && (
        <ProjectDetailSection>
          <ProjectDetailSectionTitle>Technologies:</ProjectDetailSectionTitle>
          <ProjectDetailList>
            {project.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ProjectDetailList>
        </ProjectDetailSection>
      )}
      {activeTab === "keyFeatures" && project?.keyFeatures && (
        <ProjectDetailSection>
          <ProjectDetailSectionTitle>Key Features:</ProjectDetailSectionTitle>
          <ProjectDetailList>
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ProjectDetailList>
        </ProjectDetailSection>
      )}
      {activeTab === "challenges" && project?.challenges && (
        <ProjectDetailSection>
          <ProjectDetailSectionTitle>Challenges:</ProjectDetailSectionTitle>
          <ProjectDetailList>
            {project.challenges.map((challenge, idx) => (
              <li key={idx}>{challenge}</li>
            ))}
          </ProjectDetailList>
        </ProjectDetailSection>
      )}
      {/* Future Development remains below tabs */}
      {project.futureDevelopment && (
        <ProjectDetailSection>
          <ProjectDetailSectionTitle>
            Ideas for Future Development:
          </ProjectDetailSectionTitle>
          <ProjectDetailList>
            {project.futureDevelopment.map((idea, idx) => (
              <li key={idx}>{idea}</li>
            ))}
          </ProjectDetailList>
        </ProjectDetailSection>
      )}
    </ProjectDetailContainer>
  );
};

export default Project;
