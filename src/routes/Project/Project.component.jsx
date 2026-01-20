import React from "react";
import { useParams } from "react-router-dom";
import { projectListMERN } from "../Projects/ProjectLists/projectsMERN";
import { projectListBackEnd } from "../Projects/ProjectLists/projectsBE";
import { projectListFrontEndMentor } from "../Projects/ProjectLists/projectsFEM";
import { projectListClient } from "../Projects/ProjectLists/projectsClient";
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
  ProjectDetailImportant,
  ProjectDetailDescription,
  ProjectDetailRole,
  ProjectDetailTech,
  ProjectDetailSection,
  ProjectDetailSectionTitle,
  ProjectDetailList,
} from "./Project.styles.jsx";

const Project = () => {
  const { id } = useParams();
  const allProjects = [
    ...projectListMERN,
    ...projectListBackEnd,
    ...projectListFrontEndMentor,
    ...projectListClient,
  ];

  // Try to find by id or by title (case-insensitive)
  const project =
    allProjects.find((proj) => proj.id?.toString() === id) ||
    allProjects.find(
      (proj) =>
        proj.title?.toLowerCase().replace(/\s+/g, "-") === id?.toLowerCase(),
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
      <ProjectDetailHeader>
        <h1>{project.title}</h1>
        <div className="project-detail-links">
          {project.deployed && (
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
        {project.important && (
          <ProjectDetailImportant>Featured Project</ProjectDetailImportant>
        )}
      </ProjectDetailHeader>
      <ProjectDetailMain>
        <ProjectDetailImageWrapper>
          <ProjectDetailImage
            src={project.img}
            alt={project.alt || project.title}
          />
        </ProjectDetailImageWrapper>
        <ProjectDetailInfo>
          <ProjectDetailStatusType>
            <ProjectDetailStatus>
              Status:{" "}
              {project.status === true ? (
                <span className="complete">Complete</span>
              ) : (
                <span className="in-progress">Under Development</span>
              )}
            </ProjectDetailStatus>
            {project.type && (
              <ProjectDetailType>{project.type}</ProjectDetailType>
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
          {project.technologies && (
            <ProjectDetailTech>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </ProjectDetailTech>
          )}
        </ProjectDetailInfo>
      </ProjectDetailMain>
      {project.keyFeatures && (
        <ProjectDetailSection>
          <ProjectDetailSectionTitle>Key Features:</ProjectDetailSectionTitle>
          <ProjectDetailList>
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ProjectDetailList>
        </ProjectDetailSection>
      )}
      {project.challenges && (
        <ProjectDetailSection>
          <ProjectDetailSectionTitle>Challenges:</ProjectDetailSectionTitle>
          <ProjectDetailList>
            {project.challenges.map((challenge, idx) => (
              <li key={idx}>{challenge}</li>
            ))}
          </ProjectDetailList>
        </ProjectDetailSection>
      )}
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
