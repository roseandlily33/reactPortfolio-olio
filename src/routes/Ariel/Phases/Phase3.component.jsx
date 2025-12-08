import React from "react";
import { PhaseSection, CollapsibleText } from "./Phases.styles";

const phase3Text =
  "Phase 3 is currently in progress. This phase focuses on refining the user experience, adding advanced features, and ensuring the site is fully responsive and accessible. Continued collaboration and feedback will guide the final improvements and launch.";

const Phase3Ariel = () => {
  return (
    <PhaseSection>
      <h3>Phase 3 – In Progress</h3>
      <CollapsibleText>{phase3Text}</CollapsibleText>
      {/* Add carousel/images and more details as the phase progresses */}
    </PhaseSection>
  );
};

export default Phase3Ariel;
