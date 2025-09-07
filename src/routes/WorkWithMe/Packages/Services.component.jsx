import {
  FaCogs,
  FaBlog,
  FaPalette,
  FaDatabase,
  FaShieldAlt,
  FaEnvelopeOpenText,
  FaComments,
  FaShoppingCart,
  FaRocket,
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
  "Design Consultation": <FaComments />,
  "E-Commerce Integration": <FaShoppingCart />,
  "Elevate (Basic + Backend)": <FaRocket />,
  "Hosting & Deployment": <FaServer />,
  "Launch (Basic)": <FaRocket />,
  "Maintenance & Support": <FaTools />,
  "Performance Optimization": <FaChartBar />,
  "Scale (Full App)": <FaRocket />,
  "SEO Setup": <FaSearch />,
  "Training & Documentation": <FaUserCheck />,
  "UI/UX Audit": <FaLaptopCode />,
  "Website Redesign": <FaGlobe />,
};

const ServicesComponent = () => (
  <ServicesSection>
    <ServicesTitle>Other Services</ServicesTitle>
    <ServicesGrid>
      {ServicesList.map((service) => (
        <ServiceCard key={service.title}>
          <ServiceIcon>{iconMap[service.title] || <FaCogs />}</ServiceIcon>
          <ServiceTitle>{service.title}</ServiceTitle>
          <div>{service.description}</div>
        </ServiceCard>
      ))}
    </ServicesGrid>
  </ServicesSection>
);

export default ServicesComponent;
