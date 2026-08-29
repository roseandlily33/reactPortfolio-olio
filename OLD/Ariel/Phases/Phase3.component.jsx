import React from "react";
import { CollapsibleText } from "./Phases.styles";
import {
  SectionHeader,
  // SubHeader,
  // SectionText,
  // SectionList,
} from "../../CaseStudies/bloom_and_berry/Campaign/CampaignBB.styles";

const phase3Text =
  "Phase 3 is currently in progress. This phase focuses on refining the user experience, adding advanced features, and ensuring the site is fully responsive and accessible. Continued collaboration and feedback will guide the final improvements and launch.";

const Phase3Ariel = () => {
  return (
    <>
      <SectionHeader>Phase 3 – In Progress</SectionHeader>
      <CollapsibleText>{phase3Text}</CollapsibleText>
      {/* Add carousel/images and more details as the phase progresses */}
    </>
  );
};

export default Phase3Ariel;
