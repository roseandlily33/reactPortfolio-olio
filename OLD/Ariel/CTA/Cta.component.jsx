import { useNavigate } from "react-router-dom";
import CTAButton from "../../../components/Buttons/CTAButton/CTAButton";
import { StyledCTAContainer } from "./Cta.styles";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <StyledCTAContainer>
      <h4>Let’s Collaborate!</h4>
      <p>
        Ready to take your project to the next level? Let’s work together to
        create something exceptional!
      </p>
      <CTAButton onClick={() => navigate("/Work")} span="Work with Me &rarr;" />
   
    </StyledCTAContainer>
  );
};

export default CTA;
