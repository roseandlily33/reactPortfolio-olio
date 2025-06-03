import React, { useState } from "react";
import { CertificateContainer } from "../../Certificates/Certificates.styles";
import { YodaCaseStudyInfoData } from "./YodaCaseStudyInfoData";
import TabButton from "../../../components/Buttons/TabButton.component";

const YodaCaseStudy = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Track the selected tab

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const selectedCaseStudy = YodaCaseStudyInfoData[selectedTab]; // Get the selected case study data

  return (
    <CertificateContainer>
      <h2>Case Studies</h2>
      {/* Tabs Navigation */}
      <div className="tabs">
        {YodaCaseStudyInfoData.map((caseStudy) => (
          <TabButton span={caseStudy.tabName} onClick={handleTabClick} />
        ))}
      </div>

      {/* Case Study Content */}
      <section>
        <div>
          <h3>Overview</h3>
          <p>{selectedCaseStudy.overview}</p>
        </div>
        <div>
          <h3>Problem</h3>
          <p>{selectedCaseStudy.problem}</p>
        </div>
        <div>
          <h3>Solution</h3>
          <p>{selectedCaseStudy.solution}</p>
        </div>
        <div>
          <h3>Technologies Used</h3>
          <p>{selectedCaseStudy.technologiesUsed}</p>
        </div>
        <div>
          <h3>Conclusion</h3>
          <p>{selectedCaseStudy.conclusion}</p>
        </div>
        {/* <h3>Links</h3> */}
        {/* <p>
                    <a href={selectedCaseStudy.links.website} target="_blank" rel="noopener noreferrer">
                        Website
                    </a>
                    {selectedCaseStudy.links.github && (
                        <>
                            {' | '}
                            <a href={selectedCaseStudy.links.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </>
                    )}
                </p> */}
      </section>
    </CertificateContainer>
  );
};

export default YodaCaseStudy;
