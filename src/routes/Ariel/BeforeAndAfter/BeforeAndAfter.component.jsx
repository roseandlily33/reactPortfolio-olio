import React, { useState } from "react";
import TrainingA from "../ArielImages/Phase1/TrainingA.png";
import TrainingB from "../ArielImages/Phase1/TrainingV.png";
import {
  BeforeAfterSection,
  BeforeAfterImages,
  BeforeAfterImageWrapper,
  BeforeAfterLabel,
  BeforeAfterCaption,
  FullscreenModal,
} from "./BeforeAndAfter.styles";

const BeforeAndAfter = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <BeforeAfterSection>
      <h2>Before & After</h2>
      <p>
        Ariel began her website journey with a self-made design. While her
        content and imagery were strong, the brand colors didn’t match, and the
        user experience felt unorganized. My role was to guide her through a
        professional redesign, focusing on brand alignment, UX improvements, and
        strategic content organization.
      </p>
      <BeforeAfterCaption>
        <em>
          (Dummy photos for now. Double click an image to view it full screen.)
        </em>
      </BeforeAfterCaption>
      <BeforeAfterImages>
        <BeforeAfterImageWrapper>
          <BeforeAfterLabel>Before</BeforeAfterLabel>
          <img
            src={TrainingA}
            alt="Before Redesign"
            onDoubleClick={() => setModalImg(TrainingA)}
          />
        </BeforeAfterImageWrapper>
        <BeforeAfterImageWrapper>
          <BeforeAfterLabel>After</BeforeAfterLabel>
          <img
            src={TrainingB}
            alt="After Redesign"
            onDoubleClick={() => setModalImg(TrainingB)}
          />
        </BeforeAfterImageWrapper>
      </BeforeAfterImages>
      {modalImg && (
        <FullscreenModal onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Full Screen" />
        </FullscreenModal>
      )}
    </BeforeAfterSection>
  );
};

export default BeforeAndAfter;
