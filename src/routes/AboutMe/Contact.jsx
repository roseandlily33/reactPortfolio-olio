import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactMeSection } from "./AboutMe.styles";
import PrimaryButton from "../../components/Buttons/PrimaryButton.component";

// List of services for the dropdown (alphabetical order, matches current offerings)
const contactServices = [
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
      <p style={{ marginBottom: "1rem" }}>
        Interested in working with me? Select what you need and tell me about
        your project!
      </p>
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
          required
          style={{
            marginBottom: "1rem",
            padding: "0.5rem",
            borderRadius: "999px",
            border: "1px solid var(--medBrown)",
            fontFamily: "var(--headerFont)",
            color: "var(--medBrown)",
            background: "#fff",
          }}
        >
          <option value="" disabled>
            Select a service...
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
        <PrimaryButton span="Send Your Request" onClick={handleFormSubmit} />
      </form>
    </ContactMeSection>
  );
};

export default ContactMe;
