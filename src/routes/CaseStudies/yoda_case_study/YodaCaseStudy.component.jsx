import React, { useState } from "react";
import { CertificateContainer } from "../../Certificates/Certificates.styles";
import { YodaCaseStudyInfoData } from "./YodaCaseStudyInfoData";
import TabButton from "../../../components/Buttons/TabButton/TabButton.component";
import { EachCaseStudyContainer } from "../CaseStudies.styles";
import {
  SectionHeader,
  SectionText,
} from "../../CaseStudies/bloom_and_berry/Campaign/CampaignBB.styles";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs.component";

const YodaCaseStudy = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Track the selected tab

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const selectedCaseStudy = YodaCaseStudyInfoData[selectedTab]; // Get the selected case study data

  return (
    <CertificateContainer>
      <h1 style={{ textAlign: "center" }}>Case Study for </h1>
      <h2 style={{ textAlign: "center" }}>Yoda Safety Services</h2>
      {/* Tabs Navigation */}
      <div className="tabs">
        {YodaCaseStudyInfoData.map((caseStudy, index) => (
          <TabButton
            span={caseStudy.tabName}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      {/* Case Study Content */}
      <EachCaseStudyContainer>
        <Breadcrumbs
          prev="Case Studies"
          prevLink="/CaseStudies"
          current="Yoda Safety Services"
        />
        <div>
          <h3 style={{ color: "var(--orange-6)", marginBottom: "1rem" }}>
            Overview
          </h3>
          <h4
            style={{
              marginBottom: "var(--spacing-m)",
              color: "var(--orange-5)",
            }}
          >
            {selectedCaseStudy?.title}
          </h4>
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
