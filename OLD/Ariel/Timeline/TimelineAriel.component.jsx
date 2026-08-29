import { TimelineList, TimelineItem } from "./Timeline.styles";
import {
  SectionHeader,
  SubHeader,
  SectionText,
} from "../../CaseStudies/bloom_and_berry/Campaign/CampaignBB.styles";

const ProcessTimelineAriel = () => (
  <>
    <SectionHeader>Process Timeline</SectionHeader>
    <TimelineList>
      <TimelineItem>
        <SubHeader>Phase 1 (Sept 7, 2025):</SubHeader>
        <SectionText>
          Ariel started with her own design. I created mockups of a rough draft
          of what it could look like, color palettes, font options, and a logo
          to unify the brand. After a discovery call, we clarified the target
          audience, streamlined navigation, and identified unnecessary pages. I
          provided a detailed list of recommendations for improvement.
        </SectionText>
      </TimelineItem>
      <TimelineItem>
        <SubHeader>Phase 2 (Sept 13, 2025):</SubHeader>
        <SectionText>
          Ariel implemented the new color palette, fonts, and many
          recommendations. I reviewed the updated site, suggested further
          refinements, and helped combine and reorganize content for clarity.
          The brand is now visually cohesive and much more engaging. 
        </SectionText>
      </TimelineItem>
      <TimelineItem>
        <SubHeader>Phase 3: (October, 2025)</SubHeader>
        <SectionText>
          We worked on improving the overall structure of the site, spacing etc
          for the main page and the contact page. We went over highlighting
          certain details, discussing where certain things should be moved to
          make the user experience more fluid and intuitive.
        </SectionText>
      </TimelineItem>
    </TimelineList>
  </>
);

export default ProcessTimelineAriel;
