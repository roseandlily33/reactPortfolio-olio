import React, { useState } from "react";
import {
  FaTools,
  FaStar,
  FaPuzzlePiece,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { projectListMERN } from "../Projects/ProjectLists/projectsMERN.info.jsx";
import { projectListBackEnd } from "../Projects/ProjectLists/projectsBE.info.jsx";
import { projectListFrontEnd } from "../Projects/ProjectLists/projectsFE.info.jsx";
import { projectListFrontEndMentor } from "../Projects/ProjectLists/projectsFEM.info.jsx";
import { projectListClient } from "../Projects/ProjectLists/projectsClient.info.jsx";
import {
  ProjectDetailContainer,
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
  ProjectDetailsContainer,
  ProjectTabBar,
} from "./Project.styles.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component.jsx";

const Project = () => {
  const { id } = useParams();
  const allProjects = [
    ...projectListMERN,
    ...projectListBackEnd,
    ...projectListFrontEndMentor,
    ...projectListClient,
    ...projectListFrontEnd,
  ];
  const CaseStudies = {
    "YODA Safety Services": "/CaseStudies/YodaCaseStudy",
    "Ariel Boesener Performance Horses": "/CaseStudies/Ariel",
  };

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
      show: !!project?.technologies,
    },
    {
      key: "keyFeatures",
      label: "Key Features",
      show: !!project?.keyFeatures,
    },
    {
      key: "challenges",
      label: "Challenges",
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
      <Breadcrumbs
        prev="Projects"
        prevLink="/Projects"
        current={project?.title}
      />
      <ProjectDetailHeader>
        <h1>{project?.title}</h1>
        <ProjectDetailsContainer>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <ProjectDetailStatus>
              {project.important && (
                <span className="featured-badge" aria-label="Featured Project">
                  Featured
                </span>
              )}
              <span
                className={
                  "status-badge " +
                  (project?.status === true ? "complete" : "in-progress")
                }
              >
                {project?.status === true ? "Complete" : "Under Development"}
              </span>
              {project?.type && (
                <ProjectDetailType>{project?.type}</ProjectDetailType>
              )}
            </ProjectDetailStatus>
          </div>
          <div className="project-detail-links">
            {project?.deployed && (
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                <FaExternalLinkAlt
                  style={{ marginRight: 5, fontSize: "1em" }}
                />
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
            {project?.designUrl && (
              <a
                href={project?.designUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                <FaExternalLinkAlt
                  style={{ marginRight: 5, fontSize: "1em" }}
                />
                Design Url
              </a>
            )}
            {CaseStudies[project?.title] && (
              <a
                href={CaseStudies[project?.title]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                <FaExternalLinkAlt
                  style={{ marginRight: 5, fontSize: "1em" }}
                />
                Case Study
              </a>
            )}
          </div>
        </ProjectDetailsContainer>
      </ProjectDetailHeader>
      <ProjectDetailMain>
        <ProjectDetailImageWrapper>
          <ProjectDetailImage
            src={project?.img}
            alt={project?.alt || project?.title}
          />
        </ProjectDetailImageWrapper>
        <ProjectDetailInfo>
          <p style={{ fontWeight: "500" }}>{project?.year}</p>
          <ProjectDetailStatusType>
            {CaseStudies[project?.title] && (
              <p style={{ color: "var(--orange-6)" }}>
                See case study for more information about goals, process, and
                outcomes.
              </p>
            )}
          </ProjectDetailStatusType>
          <ProjectDetailDescription>
            {project.description}
          </ProjectDetailDescription>

          {project.role && (
            <ProjectDetailRole>
              <strong>Role:</strong> {project.role}
            </ProjectDetailRole>
          )}
          {project?.testimonial && (
            <ProjectTestimonial>
              <strong>Testimonial:</strong> {project?.testimonial}
            </ProjectTestimonial>
          )}
          {project?.school && (
            <ProjectDetailRole>
              This project was developed as part of my coursework.
            </ProjectDetailRole>
          )}
        </ProjectDetailInfo>
      </ProjectDetailMain>
      {/* Tab Buttons */}
      {visibleTabs.length > 0 && (
        <ProjectTabBar>
          {visibleTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={activeTab === tab.key ? "active" : ""}
            >
              {tab.label}
            </button>
          ))}
        </ProjectTabBar>
      )}
      {/* Tab Content */}
      {activeTab === "technologies" && project?.technologies && (
        <ProjectDetailSection>
          <ProjectDetailSectionTitle>Technologies:</ProjectDetailSectionTitle>
          {Object.entries(project.technologies).map(([category, techs]) =>
            techs && techs.length > 0 ? (
              <div key={category} style={{ marginBottom: "0.7em" }}>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--pink-6)",
                    fontSize: "1.05em",
                    marginBottom: "var(--spacing-xxs) ",
                    textTransform: "capitalize",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-xxs)",
                  }}
                >
                  {category === "frontend" && (
                    <FaTools
                      style={{
                        color: "var(--pink-7)",
                        marginRight: "var(--spacing-s)",
                      }}
                      title="Frontend"
                    />
                  )}
                  {category === "backend" && (
                    <FaPuzzlePiece
                      style={{
                        color: "var(--pink-7)",
                        marginRight: "var(--spacing-s)",
                      }}
                      title="Backend"
                    />
                  )}
                  {category === "extra" && (
                    <FaStar
                      style={{
                        color: "var(--pink-7)",
                        marginRight: "var(--spacing-s)",
                      }}
                      title="Extra"
                    />
                  )}
                  {category}
                </div>
                <ProjectDetailList>
                  {techs?.map((tech, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--spacing-xxs)",
                      }}
                    >
                      <span style={{ fontWeight: 500 }}>{tech}</span>
                    </li>
                  ))}
                </ProjectDetailList>
              </div>
            ) : null,
          )}
        </ProjectDetailSection>
      )}
      {activeTab === "keyFeatures" && project?.keyFeatures && (
        <ProjectDetailSection>
          <ProjectDetailSectionTitle>Key Features:</ProjectDetailSectionTitle>
          <ProjectDetailList>
            {project?.keyFeatures.map((feature, idx) => (
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
