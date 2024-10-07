import githubIcon from '../../images/icons8-github-bubbles/icons8-github-50.png';
import { EachProjectContainer,
    ProjectCard
 } from './EachProject.styles';
const SingleProject = ({projectList}) => {
    const githubLink = 'Link to github repo';
    const deployedLink = 'Link to deployed project';
    return ( 
     <EachProjectContainer>
        {projectList?.map(project => (
            <ProjectCard>
               <a href={project?.deployed} alt={deployedLink}> <img key={project?.id} src={project?.img} height="200" width="350" alt={project?.alt} id="projPic"/></a>
                <div className="projectInfo">
                   <h4 className='bold'>{project?.title}</h4>
                   <p className='bold'>Status Of Project: <span>{project?.status}</span></p>

                   <p>{project?.description}</p>
                   {project.github && 
                   <a href={project?.github}>
                   <img src={githubIcon} alt={githubLink}/>
                   </a>}
                </div>
            </ProjectCard>
        ))}
    </EachProjectContainer> 

     );
}
 
export default SingleProject;