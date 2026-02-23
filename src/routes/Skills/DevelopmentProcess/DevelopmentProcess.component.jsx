import React from "react";
import { FaLightbulb, FaCogs, FaRocket } from "react-icons/fa";
import {
  DevProcessContainer,
  DevProcessCircleContainer,
  DevProcessCircle,
} from "./DevelopmentProcess.styles";
const DevelopmentProcess = () => {
  return (
    <DevProcessContainer>
      <h4>Development Process</h4>
      <DevProcessCircleContainer>
        {/* Step 1: Plan */}
        <DevProcessCircle
          style={{
            background: "none",
            boxShadow: "none",
            position: "relative",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "380px",
            height: "auto",
            minHeight: "180px",
            padding: "var(--spacing-m) var(--spacing-xl)",
          }}
        >
          <div
            style={{
              fontSize: "12rem",
              fontWeight: 900,
              color: "var(--pink-2)",
              lineHeight: 1,
              marginRight: "0.5em",
              marginTop: "-0.3em",
              flexShrink: 0,
              zIndex: 1,
              minWidth: "120px",
              textAlign: "right",
              filter: "drop-shadow(0 2px 8px rgba(255, 0, 128, 0.08))"
            }}
          >
            1
          </div>
          {/* Vertical divider */}
          <div style={{
            width: "2px",
            height: "80px",
            background: "linear-gradient(to bottom, var(--pink-2), transparent)",
            marginRight: "2.5rem",
            borderRadius: "2px",
            opacity: 0.25
          }} />
          <div style={{ zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FaLightbulb
              style={{
                color: "var(--pink-3)",
                fontSize: "2.2em",
                marginBottom: "0.3em",
              }}
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
              Strategy, requirements, and architecture for scalable, thoughtful solutions.
            </div>
          </div>
        </DevProcessCircle>
        {/* Step 2: Build */}
        <DevProcessCircle
          style={{
            background: "none",
            boxShadow: "none",
            position: "relative",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "380px",
            height: "auto",
            minHeight: "180px",
            padding: "var(--spacing-m) var(--spacing-xl)",
          }}
        >
          <div
            style={{
              fontSize: "12rem",
              fontWeight: 900,
              color: "var(--pink-3)",
              lineHeight: 1,
              marginRight: "0.5em",
              marginTop: "-0.3em",
              flexShrink: 0,
              zIndex: 1,
              minWidth: "120px",
              textAlign: "right",
              filter: "drop-shadow(0 2px 8px rgba(255, 0, 128, 0.08))"
            }}
          >
            2
          </div>
          {/* Vertical divider */}
          <div style={{
            width: "2px",
            height: "80px",
            background: "linear-gradient(to bottom, var(--pink-3), transparent)",
            marginRight: "2.5rem",
            borderRadius: "2px",
            opacity: 0.25
          }} />
          <div style={{ zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FaCogs
              style={{
                color: "var(--pink-4)",
                fontSize: "2.2em",
                marginBottom: "0.3em",
              }}
            />
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
              Iterative coding, testing, and integration of backend and frontend features.
            </div>
          </div>
        </DevProcessCircle>
        {/* Step 3: Launch */}
        <DevProcessCircle
          style={{
            background: "none",
            boxShadow: "none",
            position: "relative",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "380px",
            height: "auto",
            minHeight: "180px",
            padding: "var(--spacing-m) var(--spacing-xl)",
          }}
        >
          <div
            style={{
              fontSize: "12rem",
              fontWeight: 900,
              color: "var(--pink-4)",
              lineHeight: 1,
              marginRight: "0.5em",
              marginTop: "-0.3em",
              flexShrink: 0,
              zIndex: 1,
              minWidth: "120px",
              textAlign: "right",
              filter: "drop-shadow(0 2px 8px rgba(255, 0, 128, 0.08))"
            }}
          >
            3
          </div>
          {/* Vertical divider */}
          <div style={{
            width: "2px",
            height: "80px",
            background: "linear-gradient(to bottom, var(--pink-4), transparent)",
            marginRight: "2.5rem",
            borderRadius: "2px",
            opacity: 0.25
          }} />
          <div style={{ zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FaRocket
              style={{
                color: "var(--pink-6)",
                fontSize: "2.2em",
                marginBottom: "0.3em",
              }}
            />
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
              Deploy, monitor, and support for a smooth, successful launch and beyond.
            </div>
          </div>
        </DevProcessCircle>

      </DevProcessCircleContainer>
    </DevProcessContainer>
  );
};

export default DevelopmentProcess;
