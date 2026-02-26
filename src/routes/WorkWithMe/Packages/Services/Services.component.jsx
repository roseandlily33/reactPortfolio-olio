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
  ServicesLayout,
  ServicesListColumn,
  ServiceListItem,
  ServiceDetailCard,
  ServiceIcon,
  ServicesTitle,
  ServiceTitle,
} from "./Services.styles.jsx";
import { ServicesList } from "./Services.info.jsx";

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

const ServicesComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = ServicesList[selectedIndex];

  return (
    <ServicesSection>
      <ServicesTitle>Other Services</ServicesTitle>
      <p style={{ fontWeight: 500 }}>
        These services can be added to any project or requested on their own.
        Need something custom? Just ask—I’m happy to tailor solutions to your
        needs!
      </p>
      <ServicesLayout>
        <ServicesListColumn>
          {ServicesList.map((service, idx) => (
            <ServiceListItem
              key={service.title}
              className={selectedIndex === idx ? "active" : ""}
              onClick={() => setSelectedIndex(idx)}
            >
              <ServiceIcon>{iconMap[service.title] || <FaCogs />}</ServiceIcon>
              <span>{service.title}</span>
            </ServiceListItem>
          ))}
        </ServicesListColumn>
        <ServiceDetailCard>
          <ServiceIcon style={{ fontSize: "2.5rem", marginBottom: 12 }}>
            {iconMap[selectedService.title] || <FaCogs />}
          </ServiceIcon>
          <ServiceTitle style={{ fontSize: "1.18rem", marginBottom: 8 }}>
            {selectedService.title}
          </ServiceTitle>
          <div style={{ textAlign: "center", fontSize: "1.05rem" }}>
            {selectedService.description}
          </div>
        </ServiceDetailCard>
      </ServicesLayout>
    </ServicesSection>
  );
};

export default ServicesComponent;
