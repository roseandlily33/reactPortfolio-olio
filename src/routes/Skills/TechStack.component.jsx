import React, { useState } from "react";
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

  // Tools & Platforms
  const toolsPlatforms = [
    { name: "VS Code", icon: "📝" },
    { name: "Figma", icon: "🎨" },
    { name: "GitHub", icon: "🐙" },
    { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "Netlify", icon: "🌐" },
    { name: "Jira", icon: "📋" },
    { name: "Slack", icon: "💬" },
    { name: "MySQL", icon: "🗄️" },
    { name: "MongoDB Atlas", icon: "🍃" },
    { name: "PayPal", icon: "💸" },
    { name: "TanStack Query", icon: "🔄" },
    { name: "JWT", icon: "🔑" },
    { name: "Gatsby", icon: "⚡" },
    { name: "Next.js", icon: "⏭️" },
  ];

  // Collapsible state for Tools & Platforms
  const [showTools, setShowTools] = useState(false);

  return (
    <TechStackContainer>
      <h3 className="accent-heading">Tech Stack & Process</h3>
      <div className="section-card">
        <div className="title-stack">
          {techStack?.map((tech, index) => (
            <div key={index}>
              <p>
                {tech?.name}
                <span className="tech-icon animated-icon">{tech?.icon}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-card tools-platforms">
        <h4 className="accent-heading" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <span>Tools & Platforms</span>
          <button
            className="tools-toggle-btn"
            aria-expanded={showTools}
            aria-controls="tools-platforms-list"
            onClick={() => setShowTools((prev) => !prev)}
            style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--darkPink)', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}
          >
            {showTools ? 'Hide' : 'Show'}
          </button>
        </h4>
        {showTools && (
          <div className="tools-row" id="tools-platforms-list">
            {toolsPlatforms.map((tool, idx) => (
              <span className="tool-pill" key={tool.name + idx} title={tool.name}>
                <span className="tool-icon">{tool.icon}</span> {tool.name}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="section-card overview">
        <h4 className="accent-heading">Tech Stack Overview</h4>
        <p>
          My current tech stack is the MERN stack (MongoDB, Express.js, React, Node.js). Within the front end frameworks I have also dealt with Next.js and Gatsby, for a couple of fun projects.
          In full productions applications I have used Tanstack Query over react for state management, have dealt with JWTs for authentication, and have used Paypal for payment processing.
          I have also worked with MySQL and MongoDB for database management, and have experience with AWS for cloud services for storing image and pdf data.
        </p>
        <h4 className="accent-heading">Development Process</h4>
        <p>
          My development process begins with understanding the project requirements and designing a scalable architecture from how the application will look to reusable components, to designing a database.
          From there I move onto setting up the project repository, CI/CD pipelines, database, version control, and project management tools.
          I then implement features iteratively, starting with the backend API endpoints and database schema, followed by the frontend components.
          Then I start to think about UX/UI design, ensuring responsiveness and accessibility. Finding pieces such as buttons that are modular, coming up
          with a typescale, and color palette that is consistent across the application.
        </p>
      </div>
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to Top
      </button>
    </TechStackContainer>
  );
};

export default TechStack;
