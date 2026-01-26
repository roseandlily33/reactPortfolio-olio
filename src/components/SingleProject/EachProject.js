import { ProjectCard, EntityContainer } from "./EachProject.styles";
import { useNavigate } from "react-router-dom";

const SingleProject = ({ projectList }) => {
  const navigate = useNavigate();
  return (
    <EntityContainer>
      {projectList?.map((project) => (
        <ProjectCard
          // id="certContainer"
          key={project.id}
          onClick={() => navigate(`/Project/${project.id}`)}
        >
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
          <div className="project-image-wrapper">
            <img id="projPic" src={project?.img} alt={project?.alt} />
          </div>
          <div className="project-details">
            <h5 style={{ marginBottom: "0.5rem" }}>{project?.title}</h5>
            <div className="project-status-type">
              <span
                className={
                  "status-badge " +
                  (project?.status === true ? "complete" : "in-progress")
                }
                style={{
                  display: "inline-block",
                  padding: "0.18em 1.1em",
                  borderRadius: "999px",
                  fontSize: "1.08rem",
                  fontWeight: 700,
                  fontFamily: "var(--headerFont)",
                  background:
                    project?.status === true
                      ? "#eafbe7"
                      : "var(--lightYellowBackground)",
                  color:
                    project?.status === true ? "var(--green)" : "var(--yellow)",
                  letterSpacing: "0.01em",
                  minWidth: 110,
                  textAlign: "center",
                  lineHeight: 1.2,
                  marginRight: "0.7em",
                }}
              >
                {project?.status === true ? "Complete" : "Under Development"}
              </span>
              {project?.type && (
                <span
                  className="project-type"
                  style={{
                    display: "inline-block",
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
                  }}
                >
                  {project?.type}
                </span>
              )}
            </div>
          </div>
        </ProjectCard>
      ))}
    </EntityContainer>
  );
};

export default SingleProject;
