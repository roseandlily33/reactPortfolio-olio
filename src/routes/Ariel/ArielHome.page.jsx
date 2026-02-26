// import SideMenu from "./SideMenu/SideMenu.component";
import ColorPalettesAriel from "./ColourPalette/ColourPalettes.component";
import BeforeAndAfter from "./BeforeAndAfter/BeforeAndAfter.component";
import GoalAriel from "./Goal/Goal.component";
import Phases from "./Phases/Phases.component";
import ProcessTimelineAriel from "./Timeline/TimelineAriel.component";
import { ArielMain, ArielLayout, Section } from "./Ariel.styles";
import Testimonial from "./Testimonial/Testimonial.component";
import CTASection from "./CTA/Cta.component";
import BackToTopButton from "../../components/BackToTop/BackToTop.button";


// const sectionIds = [
//   "goal",
//   "before-after",
//   "timeline",
//   "color-palettes",
//   "phases",
//   "testimonial",
//   "cta",
// ];

const ArielHome = () => {
  return (
    <ArielLayout>
      {/* <SideMenu sectionIds={sectionIds} /> */}
      <ArielMain>
        <Section id="goal">
          <GoalAriel />
        </Section>
        <Section id="before-after">
          <BeforeAndAfter />
        </Section>
        <Section id="timeline">
          <ProcessTimelineAriel />
        </Section>
        <Section id="color-palettes">
          <ColorPalettesAriel />
        </Section>
        <Section id="phases">
          <Phases />
        </Section>
        <Section id="testimonial">
          <Testimonial />
        </Section>
        <div id="cta">
          <CTASection />
        </div>
      </ArielMain>
      <BackToTopButton />
    </ArielLayout>
  );
};

export default ArielHome;
