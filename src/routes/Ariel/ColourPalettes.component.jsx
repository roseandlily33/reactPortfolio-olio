import ColourPalette from "./ArielImages/ColourPalette/Options.png";
import FontExamples from "./ArielImages/ColourPalette/FontOptions.png";
import OtherOptions from "./ArielImages/ColourPalette/Example.png";
import { Section, PaletteCarousel, PaletteCaption } from "./Ariel.styles";

const ColorPalettesAriel = () => (
  <Section>
    <h2>Color Palette Exploration</h2>
    <ul>
      <li>
        <strong>Black & White:</strong> High fashion, clean, modern, and luxurious. Less approachable and may lose the equestrian sport connection.
      </li>
      <li>
        <strong>Navy & Gold:</strong> Traditional, elegant, and timeless. Gold adds warmth and pairs well with equestrian imagery. Best fit for the target demographic.
      </li>
      <li>
        <strong>Teal & Rust:</strong> Inspired by the original palette. Unique but less aligned with the brand’s goals.
      </li>
    </ul>
    <PaletteCarousel>
      <div>
        <img src={ColourPalette} alt="Color Palette Options" />
        <PaletteCaption>Palette options explored for Ariel's brand direction.</PaletteCaption>
      </div>
      <div>
        <img src={FontExamples} alt="Font Choices" />
        <PaletteCaption>Font choices and combinations for headings and body text.</PaletteCaption>
      </div>
      <div>
        <img src={OtherOptions} alt="Creative Example" />
        <PaletteCaption>Creative ideas and mockups considered during the process.</PaletteCaption>
      </div>
    </PaletteCarousel>
    <p>
      After reviewing options, Navy & Gold was chosen for its elegance and connection to the audience.
    </p>
  </Section>
);

export default ColorPalettesAriel;
