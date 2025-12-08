import React, { useState } from "react";
import HomeA from '../ArielImages/Phase2/HomeA.png';
import HomeV from '../ArielImages/Phase2/HomeV.png';
import TrainingA from '../ArielImages/Phase2/TrainingA.png';
import TrainingV from '../ArielImages/Phase2/TrainingV.png';
import {
  Section,
  PhaseCarousel,
  PhaseCaption,
  CarouselNav,
  CarouselImageModal,
  ExpandButton,
  CollapsibleText,
} from "../Ariel.styles";

const beforeImages = [
  { src: HomeA, alt: "Original Home Page (Phase 2)" },
  { src: TrainingA, alt: "Original Training Page (Phase 2)" },
];

const afterImages = [
  { src: HomeV, alt: "Redesigned Home Page (Phase 2)" },
  { src: TrainingV, alt: "Redesigned Training Page (Phase 2)" },
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

const phase2Text =
  "Ariel started implementing the new color palette, fonts, and many of the recommendations. She added new content and reorganized some pages, combining and removing others for clarity. I reviewed the updated site and provided a new list of recommendations based on the changes. The website began to take shape, with improved colors, fonts, and a more cohesive brand experience.";

const Phase2Ariel = () => {
  return (
    <Section>
      <h3>Phase 2 – September 13, 2025</h3>
      <CollapsibleParagraph>{phase2Text}</CollapsibleParagraph>
      <h4>Before (Ariel's Original Designs)</h4>
      <ImageCarousel images={beforeImages} />
      <h4>After (My Redesigned Pages)</h4>
      <ImageCarousel images={afterImages} />
    </Section>
  );
};

export default Phase2Ariel;
