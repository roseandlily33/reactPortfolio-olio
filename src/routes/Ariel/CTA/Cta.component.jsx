import { CTAButton } from "./Cta.styles";
import { useNavigate } from "react-router-dom";
import {
  SectionHeader,
  SectionText,
} from "../../CaseStudies/bloom_and_berry/Campaign/CampaignBB.styles";


import styled from "styled-components";

const CenteredCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

const CTA = () => {
  const navigate = useNavigate();

  return (
    <CenteredCTAContainer>
      <SectionHeader>Let’s Collaborate!</SectionHeader>
      <SectionText>
        Ready to take your project to the next level? Let’s work together to
        create something exceptional!
      </SectionText>
      <CTAButton onClick={() => navigate("/Work")}>
        Work with Me &rarr;
      </CTAButton>
    </CenteredCTAContainer>
  );
};

export default CTA;
