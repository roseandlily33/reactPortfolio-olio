import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactMeSection } from "./AboutMe.styles";
import PrimaryButton from "../../components/Buttons/PrimaryButton.component";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

// List of services for the dropdown (alphabetical order, matches current offerings)
const contactServices = [
  // Uncertain option
  "I'm not sure yet (let's chat)",
  // Packages
  "Design Foundation",
  "Website Essentials",
  "Professional Website",
  "Custom Platform",
  // Retainers
  "Mini - Monthly Retainer",
  "Boost - Quarterly Retainer",
  "Momentum - Annual Retainer",
  // Services
  "UI/UX Audit",
  "Website Redesign",
  "Performance Optimization",
  "SEO Setup",
  "E-Commerce Integration",
  "Blog Setup",
  "API Integration",
  "Maintenance & Support",
  "Content Management System (CMS)",
  "Branding & Logo Design",
  "Hosting & Deployment",
  "Training & Documentation",
  "Cyber Security Review",
  "Custom Email Solutions",
];

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mu6c7oe",
        "template_nijrfml",
        form.current,
        "QJItZZ3zOkjdjFwZx",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    setName("");
    setEmail("");
    setMessage("");
    setSelectedService("");
  };

  return (
    <ContactMeSection>
      <h3>Let’s Build Something Amazing Together</h3>
      <p
        style={{
          marginBottom: "0.5rem",
          fontWeight: "400",
          fontSize: "1.1rem",
        }}
      >
        Interested in working with me? Select what you need and tell me about
        your project!
      </p>
      <div className="contact-row">
        <div className="contact-form-col">
          <form ref={form} onSubmit={handleFormSubmit}>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Email: </label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Service:</label>
            <select
              name="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="">
                Select a service (or choose "I'm not sure yet")
              </option>
              {contactServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <label>Message:</label>
            <textarea
              type="text"
              name="message"
              rows="4"
              cols="40"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <PrimaryButton
              span="Send Your Request"
              onClick={handleFormSubmit}
            />
          </form>
        </div>
        <div className="contact-info-col">
          <div className="contact-info">
            <div className="contact-row-item">
              <a
                href="mailto:vrose834@email.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope /> <span className="contact-label">Email</span>{" "}
                vrose834@email.com
              </a>
            </div>
            <div className="contact-row-item">
              <a
                href="tel:+19028171001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhoneAlt /> <span className="contact-label">Phone</span> +1
                (902) 817-1001
              </a>
            </div>
            <div className="icon-link-row">
              <div className="contact-row-item">
                <span>
                  <FaMapMarkerAlt />{" "}
                  <span className="contact-label">Location</span> Halifax NS, CA
                </span>
              </div>
              <a
                href="https://github.com/roseandlily33"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/victoria-benoit-3rose3/"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContactMeSection>
  );
};

export default ContactMe;
