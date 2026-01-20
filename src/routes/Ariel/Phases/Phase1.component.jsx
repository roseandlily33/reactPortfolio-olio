import React, { useState } from "react";
import FooterA from "../ArielImages/Phase1/FooterA.png";
import HomeA from "../ArielImages/Phase1/HomeA.png";
import InfoA from "../ArielImages/Phase1/InfoA.png";
import ShopA from "../ArielImages/Phase1/ShopA.png";
import TrainingA from "../ArielImages/Phase1/TrainingA.png";
import HomeV from "../ArielImages/Phase1/HomeV.png";
import TrainingV from "../ArielImages/Phase1/TrainingV.png";
import {
  PhaseCarousel,
  PhaseCaption,
  CarouselNav,
  CarouselImageModal,
  ExpandButton,
  CollapsibleText,
} from "../Ariel.styles";
import {
  SectionHeader,
  SubHeader,
} from "../../CaseStudies/bloom_and_berry/Campaign/CampaignBB.styles";

const beforeImages = [
  { src: HomeA, alt: "Original Home Page" },
  { src: InfoA, alt: "Original Info Page" },
  { src: ShopA, alt: "Original Shop Page" },
  { src: TrainingA, alt: "Original Training Page" },
  { src: FooterA, alt: "Original Footer" },
];

const afterImages = [
  { src: HomeV, alt: "Redesigned Home Page" },
  { src: TrainingV, alt: "Redesigned Training Page" },
];

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>
      <PhaseCarousel>
        <CarouselNav onClick={prev} aria-label="Previous">
          &#8592;
        </CarouselNav>
        <div>
          <img
            src={images[current].src}
            alt={images[current].alt}
            style={{ maxWidth: "500px", cursor: "pointer", width: "500px" }}
            onClick={() => setModalOpen(true)}
          />
          <PhaseCaption>{images[current].alt}</PhaseCaption>
        </div>
        <CarouselNav onClick={next} aria-label="Next">
          &#8594;
        </CarouselNav>
      </PhaseCarousel>
      {modalOpen && (
        <CarouselImageModal onClick={() => setModalOpen(false)}>
          <img src={images[current].src} alt={images[current].alt} />
        </CarouselImageModal>
      )}
    </>
  );
};

const CollapsibleParagraph = ({ children, maxLength = 220 }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = children.length > maxLength;
  return (
    <CollapsibleText>
      {isLong && !expanded ? (
        <>
          {children.slice(0, maxLength)}...
          <ExpandButton onClick={() => setExpanded(true)}>
            Show More
          </ExpandButton>
        </>
      ) : (
        <>
          {children}
          {isLong && (
            <ExpandButton onClick={() => setExpanded(false)}>
              Show Less
            </ExpandButton>
          )}
        </>
      )}
    </CollapsibleText>
  );
};

const phase1Text =
  "Ariel began with a self-made design for her website. I created mockups, color palettes, font options, and a logo to help unify her brand. After a phone call, we discussed her target audience, identified pages that could be combined or removed, and improved the UX of the navigation. I reviewed the entire site and provided a detailed list of recommendations and ideas for content and organization.";

const Phase1Ariel = () => {
  return (
    <>
      <SectionHeader>Phase 1 – September 7, 2025</SectionHeader>
      <CollapsibleParagraph>{phase1Text}</CollapsibleParagraph>
      <SubHeader>Before (Ariel's Original Designs)</SubHeader>
      <ImageCarousel images={beforeImages} />
      <SubHeader>After (My Redesigned Pages)</SubHeader>
      <ImageCarousel images={afterImages} />
    </>
  );
};

export default Phase1Ariel;
