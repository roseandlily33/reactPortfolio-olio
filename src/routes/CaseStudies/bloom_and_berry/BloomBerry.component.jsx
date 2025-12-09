import React from "react";
import { ArielLayout, ArielMain } from "../../Ariel/Ariel.styles";
import BBSideMenu from "./BBSideMenu.component";

import OverviewBB from "./Overview/OverviewBB.component";
import CampaignBB from "./Campaign/CampaignBB.component";
import ContentStrategyBB from "./ContentStrategy/ContentStrategyBB.component";
import JuiceBB from "./Juice/juicebb.component";
import GalleryBB from "./Gallery/gallerybb.component";
// import { BloomStudyCase } from "./Bloom.styles";

const BloomAndBerry = () => {
  return (
    <ArielLayout>
      <BBSideMenu />
      <ArielMain>
        <div id="overview">
          <OverviewBB />
        </div>
        <div id="campaign">
          <CampaignBB />
        </div>
        <div id="content-strategy">
          <ContentStrategyBB />
        </div>
        <div id="flavors">
          <JuiceBB />
        </div>
        <div id="gallery">
          <GalleryBB />
        </div>
      </ArielMain>
    </ArielLayout>
  );
};

export default BloomAndBerry;
