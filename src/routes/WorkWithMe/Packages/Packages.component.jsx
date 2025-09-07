import {
    FaRocket,
    FaChartLine,
    FaLayerGroup,
    FaCheckCircle,
    FaGift,
    FaInfoCircle,
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
    ComesWithSection,
    ComesWithTitle,
    ComesWithListStyled,
    ComesWithItem,
} from "./Packages.styles";
import { ServicesTitle } from "./Services.styles";
import { PackageInfo } from "./PackageInfo";
import { ComesWithList } from "./ComesWith";

const iconMap = {
    Launch: <FaRocket />,
    Elevate: <FaChartLine />,
    Scale: <FaLayerGroup />,
};

const PackagesComponent = () => (
    <PackagesSection>
        <ServicesTitle>Project Packages</ServicesTitle>
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
        <ComesWithSection>
            <ComesWithTitle>
                <FaGift style={{ marginRight: "0.7rem" }} />
                What Every Package Comes With
            </ComesWithTitle>
            <ComesWithListStyled>
                {ComesWithList.map((item, idx) => (
                    <ComesWithItem key={idx}>
                        <FaCheckCircle style={{ color: "var(--darkBrown)", marginRight: "0.5em" }} />
                        {item}
                    </ComesWithItem>
                ))}
            </ComesWithListStyled>
            <ComesWithTitle style={{ marginTop: "2.5rem" }}>
                <FaInfoCircle style={{ marginRight: "0.7rem" }} />
                What to Expect
            </ComesWithTitle>
            <ComesWithListStyled>
                <ComesWithItem>
                    <FaCheckCircle style={{ color: "var(--darkBrown)", marginRight: "0.5em" }} />
                    Collaborative planning and regular updates
                </ComesWithItem>
                <ComesWithItem>
                    <FaCheckCircle style={{ color: "var(--darkBrown)", marginRight: "0.5em" }} />
                    Transparent timelines and deliverables
                </ComesWithItem>
                <ComesWithItem>
                    <FaCheckCircle style={{ color: "var(--darkBrown)", marginRight: "0.5em" }} />
                    Friendly, open communication throughout your project
                </ComesWithItem>
                <ComesWithItem>
                    <FaCheckCircle style={{ color: "var(--darkBrown)", marginRight: "0.5em" }} />
                    A final walkthrough and handoff so you feel confident using your new site
                </ComesWithItem>
            </ComesWithListStyled>
        </ComesWithSection>
    </PackagesSection>
);

export default PackagesComponent;
