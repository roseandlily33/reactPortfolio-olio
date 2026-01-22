import React, { useState } from "react";
import {
  FaCogs,
  FaBlog,
  FaPalette,
  FaDatabase,
  FaShieldAlt,
  FaEnvelopeOpenText,
  FaShoppingCart,
  FaServer,
  FaChartBar,
  FaTools,
  FaUserCheck,
  FaSearch,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";
import {
  ServicesSection,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServicesTitle,
  ServiceTitle,
} from "./Services.styles";
import { ServicesList } from "./Services.jsx";

const iconMap = {
  "API Integration": <FaCogs />,
  "Blog Setup": <FaBlog />,
  "Branding & Logo Design": <FaPalette />,
  "Content Management System (CMS)": <FaDatabase />,
  "Cyber Security Review": <FaShieldAlt />,
  "Custom Email Solutions": <FaEnvelopeOpenText />,
  "E-Commerce Integration": <FaShoppingCart />,
  "Hosting & Deployment": <FaServer />,
  "Maintenance & Support": <FaTools />,
  "Performance Optimization": <FaChartBar />,
  "SEO Setup": <FaSearch />,
  "Training & Documentation": <FaUserCheck />,
  "UI/UX Audit": <FaLaptopCode />,
  "Website Redesign": <FaGlobe />,
};

// Categorize services
const serviceCategories = {
  Optimization: [
    "Performance Optimization",
    "SEO Setup",
    "Maintenance & Support",
    "Cyber Security Review",
  ],
  Development: [
    "API Integration",
    "Blog Setup",
    "Content Management System (CMS)",
    "E-Commerce Integration",
    "Hosting & Deployment",
    "Custom Email Solutions",
  ],
  Design: [
    "UI/UX Audit",
    "Website Redesign",
    "Branding & Logo Design",
    "Training & Documentation",
  ],
};

const tabOrder = ["Optimization", "Development", "Design"];

const ServicesComponent = () => {
  const [activeTab, setActiveTab] = useState("Optimization");

  // Filter services for the current tab
  const filteredServices = ServicesList.filter((service) =>
    serviceCategories[activeTab].includes(service.title),
  );

  return (
    <ServicesSection>
      <ServicesTitle>Other Services</ServicesTitle>
      <p style={{ fontWeight: 500, marginBottom: "1.5rem" }}>
        The following services can be added to any project package or requested
        as standalone solutions. If you need something not listed here, or want
        to discuss a custom add-on, please reach out—I'm happy to tailor my
        services to your needs!
      </p>
      <div style={{ display: "flex", gap: "1.2rem", marginBottom: "2rem" }}>
        {tabOrder.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: activeTab === tab ? "var(--darkPink)" : "#fff",
              color: activeTab === tab ? "#fff" : "var(--darkPink)",
              border: "1.5px solid var(--darkPink)",
              borderRadius: "999px",
              fontWeight: 700,
              fontFamily: "var(--headerFont)",
              fontSize: "1.05rem",
              padding: "0.5rem 1.5rem",
              cursor: "pointer",
              boxShadow:
                activeTab === tab
                  ? "0 2px 12px rgba(241,116,150,0.10)"
                  : "none",
              transition: "all 0.18s",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <ServicesGrid>
        {filteredServices.map((service) => (
          <ServiceCard key={service.title}>
            <ServiceIcon>{iconMap[service.title] || <FaCogs />}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <div>{service.description}</div>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default ServicesComponent;
