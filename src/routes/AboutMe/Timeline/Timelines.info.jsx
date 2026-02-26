import React, { useEffect, useState } from "react";
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

  // Animation: staggered reveal
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  useEffect(() => {
    let timeouts = [];
    events.forEach((_, idx) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleIndexes((prev) => [...prev, idx]);
        }, idx * 250),
      );
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <TimelineContainer>
      {events?.map((event, index) => {
        const align = index % 2 === 0 ? "left" : "right";
        const isVisible = visibleIndexes.includes(index);
        return (
          <TimelineItem
            key={index}
            align={align}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0)"
                : align === "left"
                  ? "translateY(40px) translateX(-40px)"
                  : "translateY(40px) translateX(40px)",
              transition:
                "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)",
              transitionDelay: `${index * 0.12}s`,
            }}
          >
            <div className="bubble" />
            <h4>{event?.year}</h4>
            <p>{event?.description}</p>
          </TimelineItem>
        );
      })}
    </TimelineContainer>
  );
};

export default Timeline;
