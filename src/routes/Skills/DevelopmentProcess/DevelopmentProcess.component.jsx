import React, { useRef, useEffect, useState } from "react";
import { FaLightbulb, FaCogs, FaRocket } from "react-icons/fa";
import {
  DevProcessContainer,
  DevProcessCircleContainer,
  DevProcessCircle,
  DevProcessNumber,
} from "./DevelopmentProcess.styles";

// Animation on scroll logic
const steps = [
  {
    number: 1,
    gradient: "linear-gradient(120deg, var(--pink-2), var(--pink-1))",
    border: "radial-gradient(circle, var(--pink-2) 60%, transparent 100%)",
    divider: "linear-gradient(to bottom, var(--pink-2), transparent)",
    icon: (
      <FaLightbulb
        style={{
          color: "var(--pink-3)",
          fontSize: "2.2em",
          marginBottom: "0.3em",
        }}
      />
    ),
    title: "Plan & Design",
    desc: "Strategy, requirements, and architecture for scalable, thoughtful solutions.",
  },
  {
    number: 2,
    gradient: "linear-gradient(120deg, var(--pink-3), var(--pink-2))",
    border: "radial-gradient(circle, var(--pink-3) 60%, transparent 100%)",
    divider: "linear-gradient(to bottom, var(--pink-3), transparent)",
    icon: (
      <FaCogs
        style={{
          color: "var(--pink-4)",
          fontSize: "2.2em",
          marginBottom: "0.3em",
        }}
      />
    ),
    title: "Build & Develop",
    desc: "Iterative coding, testing, and integration of backend and frontend features.",
  },
  {
    number: 3,
    gradient: "linear-gradient(120deg, var(--pink-4), var(--pink-3))",
    border: "radial-gradient(circle, var(--pink-4) 60%, transparent 100%)",
    divider: "linear-gradient(to bottom, var(--pink-4), transparent)",
    icon: (
      <FaRocket
        style={{
          color: "var(--pink-6)",
          fontSize: "2.2em",
          marginBottom: "0.3em",
        }}
      />
    ),
    title: "Launch & Support",
    desc: "Deploy, monitor, and support for a smooth, successful launch and beyond.",
  },
];

const DevelopmentProcess = () => {
  const refs = useRef([]);
  const [visible, setVisible] = useState([false, false, false]);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 900 : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Only observe after refs are set and DOM is ready
    if (!refs.current.length) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-step"));
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 },
    );
    const currentRefs = refs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [refs]);

  return (
    <DevProcessContainer>
      <h4>Development Process</h4>
      <DevProcessCircleContainer>
        {steps.map((step, idx) => (
          <DevProcessCircle
            key={idx}
            ref={(el) => (refs.current[idx] = el)}
            data-step={idx}
            className={visible[idx] ? "visible" : ""}
            style={{
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
            }}
          >
            <DevProcessNumber
              $gradient={step.gradient}
              $border={step.border}
              style={{
                fontSize: "12rem",
                marginRight: "0.8rem",
                marginBottom: isMobile ? "-1.5rem" : 0,
                textAlign: isMobile ? "left" : "right",
                alignSelf: isMobile ? "flex-start" : undefined,
              }}
            >
              {step.number}
            </DevProcessNumber>
            <div
              style={{
                zIndex: 2,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "0.2em",
                marginLeft: isMobile ? 0 : "-0.5em"
              }}
            >
              {step.icon}
              <div
                style={{
                  fontWeight: 700,
                  color: "var(--pink-5)",
                  fontSize: "1.5rem",
                }}
              >
                {step.title}
              </div>
              <div style={{ color: "var(--grey-7)", fontSize: "0.98em" }}>
                {step.desc}
              </div>
            </div>
          </DevProcessCircle>
        ))}
      </DevProcessCircleContainer>
    </DevProcessContainer>
  );
};

export default DevelopmentProcess;
