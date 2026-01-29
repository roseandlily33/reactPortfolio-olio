import { useNavigate } from "react-router-dom";
import { CTASection, CTABannerIcon, CTATrusted } from "./CTA.styles";
import { FaHandshake } from "react-icons/fa";
import CTAButton from "../../../components/Buttons/CTAButton/CTAButton";

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
          <CTAButton handleClick={handleClick} />
          <CTATrusted>
            <span>Trusted by:</span>
            <ul style={{ display: "flex", flexWrap: "wrap" }}>
              <li>
                <a href="/project/501">Yoda Safety Services</a>
              </li>
              <li>
                <a href="/project/502">Ariel Boesener Performance Horses</a>
              </li>
              <li>
                <a href="/project/503">InspectionPal</a>
              </li>
            </ul>
          </CTATrusted>
        </div>
      </div>
    </CTASection>
  );
};

export default CTA;
