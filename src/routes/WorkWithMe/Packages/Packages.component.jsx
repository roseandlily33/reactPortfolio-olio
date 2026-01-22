import {
  FaRocket,
  FaChartLine,
  FaLayerGroup,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import {
  PackagesSection,
  PackagesGrid,
  PackageCard,
  PackageTitle,
  PackagePrice,
  PackageDescription,
  PackageFeatures,
  PackageIcon,
  PackageDetails,
} from "./Packages.styles";
import { PackageInfo } from "./PackageInfo";
import { RetainerTitle } from "./Retainer.styles";

const glassBg = "rgba(255,255,255,0.45)";
const colorMap = {
  "Design Foundation": {
    bg: glassBg,
    border: "#FF8C40",
    title: "#FF8C40",
    icon: <FaMapMarkedAlt />,
  },
  "Website Essentials": {
    bg: glassBg,
    border: "#f6a9be",
    title: "#f6a9be",
    icon: <FaRocket />,
  },
  "Professional Website": {
    bg: glassBg,
    border: "#f17496",
    title: "#f17496",
    icon: <FaChartLine />,
  },
  "Custom Platform": {
    bg: glassBg,
    border: "#ed4672",
    title: "#ed4672",
    icon: <FaLayerGroup />,
  },
};

const PackagesComponent = () => (
  <PackagesSection>
    <RetainerTitle>Project Packages</RetainerTitle>
    <p style={{ fontWeight: 500, marginBottom: "1.5rem" }}>
      All package prices are listed as starting rates and reflect the base
      investment for each project type. Final pricing may vary depending on your
      specific needs, project complexity, and any additional features or
      customizations. Each package includes a set of core deliverables, with
      opportunities for add-ons or further collaboration. For a tailored quote
      or to discuss which package best fits your goals, please get in touch!
    </p>
    <PackagesGrid>
      {PackageInfo?.map((pkg) => {
        const colorKey = Object.keys(colorMap).find((key) =>
          pkg.title.toLowerCase().includes(key.toLowerCase()),
        );
        const color = colorMap[colorKey] || colorMap.Launch;
        return (
          <PackageCard
            key={pkg.title}
            $bg={color.bg}
            $border={color.border}
            $accent={color.border}
            $accentSoft={color.bg}
          >
            <PackageIcon $titleColor={color.title}>{color.icon}</PackageIcon>
            <PackageTitle $titleColor={color.title}>{pkg.title}</PackageTitle>
            <PackagePrice>Starting at: {pkg.startingAt}</PackagePrice>
            {pkg.timeline && (
              <div
                style={{
                  color: color.title,
                  fontWeight: 500,
                  marginBottom: "0.7rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5em",
                }}
              >
                <FaClock style={{ marginRight: "0.3em" }} />
                {pkg.timeline}
              </div>
            )}
            <PackageDescription>{pkg.description}</PackageDescription>

            <PackageDetails>
              <summary>
                Includes <span className="chev">⌄</span>
              </summary>
              <div className="includes-content">
                <PackageFeatures>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle
                        style={{ color: color.title, marginRight: "0.5em" }}
                      />
                      {feature}
                    </li>
                  ))}
                </PackageFeatures>
              </div>
            </PackageDetails>
          </PackageCard>
        );
      })}
    </PackagesGrid>
  </PackagesSection>
);

export default PackagesComponent;
