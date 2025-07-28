const SingleProject = ({ projectList, openModal }) => {
  return (
    <section>
      {projectList?.map((project) => (
        <div
          id="certContainer"
          key={project.id}
          onClick={() => openModal(project)}
        >
          {project?.important && (
            <div className="important-badge">
              <span role="img" aria-label="star">
                ★
              </span>
            </div>
          )}
          <img key={project?.id} src={project?.img} alt={project?.alt} />
          <h5>{project?.title}</h5>
          <p>
            Status:{" "}
            {project?.status === true ? (
              <span style={{ color: "#5CB85C" }}>Complete</span>
            ) : (
              <span style={{ color: "#e6b607" }}>Under Development</span>
            )}
          </p>
          <p>{project?.type}</p>
        </div>
      ))}
    </section>
  );
};

export default SingleProject;
