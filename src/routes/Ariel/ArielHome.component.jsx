import SideMenu from "./SideMenu/SideMenu.component";
import ColorPalettesAriel from "./ColourPalette/ColourPalettes.component";
import BeforeAndAfter from "./BeforeAndAfter/BeforeAndAfter.component";
import GoalAriel from "./Goal/Goal.component";
import Phases from "./Phases/Phases.component";
import ProcessTimelineAriel from "./Timeline/TimelineAriel.component";
import { ArielMain, ArielLayout } from "./Ariel.styles";
import Testimonial from "./Testimonial/Testimonial.component";
import CTASection from "./CTA/Cta.component";

const sectionIds = [
  "goal",
  "before-after",
  "timeline",
  "color-palettes",
  "phases",
  "testimonial",
  "cta",
];

const ArielHome = () => {
  return (
    <ArielLayout>
      <SideMenu sectionIds={sectionIds} />
      <ArielMain>
        <section id="goal">
          <GoalAriel />
        </section>
        <section id="before-after">
          <BeforeAndAfter />
        </section>
        <section id="timeline">
          <ProcessTimelineAriel />
        </section>
        <section id="color-palettes">
          <ColorPalettesAriel />
        </section>
        <section id="phases">
          <Phases />
        </section>
        <section id="testimonial">
          <Testimonial />
        </section>
        <section id="cta">
          <CTASection />
        </section>
      </ArielMain>
    </ArielLayout>
  );
};

export default ArielHome;
