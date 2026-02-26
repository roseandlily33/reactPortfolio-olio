import React, { useRef } from "react";
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
  TimelineBadge,
} from "./Packages.styles";
import { PackageInfo } from "./PackageInfo.info";
import { RetainerTitle } from "../Retainer/Retainer.styles";

const glassBg = "rgba(255,255,255,0.45)";
const colorMap = {
  "Design Foundation": {
    bg: glassBg,
    border: "#FF8C40",
    title: "#FF8C40",
    icon: <FaMapMarkedAlt />,
    badgeBg: "#ffe3d0", // lighter orange
  },
  "Website Essentials": {
    bg: glassBg,
    border: "#f6a9be",
    title: "#f6a9be",
    icon: <FaRocket />,
    badgeBg: "#fde6ef", // lighter pink
  },
  "Professional Website": {
    bg: glassBg,
    border: "#f17496",
    title: "#f17496",
    icon: <FaChartLine />,
    badgeBg: "#ffe3ec", // lighter rose
  },
  "Custom Platform": {
    bg: glassBg,
    border: "#ed4672",
    title: "#ed4672",
    icon: <FaLayerGroup />,
    badgeBg: "#ffe0ea", // lighter berry
  },
};

const PackagesComponent = () => {
  const gridRef = useRef();

  return (
    <PackagesSection>
      <p className="priceP">
        Package prices are starting rates and include core deliverables. For a
        tailored quote or to discuss your needs, just get in touch!
      </p>
      <PackagesGrid ref={gridRef}>
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
              <PackageDescription>{pkg.description}</PackageDescription>

              {pkg.timeline && (
                <TimelineBadge $color={color.title} $bg={color.badgeBg}>
                  <FaClock style={{ marginRight: "0.3em" }} />
                  {pkg.timeline}
                </TimelineBadge>
              )}

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
};

export default PackagesComponent;
