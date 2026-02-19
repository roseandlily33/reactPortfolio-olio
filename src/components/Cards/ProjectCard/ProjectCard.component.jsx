import {
  ProjectCardContainer,
  ProjectImage,
  ProjectTitle,
  ProjectMeta,
  StatusBadge,
  TypeBadge
} from "./ProjectCard.styles";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <ProjectCardContainer onClick={() => navigate(`/Project/${project.id}`)}>
      {project?.important && (
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
      <ProjectImage src={project?.img} alt={project?.alt} />
      <ProjectTitle>{project?.title}</ProjectTitle>
      <ProjectMeta>
        <StatusBadge status={project?.status === true ? 'complete' : 'in-progress'}>
          {project?.status === true ? "Complete" : "Under Development"}
        </StatusBadge>
        {project?.type && (
          <TypeBadge>{project?.type}</TypeBadge>
        )}
      </ProjectMeta>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
