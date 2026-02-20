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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ textAlign: "center", marginBottom: 'var(--spacing-m)', position: 'relative' }}>
          Portfolio Highlights
        </h3>
        <span
          style={{
            display: 'block',
            height: '2px',
            width: '68%',
            minWidth: '120px',
            maxWidth: '220px',
            background: 'var(--berry)',
            borderRadius: '2px',
            margin: '0.35em auto var(--spacing-s) auto',
          }}
        />
      </div>
      <p style={{ textAlign: "center", marginBottom: "var(--spacing-m)" }}>A selection of projects that showcase my approach to design and development</p>
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
