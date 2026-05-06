
import { ContactMeSection, BookingButton, InfoBox, VRBLogoImg } from "./Contact.styles";
import VRBLogo from "../../../images/VRBLogo.png";

const ContactMe = () => {
  return (
    <ContactMeSection>
      <h3>Portfolio & Booking Information</h3>
      <InfoBox>
        <VRBLogoImg src={VRBLogo} alt="VRB Logo" />
        <div className="contact-text">
          <p>
            <strong>This site is a personal portfolio only.</strong> If you are interested in working with me professionally, please visit my dedicated booking and business site below. For project inquiries, collaborations, or to book a consultation, use the button provided.
          </p>
          <p>
            <em>All professional services, quotes, and bookings are now handled exclusively through my business site.</em>
          </p>
        </div>
        <BookingButton
          as="a"
          href="https://vrbwebdesignanddev.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Booking & Business Site
        </BookingButton>
        <span className="note">You will be redirected to VRB Web Design & Development for all professional inquiries.</span>
      </InfoBox>
    </ContactMeSection>
  );
};

export default ContactMe;
