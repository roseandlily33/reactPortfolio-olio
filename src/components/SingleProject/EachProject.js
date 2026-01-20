import { ProjectCard } from "./EachProject.styles";
import { useNavigate } from "react-router-dom";

const SingleProject = ({ projectList, openModal }) => {
  const navigate = useNavigate();
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "space-around",
      }}
    >
      {projectList?.map((project) => (
        <ProjectCard
          id="certContainer"
          key={project.id}
          onClick={() => navigate(`/Project/${project.id}`)}
        >
          {project?.important && (
            <div className="important-badge">
              <span role="img" aria-label="star">
                ★
              </span>
            </div>
          )}
          <div className="project-image-wrapper">
            <img id="projPic" src={project?.img} alt={project?.alt} />
          </div>
          <div className="project-details">
            <h5>{project?.title}</h5>
            <div className="project-status-type">
              <span className="project-status">
                Status:{" "}
                {project?.status === true ? (
                  <span style={{ color: "#5CB85C" }}>Complete</span>
                ) : (
                  <span style={{ color: "#e6b607" }}>Under Development</span>
                )}
              </span>
              <span className="project-type">{project?.type}</span>
            </div>
          </div>
        </ProjectCard>
      ))}
    </section>
  );
};

export default SingleProject;
