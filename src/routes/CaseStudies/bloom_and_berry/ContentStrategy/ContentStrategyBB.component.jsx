import {
  SectionHeader,
  SubHeader,
  SectionText,
  SectionList,
} from "../Campaign/CampaignBB.styles";
import { FaPenFancy, FaPalette, FaHashtag, FaLayerGroup } from "react-icons/fa";

const ContentStrategyBB = () => {
  return (
    <>
      <SectionHeader>
        <FaPenFancy
          style={{
            marginRight: 10,
            fontSize: "1.1em",
            verticalAlign: "middle",
          }}
        />
        Strategy for Content Creation for Social Media
      </SectionHeader>
      <SubHeader>
        <FaPalette
          style={{ marginRight: 7, fontSize: "1em", verticalAlign: "middle" }}
        />
        Tone & Style
      </SubHeader>
      <SectionText>
        Whimsical, heartfelt, nature-rooted. Earthy but not preachy. Think
        wildflower fields, gentle humor, and poetic captions.
      </SectionText>
      <SubHeader>
        <FaHashtag
          style={{ marginRight: 7, fontSize: "1em", verticalAlign: "middle" }}
        />
        Channels & Frequency
      </SubHeader>
      <SectionText>
        Instagram <span>4-5x per week</span>
      </SectionText>
      <SectionText>
        Tiktok <span>3x per week</span>
      </SectionText>
      <SectionText>
        Pinterest <span>2x per week</span>
      </SectionText>
      <SectionText>
        Email Newsletter <span>2x per month</span>
      </SectionText>
      <SectionText>
        Youtube Shorts/Reels <span>1-2x per week</span>
      </SectionText>
      <div style={{ marginBottom: "1rem" }}>
        <SubHeader>
          <FaLayerGroup
            style={{ marginRight: 7, fontSize: "1em", verticalAlign: "middle" }}
          />
          Content Pillars
        </SubHeader>
        <SectionList>
          <li>Behind-the-scenes flower and juice making</li>
          <li>Seasonal juice recipes and pairings</li>
          <li>Customer stories and testimonials</li>
          <li>Flower and juice care tips</li>
          <li>Community events and collaborations</li>
          <li>Juice health benefits and fun facts</li>
          <li>Brand story and values</li>
          <li>Merch & lifestyle</li>
        </SectionList>
      </div>
    </>
  );
};

// ...existing code...
export default ContentStrategyBB;
