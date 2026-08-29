import {
  SectionHeader,
  SubHeader,
  SectionText,
} from "../../CaseStudies/bloom_and_berry/Campaign/CampaignBB.styles";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs.component";
const GoalAriel = () => {
  const link = "https://www.arielboesenerperformancehorses.com/";
  return (
    <>
      <div style={{ marginBottom: "var(--spacing-l)" }}>
        <Breadcrumbs
          prev="Case Studies"
          prevLink="/CaseStudies"
          current="Ariel Boesener Performance Horses"
        />
        <h1 style={{ marginBlock: "var(--spacing-m)" }}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "var(--spacing-xxl)" }}
          >
            Ariel Boesener Performance Horses
          </a>
        </h1>
        <p style={{ fontStyle: "italic" }}>
          September 7, 2025 &ndash; Currently in progress
        </p>
      </div>
      <SectionHeader>Project Goal</SectionHeader>

      <SectionText>
        The primary goal is to attract new customers and increase engagement for
        Ariel’s business. The target audience is middle-aged women, so the
        design needed to be professional, welcoming, and organized, with content
        tailored to their interests.
      </SectionText>
      <SubHeader>Project Type</SubHeader>
      <SectionText>
        This is a <strong>design consultation project</strong> where Ariel is
        hands-on, implementing all changes herself. My role is to guide, advise,
        and support her through each step of the redesign process, ensuring
        every decision aligns with her brand and goals.
      </SectionText>
      <SubHeader>Key Note</SubHeader>
      <SectionText>
        <em>
          The design notes and visuals shown here are rough drafts and works in
          progress. Information, navigation, and layouts are still being
          organized and refined. 
        </em>
      </SectionText>
    </>
  );
};

export default GoalAriel;
