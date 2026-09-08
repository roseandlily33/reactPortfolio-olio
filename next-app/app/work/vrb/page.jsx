import VRBOverview from "./vrbOverview/vrbOverview";
import VRBBusiness from "./vrbBusiness/vrbBusiness";
import VRBWorkflow from "./vrbWorkflow/vrbWorkflow";
import VRBServices from "./vrbServices/vrbServices";
import VRBEdge from "./vrbEdge/vrbEdge";
import VRBFinal from "./vrbFinal/vrbFinal";

const VRBPage = () => {
  return (
    <main>
      <VRBOverview />
      <VRBBusiness />
      <VRBWorkflow />
      <VRBServices />
      <VRBEdge />
      <VRBFinal />
    </main>
  );
};

export default VRBPage;
