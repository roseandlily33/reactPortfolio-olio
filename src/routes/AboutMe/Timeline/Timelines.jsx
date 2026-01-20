import React from "react";
import { TimelineContainer, TimelineItem } from "./Timeline.styles";

const Timeline = () => {
  const events = [
    {
      year: "2020",
      description:
        "Embarked on my IT Professional course at the Center for Distance Education.",
    },
    {
      year: "2021",
      description:
        "Graduated from the IT Professional course and began exploring Codecademy courses to expand my knowledge.",
    },
    {
      year: "2022",
      description:
        "Enrolled in and successfully completed the UNB Coding Boot Camp, gaining hands-on experience in full-stack development.",
    },
    {
      year: "2023",
      description:
        "Started advanced programming courses with Zero to Mastery to deepen my expertise in modern web technologies.",
    },
    {
      year: "2024",
      description:
        "Collaborated on client projects and began taking design courses to enhance my UI/UX skills.",
    },
    {
      year: "2025",
      description:
        "Continuing to refine my skills through ongoing courses and client projects, while staying updated with industry trends.",
    },
    {
      year: "2026",
      description:
        "Beginning 2026 with a commitment to expanding my skills and taking on impactful projects.",
    },
  ];

  return (
    <TimelineContainer>
      {events?.map((event, index) => (
        <TimelineItem key={index}>
          <div className="bubble"></div>
          <h4>{event?.year}</h4>
          <p>{event?.description}</p>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
