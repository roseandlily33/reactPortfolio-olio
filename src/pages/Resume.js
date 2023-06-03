import {Outlet, NavLink } from "react-router-dom";
import { useDownloadFile } from "react-downloadfile-hook";
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
        <h2>Download my resume:</h2>
        <button id="downloadBtn" value="download" onClick={downloadResume}>Resume</button>
        </div>


    </div> );
}
 
export default Resume;