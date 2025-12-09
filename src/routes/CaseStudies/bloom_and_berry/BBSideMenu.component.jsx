import React, { useEffect, useState } from "react";
import {
  SideMenuContainer,
  SideMenuLink,
} from "../../Ariel/SideMenu/SideMenu.styles";

const sectionIds = [
  "overview",
  "campaign",
  "content-strategy",
  "flavors",
  "gallery",
  "completed-project",
];

const sectionLabels = [
  "Overview",
  "Market Campaign",
  "Content Strategy",
  "Juice Flavors",
  "Gallery",
  "Completed Project",
];

const BBSideMenu = () => {
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
  }, []);

  const scrollToSection = (id) => {
    if (id === "completed-project") {
      window.open("/BloomAndBerry", "_blank");
      return;
    }
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
          style={
            id === "completed-project"
              ? { fontSize: "0.98rem", fontWeight: 600 }
              : {}
          }
        >
          {sectionLabels[idx]}
        </SideMenuLink>
      ))}
    </SideMenuContainer>
  );
};

export default BBSideMenu;
