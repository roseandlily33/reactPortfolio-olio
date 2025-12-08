import { CTASection, CTAButton } from "./Cta.styles";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <CTASection>
      <p>
        Ready to take your project to the next level? Let’s work together to
        create something exceptional!
      </p>
      <CTAButton onClick={() => navigate("/Work")}>
        Work with Me &rarr;
      </CTAButton>
    </CTASection>
  );
};

export default CTA;
