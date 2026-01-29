import { CTAButtonContainer } from "./CTAButton.styles";
const CTAButton = ({ handleClick }) => {
  return (
    <CTAButtonContainer onClick={handleClick}>
      Ready to work together? <span className="cta-arrow">→</span>
    </CTAButtonContainer>
  );
};

export default CTAButton;
