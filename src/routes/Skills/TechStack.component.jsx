import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLightbulb,
  FaCogs,
  FaRocket,
} from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiMongodb } from "react-icons/si";
import { TechStackContainer } from "./SkillsPage.styles";

const TechStack = () => {
  const mernStack = [
    { name: "M", label: "MongoDB", icon: <FaDatabase /> },
    { name: "E", label: "Express.js", icon: <SiExpress /> },
    { name: "R", label: "React", icon: <FaReact /> },
    { name: "N", label: "Node.js", icon: <FaNodeJs /> },
  ];

  const nextMongoStack = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "+", icon: null },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  return (
    <TechStackContainer>
      <div className="section-card">
        <div
          className="title-stack"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2em",
            alignItems: "center",
          }}
        >
          {/* MERN Stack */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.7em" }}>
            {mernStack.map((tech, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <span className="tech-icon animated-icon">{tech.icon}</span>
                <div style={{ fontSize: "0.92em", color: "var(--grey-7)" }}>
                  {tech.label}
                </div>
              </div>
            ))}
          </div>
          {/* Next.js + MongoDB Stack */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.7em" }}>
            {nextMongoStack.map((tech, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                {tech.icon && (
                  <span className="tech-icon animated-icon">{tech.icon}</span>
                )}
                <div style={{ fontSize: "0.92em", color: "var(--grey-7)" }}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-card overview">
        <h4 className="accent-heading">Tech Stack Overview</h4>
        <p>
          My current tech stack is the MERN stack (MongoDB, Express.js, React,
          Node.js). Within the front end frameworks I have also dealt with
          Next.js and Gatsby, for a couple of fun projects. In full productions
          applications I have used Tanstack Query over react for state
          management, have dealt with JWTs for authentication, and have used
          Paypal for payment processing. I have also worked with MySQL and
          MongoDB for database management, and have experience with AWS for
          cloud services for storing image and pdf data. Recently I have been
          expanding on my knowledge of Next.js doing projects with that
          framework and MongoDB as the database.
        </p>
        <h4 className="accent-heading">Development Process</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2.5em",
            margin: "2em 0 1.5em 0",
            flexWrap: "wrap",
          }}
        >
          {/* Stage 1: Plan */}
          <div
            style={{
              background: "var(--pink-1)",
              borderRadius: "18px",
              boxShadow: "0 2px 12px rgba(241, 116, 150, 0.09)",
              padding: "2em 1.5em",
              minWidth: "160px",
              maxWidth: "220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.7em",
            }}
          >
            <FaLightbulb
              style={{ color: "var(--pink-3)", fontSize: "2.2em" }}
            />
            <div
              style={{
                fontWeight: 700,
                color: "var(--pink-5)",
                fontSize: "1.1em",
              }}
            >
              Plan & Design
            </div>
            <div style={{ color: "var(--grey-7)", fontSize: "0.98em" }}>
              Strategy, requirements, and architecture for scalable, thoughtful
              solutions.
            </div>
          </div>
          {/* Stage 2: Build */}
          <div
            style={{
              background: "var(--pink-2)",
              borderRadius: "18px",
              boxShadow: "0 2px 12px rgba(241, 116, 150, 0.09)",
              padding: "2em 1.5em",
              minWidth: "160px",
              maxWidth: "220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.7em",
            }}
          >
            <FaCogs style={{ color: "var(--pink-4)", fontSize: "2.2em" }} />
            <div
              style={{
                fontWeight: 700,
                color: "var(--pink-5)",
                fontSize: "1.1em",
              }}
            >
              Build & Develop
            </div>
            <div style={{ color: "var(--grey-7)", fontSize: "0.98em" }}>
              Iterative coding, testing, and integration of backend and frontend
              features.
            </div>
          </div>
          {/* Stage 3: Launch */}
          <div
            style={{
              background: "var(--pink-3)",
              borderRadius: "18px",
              boxShadow: "0 2px 12px rgba(241, 116, 150, 0.09)",
              padding: "2em 1.5em",
              minWidth: "160px",
              maxWidth: "220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.7em",
            }}
          >
            <FaRocket style={{ color: "var(--pink-6)", fontSize: "2.2em" }} />
            <div
              style={{
                fontWeight: 700,
                color: "var(--pink-5)",
                fontSize: "1.1em",
              }}
            >
              Launch & Support
            </div>
            <div style={{ color: "var(--grey-7)", fontSize: "0.98em" }}>
              Deploy, monitor, and support for a smooth, successful launch and
              beyond.
            </div>
          </div>
        </div>
        <p>
          My development process begins with understanding the project
          requirements and designing a scalable architecture from how the
          application will look to reusable components, to designing a database.
          From there I move onto setting up the project repository, CI/CD
          pipelines, database, version control, and project management tools. I
          then implement features iteratively, starting with the backend API
          endpoints and database schema, followed by the frontend components.
          Then I start to think about UX/UI design, ensuring responsiveness and
          accessibility. Finding pieces such as buttons that are modular, coming
          up with a typescale, and color palette that is consistent across the
          application.
        </p>
      </div>
    </TechStackContainer>
  );
};

export default TechStack;
