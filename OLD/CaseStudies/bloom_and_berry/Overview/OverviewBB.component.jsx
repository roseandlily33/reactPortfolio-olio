import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SectionHeader,
  SubHeader,
  SectionText,
} from "../Campaign/CampaignBB.styles";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs.component";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton/PrimaryButton.component";

const OverviewBB = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginBottom: "var(--spacing-s)" }}>
        <Breadcrumbs
          prev="Case Studies"
          prevLink="/CaseStudies"
          current="Bloom & Berry"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          // border: "2px solid red",
          marginBottom: "var(--spacing-xl)",
        }}
      >
        <SectionHeader
          as="h2"
          style={{
            letterSpacing: "0.04em",
            marginBottom: "var(--spacing-s);",
          }}
        >
          Case Study for Bloom & Berry
        </SectionHeader>
        <PrimaryButton
          onClick={() => navigate("/BloomAndBerry")}
          span="See Completed Version &rarr;"
        />
      </div>
      <SectionHeader>
       
        Overview
      </SectionHeader>
      <SectionText>
        Berry & Bloom is a whimsical, flower-powered juice company based in
        Sacramento, California. This portfolio project was created for a
        fictional brand, with all assets generated using Dall-E and Chat-GPT.
        The goal was to design a vibrant, nature-inspired juice brand from
        scratch, including visual identity, marketing strategy, and product
        concepts.
      </SectionText>
      <SectionText>
        Founded by longtime florists Lil & Phill, Berry & Bloom blossoms from
        their beloved flower shop into a juice venture inspired by nature’s most
        beautiful gifts—blooms and botanicals. The brand blends florals and
        fruits into refreshing, health-conscious juices, all crafted with care
        and creativity. Berry & Bloom embraces a whimsical, botanical aesthetic,
        using a soft palette of purple, pink, yellow, and green with swirly
        script fonts, delicate illustrations, and a warm, handcrafted tone.
      </SectionText>
      <SubHeader>
        Owners Story Angle
      </SubHeader>
      <SectionText>
        Lil & Phill, longtime Sacramento florists, blend their passion for
        blooms into refreshing, garden-inspired juice blends. The brand blooms
        from their beloved flower shop, bringing floral artistry into every
        bottle.
      </SectionText>
      <SubHeader>
        Brand Essence
      </SubHeader>
      <SectionText>
        A whimsical, botanical brand fusing florals and fruits into a joyful,
        health-forward juice experience.
        <span style={{ fontStyle: "italic", color: "var(--pink-3)" }}>
          {" "}
          “From petal to press made with love.”
        </span>
      </SectionText>
    </>
  );
};

export default OverviewBB;
