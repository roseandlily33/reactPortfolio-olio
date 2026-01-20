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
      <div
        style={{
          background: "rgba(255,255,255,0.7)",
          boxShadow: "0 4px 24px rgba(241,116,150,0.10)",
          padding: "2.5rem 2rem",
          width: "100%",
          borderRadius: "24px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ marginBottom: "1.5rem" }}>Hi, I'm Victoria!</h2>
        <section>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <p
              style={{ fontSize: "1.15rem", color: "#b23a48", fontWeight: 600 }}
            >
              MERN Full Stack Developer & UX/UI Designer
            </p>
            <p>
              I specialize in building beautiful, accessible, and
              high-performing web applications. With 4+ years of hands-on
              experience, I bring ideas to life using React, Node.js, and a
              passion for user-centered design.
            </p>
            <ul style={{ margin: "0 0 1rem 1.2rem", color: "#6d4c41" }}>
              <li>Front-end: React, CSS, Responsive Design, UI/UX</li>
              <li>Back-end: Node.js, Express, MongoDB, MySQL</li>
              <li>DevOps: CI/CD, secure deployments, cloud hosting</li>
              <li>Specialties: Accessibility, SEO, Email Systems</li>
            </ul>
            <p>
              I’ve collaborated on client projects, led redesigns, and delivered
              solutions that are both creative and robust. My toolkit includes
              everything from payment integrations to custom email templates
              (MJML, Handlebars, Nodemailer).
            </p>
            <p>
              Certified by the University of New Brunswick, Codecademy, and Zero
              to Mastery, I’m always learning and staying ahead of industry
              trends.
            </p>
            <p
              style={{
                fontStyle: "italic",
                color: "#b23a48",
                marginTop: "0.5rem",
              }}
            >
              “Let’s turn your vision into a web experience people love.”
            </p>
          </div>
          {/* <div style={{ textAlign: "center", width: "100%" }}>
            <PrimaryButton span="Download Resume" onClick={downloadResume} />
          </div> */}
        </section>
      </div>
    </AboutMeSection>
  );
};

export default SummaryComponent;
