import React, { useState } from "react";
import { CertificateContainer } from "../../Certificates/Certificates.styles";
import { YodaCaseStudyInfoData } from "./YodaCaseStudyInfoData";
import TabButton from "../../../components/Buttons/TabButton/TabButton.component";
import { EachCaseStudyContainer } from "../CaseStudies.styles";
import {
  SectionHeader,
  SectionText,
} from "../bloom_and_berry/Campaign/CampaignBB.styles";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs.component";

const YodaCaseStudy = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Track the selected tab

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const selectedCaseStudy = YodaCaseStudyInfoData[selectedTab]; // Get the selected case study data

  return (
    <CertificateContainer>
      <div
        style={{
          marginLeft: "var(--spacing-xl)",
          marginTop: "var(--spacing-xl)",
        }}
      >
        <Breadcrumbs
          prev="Case Studies"
          prevLink="/CaseStudies"
          current="Yoda Safety Services"
        />
      </div>
      <div
        style={{
          background: "white",
          textAlign: "center",
          paddingTop: "var(--spacing-xxxl)",
          backgroundColor: "#fff",
          marginBottom: "var(--spacing-xxl)",
        }}
      >
        <h1
          style={{
            color: "var(--pink-6)",
            marginBottom: "var(--spacing-xl)",
          }}
        >
          Case Study for Yoda Safety Services
        </h1>
        <div className="tabs">
          {YodaCaseStudyInfoData?.map((caseStudy, index) => (
            <TabButton
              span={caseStudy.tabName}
              onClick={() => handleTabClick(index)}
            />
          ))}
        </div>
      </div>
      {/* Case Study Content */}
      <EachCaseStudyContainer>
        <div>
          <h3
            style={{
              marginBottom: "var(--spacing-m)",
              textAlign: "center",
              width: "100%",
              color: "var(--grey-8)",
              fontWeight: "700",
            }}
          >
            {selectedCaseStudy?.title}
          </h3>
          <SectionHeader>Overview</SectionHeader>
          <SectionText>{selectedCaseStudy?.overview}</SectionText>
        </div>
        <div>
          <SectionHeader>Problem</SectionHeader>
          <SectionText>{selectedCaseStudy?.problem}</SectionText>
        </div>
        <div>
          <SectionHeader>Solution</SectionHeader>
          <SectionText>{selectedCaseStudy?.solution}</SectionText>
        </div>
        <div>
          <SectionHeader>Technologies Used</SectionHeader>
          <SectionText>{selectedCaseStudy?.technologiesUsed}</SectionText>
        </div>

        <div>
          <SectionHeader>Key Metrics</SectionHeader>
          <SectionText>{selectedCaseStudy?.keyMetrics}</SectionText>
        </div>
        <div>
          <SectionHeader>Conclusion</SectionHeader>
          <SectionText>{selectedCaseStudy?.conclusion}</SectionText>
        </div>
      </EachCaseStudyContainer>
    </CertificateContainer>
  );
};

export default YodaCaseStudy;
