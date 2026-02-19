import React from "react";
import {
  ProjectsPreviewContainer,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectMeta,
} from "./ProjectsPreview.styles";
import { useNavigate } from "react-router-dom";
import { projectListMERN } from "../../Projects/ProjectLists/projectsMERN";
import { projectListClient } from "../../Projects/ProjectLists/projectsClient";

const ProjectsPreview = () => {
  const navigate = useNavigate();
  const allProjects = [...projectListClient, ...projectListMERN];

  const importantProjects = allProjects.filter(
    (project) => project.showMainPage === true,
  );

  return (
    <ProjectsPreviewContainer>
      <h3 style={{ textAlign: "center", marginBottom: "var(--spacing-m)" }}>
        Selected Work
      </h3>
      <ProjectsGrid>
        {importantProjects?.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => navigate(`/Project/${project.id}`)}
          >
            <ProjectImage src={project.img} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>
              {project.description.slice(0, 80)}
              {project.description.length > 80 ? "…" : ""}
            </ProjectDescription>
            <ProjectMeta>
              <span>{project.year}</span>
              <span>{project.type}</span>
            </ProjectMeta>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsPreviewContainer>
  );
};

export default ProjectsPreview;
