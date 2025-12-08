import { Section } from "./Ariel.styles";

const ProcessTimelineAriel = () => (
  <Section>
    <h2>Process Timeline</h2>
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: "1.5rem 0 0 0",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <li
        style={{
          background: "rgba(255,255,255,0.85)",
          borderRadius: "18px",
          boxShadow: "0 2px 12px rgba(241,116,150,0.10)",
          padding: "1.2rem 1rem",
        }}
      >
        <strong style={{ color: "var(--darkPink)" }}>
          Phase 1 (Sept 7, 2025):
        </strong>{" "}
        Ariel started with her own design. I created mockups, color palettes,
        font options, and a logo to unify the brand. After a discovery call, we
        clarified the target audience, streamlined navigation, and identified
        unnecessary pages. I provided a detailed list of recommendations for
        improvement.
      </li>
      <li
        style={{
          background: "rgba(255,255,255,0.85)",
          borderRadius: "18px",
          boxShadow: "0 2px 12px rgba(241,116,150,0.10)",
          padding: "1.2rem 1rem",
        }}
      >
        <strong style={{ color: "var(--darkPink)" }}>
          Phase 2 (Sept 13, 2025):
        </strong>{" "}
        Ariel implemented the new color palette, fonts, and many
        recommendations. I reviewed the updated site, suggested further
        refinements, and helped combine and reorganize content for clarity. The
        brand is now visually cohesive and much more engaging.
      </li>
    </ul>
  </Section>
);

export default ProcessTimelineAriel;
