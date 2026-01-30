import {
  SectionHeader,
  SubHeader,
  SectionText,
} from "../../CaseStudies/bloom_and_berry/Campaign/CampaignBB.styles";
const GoalAriel = () => {
  const link = "https://www.arielboesenerperformancehorses.com/";
  return (
    <>
      <div style={{marginBottom: 'var(--spacing-l)'}}>
        <h2 style={{ marginBottom: "var(--spacing-m)" }}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "var(--spacing-xl)", color: "var(--pink-5)" }}
        >
          Ariel Boesener Performance Horses
        </a>
      </h2>
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
    </>
  );
};

export default GoalAriel;
