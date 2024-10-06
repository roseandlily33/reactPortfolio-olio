// import { projectListFrontEnd } from '../projectsFE';
// import { projectListGroups } from '../projectsGROUP';
// import { projectListMERN } from '../projectsMERN';
import { useState } from 'react';
// import SingleProject from './EachProject';

const Projects = () => {
    // const [projectList, setProjectList] = useState(projectListMERN);
 
    return ( 
        <>
        <div className="resumeNavbar">
            <h2>Project list</h2>
            {/* <h3 onClick={() => setProjectList(projectListMERN)}>Full Stack Projects</h3> */}
            {/* <h3 onClick={() => setProjectList(projectListGroups)}>Group Projects</h3> */}
            {/* <h3 onClick={() => setProjectList(projectListFrontEnd)}>Front End Projects</h3> */}
        </div>
        
        {/* <SingleProject projectList={projectList} /> */}
        </>
    );
}
 
export default Projects;