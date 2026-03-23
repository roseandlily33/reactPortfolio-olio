import { CTAButtonContainer } from "./CTAButton.styles";
const CTAButton = ({ handleClick, span = "Ready to work together?" }) => {
  return (
    <CTAButtonContainer
      onClick={handleClick ? handleClick : undefined}
      tabIndex={0}
      role="button"
    >
      {span} <span className="cta-arrow">→</span>
    </CTAButtonContainer>
  );
};

export default CTAButton;
