import React, { useState } from "react";
import { CertificateContainer } from "../../Certificates/Certificates.styles";
import { YodaCaseStudyInfoData } from "./YodaCaseStudyInfoData";
import TabButton from "../../../components/Buttons/TabButton.component";
import { EachCaseStudyContainer, TopContainer } from "../CaseStudies.styles";
import {
  SectionHeader,
  SubHeader,
  SectionText,
  SectionList,
} from "../../CaseStudies/bloom_and_berry/Campaign/CampaignBB.styles";

const YodaCaseStudy = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Track the selected tab

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const selectedCaseStudy = YodaCaseStudyInfoData[selectedTab]; // Get the selected case study data

  return (
    <CertificateContainer>
      <TopContainer>
        <h2>Case Studies</h2>
        {/* Tabs Navigation */}
        <div className="tabs">
          {YodaCaseStudyInfoData.map((caseStudy, index) => (
            <TabButton
              span={caseStudy.tabName}
              onClick={() => handleTabClick(index)}
            />
          ))}
        </div>
      </TopContainer>

      {/* Case Study Content */}
      <EachCaseStudyContainer>
        <div>
          <h2 style={{ color: "var(--darkPink)", marginBottom: "1rem" }}>
            Overview
          </h2>
          <h4 style={{marginBottom: '1rem', color: 'var(--darkPink)'}}>{selectedCaseStudy?.title}</h4>
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
