import {
  FaRocket,
  FaChartLine,
  FaLayerGroup,
  FaCheckCircle,
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
} from "./Packages.styles";
import { PackageInfo } from "./PackageInfo";

const iconMap = {
  Launch: <FaRocket />,
  Elevate: <FaChartLine />,
  Scale: <FaLayerGroup />,
};

const PackagesComponent = () => (
  <PackagesSection>
    <h2>Project Packages</h2>
    <PackagesGrid>
      {PackageInfo.map((pkg) => (
        <PackageCard key={pkg.title}>
          <PackageIcon>
            {iconMap[pkg.title.split(" ")[0]] || <FaRocket />}
          </PackageIcon>
          <PackageTitle>{pkg.title}</PackageTitle>
          <PackagePrice>
            <strong>Starting at:</strong> {pkg.startingAt}
          </PackagePrice>
          <PackageDescription>{pkg.description}</PackageDescription>
          <PackageFeatures>
            {pkg.features.map((feature, i) => (
              <li key={i}>
                <FaCheckCircle
                  style={{ color: "var(--darkBrown)", marginRight: "0.5em" }}
                />
                {feature}
              </li>
            ))}
          </PackageFeatures>
        </PackageCard>
      ))}
    </PackagesGrid>
  </PackagesSection>
);

export default PackagesComponent;
