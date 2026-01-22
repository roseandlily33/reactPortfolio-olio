import {
  FaRegQuestionCircle,
  FaMapMarkedAlt,
  FaRocket,
  FaChartLine,
  FaLayerGroup,
} from "react-icons/fa";
import {
  NotSureSection,
  NotSureList,
  NotSureItem,
  NotSureTitle,
  NotSureTitleRow,
} from "./NotSure.styles";

const packageDescriptions = [
  {
    label: "Design Foundation",
    desc: "Perfect if you need a strong visual and strategic base before building your site. Great for new brands or those wanting a design refresh before development.",
    color: "#FF8C40",
    icon: <FaMapMarkedAlt />,
  },
  {
    label: "Website Essentials",
    desc: "Ideal for small businesses or personal brands who want a clean, professional web presence with all the basics covered.",
    color: "#f6a9be",
    icon: <FaRocket />,
  },
  {
    label: "Professional Website",
    desc: "Best for growing businesses that need more pages, custom features, and a tailored experience to support their next stage.",
    color: "#f17496",
    icon: <FaChartLine />,
  },
  {
    label: "Custom Platform",
    desc: "For established businesses or startups needing a fully bespoke solution, advanced features, or complex workflows.",
    color: "#ed4672",
    icon: <FaLayerGroup />,
  },
];

const NotSure = () => (
  <NotSureSection>
    <NotSureTitleRow>
      <FaRegQuestionCircle
        style={{
          color: "var(--medGrey)",
          fontSize: "1.5rem",
          marginRight: "0.7rem",
        }}
      />
      <NotSureTitle>Not sure which package fits?</NotSureTitle>
    </NotSureTitleRow>
    <NotSureList>
      {packageDescriptions.map((pkg) => (
        <NotSureItem key={pkg.label}>
          <span
            style={{
              color: pkg.color,
              marginRight: "0.6em",
              fontSize: "1.35em",
              display: "flex",
              alignItems: "center",
            }}
          >
            {pkg.icon}
          </span>
          <span className="pkg-label" style={{ color: pkg.color }}>
            {pkg.label}:
          </span>{" "}
          <span className="pkg-desc">{pkg.desc}</span>
        </NotSureItem>
      ))}
    </NotSureList>
    <div
      style={{
        color: "var(--medGrey)",
        fontSize: "1.01rem",
        marginTop: "1.2rem",
        lineHeight: 1.6,
        fontWeight: 400,
      }}
    >
      Not seeing exactly what you need? Every project is unique—these packages
      are just starting points. We’ll tailor everything to fit your goals and
      vision as we collaborate.
    </div>
  </NotSureSection>
);

export default NotSure;
