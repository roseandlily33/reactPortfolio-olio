import { projectListFrontEnd } from './projectsFE';
import { projectListGroups } from './projectsGROUP';
import { projectListMERN } from './projectsMERN';
import { projectListBackEnd } from './projectsBE';
import { projectListFrontEndMentor } from './projectsFEM';
import SingleProject from '../../components/SingleProject/EachProject';
import { ProjectComponentContainer,
    ProjectContainer
 } from "./Projects.styles";

const Projects = () => {
 
    return ( 
        <ProjectComponentContainer >
        <h2>My Projects</h2>
            <ProjectContainer>
                <h3>Full Stack</h3>
                <SingleProject projectList={projectListMERN} />
            </ProjectContainer>
            <ProjectContainer>
                <h3>Front End</h3>
                <SingleProject projectList={projectListFrontEnd} />
            </ProjectContainer>
            <ProjectContainer>
                <h3>Back End</h3>
                <p>Only videos are available</p>
                <SingleProject projectList={projectListBackEnd} />
            </ProjectContainer>
            <ProjectContainer>
                <h3>Group Projects</h3>
                <SingleProject projectList={projectListGroups} />
            </ProjectContainer>
            <ProjectContainer>
                <h3>Front End Mentor</h3>
                <p>Projects from the website front end mentor</p>
                <SingleProject projectList={projectListFrontEndMentor} />
            </ProjectContainer>
        </ProjectComponentContainer >
    );
}
 
export default Projects;