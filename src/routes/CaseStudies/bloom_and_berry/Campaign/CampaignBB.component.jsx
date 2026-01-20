import React from "react";
import {
  FaBullhorn,
  FaFlagCheckered,
  FaBullseye,
  FaMapSigns,
} from "react-icons/fa";
import {
  SectionHeader,
  SubHeader,
  SectionText,
  SectionList,
} from "./CampaignBB.styles";

const CampaignBB = () => {
  return (
    <>
      {/* <CaseStudySection> */}
        <SectionHeader>
          <FaBullhorn /> Market Campaign Strategy
        </SectionHeader>
        <SubHeader>
          <FaFlagCheckered /> Campaign Title
        </SubHeader>
        <SectionText>“Drink What You Bloom”</SectionText>
        <SubHeader>
          <FaBullseye /> Campaign Goals
        </SubHeader>
        <SectionText>
          <strong>Awareness:</strong> Introduce Berry & Bloom as a juice brand
          to both local and online audiences.
          <br />
          <strong>Engagement:</strong> Build a flower-loving, health-conscious
          community.
          <br />
          <strong>Conversion:</strong> Drive purchases online and in-store.
          <br />
          <strong>Retention:</strong> Cultivate brand loyalty with storytelling
          and charm.
        </SectionText>
        <SubHeader>
          <FaMapSigns /> Tactics by Channel
        </SubHeader>
        <div>
          <SubHeader as="h5">Local Activation</SubHeader>
          <SectionList>
            <li>Pop-up Juice Bar</li>
            <li>Flower & Juice Paring Day</li>
            <li>Collaborations with local businesses</li>
          </SectionList>
        </div>
        <div>
          <SubHeader as="h5">Retail & Product Strategy</SubHeader>
          <SectionList>
            <li>Limited Editions</li>
            <li>Gift Bundles</li>
            <li>In store display</li>
          </SectionList>
        </div>
        <div>
          <SubHeader as="h5">Public relations & Press</SubHeader>
          <SectionList>
            <li>Launch Party</li>
            <li>Pitch to local outlet</li>
            <li>Story feature</li>
          </SectionList>
        </div>
      {/* </CaseStudySection> */}
    </>
  );
};

export default CampaignBB;
