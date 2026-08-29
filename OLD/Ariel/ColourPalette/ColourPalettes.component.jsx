import ColourPalette from "../ArielImages/ColourPalette/Options.png";
import FontExamples from "../ArielImages/ColourPalette/FontOptions.png";
import OtherOptions from "../ArielImages/ColourPalette/Example.png";
import { PaletteCarousel, PaletteCaption } from "./ColourPalette.styles";
import {
  SectionHeader,
  SubHeader,
  SectionText,
  SectionList,
} from "../../CaseStudies/bloom_and_berry/Campaign/CampaignBB.styles";

const ColorPalettesAriel = () => (
  <>
    <SectionHeader>Color Palette Exploration</SectionHeader>
    <SectionList>
      <SectionText>
        <strong>Black & White:</strong> High fashion, clean, modern, and
        luxurious. Less approachable and may lose the equestrian sport
        connection.
      </SectionText>
      <SectionText>
        <strong>Navy & Gold:</strong> Traditional, elegant, and timeless. Gold
        adds warmth and pairs well with equestrian imagery. Best fit for the
        target demographic.
      </SectionText>
      <SectionText>
        <strong>Teal & Rust:</strong> Inspired by the original palette. Unique
        but less aligned with the brand’s goals.
      </SectionText>
    </SectionList>
    <PaletteCarousel>
      <div>
        <img src={ColourPalette} alt="Color Palette Options" />
        <PaletteCaption>
          Palette options explored for Ariel's brand direction.
        </PaletteCaption>
      </div>
      <div>
        <img src={FontExamples} alt="Font Choices" />
        <PaletteCaption>
          Font choices and combinations for headings and body text.
        </PaletteCaption>
      </div>
      <div>
        <img src={OtherOptions} alt="Creative Example" />
        <PaletteCaption>
          Creative ideas and mockups considered during the process.
        </PaletteCaption>
      </div>
    </PaletteCarousel>
    <SubHeader>Decision</SubHeader>
    <SectionText>
      After reviewing options, Navy & Gold was chosen for its elegance and
      connection to the audience.
    </SectionText>
  </>
);

export default ColorPalettesAriel;
