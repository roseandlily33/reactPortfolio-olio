import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiMongodb } from "react-icons/si";
import { TechStackContainer, TechLeft, TechRight } from "./TechStack.styles";

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
      <TechLeft>
        <h4>Tech Stack</h4>
        <p>
          My current tech stack is the MERN stack (MongoDB, Express.js, React,
          Node.js). I also work with Next.js and Gatsby for front-end projects.
          For state management, I use Tanstack Query, and for authentication,
          JWTs. I have experience with MySQL, MongoDB, and AWS for database and
          cloud services. Recently, I’ve been expanding my Next.js and MongoDB
          expertise.
        </p>
      </TechLeft>
      <TechRight>
        <div>
          {mernStack?.map((tech, idx) => (
            <div
              className="techStack"
              key={idx}
              style={{ textAlign: "center" }}
            >
              <span>{tech.icon}</span>
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
        <div>
          {nextMongoStack?.map((tech, idx) => (
            <div
              className="techStack"
              key={idx}
              style={{ textAlign: "center" }}
            >
              {tech.icon && <span>{tech.icon}</span>}
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </TechRight>
    </TechStackContainer>
  );
};

export default TechStack;
