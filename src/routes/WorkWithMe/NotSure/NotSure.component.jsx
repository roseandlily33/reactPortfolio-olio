import {
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
  SectionDivider,
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



const blobSVG = (color) => (
  <svg className="blob-bg" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M44.6,-53.2C58.2,-44.2,68.7,-29.2,72.2,-12.7C75.7,3.8,72.2,21.7,62.2,34.7C52.2,47.7,35.7,55.8,18.2,61.2C0.7,66.7,-17.8,69.5,-33.2,62.2C-48.6,54.9,-61,37.5,-66.2,19.1C-71.4,0.7,-69.4,-18.7,-60.7,-33.2C-52,-47.7,-36.7,-57.3,-20.1,-63.2C-3.5,-69.1,14.3,-71.2,29.2,-65.2C44.1,-59.2,44.6,-53.2,44.6,-53.2Z"
      transform="translate(100 80) scale(1.2)"
      fill={color}
      fillOpacity="0.18"
    />
  </svg>
);


const NotSure = () => (
  <>
    <SectionDivider />
    <NotSureSection>
      <NotSureTitleRow>
        {/* <FaRegQuestionCircle
          style={{
            color: "var(--medGrey)",
            fontSize: "1.5rem",
            marginRight: "0.7rem",
          }}
        /> */}
        <NotSureTitle>Not sure which package fits?</NotSureTitle>
      </NotSureTitleRow>
      <NotSureList>
        {packageDescriptions.map((pkg) => (
          <NotSureItem key={pkg.label}>
            {blobSVG(pkg.color)}
            <div className="blob-content">
              <span className="pkg-icon" style={{ color: pkg.color }}>
                {pkg.icon}
              </span>
              <span className="pkg-label" style={{ color: pkg.color }}>
                {pkg.label}:
              </span>
              <span className="pkg-desc">{pkg.desc}</span>
            </div>
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
          textAlign: "center",
        }}
      >
        Not seeing exactly what you need? Every project is unique—these packages
        are just starting points. We’ll tailor everything to fit your goals and
        vision as we collaborate.
      </div>
    </NotSureSection>
    <SectionDivider />
  </>
);

export default NotSure;
