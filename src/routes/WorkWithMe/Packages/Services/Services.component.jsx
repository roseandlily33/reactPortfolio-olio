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
  ServicesTabs,
} from "./Services.styles.jsx";
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
      <p style={{ fontWeight: 500, marginBottom: "var(--spacing-l)" }}>
        These services can be added to any project or requested on their own.
        Need something custom? Just ask—I’m happy to tailor solutions to your
        needs!
      </p>
      <ServicesTabs>
        {tabOrder.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </ServicesTabs>
      <ServicesGrid>
        {filteredServices.map((service) => (
          <ServiceCard key={service.title}>
            <ServiceIcon>{iconMap[service.title] || <FaCogs />}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <div style={{ textAlign: "center" }}>{service.description}</div>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default ServicesComponent;
