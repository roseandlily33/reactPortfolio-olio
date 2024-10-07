import { projectListFrontEnd } from './projectsFE';
import { projectListGroups } from './projectsGROUP';
import { projectListMERN } from './projectsMERN';
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
            {/* <ProjectContainer>
                <h3>Back End</h3>
                <SingleProject projectList={projectListMERN} />
            </ProjectContainer> */}
            <ProjectContainer>
                <h3>Group Projects</h3>
                <SingleProject projectList={projectListGroups} />
            </ProjectContainer>
        </ProjectComponentContainer >
    );
}
 
export default Projects;