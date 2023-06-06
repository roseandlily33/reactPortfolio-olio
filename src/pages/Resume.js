import {Outlet, NavLink } from "react-router-dom";
const Resume = () => {
    const downloadResume = () => {
        console.log('Downloaded resume clicked')
    }
    const styles = {
        NavLink: {
            textDecoration: 'none',
            color: '#3D4249',
        }
    }
   
    return ( <div className="resume">
         <nav className="resumeNavbar">
                <NavLink style={styles.NavLink} to="FrontEnd">Front End Skills</NavLink>
                <NavLink to="BackEnd" style={styles.NavLink} >Back End Skills</NavLink>
                <NavLink to="Skills" style={styles.NavLink} >Other Skills</NavLink>
        </nav>
        <div>
            <Outlet />
            </div>
            <div className="download">
        <h2 className="animate__animated animate__shakeX" >Download my resume:</h2>
        <button id="downloadBtn" ><a href="VictoriaBenoitResume.pdf" download="VictoriaBenoitResume.pdf">Resume</a></button>
        </div>
    </div> );
}
 
export default Resume;