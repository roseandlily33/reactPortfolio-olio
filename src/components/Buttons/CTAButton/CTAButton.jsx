import { CTAButtonContainer } from "./CTAButton.styles";
const CTAButton = ({ handleClick, span = "Ready to work together?" }) => {
  return (
    <CTAButtonContainer onClick={handleClick}>
      {span} <span className="cta-arrow">→</span>
    </CTAButtonContainer>
  );
};

export default CTAButton;
