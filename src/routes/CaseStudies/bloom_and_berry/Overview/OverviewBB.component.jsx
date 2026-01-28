import React from "react";
import {
  SectionHeader,
  SubHeader,
  SectionText,
} from "../Campaign/CampaignBB.styles";
import { FaSeedling, FaBookOpen, FaUserFriends, FaHeart } from "react-icons/fa";

const OverviewBB = () => {
  return (
    <>
      <SectionHeader
        as="h2"
        style={{
          textTransform: "uppercase",
          fontWeight: 400,
          fontSize: "2rem",
          letterSpacing: "0.04em",
          marginBottom: "var(--spacing-xs);",
        }}
      >
        <FaSeedling
          style={{
            marginRight: 12,
            fontSize: "1.3em",
            verticalAlign: "middle",
          }}
        />
        Case Study for Bloom & Berry
      </SectionHeader>
      <a
        href="/BloomAndBerry"
        className="completed-link"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "var(--pink-4)",
          color: "#fff",
          fontWeight: 700,
          textDecoration: "none",
          borderRadius: 999,
          padding: "var(--spacing-xs) var(--spacing-l)",
          fontSize: "1rem",
          fontFamily: "var(--headerFont)",
          boxShadow: "0 2px 12px rgba(241, 116, 150, 0.12)",
          marginBottom: "var(--spacing-m);",
          marginTop: "var(--spacing-xs)",
          display: "inline-block",
          border: "2px solid var(--pink-4)",
        }}
      >
        See Completed Version &rarr; <br />
      </a>
      <SectionHeader>
        <FaBookOpen
          style={{
            marginRight: 10,
            fontSize: "1.1em",
            verticalAlign: "middle",
          }}
        />
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
        <FaUserFriends
          style={{ marginRight: 8, fontSize: "1em", verticalAlign: "middle" }}
        />
        Owners Story Angle
      </SubHeader>
      <SectionText>
        Lil & Phill, longtime Sacramento florists, blend their passion for
        blooms into refreshing, garden-inspired juice blends. The brand blooms
        from their beloved flower shop, bringing floral artistry into every
        bottle.
      </SectionText>
      <SubHeader>
        <FaHeart
          style={{ marginRight: 8, fontSize: "1em", verticalAlign: "middle" }}
        />
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
