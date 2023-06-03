import projectList from "../projectList";

const Projects = () => {
    return ( 
    <div className="projects">
        {projectList.map(project => (
            <div className="project" key={project.id}>
                <h3>{project.title}</h3>
            </div>
        ))}




    </div> );
}
 
export default Projects;