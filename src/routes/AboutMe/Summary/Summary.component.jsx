import {
  HowIWorkColumn,
  AboutMeColumn,
  SummarySection,
} from "./Summary.styles";

const SummaryComponent = () => {
  return (
    <SummarySection>
      <AboutMeColumn>
        <h3>Who I am</h3>
        <p style={{ maxWidth: "80%" }}>
          <strong>Full Stack Developer & UX/UI Designer</strong> with 4+ years
          building scalable, accessible web solutions.
          <br />I specialize in clean architecture, performance-focused builds,
          and thoughtful interface design.
        </p>
      </AboutMeColumn>
      <HowIWorkColumn>
        <h3>How I Work</h3>
        <ul>
          <li>Strategy before design</li>
          <li>Design with intention</li>
          <li>Accessibility baked in</li>
          <li>Support beyond launch</li>
        </ul>
      </HowIWorkColumn>
    </SummarySection>
  );
};

export default SummaryComponent;
