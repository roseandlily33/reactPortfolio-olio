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
} from "./Packages.styles";
import { PackageInfo } from "./PackageInfo";

const colorMap = {
    Map: {
        bg: "rgba(255, 140, 64, 0.18)", // darkOrange frosted
        border: "var(--darkOrange)",
        title: "var(--darkOrange)",
        icon: <FaMapMarkedAlt />,
    },
    Launch: {
        bg: "rgba(241, 116, 150, 0.18)", // darkPink frosted
        border: "var(--darkPink)",
        title: "var(--darkPink)",
        icon: <FaRocket />,
    },
    Elevate: {
        bg: "rgba(255, 221, 51, 0.18)", // yellow frosted
        border: "var(--yellow)",
        title: "var(--yellow)",
        icon: <FaChartLine />,
    },
    Scale: {
        bg: "rgba(97, 76, 147, 0.18)", // #614C93 frosted
        border: "#614C93",
        title: "#614C93",
        icon: <FaLayerGroup />,
    },
};

const PackagesComponent = () => (
    <PackagesSection>
        <h2>Project Packages</h2>
        <PackagesGrid>
            {PackageInfo.map((pkg) => {
                const colorKey = Object.keys(colorMap).find((key) =>
                    pkg.title.toLowerCase().includes(key.toLowerCase())
                );
                const color = colorMap[colorKey] || colorMap.Launch;
                return (
                    <PackageCard
                        key={pkg.title}
                        $bg={color.bg}
                        $border={color.border}
                    >
                        <PackageIcon style={{ color: color.title }}>
                            {color.icon}
                        </PackageIcon>
                        <PackageTitle style={{ color: color.title }}>
                            {color.icon} {pkg.title}
                        </PackageTitle>
                        <PackagePrice>
                            <strong>Starting at:</strong> {pkg.startingAt}
                        </PackagePrice>
                        {pkg.timeline && (
                            <div style={{
                                color: color.title,
                                fontWeight: 500,
                                marginBottom: "0.7rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5em"
                            }}>
                                <FaClock style={{ marginRight: "0.3em" }} />
                                {pkg.timeline}
                            </div>
                        )}
                        <PackageDescription>{pkg.description}</PackageDescription>
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
                    </PackageCard>
                );
            })}
        </PackagesGrid>
    </PackagesSection>
);

export default PackagesComponent;
