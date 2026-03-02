import React from "react";
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
import { PackageInfo as RawPackageInfo } from "./PackageInfo.info";

const glassBg = "rgba(255,255,255,0.45)";
const PackageInfo = [
  {
    title: "Design Foundation",
    bg: glassBg,
    border: "#FF8C40",
    titleColor: "#FF8C40",
    icon: <FaMapMarkedAlt />,
    badgeBg: "#ffe3d0",
    ...RawPackageInfo.find((p) => p.title === "Design Foundation"),
  },
  {
    title: "Website Essentials",
    bg: glassBg,
    border: "#f6a9be",
    titleColor: "#f6a9be",
    icon: <FaRocket />,
    badgeBg: "#fde6ef",
    ...RawPackageInfo.find((p) => p.title === "Website Essentials"),
  },
  {
    title: "Professional Website",
    bg: glassBg,
    border: "#f17496",
    titleColor: "#f17496",
    icon: <FaChartLine />,
    badgeBg: "#ffe3ec",
    ...RawPackageInfo.find((p) => p.title === "Professional Website"),
  },
  {
    title: "Custom Platform",
    bg: glassBg,
    border: "#ed4672",
    titleColor: "#ed4672",
    icon: <FaLayerGroup />,
    badgeBg: "#ffe0ea",
    ...RawPackageInfo.find((p) => p.title === "Custom Platform"),
  },
];

const PackagesComponent = () => {
  return (
    <PackagesSection>
      <p className="priceP">
        Package prices are starting rates and include core deliverables. For a
        tailored quote or to discuss your needs, just get in touch!
      </p>
      <PackagesGrid>
        {PackageInfo?.map((pkg) => (
          <PackageCard
            key={pkg.title}
            $bg={pkg.bg}
            $border={pkg.border}
            $accent={pkg.border}
            $accentSoft={pkg.bg}
          >
            <PackageIcon $titleColor={pkg.titleColor}>{pkg.icon}</PackageIcon>
            <PackageTitle $titleColor={pkg.titleColor}>
              {pkg.title}
            </PackageTitle>
            <PackagePrice>Starting at: {pkg.startingAt}</PackagePrice>
            <PackageDescription>{pkg.description}</PackageDescription>

            {pkg.timeline && (
              <TimelineBadge $color={pkg.titleColor} $bg={pkg.badgeBg}>
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
                        style={{ color: pkg.titleColor, marginRight: "0.5em" }}
                      />
                      {feature}
                    </li>
                  ))}
                </PackageFeatures>
              </div>
            </PackageDetails>
          </PackageCard>
        ))}
      </PackagesGrid>
    </PackagesSection>
  );
};

export default PackagesComponent;
