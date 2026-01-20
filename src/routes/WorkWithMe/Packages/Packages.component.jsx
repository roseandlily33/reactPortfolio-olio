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

const glassBg = "rgba(255,255,255,0.15)";
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
    <PackagesGrid>
      {PackageInfo.map((pkg) => {
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
            <div className="bubbles-bg">
              <div className="bubble bubble1" />
              <div className="bubble bubble2" />
              <div className="bubble bubble3" />
            </div>
            <PackageIcon $titleColor={color.title}>{color.icon}</PackageIcon>
            <PackageTitle $titleColor={color.title}>{pkg.title}</PackageTitle>
            <PackagePrice>
              <strong>Starting at:</strong> {pkg.startingAt}
            </PackagePrice>
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
