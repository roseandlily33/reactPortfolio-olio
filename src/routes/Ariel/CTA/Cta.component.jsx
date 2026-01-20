import { CTAButton } from "./Cta.styles";
import { useNavigate } from "react-router-dom";
import {
  SectionHeader,
  SectionText,
} from "../../CaseStudies/bloom_and_berry/Campaign/CampaignBB.styles";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <>
      <SectionHeader>Let’s Collaborate!</SectionHeader>
      <SectionText>
        Ready to take your project to the next level? Let’s work together to
        create something exceptional!
      </SectionText>
      <CTAButton onClick={() => navigate("/Work")}>
        Work with Me &rarr;
      </CTAButton>
    </>
  );
};

export default CTA;
