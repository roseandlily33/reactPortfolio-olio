import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TechStackContainer } from "./SkillsPage.styles";

const TechStack = () => {
  const techStack = [
    { name: "M", icon: <FaDatabase /> },
    { name: "E", icon: <SiExpress /> },
    { name: "R", icon: <FaReact /> },
    { name: "N", icon: <FaNodeJs /> },
  ];

  return (
    <TechStackContainer>
      <h3>Tech Stack & Process</h3>
      <div className="title-stack">
        {techStack.map((tech, index) => (
          <div>
            <p>
              {tech.name}
              <span className="tech-icon">{tech.icon}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="overview">
      <h4>Tech Stack Overview</h4>
        <p>
          My current tech stack is the MERN stack (MongoDB, Express.js, React, Node.js). Within the front end frameworks I have also dealt with Next.js and Gatsby, for a couple of fun projects. 
          In full productions applications I have used Tanstack Query over react for state management, have dealt with JWTs for authentication, and have used Paypal for payment processing.
        I have also worked with MySQL and MongoDB for database management, and have experience with AWS for cloud services for storing image and pdf data.

        </p>
        <h4>Development Process</h4>
        <p>
           My development process begins with understanding the project requirements and designing a scalable architecture from how the application will look to reusable components, to designing a database.
           From there I move onto setting up the project repoistory, CI/CD pipelines, database, version control, and project management tools.
           I then implement features iteratively, starting with the backend API endpoints and database schema, followed by the frontend components.
           Then I start to think about UX/UI design, ensuring responsiveness and accessibility. Finding pieces such as buttons that are modular, coming up 
           with a typescale, and color palette that is consistent across the application.
        </p>
      </div>
    </TechStackContainer>
  );
};

export default TechStack;
