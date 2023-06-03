import photo from '../images/1F431994-4D99-4CA6-8049-1D03C3A8D143_1_105_c.jpeg';
const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="pic">
            <img src={photo} alt="Victoria" height="350" width="250"></img>
            </div>
            <div className="info">
                <h2>Hi, I'm Victoria!</h2>
                <p> I am a MERN Full Stack Developer,
                    <br />
                    I'm passionate in front end development and love CSS and REACT.</p>
            </div>
        </div>
        
    );
}
 
export default AboutMe;