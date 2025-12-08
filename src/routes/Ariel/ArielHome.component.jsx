import Phase1Ariel from "./Phase1.component";
import Phase2Ariel from "./Phase2.component";
import ColorPalettesAriel from "./ColourPalettes.component";
import BeforeAndAfter from "./BeforeAndAfter.component";
import GoalAriel from "./Goal.component";
import ProcessTimelineAriel from "./TimelineAriel.component";
import { ArielMain } from "./Ariel.styles";

const ArielHome = () => {
  return (
    <ArielMain>
      <GoalAriel />
      <BeforeAndAfter />
      <ProcessTimelineAriel />
      <ColorPalettesAriel />
      <Phase1Ariel />
      <Phase2Ariel />
    </ArielMain>
  );
};

export default ArielHome;
