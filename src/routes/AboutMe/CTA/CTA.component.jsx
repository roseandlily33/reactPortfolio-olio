import { useNavigate } from "react-router-dom";
import {
  CTASection,
  CTAButton,
  CTABannerIcon,
  CTATrusted,
} from "./CTA.styles";
import { FaHandshake } from "react-icons/fa";

const CTA = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/Work", { state: { scrollTo: "bottom" } });
  };

  return (
    <CTASection>
      <div className="cta-content">
        <CTABannerIcon>
          <FaHandshake />
        </CTABannerIcon>
        <div className="cta-text">
          <h3>Let’s Build Something Great Together!</h3>
          <p className="cta-subtext">
            From idea to launch, I help brands and people create web experiences
            that stand out and convert.
          </p>
          <CTAButton onClick={handleClick}>
            Ready to work together? <span className="cta-arrow">→</span>
          </CTAButton>
          <CTATrusted>
            <span>Trusted by:</span>
            <ul>
              <li>
                <a href="/projects/501">Yoda Safety Services</a>
              </li>
              <li>
                <a href="/projects/502">Ariel Boesener Performance Horses</a>
              </li>
              <li>
                <a href="/projects/503">InspectionPal</a>
              </li>
            </ul>
          </CTATrusted>
        </div>
      </div>
    </CTASection>
  );
};

export default CTA;
