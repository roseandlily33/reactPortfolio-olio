import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactMeSection,
  ContactRow,
  ContactFormCol,
  ContactInfoCol,
  ContactInfo,
} from "./Contact.styles";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton.component";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { contactServices } from "./ContactServices.info";

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
      <div className="contact-intro">
        Ready to start your project or have questions? Select a service or just
        say hello—let’s connect and make something great!
      </div>
      <p>Form is currently unavailable</p>
      {/* <ContactRow>
        <ContactFormCol>
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
        </ContactFormCol>

      </ContactRow> */}
      <ContactInfoCol>
        <ContactInfo>
          <div className="contact-row-item">
            <a
              href="mailto:victoria.benoit.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope /> <span className="contact-label">Email</span>{" "}
              victoria.benoit.dev@gmail.com
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
        </ContactInfo>
      </ContactInfoCol>
    </ContactMeSection>
  );
};

export default ContactMe;
