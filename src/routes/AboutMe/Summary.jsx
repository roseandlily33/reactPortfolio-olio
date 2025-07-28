import { AboutMeSection } from "./AboutMe.styles";
import MyImage from "../../images/1F431994-4D99-4CA6-8049-1D03C3A8D143_1_105_c.jpeg";
import PrimaryButton from "../../components/Buttons/PrimaryButton.component";
const SummaryComponent = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/path/to/VictoriaBenoitResume.pdf"; // Replace with the actual path to your resume file
    link.download = "VictoriaBenoitResume.pdf"; // The name of the file when downloaded
    link.click();
  };

  return (
    <AboutMeSection>
      <div className="left">
        <img src={MyImage} alt="Victoria" />
      </div>
      <div className="right">
        <h2>Hi, I'm Victoria!</h2>
        <section>
          <div>
            I am a passionate and dedicated MERN Full Stack Developer with over
            two years of experience designing and building robust, user-friendly
            applications. My expertise lies in front-end development, where I
            excel in crafting visually appealing and responsive designs using
            CSS, React, and modern UI/UX design principles. I have a strong
            foundation in back-end technologies, including Node.js, Express.js,
            and databases like MySQL and MongoDB, enabling me to develop
            scalable and secure applications.
            <br />
            Throughout my career, I have worked on large-scale projects for
            clients, collaborated on team-based applications, and delivered
            personal projects that showcase my creativity and technical skills.
            My experience includes integrating PayPal payment systems, designing
            accessible and inclusive applications, and implementing security
            best practices to safeguard user data. I have also worked
            extensively with CI/CD pipelines, ensuring seamless deployment and
            testing processes, and have deployed applications to platforms like
            Render.
            <br />
            In addition to development, I have a keen interest in email systems,
            having worked with tools like MJML, Handlebars, and Nodemailer to
            create dynamic and engaging email templates. My commitment to
            excellence is reflected in my certifications from the University of
            New Brunswick, Codecademy, and Zero to Mastery, which have equipped
            me with a diverse skill set spanning front-end, back-end, and DevOps
            technologies.
          </div>
          <div style={{ marginTop: "1rem" }}>
            <PrimaryButton span="resume" onClick={downloadResume} />
          </div>
        </section>
      </div>
    </AboutMeSection>
  );
};

export default SummaryComponent;
