import React from "react";
import { ArielLayout, ArielMain, Section } from "../../Ariel/Ariel.styles";
import BBSideMenu from "./BBSideMenu.component";

import OverviewBB from "./Overview/OverviewBB.component";
import CampaignBB from "./Campaign/CampaignBB.component";
import ContentStrategyBB from "./ContentStrategy/ContentStrategyBB.component";
import JuiceBB from "./Juice/juicebb.component";
import GalleryBB from "./Gallery/gallerybb.component";
import BackToTopButton from "../../../components/BackToTop/BackToTop.button";

// import { BloomStudyCase } from "./Bloom.styles";

const BloomAndBerry = () => {
  return (
    <ArielLayout>
      <BBSideMenu />
      <ArielMain>
        <Section id="overview">
          <OverviewBB />
        </Section>
        <Section id="campaign">
          <CampaignBB />
        </Section>
        <Section id="content-strategy">
          <ContentStrategyBB />
        </Section>
        <Section id="flavors">
          <JuiceBB />
        </Section>
        <Section id="gallery">
          <GalleryBB />
        </Section>
      </ArielMain>
      <BackToTopButton />
    </ArielLayout>
  );
};

export default BloomAndBerry;
