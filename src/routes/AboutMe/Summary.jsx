import { AboutMeSection } from "./AboutMe.styles";
import { FaUserAstronaut, FaTools, FaHeart } from "react-icons/fa";
import PrimaryButton from "../../components/Buttons/PrimaryButton.component";

const SummaryComponent = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/path/to/VictoriaBenoitResume.pdf"; // Replace with your actual resume path
    link.download = "VictoriaBenoitResume.pdf";
    link.click();
  };

  return (
    <AboutMeSection>
      {/* Block 1: Who I am */}
      <div className="eachCard">
        <FaUserAstronaut className="cardIcon" title="Who I am" />
        <h3>Who I am</h3>
        <p>Full Stack Developer &amp; UX/UI Designer</p>
        <p>
          <span className="bold">Certified</span> by University of New
          Brunswick, Codecademy, and Zero to Mastery.
        </p>
        <p>
          <span className="bold">4+ years</span> experience building web
          solutions.
        </p>
      </div>
      {/* Block 2: What I do */}
      <div className="eachCard">
        <FaTools className="cardIcon" title="What I do" />
        <h3>What I do</h3>
        <ul>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>▸</span>
            <span>
              <span className="bold">Front-end:</span> React, CSS, Responsive Design, UI/UX
            </span>
          </li>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>▸</span>
            <span>
              <span className="bold">Back-end:</span> Node.js , Express, MongoDB, MySQL
            </span>
          </li>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>▸</span>
            <span>
              <span className="bold">DevOps:</span> CI/CD, secure deployments, cloud hosting
            </span>
          </li>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>▸</span>
            <span>
              <span className="bold">Specialties:</span> Accessibility, SEO, Email Systems
            </span>
          </li>
        </ul>
        <p>
          <span className="bold">Toolkit:</span> Payment integrations, custom email templates (MJML, Handlebars, Nodemailer)
        </p>
      </div>
      {/* Block 3: What I care about */}
      <div className="eachCard">
        <FaHeart className="cardIcon" title="What I care about" />
        <h3>What I care about</h3>
        <ul>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>▸</span>
            People-first design &amp; accessibility
          </li>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>▸</span>
            <span>Performance, SEO, and clean code</span>
          </li>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>▸</span>
            <span>Collaboration, learning, and creative solutions</span>
          </li>
        </ul>
        <p>“Let’s turn your vision into a web experience people love.”</p>
      </div>
    </AboutMeSection>
  );
};

export default SummaryComponent;
