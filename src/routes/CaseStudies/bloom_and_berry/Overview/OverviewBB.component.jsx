import { OverviewSection } from "./OverviewBB.styles";

const OverviewBB = () => {
  return (
    <OverviewSection>
      <h2>Case Study for Bloom & Berry</h2>
      <a
        href="/BloomAndBerry"
        className="completed-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        See Completed Version &rarr; <br />
        <span style={{ fontWeight: 500, fontSize: "0.98rem" }}>
          (View the full, finished project here!)
        </span>
      </a>
      <h3>Overview</h3>
      <p>
        Berry & Bloom is a whimsical, flower-powered juice company based in
        Sacramento, California. This portfolio project was created for a
        fictional brand, with all assets generated using Dall-E and Chat-GPT.
        The goal was to design a vibrant, nature-inspired juice brand from
        scratch, including visual identity, marketing strategy, and product
        concepts.
      </p>
      <p>
        Founded by longtime florists Lil & Phill, Berry & Bloom blossoms from
        their beloved flower shop into a juice venture inspired by nature’s most
        beautiful gifts—blooms and botanicals. The brand blends florals and
        fruits into refreshing, health-conscious juices, all crafted with care
        and creativity. Berry & Bloom embraces a whimsical, botanical aesthetic,
        using a soft palette of purple, pink, yellow, and green with swirly
        script fonts, delicate illustrations, and a warm, handcrafted tone.
      </p>
      <h4>Owners Story Angle</h4>
      <p>
        Lil & Phill, longtime Sacramento florists, blend their passion for
        blooms into refreshing, garden-inspired juice blends. The brand blooms
        from their beloved flower shop, bringing floral artistry into every
        bottle.
      </p>
      <h4>Brand Essence</h4>
      <p>
        A whimsical, botanical brand fusing florals and fruits into a joyful,
        health-forward juice experience.
        <span className="italic"> “From petal to press made with love.”</span>
      </p>
    </OverviewSection>
  );
};

export default OverviewBB;
