import { GoalSection } from "./Goal.styles";

const GoalAriel = () => {
  const link = "https://www.arielboesenerperformancehorses.com/";
  return (
    <GoalSection>
      <h2>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Ariel Boesener Performance Horses
        </a>
      </h2>
      <p className="goal-date">
        September 7, 2025 &ndash; Currently in progress
      </p>
      <h3>Project Goal</h3>
      <p>
        The primary goal is to attract new customers and increase engagement for
        Ariel’s business. The target audience is middle-aged women, so the
        design needed to be professional, welcoming, and organized, with content
        tailored to their interests.
      </p>
      <h4>Project Type</h4>
      <p>
        This is a <strong>design consultation project</strong> where Ariel is
        hands-on, implementing all changes herself. My role is to guide, advise,
        and support her through each step of the redesign process, ensuring
        every decision aligns with her brand and goals.
      </p>
    </GoalSection>
  );
};

export default GoalAriel;
