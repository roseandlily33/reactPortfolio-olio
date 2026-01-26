import { AboutMeSection } from "../AboutMe.styles";
import { FaUserAstronaut, FaTools, FaHeart } from "react-icons/fa";
import { CardIcon, CardTitle, EachCard, SummarySection } from "./Summary.styles";

const SummaryComponent = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/path/to/VictoriaBenoitResume.pdf"; // Replace with your actual resume path
    link.download = "VictoriaBenoitResume.pdf";
    link.click();
  };

  return (
    <SummarySection>
      {/* Block 1: Who I am */}
      <EachCard>
        <CardIcon as={FaUserAstronaut} title="Who I am" />
        <CardTitle>Who I am</CardTitle>
        <p>Full Stack Developer &amp; UX/UI Designer</p>
        <p>
          <span className="bold">Certified</span> by University of New
          Brunswick, Codecademy, and Zero to Mastery.
        </p>
        <p>
          <span className="bold">4+ years</span> experience building web
          solutions.
        </p>
      </EachCard>
      {/* Block 2: What I do */}
      <EachCard>
        <CardIcon as={FaTools} title="What I do" />
        <CardTitle>What I do</CardTitle>
        <ul>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>
              ▸
            </span>
            <span>
              <span className="bold">Front-end:</span> React, CSS, Responsive
              Design, UI/UX
            </span>
          </li>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>
              ▸
            </span>
            <span>
              <span className="bold">Back-end:</span> Node.js , Express,
              MongoDB, MySQL
            </span>
          </li>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>
              ▸
            </span>
            <span>
              <span className="bold">DevOps:</span> CI/CD, secure deployments,
              cloud hosting
            </span>
          </li>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>
              ▸
            </span>
            <span>
              <span className="bold">Specialties:</span> Accessibility, SEO,
              Email Systems
            </span>
          </li>
        </ul>
        <p>
          <span className="bold">Toolkit:</span> Payment integrations, custom
          email templates (MJML, Handlebars, Nodemailer)
        </p>
      </EachCard>
      {/* Block 3: What I care about */}
      <EachCard>
        <CardIcon as={FaHeart} title="What I care about" />
        <CardTitle>What I care about</CardTitle>
        <ul>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>
              ▸
            </span>
            People-first design &amp; accessibility
          </li>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>
              ▸
            </span>
            <span>Performance, SEO, and clean code</span>
          </li>
          <li>
            <span style={{ color: "var(--medPink)", fontSize: "1.1rem" }}>
              ▸
            </span>
            <span>Collaboration, learning, and creative solutions</span>
          </li>
        </ul>
        <p>“Let’s turn your vision into a web experience people love.”</p>
      </EachCard>
    </SummarySection>
  );
};

export default SummaryComponent;
