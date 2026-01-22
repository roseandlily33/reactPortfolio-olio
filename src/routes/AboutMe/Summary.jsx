import { AboutMeSection } from "./AboutMe.styles";
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
      <div style={{ width: "100%", margin: "0 auto" }}>
        {/* Who I am */}
        <h2 style={{ marginBottom: "1.1rem" }}>
          Hi, I'm{" "}
          <span style={{ color: "#b23a48", fontWeight: 700 }}>Victoria</span>!
        </h2>
        <section
          style={{ display: "flex", flexDirection: "column", gap: "2.2rem" }}
        >
          {/* Block 1: Who I am */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                marginBottom: "0.7rem",
              }}
            >
              <span style={{ color: "#f7b267", fontSize: "1.5rem" }}>•</span>
              <span
                style={{
                  fontSize: "1.15rem",
                  color: "#b23a48",
                  fontWeight: 600,
                }}
              >
                MERN Full Stack Developer{" "}
                <span role="img" aria-label="laptop">
                  💻
                </span>{" "}
                &amp; UX/UI Designer
              </span>
            </div>
            <p style={{ marginLeft: "1.7rem" }}>
              <span style={{ color: "#b23a48", fontWeight: 700 }}>
                Certified
              </span>{" "}
              by University of New Brunswick, Codecademy, and Zero to Mastery.
              <br />
              <span style={{ color: "#f7b267", fontWeight: 700 }}>
                4+ years
              </span>{" "}
              experience building web solutions.
            </p>
          </div>
          {/* Divider */}
          <div
            style={{
              height: "2px",
              background: "#f7b267",
              width: "100%",
              opacity: 0.5,
              margin: "0.5rem 0",
            }}
          />
          {/* Block 2: What I do */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                marginBottom: "0.7rem",
              }}
            >
              <span style={{ color: "#f7b267", fontSize: "1.5rem" }}>•</span>
              <span style={{ fontWeight: 700, color: "#b23a48" }}>
                What I do
              </span>
            </div>
            <ul
              style={{
                margin: "0 0 1rem 2.2rem",
                color: "#b23a48",
                fontWeight: 600,
                listStyle: "none",
                padding: 0,
              }}
            >
              <li
                style={{
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#f7b267", fontSize: "1.1rem" }}>▸</span>
                <span>
                  Front-end: <span style={{ color: "#f7b267" }}>React</span>,
                  CSS, Responsive Design, UI/UX
                </span>
              </li>
              <li
                style={{
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#f7b267", fontSize: "1.1rem" }}>▸</span>
                <span>
                  Back-end: <span style={{ color: "#f7b267" }}>Node.js</span>,
                  Express, MongoDB, MySQL
                </span>
              </li>
              <li
                style={{
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#f7b267", fontSize: "1.1rem" }}>▸</span>
                <span>DevOps: CI/CD, secure deployments, cloud hosting</span>
              </li>
              <li
                style={{
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#f7b267", fontSize: "1.1rem" }}>▸</span>
                <span>
                  Specialties:{" "}
                  <span style={{ color: "#b23a48" }}>Accessibility</span>, SEO,
                  Email Systems
                </span>
              </li>
            </ul>
            <p style={{ marginLeft: "1.7rem" }}>
              <span style={{ color: "#b23a48", fontWeight: 700 }}>
                Toolkit:
              </span>{" "}
              Payment integrations, custom email templates{" "}
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              (MJML, Handlebars, Nodemailer)
            </p>
          </div>
          {/* Divider */}
          <div
            style={{
              height: "2px",
              background: "#f7b267",
              width: "100%",
              opacity: 0.5,
              margin: "0.5rem 0",
            }}
          />
          {/* Block 3: What I care about */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                marginBottom: "0.7rem",
              }}
            >
              <span style={{ color: "#f7b267", fontSize: "1.5rem" }}>•</span>
              <span style={{ fontWeight: 700, color: "#b23a48" }}>
                What I care about
              </span>
            </div>
            <ul
              style={{
                margin: "0 0 1rem 2.2rem",
                color: "#b23a48",
                fontWeight: 600,
                listStyle: "none",
                padding: 0,
              }}
            >
              <li
                style={{
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#f7b267", fontSize: "1.1rem" }}>▸</span>
                <span>
                  <b>People-first</b> design &amp; accessibility{" "}
                  <span role="img" aria-label="accessibility">
                    ♿
                  </span>
                </span>
              </li>
              <li
                style={{
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#f7b267", fontSize: "1.1rem" }}>▸</span>
                <span>
                  Performance, SEO, and <b>clean code</b>
                </span>
              </li>
              <li
                style={{
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#f7b267", fontSize: "1.1rem" }}>▸</span>
                <span>
                  Collaboration, learning, and{" "}
                  <span style={{ color: "#b23a48" }}>creative solutions</span>
                </span>
              </li>
            </ul>
            <p
              style={{
                fontStyle: "italic",
                color: "#b23a48",
                marginTop: "0.5rem",
                marginLeft: "1.7rem",
              }}
            >
              “Let’s turn your vision into a web experience people love.”
            </p>
          </div>
        </section>
      </div>
    </AboutMeSection>
  );
};

export default SummaryComponent;
