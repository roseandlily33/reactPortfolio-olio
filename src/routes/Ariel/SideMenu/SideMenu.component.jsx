import React, { useEffect, useState } from "react";
import { SideMenuContainer, SideMenuLink } from "./SideMenu.styles";

const sectionLabels = [
  "Project Goal",
  "Before & After",
  "Timeline",
  "Color Palettes",
  "Phases",
  "Testimonial",
  "Contact",
];

const SideMenu = ({ sectionIds }) => {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      let found = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            found = id;
            break;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <SideMenuContainer>
      {sectionIds.map((id, idx) => (
        <SideMenuLink
          key={id}
          active={active === id}
          onClick={() => scrollToSection(id)}
        >
          {sectionLabels[idx]}
        </SideMenuLink>
      ))}
    </SideMenuContainer>
  );
};

export default SideMenu;
