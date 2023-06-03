import projectList from "../projectList";
import githubIcon from '../images/icons8-github-bubbles/icons8-github-50.png';
const Projects = () => {
    const githubLink = 'Link to github repo';
    const deployedLink = 'Link to deployed project';
    return ( 
    <div className="projects">
        {projectList.map(project => (
            <div  className="project">
               <a href={project.deployed} alt={deployedLink}> <img key={project.id} src={project.img} height="200" width="350" alt={project.alt} id="projPic"/></a>
                <div className="projectInfo">
                   <h3>{project.title}</h3>
                   <p>{project.description}</p>
                   <a href={project.github}>
                    <img src={githubIcon} alt={githubLink}/>
                    </a>
                    
                   
                </div>
            </div>
        ))}
    </div> );
}
 
export default Projects;